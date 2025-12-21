import HeroSection from '@/components/HeroSection'
import SpeedReadingPreview from '@/components/SpeedReadingPreview'
import EnglishCoursesPreview from '@/components/EnglishCoursesPreview'
import TurkishCoursesPreview from '@/components/TurkishCoursesPreview'
import BlogPreview from '@/components/BlogPreview'

export const metadata = {
  title: 'Ana Sayfa - Etkili Eğitim Kurumları',
  description: 'Geleceğinize etkili bir dokunuş. Dil eğitimi, akademik başarı ve kişisel gelişimde Ankara\'nın en güvenilir adresi.',
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SpeedReadingPreview />
      <EnglishCoursesPreview />
      <TurkishCoursesPreview />
      <BlogPreview />
    </>
  )
}
