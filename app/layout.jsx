import { LanguageProvider } from '@/contexts/LanguageContext'
import { Toaster } from '@/components/ui/toaster'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata = {
  title: 'Etkili Eğitim Kurumları - Dil Eğitimi ve Akademik Hazırlık',
  description: 'Ankara Kızılay\'da 20 yıllık deneyimimizle İngilizce, Türkçe, YDS, YÖKDİL, TOEFL, IELTS, SAT, YÖS ve Hızlı Okuma eğitimleri. Küçük gruplar halinde kaliteli eğitim.',
  keywords: 'İngilizce kursu Ankara, Türkçe kursu yabancılar, YDS hazırlık, YÖKDİL, TOEFL, IELTS, SAT, YÖS, Hızlı okuma, Etkili eğitim',
  authors: [{ name: 'Etkili Eğitim Kurumları' }],
  openGraph: {
    title: 'Etkili Eğitim Kurumları',
    description: 'Ankara\'nın en güvenilir dil eğitimi ve akademik hazırlık kurumu',
    type: 'website',
    locale: 'tr_TR',
    alternateLocale: 'en_US',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <body className="overflow-x-hidden">
        <LanguageProvider>
          <Navigation />
          <main className="transition-all duration-300">{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  )
}
