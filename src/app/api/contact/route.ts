import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const CRM_API_URL = process.env.CRM_API_URL || 'https://clientcrmsystem.vercel.app/api/public/leads';
const CRM_KEY = process.env.CRM_KEY || 'bcl_pub_booclient-team_brightfield-women-s-hormonal-wellness-367b5b';

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

    // ── 2. Dual Capture: Forward to BooClient CRM Server-Side ──────────────────
    try {
      const summaryParts = [
        resolvedStage && resolvedStage !== '—' ? `Stage: ${resolvedStage}` : null,
        resolvedGoal && resolvedGoal !== '—' ? `Focus: ${resolvedGoal}` : null,
        resolvedNotes && resolvedNotes !== '—' ? `Notes: ${resolvedNotes}` : null,
      ].filter(Boolean);

      await fetch(CRM_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          landingPageKey: CRM_KEY,
          name: resolvedName,
          phone: resolvedPhone,
          email: resolvedEmail || undefined,
          message: summaryParts.join(' | ') || undefined,
          formData: {
            name: resolvedName,
            phone: resolvedPhone,
            email: resolvedEmail,
            stage: resolvedStage,
            goal: resolvedGoal,
            notes: resolvedNotes,
          },
          landingPageUrl: request.headers.get('referer') || 'https://brightfieldwellness.com',
        }),
      });
    } catch (crmError) {
      console.warn('[CRM Server Forward Warning]:', crmError);
    }

    // ── 3. Append to Google Sheets ────────────────────────────────────────────
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
