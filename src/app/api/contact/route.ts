import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      name,
      phone,
      email,
      stage,
      goal,
      notes,
      message,
    } = body;

    // ── 1. Validate required fields ───────────────────────────────────────────
    const resolvedName = (fullName || name || '').trim();
    const resolvedPhone = (phone || '').trim();
    const resolvedEmail = (email || '').trim();

    if (!resolvedName || !resolvedPhone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required.' },
        { status: 400 }
      );
    }

    const resolvedStage = stage || '—';
    const resolvedGoal = goal || '—';
    const resolvedNotes = (notes || message || '—').trim();
    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Note: BooClient CRM Lead Capture is handled automatically client-side by
    // /crm-lead-tracker.js in layout.tsx, capturing UTMs and dynamic questionnaire fields.
    // We avoid duplicate server-side capture here.

    // ── 2. Append to Google Sheets ────────────────────────────────────────────
    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.warn(
        '[Google Sheets Notice]: Missing GOOGLE_SHEET_ID in .env.local. Submission saved to CRM and logged to console.'
      );
      console.log('Lead Details:', {
        timestamp,
        resolvedName,
        resolvedPhone,
        resolvedEmail,
        resolvedStage,
        resolvedGoal,
        resolvedNotes,
      });

      return NextResponse.json(
        {
          success: true,
          warning: 'Form submitted. Set GOOGLE_SHEET_ID in .env.local to enable live Sheets sync.',
        },
        { status: 200 }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Append row to Sheet (Columns: Timestamp, Full Name, Phone, Email, Stage, Goal, Notes)
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:G',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            timestamp,
            resolvedName,
            resolvedPhone,
            resolvedEmail || '—',
            resolvedStage,
            resolvedGoal,
            resolvedNotes || '—',
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error('[Contact API Error]:', errorMsg);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
