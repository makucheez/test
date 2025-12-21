'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useParams } from 'next/navigation'

export default function BlogPost() {
  const { language } = useLanguage()
  const params = useParams()
  const slug = params.slug

  const blogPosts = {
    'hizli-okuma-teknikleri': {
      title: 'HIZLI OKUMA TEKNİKLERİYLE SINAVLARDA BAŞARIYI YAKALAYIN',
      titleEn: 'ACHIEVE SUCCESS IN EXAMS WITH SPEED READING TECHNIQUES',
      image: '/blog/speed-reading.jpg',
      date: '2024-01-15',
      author: 'Türkolog Yusuf GÜLER',
      category: language === 'tr' ? 'Hızlı Okuma' : 'Speed Reading',
      color: 'orange',
      contentTr: `
Hızlı okuma, okuma hızınızın geliştirilerek daha kısa sürede daha çok metni anlayarak okumadır.

Beyin çok hızlı çalıştığından yüksek bir algılama kapasitesine sahiptir. Yavaş okuduğunuzda beyin farklı konularla ilgilenme gereği hisseder ve okurken aklınıza ilgili – ilgisiz farklı konular gelir. Bu da odaklanma sorununa neden olur. Başta öğrenciler olmak üzere bir çok kişi bu durumu yaşamıştır.

Anlayarak hızlı okuma yöntemiyle göz ve beyin koordinasyonu geliştirilir, kelimelerin daha hızlı okunması ve algılanması sağlanır.

## Eğitimin Temeli Egzersizlere Dayanmaktadır

Nasıl ki spor yapan biri vücudunu güçlendirip geliştiriyorsa hızlı okuma tekniklerinde de gözün görme ve algılama kapasitesi geliştirilir, güçlendirilir.

## Yavaş Okuyanlarda Odaklanma Sorunu Olur

Gözlerin 180 derecelik ortalama bir görüş açısı vardır. Ancak okurken yanlış odaklanmadan dolayı bu oran % 2'lere kadar düştüğü için sıkılırsınız ya da uykunuz gelir. Bu da sizi okumayı sevmeyen bir insan haline getirir.

## Aynı Anda 3-4 Kelimeyi Okuyabilirsiniz

Bilimsel olarak kanıtlanmış yöntemlerle okuma hızınızı geliştirerek blok okumayı öğrenebilirsiniz. Blok okuma yöntemiyle 2 kelimeyi aynı anda okuyabilirsiniz. Kişinin yapısına ve çalışma disiplinine göre bu oran 3-4 kelimeye de çıkabilir. Bu da hızınızın 2 ile 4 kat arasında artması demektir.

Hızınız arttıkça okumaya olan ilginiz de artacak ve okumak, sizin için daha zevkli hale gelecektir.

## Gelişmiş Bazı Ülkelerde İlköğretimdeyken Öğretiliyor

Hızlı okuma teknikleri gelişmiş bazı ülkelerde öğrencilere ilköğretim seviyesindeyken öğretilmektedir. Ülkemizde ise son yıllarda önemi anlaşılmaya başlanmış. Buna bağlı olarak özellikle üst düzey kamu ve özel sektör yöneticileri, belli bir kültür seviyesine sahip insanlar ve bürokratlar tarafından artık ciddi bir talep görmektedir. Bu insanların, aynı bilinçle kendi çocuklarına da hızlı okuma eğitimini özellikle aldırmak istedikleri görülmektedir.

## Paragraf Soruları Zaman Kaybettiriyor

Bizim amacımız, adeta sınavlar ülkesi olan ülkemizde, öğrencilerimize yardımcı olmaktır.

Özellikle; paragrafta sıralama, yer değiştirme, anlam bütünlüğünü bozan cümleyi bulma, akışı bozan cümle, ikiye bölme ve kesin yargı soruları ciddi anlamda zaman kaybettirmektedir.

## Maddi - Manevi Emek Boşa Gidiyor

Sınavlara giren birçok öğrenci zaman sorunu yaşamakta ve maalesef süre yetmediği için yapabileceği soruları dahi yapamamaktadır.

Süreyi kullanamayan bir öğrencinin konuyu çok iyi bilmesi de maalesef işe yaramıyor. Maddi ve manevi bütün emeği boşa gitmiş oluyor.

Soruları yetiştiremeyen birçok öğrenci bunu dile getiremez cevapları kaydırdığını söyler ya da farklı bahaneler aramaya çalışır.

## Geleceğinize Yatırım Yapın

Hızlı okuma teknikleriyle hem hızınızı arttırabilir hem de geleceğinize önemli bir katkıda bulunabilirsiniz. Çünkü hızlı okuma teknikleri eğitimi, hayatınızın her döneminde işinize yarayacak, az zamanda daha çok iş yapmanızı sağlayacak önemli bir eğitimdir.

---

**Türkolog Yusuf GÜLER**
Anlayarak Hızlı Okuma Teknikleri Eğitmeni
www.yusufguler.com.tr
      `,
      contentEn: `
Speed reading is reading more text in a shorter time by improving your reading speed with comprehension.

The brain has a high perception capacity as it works very fast. When you read slowly, the brain feels the need to deal with different subjects and related or unrelated topics come to your mind while reading. This causes a focus problem. Many people, especially students, have experienced this situation.

With the comprehension-based speed reading method, eye and brain coordination is developed, and faster reading and perception of words is ensured.

## The Foundation of Training is Based on Exercises

Just as someone who does sports strengthens and develops their body, in speed reading techniques, the eye's vision and perception capacity is developed and strengthened.

## Slow Readers Have Focus Problems

The eyes have an average viewing angle of 180 degrees. However, due to wrong focus while reading, this rate drops to as low as 2%, so you get bored or sleepy. This makes you a person who does not like reading.

## You Can Read 3-4 Words at Once

You can learn block reading by improving your reading speed with scientifically proven methods. With the block reading method, you can read 2 words at the same time. Depending on the person's structure and work discipline, this rate can increase to 3-4 words. This means your speed increases between 2 and 4 times.

As your speed increases, your interest in reading will also increase and reading will become more enjoyable for you.

## Taught in Primary Education in Some Developed Countries

Speed reading techniques are taught to students at primary education level in some developed countries. In our country, its importance has been understood in recent years. Accordingly, there is now a serious demand especially from senior public and private sector managers, people with a certain level of culture and bureaucrats. It is seen that these people also want to have their children receive speed reading training with the same awareness.

## Paragraph Questions Waste Time

Our aim is to help our students in our country, which is almost a country of exams.

Especially; ordering in paragraph, replacement, finding the sentence that disrupts meaning integrity, sentence that disrupts flow, dividing into two and definite judgment questions seriously waste time.

## Material and Moral Effort is Wasted

Many students taking exams experience time problems and unfortunately cannot even do the questions they could do because time runs out.

Unfortunately, it doesn't help if a student who cannot use time knows the subject very well. All material and moral effort is wasted.

Many students who cannot finish the questions cannot express this, say they shifted the answers or try to find different excuses.

## Invest in Your Future

With speed reading techniques, you can both increase your speed and make an important contribution to your future. Because speed reading techniques training is an important training that will be useful in every period of your life and will enable you to do more work in less time.

---

**Türkolog Yusuf GÜLER**
Comprehension-Based Speed Reading Techniques Trainer
www.yusufguler.com.tr
      `
    },
    'ingilizce-sinavlari-rehberi': {
      title: 'YDS, YÖKDİL, TOEFL, IELTS ve Diğer İngilizce Sınavları Rehberi',
      titleEn: 'Guide to YDS, YÖKDİL, TOEFL, IELTS and Other English Exams',
      image: '/blog/english-exams.jpg',
      date: '2024-01-10',
      author: 'Etkili Eğitim Kurumları',
      category: language === 'tr' ? 'İngilizce Sınavları' : 'English Exams',
      color: 'blue',
      contentTr: `
## YDS (Yabancı Dil Bilgisi Seviye Tespit Sınavı)

YDS, çoğunlukla akademisyenler, askeri personel ve memurlar tarafından alınan bir İngilizce dil yeterlilik sınavıdır. Türkiye'de özellikle Kamu Çalışanlarının yabancı dil becerilerini değerlendirmek için ÖSYM tarafından yönetilmektedir.

2013 Yılından itibaren ÖSYM tarafından, yabancı dil bilgisi seviye belirlemeye yönelik olarak, sadece yabancı dil bilgisi seviye tespit sınavı (YDS) yapıldığından, diğer yabancı dil bilgisi seviye belirleme sınavları olan (ÜDS, KPDS, vb.) yapılmamaktadır. Ayrıca, ÖSYM tarafından uygulanan YDS sınav sonuçları, 2013 yılından itibaren diğer sınavlar için de değerlendirmede kullanılmaktadır. Bu nedenle, YDS sınavı Türkiye'de yaşayanlar için bilhassa kamuda çalışanlar için büyük önem arz etmektedir.

YDS sınavına girecek olanlar için bir yılda iki kere, Eylül ve Nisan aylarında sınav ÖSYM tarafından yapılmakta ve bu sınav için de Genel İngilizceyi bitirmiş olmak gerekir. Upper seviyesine gelenler bu sınava girebilir ve bizde küçük gruplar halinde sınava kursiyerleri hazırlıyoruz. Ücret ve ders saati kursiyerin seviyesine ve durumuna göre belirlenmektedir.

## YÖKDİL

YÖKDİL Sınavı, YDS gibi Akademik düzeyde yabancı dil seviyesini belirleyen çoktan seçmeli bir merkezi dil sınavıdır. Bu sınav da Türkiye'de Akademisyen olmayı amaçlayanlar için büyük önem arz etmektedir. Bu sınav için de yine belirli bir seviyede İngilizce bilmek gerekir.

Genel İngilizceyi bitirmiş olmak gerekir. Upper seviyesine gelenler bu sınava girebilir ve bizde küçük gruplar halinde sınava kursiyerleri hazırlıyoruz. Ücret ve ders saati kursiyerin seviyesine ve durumuna göre belirlenmektedir.

## SAT

SAT, çoğu kolej ve üniversiteler tarafından kabul kararlarını vermek için kullanılan bir giriş sınavıdır. SAT'ın amacı, bir lise mezunu öğrencisinin Üniversiteye hazır olup olmadığını ve kolejlere de tüm başvuru sahiplerini karşılaştırmak için kullanılabilecek tek bir ortak sınavla veri noktası sağlayan bir sınavdır. Küçük gruplar halinde masa başı, özel ders şeklinde kurs verilmektedir.

## YÖS

YÖS Sınavı, yabancı öğrencilerin Türk Üniversitelerine giriş sınavıdır. Bu sınav, Türkiye'de Tıp, hukuk, psikoloji, eczane, mimarlık, mühendislik ve daha pek çok konuda eğitim almalarını sağlayacaktır. Çoğu sınav durumunda 80 soru sorulmuştur. Küçük gruplar halinde masa başı özel ders şeklinde kurs verilmektedir.

## TOEFL

TOEFL, Yabancı dil olarak İngilizce testidir. İngilizce eğitim yapan, konuşulan Üniversitelere kaydolmak isteyen ana dili İngilizce olmayanların İngilizce dil becerilerini ölçmek için standartlaştırılmış bir test olarak ifade edilmektedir ve bu sınav, İngilizce konuşan ve eğitim veren birçok akademik ve profesyonel kurum tarafından kabul edilmektedir.

İngilizcesi belirli bir seviyenin üzerinde olanların hazırlanması gereken bir sınavdır. Kursiyerin seviyesine göre ders saat ve ücreti belirlenir. TOEFL, Amerika'da çalışmak isteyen veya öğrenim görmek isteyenler için uygulanan bir sınavdır. Bu sınava hazırlanmak için Genel İngilizce seviyelerini bitirmiş olması gerekir. Kurs saati ile süresi ve ücreti kursiyer ile görüşerek, anlaşarak masa başı özel ders şeklinde uygulanmaktadır.

## IELTS

Uluslararası İngilizce Dil Test Sistemi IELTS, İngilizce'nin iletişim dili olarak kullanıldığı yerlerde öğrenim görmesi veya çalışması gereken adayların dil becerilerini değerlendirmek için tasarlanan bir sınavdır. Birleşik Krallık'ta ve diğer ülkelerde üniversiteye giriş için IELTS gereklidir.

Bu sınav için de belirli bir seviyenin üzerinde olmak gerekir. Genel İngilizce seviyelerini tamamlamış olmak gerekir. Ücret ve kurs saati ile süresi kursiyer ile görüşerek masa başı özel ders olarak verilmektedir.
      `,
      contentEn: `
## YDS (Foreign Language Proficiency Exam)

YDS is an English language proficiency exam mostly taken by academics, military personnel and civil servants. In Turkey, it is administered by ÖSYM to evaluate the foreign language skills of especially Public Employees.

Since 2013, ÖSYM has been conducting only the Foreign Language Proficiency Exam (YDS) to determine foreign language proficiency level, so other foreign language proficiency exams (ÜDS, KPDS, etc.) are not being conducted. Additionally, YDS exam results administered by ÖSYM have been used in evaluations for other exams since 2013. Therefore, the YDS exam is of great importance for those living in Turkey, especially for those working in the public sector.

For those who will take the YDS exam, the exam is held twice a year by ÖSYM in September and April, and it is necessary to have completed General English for this exam. Those who reach Upper level can take this exam and we prepare trainees for the exam in small groups. Fee and class hours are determined according to the trainee's level and situation.

## YÖKDİL

YÖKDİL Exam is a multiple-choice central language exam that determines foreign language level at academic level like YDS. This exam is also of great importance for those who aim to become academics in Turkey. For this exam, it is also necessary to know English at a certain level.

It is necessary to have completed General English. Those who reach Upper level can take this exam and we prepare trainees for the exam in small groups. Fee and class hours are determined according to the trainee's level and situation.

## SAT

SAT is an entrance exam used by most colleges and universities to make admission decisions. The purpose of the SAT is to provide a data point with a single common exam that can be used to determine whether a high school graduate student is ready for University and to compare all applicants to colleges. Courses are given in small groups at the desk, in the form of private lessons.

## YÖS

YÖS Exam is the entrance exam for foreign students to Turkish Universities. This exam will enable them to study in Turkey in medicine, law, psychology, pharmacy, architecture, engineering and many other subjects. In most exam cases, 80 questions are asked. Courses are given in small groups at the desk in the form of private lessons.

## TOEFL

TOEFL is the Test of English as a Foreign Language. It is expressed as a standardized test to measure the English language skills of non-native English speakers who want to enroll in English-taught and spoken Universities, and this exam is accepted by many academic and professional institutions that speak and teach English.

It is an exam that those whose English is above a certain level should prepare for. Lesson hours and fees are determined according to the trainee's level. TOEFL is an exam applied for those who want to work or study in America. To prepare for this exam, General English levels must be completed. Course hours, duration and fee are applied in the form of private lessons at the desk by discussing and agreeing with the trainee.

## IELTS

International English Language Testing System IELTS is an exam designed to evaluate the language skills of candidates who need to study or work in places where English is used as a communication language. IELTS is required for university entrance in the United Kingdom and other countries.

For this exam, it is necessary to be above a certain level. General English levels must be completed. Fee, course hours and duration are given as private lessons at the desk by discussing with the trainee.
      `
    }
  }

  const post = blogPosts[slug]

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 pt-32 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Blog Yazısı Bulunamadı</h1>
          <Link href="/blog" className="text-brand-400 hover:text-brand-500">
            Blog'a Dön
          </Link>
        </div>
      </div>
    )
  }

  const colorClasses = {
    orange: {
      badge: 'bg-brand-500/20 text-brand-400 border-brand-500/30'
    },
    blue: {
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    }
  }

  const colors = colorClasses[post.color]
  const content = language === 'tr' ? post.contentTr : post.contentEn
  const title = language === 'tr' ? post.title : post.titleEn

  return (
    <div className="min-h-screen bg-slate-900 pt-20">
      {/* Hero Image */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>
        <img
          src={post.image}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1200&q=80'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 -mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-500 mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>{language === 'tr' ? 'Blog\'a Dön' : 'Back to Blog'}</span>
          </Link>

          {/* Article Card */}
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-8 md:p-12">
            {/* Category Badge */}
            <div className="mb-6">
              <span className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full text-sm font-semibold border backdrop-blur-sm`}>
                <BookOpen className="w-4 h-4" />
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              {title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-6 mb-8 text-gray-400 pb-8 border-b border-slate-700/50">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{new Date(post.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{post.author}</span>
              </div>
            </div>

            {/* Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              {content.split('\n').map((paragraph, index) => {
                if (paragraph.trim().startsWith('##')) {
                  return (
                    <h2 key={index} className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                      {paragraph.replace('##', '').trim()}
                    </h2>
                  )
                } else if (paragraph.trim().startsWith('---')) {
                  return <hr key={index} className="my-8 border-slate-700" />
                } else if (paragraph.trim().startsWith('**') && paragraph.trim().endsWith('**')) {
                  return (
                    <p key={index} className="text-brand-400 font-bold my-2">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  )
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-gray-300 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  )
                }
                return null
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
