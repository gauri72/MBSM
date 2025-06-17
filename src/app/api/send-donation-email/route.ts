import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { donorName, donorEmail, amount, transactionId, message } = await request.json();
    // Debug log: print received data
    console.log('Received donation data:', { donorName, donorEmail, amount, transactionId, message });

    // Validate required fields
    if (!donorName || !donorEmail || !amount || !transactionId) {
      console.error('400 Error: Missing required fields', { donorName, donorEmail, amount, transactionId });
      return NextResponse.json(
        { error: 'Missing required fields', received: { donorName, donorEmail, amount, transactionId, message } },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(donorEmail)) {
      console.error('400 Error: Invalid email format', donorEmail);
      return NextResponse.json(
        { error: 'Invalid email format', received: { donorEmail } },
        { status: 400 }
      );
    }

    // Create a transporter using your email service credentials
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kolekargauri8@gmail.com',
        pass: process.env.EMAIL_PASS,
      },
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
    } catch (error) {
      console.error('Email configuration error:', error);
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #FF5733;">Thank You for Your Donation!</h2>
        <p>Dear ${donorName},</p>
        <p>We are deeply grateful for your generous contribution to Mangal Bhakta Seva Mandal Trust. Your support helps us continue our mission of serving humanity and spreading spiritual awareness.</p>
        
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #FF5733;">Donation Details:</h3>
          <p><strong>Amount:</strong> ₹${amount}</p>
          <p><strong>Transaction ID:</strong> ${transactionId}</p>
          ${message ? `<p><strong>Your Message:</strong> ${message}</p>` : ''}
        </div>

        <p>This email serves as your donation receipt. Please keep it for your records.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee;">
          <h3 style="color: #FF5733;">Contact Information:</h3>
          <p><strong>Organization:</strong> Mangal Bhakta Seva Mandal Trust</p>
          <p><strong>UPI ID:</strong> mangaltrust@upi</p>
          <p><strong>Email:</strong> mbsmtrust@gmail.com</p>
          <p><strong>Phone:</strong> +91 9422226825</p>
        </div>

        <p style="margin-top: 30px;">With gratitude,<br>Mangal Bhakta Seva Mandal Trust</p>
      </div>
    `;

    // Send email
    const info = await transporter.sendMail({
      from: 'kolekargauri8@gmail.com',
      to: donorEmail,
      subject: 'Thank You for Your Donation - Mangal Bhakta Seva Mandal Trust',
      html: emailContent,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ 
      success: true,
      messageId: info.messageId 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 