import TurkishCoursesSection from '@/components/TurkishCoursesSection'

export const metadata = {
  title: 'Yabancılar İçin Türkçe Kursları - Etkili Eğitim',
  description: 'A1-A2, B1, B2 ve C1 seviyelerinde Türkçe kursları. 4 aylık programlarla okuma, yazma, dinleme ve konuşma becerilerini geliştirin. Online ve yüz yüze eğitim seçenekleri.',
  keywords: 'Türkçe kursu, yabancılar için Türkçe, TÖMER, A1 A2 Türkçe, B1 B2 Türkçe, C1 Türkçe, Türkçe öğrenme Ankara',
}

export default function TurkishCoursesPage() {
  return (
    <div className="pt-20">
      <TurkishCoursesSection />
    </div>
  )
}
