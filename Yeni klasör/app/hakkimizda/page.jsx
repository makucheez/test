import AboutSection from '@/components/AboutSection'

export const metadata = {
  title: 'Hakkımızda - Etkili Eğitim Kurumları',
  description: '20 yıllık deneyimimizle Ankara Kızılay\'da hizmet veren eğitim kurumumuz hakkında bilgi edinin. Yunus Canlı ve Yaşar Gözel kurucularımızla kaliteli eğitim.',
  keywords: 'Etkili Eğitim Kurumları, hakkımızda, Ankara dil kursu, Kızılay eğitim, Yunus Canlı, Yaşar Gözel',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
    </div>
  )
}
