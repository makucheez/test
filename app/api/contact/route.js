import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Prepare email content
    const emailContent = `
İletişim Formu Mesajı
======================

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || 'Belirtilmedi'}
İlgilendiği Kurs: ${course || 'Belirtilmedi'}

Mesaj:
${message}

---
Gönderim Zamanı: ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #f97316 0%, #ea580c 100%); color: white; padding: 40px 30px; text-align: center; border-radius: 12px 12px 0 0; }
    .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
    .header p { margin: 8px 0 0 0; opacity: 0.9; font-size: 14px; }
    .content { background: #ffffff; padding: 30px; border-left: 1px solid #e5e7eb; border-right: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; }
    .field { margin-bottom: 24px; }
    .label { font-weight: 600; color: #374151; margin-bottom: 8px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; display: block; }
    .value { background: #f9fafb; padding: 14px 16px; border-radius: 8px; border-left: 4px solid #f97316; color: #1f2937; font-size: 15px; }
    .value a { color: #f97316; text-decoration: none; }
    .footer { margin-top: 30px; padding: 24px 30px; background: #f9fafb; border-top: 2px solid #f97316; text-align: center; color: #6b7280; font-size: 13px; border-radius: 0 0 12px 12px; }
    .footer p { margin: 4px 0; }
    .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Yeni İletişim Formu Mesajı</h1>
      <p>Etkili Eğitim Kurumları</p>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">Ad Soyad</span>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <span class="label">E-posta</span>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      <div class="field">
        <span class="label">Telefon</span>
        <div class="value">${phone || 'Belirtilmedi'}</div>
      </div>
      <div class="field">
        <span class="label">İlgilendiği Kurs</span>
        <div class="value">${course || 'Belirtilmedi'}</div>
      </div>
      <div class="divider"></div>
      <div class="field">
        <span class="label">Mesaj</span>
        <div class="value">${message.replace(/\n/g, '<br>')}</div>
      </div>
    </div>
    <div class="footer">
      <p><strong>Gönderim Zamanı:</strong> ${new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' })}</p>
      <p style="margin-top: 12px;">Etkili Eğitim Kurumları • www.yusufguler.com.tr</p>
    </div>
  </div>
</body>
</html>
    `.trim();

    // Only send email if credentials are configured
    if (process.env.EMAIL_USER && process.env.EMAIL_PASSWORD) {
      // Create transporter
      const transporter = nodemailer.createTransport({
        host: 'smtp-mail.outlook.com', // Hotmail/Outlook SMTP
        port: 587,
        secure: false, // Use TLS
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        },
        tls: {
          ciphers: 'SSLv3'
        }
      });

      // Email options
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'etkilihostinger@gmail.com',
        subject: `Yeni İletişim Formu Mesajı - ${name}`,
        text: emailContent,
        html: htmlContent,
        replyTo: email
      };

      // Send email
      await transporter.sendMail(mailOptions);

      console.log('Email sent successfully to etkilihostinger@gmail.com');
    } else {
      // Development mode or missing credentials
      console.log('Email credentials not configured. Email content:');
      console.log(emailContent);
      console.log('\nTo enable email sending, add to .env.local:');
      console.log('EMAIL_USER=your-email@gmail.com');
      console.log('EMAIL_PASSWORD=your-password');
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Message received successfully'
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    // More specific error handling
    if (error.code === 'EAUTH') {
      console.error('Email authentication failed. Check EMAIL_USER and EMAIL_PASSWORD in .env.local');
    }

    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
