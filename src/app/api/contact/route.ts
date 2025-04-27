import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to site owner
    const data = await resend.emails.send({
      from: 'Portfolio Contact <contact@jayeshghosh.com>',
      to: 'jayeshghosh21@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // Send confirmation email to user (no reply)
    await resend.emails.send({
      from: 'Jayesh Ghosh <contact@jayeshghosh.com>',
      to: email,
      subject: 'Thank you for contacting Jayesh Ghosh',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out, ${name}!</h2>
          <p>I have received your message and will get back to you as soon as possible (usually within 3 days).</p>
          <hr style="margin: 24px 0;" />
          <p style="margin-bottom: 0.5em;"><strong>Your message:</strong></p>
          <blockquote style="background: #f3f4f6; padding: 12px 16px; border-left: 4px solid #2563eb; color: #374151;">${message}</blockquote>
          <hr style="margin: 24px 0;" />
          <p style="color: #6b7280; font-size: 0.95em;">
            <strong>Note:</strong> This is an automated confirmation email sent from my portfolio website. <br />
            <span style="color: #ef4444;">Please do not reply to this message.</span> Replies to this email are not monitored.<br />
            If you need to contact me directly, please email <a href="mailto:jayeshghosh21@gmail.com" style="color: #2563eb;">jayeshghosh21@gmail.com</a>.
          </p>
          <p style="margin-top: 32px; color: #374151;">Best regards,<br/>Jayesh Ghosh</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
} 