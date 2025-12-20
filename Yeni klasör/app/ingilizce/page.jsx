import EnglishCoursesSection from '@/components/EnglishCoursesSection'

export const metadata = {
  title: 'English Courses and Academic Exams - Etkili Education',
  description: 'General English education and YDS, YÖKDİL, SAT, YÖS, TOEFL, IELTS, TEFL-TESOL preparation courses. 3-stage education system in small groups.',
  keywords: 'English course Ankara, YDS preparation, YÖKDİL course, TOEFL IELTS preparation, SAT YÖS course, academic English, general English',
}

export default function EnglishCoursesPage() {
  return (
    <div className="pt-20">
      <EnglishCoursesSection />
    </div>
  )
}
