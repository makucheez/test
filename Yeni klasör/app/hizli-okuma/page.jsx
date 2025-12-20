import SpeedReadingSection from '@/components/SpeedReadingSection'

export const metadata = {
  title: 'Hızlı Okuma Teknikleri - Etkili Eğitim',
  description: 'Türkolog Yusuf Güler ile hızlı okuma ve anlama teknikleri eğitimi. Okuma hızınızı 2-4 kat artırın. YKS, YÖS, YDS sınavlarında başarılı olun.',
  keywords: 'hızlı okuma kursu, hızlı okuma teknikleri, Yusuf Güler, okuma hızı artırma, sınav başarısı, anlama kapasitesi',
}

export default function SpeedReadingPage() {
  return (
    <div className="pt-20">
      <SpeedReadingSection />
    </div>
  )
}
