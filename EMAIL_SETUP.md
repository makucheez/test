# Email Kurulum Talimatları

İletişim formundan gelen mesajların `yunuscanli0@hotmail.com` adresine email olarak gönderilmesi için aşağıdaki adımları takip edin.

## Kurulum Adımları

### 1. Environment Variables Dosyası Oluşturun

Proje kök dizininde `.env.local` dosyası oluşturun:

```bash
touch .env.local
```

### 2. Email Bilgilerini Ekleyin

`.env.local` dosyasını açın ve aşağıdaki bilgileri ekleyin:

```env
EMAIL_USER=yunuscanli0@hotmail.com
EMAIL_PASSWORD=your-password-here
```

**ÖNEMLİ:** `your-password-here` kısmını gerçek şifrenizle değiştirin.

### 3. Hotmail/Outlook Güvenlik Ayarları

Hotmail/Outlook hesabınızda aşağıdaki ayarları yapmanız gerekebilir:

#### Seçenek 1: İki Faktörlü Doğrulama + Uygulama Şifresi (ÖNERİLEN)

1. [Microsoft Hesap Güvenlik](https://account.microsoft.com/security) sayfasına gidin
2. "İki adımlı doğrulama" özelliğini aktif edin
3. "Uygulama şifreleri" bölümünden yeni bir şifre oluşturun
4. Oluşturduğunuz uygulama şifresini `.env.local` dosyasındaki `EMAIL_PASSWORD` olarak kullanın

#### Seçenek 2: Daha Az Güvenli Uygulama Erişimi

1. [Microsoft Hesap](https://account.microsoft.com/) sayfasına gidin
2. Güvenlik ayarlarından "Daha az güvenli uygulama erişimi"ni açın (önerilmez)

### 4. Uygulamayı Yeniden Başlatın

Development server çalışıyorsa, yeniden başlatın:

```bash
npm run dev
```

## Test Etme

1. Tarayıcıda `/iletisim` sayfasına gidin
2. İletişim formunu doldurun
3. "Mesaj Gönder" butonuna tıklayın
4. `yunuscanli0@hotmail.com` adresine gelen emaili kontrol edin

## Alternatif Email Servisleri

Hotmail ile sorun yaşarsanız, aşağıdaki alternatifleri kullanabilirsiniz:

### Gmail Kullanımı

```env
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-specific-password
```

`app/api/contact/route.js` dosyasında SMTP ayarlarını değiştirin:

```javascript
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});
```

Gmail için mutlaka [Uygulama Şifresi](https://support.google.com/accounts/answer/185833) oluşturmanız gerekir.

### SendGrid (Profesyonel)

1. [SendGrid](https://sendgrid.com/) hesabı oluşturun
2. API Key alın
3. `nodemailer-sendgrid` paketini yükleyin
4. Kodda gerekli değişiklikleri yapın

### Resend (Modern Alternatif)

1. [Resend](https://resend.com/) hesabı oluşturun
2. API Key alın
3. `resend` paketini yükleyin
4. API route'u güncelleyin

## Güvenlik Notları

⚠️ **ÖNEMLİ GÜVENLİK UYARILARI:**

1. `.env.local` dosyasını **ASLA** Git'e commit etmeyin
2. `.gitignore` dosyasında `.env.local` olduğundan emin olun
3. Production ortamında environment variables'ları hosting platformunuzdan ekleyin
4. Mümkünse uygulama şifresi kullanın, asıl şifrenizi kullanmayın

## Sorun Giderme

### Email gönderilmiyor

1. `.env.local` dosyasının doğru konumda olduğunu kontrol edin
2. Environment variables'ların doğru olduğunu kontrol edin
3. Server'ı yeniden başlatın
4. Console'da hata mesajlarını kontrol edin

### "Authentication failed" hatası

1. Email ve şifrenin doğru olduğunu kontrol edin
2. Uygulama şifresi kullanıyorsanız, doğru şifreyi girdiğinizden emin olun
3. İki faktörlü doğrulama aktifse, uygulama şifresi oluşturun

### Geliştirme Modunda Test

Email credentials olmadan da form çalışır. Mesajlar console'a yazılır:

```bash
npm run dev
```

Terminal'de gelen mesajları görebilirsiniz.

## Deployment (Production)

Production'a deploy ederken:

1. Hosting platformunuzda (Vercel, Netlify, vb.) environment variables ekleyin
2. `EMAIL_USER` ve `EMAIL_PASSWORD` değişkenlerini ekleyin
3. Deployment sonrası test edin

### Vercel'de Environment Variables Ekleme

1. Vercel Dashboard > Your Project > Settings > Environment Variables
2. `EMAIL_USER` ve `EMAIL_PASSWORD` ekleyin
3. Production, Preview, Development ortamları için seçin
4. Redeploy edin

## Destek

Sorun yaşarsanız:
- Console loglarını kontrol edin
- Email servis sağlayıcınızın dokümantasyonunu okuyun
- SMTP ayarlarının doğru olduğundan emin olun
