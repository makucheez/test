import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, course, message } = body;

    /* ---------------- VALIDATION ---------------- */

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required fields' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    /* ---------------- CONTENT ---------------- */

    const sentAt = new Date().toLocaleString('tr-TR', {
      timeZone: 'Europe/Istanbul'
    });

    const textContent = `
İletişim Formu Mesajı
======================

Ad Soyad: ${name}
E-posta: ${email}
Telefon: ${phone || 'Belirtilmedi'}
İlgilendiği Kurs: ${course || 'Belirtilmedi'}

Mesaj:
${message}

---
Gönderim Zamanı: ${sentAt}
    `.trim();

    const htmlContent = `
<!DOCTYPE html>
<html lang="tr">
<head>
<meta charset="UTF-8" />
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
    background: #f3f4f6;
    padding: 20px;
  }
  .container {
    max-width: 600px;
    margin: auto;
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0,0,0,.05);
  }
  .header {
    background: linear-gradient(135deg, #f97316, #ea580c);
    color: #fff;
    padding: 32px;
    text-align: center;
  }
  .content {
    padding: 32px;
  }
  .field {
    margin-bottom: 20px;
  }
  .label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .5px;
    text-transform: uppercase;
    color: #6b7280;
    margin-bottom: 6px;
  }
  .value {
    background: #f9fafb;
    border-left: 4px solid #f97316;
    padding: 14px 16px;
    border-radius: 8px;
    color: #111827;
    font-size: 15px;
  }
  .footer {
    background: #f9fafb;
    padding: 20px;
    text-align: center;
    font-size: 13px;
    color: #6b7280;
  }
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
        <div class="value">
          <a href="mailto:${email}" style="color:#f97316;text-decoration:none;">
            ${email}
          </a>
        </div>
      </div>

      <div class="field">
        <span class="label">Telefon</span>
        <div class="value">${phone || 'Belirtilmedi'}</div>
      </div>

      <div class="field">
        <span class="label">İlgilendiği Kurs</span>
        <div class="value">${course || 'Belirtilmedi'}</div>
      </div>

      <div class="field">
        <span class="label">Mesaj</span>
        <div class="value">${message.replace(/\n/g, '<br />')}</div>
      </div>
    </div>

    <div class="footer">
      Gönderim Zamanı: ${sentAt}<br />
      Etkili Eğitim Kurumları • www.yusufguler.com.tr
    </div>
  </div>
</body>
</html>
    `.trim();

    /* ---------------- TRANSPORTER ---------------- */

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD // Gmail App Password
      }
    });

    // SMTP bağlantı testi
    await transporter.verify();

    /* ---------------- SEND MAIL ---------------- */

    await transporter.sendMail({
      from: `"İletişim Formu" <${process.env.EMAIL_USER}>`,
      to: 'etkilihostinger@gmail.com',
      replyTo: email,
      subject: `Yeni İletişim Formu Mesajı - ${name}`,
      text: textContent,
      html: htmlContent
    });

    return NextResponse.json(
      { success: true, message: 'Message sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);

    if (error.code === 'EAUTH') {
      console.error('Gmail App Password hatası – şifreyi kontrol et');
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
