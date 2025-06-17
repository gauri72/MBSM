import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(request: Request) {
  try {
    const { fullName, mobile, amount } = await request.json();
    if (!fullName || !mobile || !amount) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Twilio credentials from environment variables
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const fromNumber = process.env.TWILIO_PHONE_NUMBER;

    if (!accountSid || !authToken || !fromNumber) {
      return NextResponse.json({ error: 'Twilio credentials not set' }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);
    const smsBody = `🙏 Thank you ${fullName} for your kind donation of ₹${amount} to Mangal Bhakta Seva Mandal Trust. Your support sustains our spiritual mission. – Team MBSM`;

    // Ensure mobile number is in E.164 format (e.g., +9198xxxxxxx)
    let toNumber = mobile.trim();
    if (!toNumber.startsWith('+')) {
      // Assume Indian number if not international
      toNumber = '+91' + toNumber.replace(/^0+/, '');
    }

    const message = await client.messages.create({
      body: smsBody,
      from: fromNumber,
      to: toNumber,
    });

    return NextResponse.json({ success: true, sid: message.sid });
  } catch (error) {
    console.error('Twilio SMS error:', error);
    return NextResponse.json({ error: 'Failed to send SMS', details: error instanceof Error ? error.message : error }, { status: 500 });
  }
} 