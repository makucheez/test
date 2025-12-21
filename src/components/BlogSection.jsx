'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const BlogSection = () => {
  const { language } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      slug: 'hizli-okuma-teknikleri',
      title: language === 'tr'
        ? 'HIZLI OKUMA TEKNİKLERİYLE SINAVLARDA BAŞARIYI YAKALAYIN'
        : 'ACHIEVE SUCCESS IN EXAMS WITH SPEED READING TECHNIQUES',
      excerpt: language === 'tr'
        ? 'Hızlı okuma, okuma hızınızın geliştirilerek daha kısa sürede daha çok metni anlayarak okumadır. Beyin çok hızlı çalıştığından yüksek bir algılama kapasitesine sahiptir.'
        : 'Speed reading is reading more text in a shorter time by improving your reading speed with comprehension. The brain has a high perception capacity as it works very fast.',
      image: '/blog/speed-reading.jpg',
      date: '2024-01-15',
      author: 'Türkolog Yusuf GÜLER',
      category: language === 'tr' ? 'Hızlı Okuma' : 'Speed Reading',
      color: 'orange'
    },
    {
      id: 2,
      slug: 'ingilizce-sinavlari-rehberi',
      title: language === 'tr'
        ? 'YDS, YÖKDİL, TOEFL, IELTS ve Diğer İngilizce Sınavları Rehberi'
        : 'Guide to YDS, YÖKDİL, TOEFL, IELTS and Other English Exams',
      excerpt: language === 'tr'
        ? 'YDS, çoğunlukla akademisyenler, askeri personel ve memurlar tarafından alınan bir İngilizce dil yeterlilik sınavıdır.'
        : 'YDS is an English language proficiency exam mostly taken by academics, military personnel and civil servants.',
      image: '/blog/english-exams.jpg',
      date: '2024-01-10',
      author: 'Etkili Eğitim Kurumları',
      category: language === 'tr' ? 'İngilizce Sınavları' : 'English Exams',
      color: 'blue'
    }
  ]

  const colorClasses = {
    orange: {
      gradient: 'from-brand-500/20 to-orange-600/20',
      border: 'border-brand-500/30 hover:border-brand-500/50',
      text: 'text-brand-400',
      badge: 'bg-brand-500/20 text-brand-400 border-brand-500/30'
    },
    blue: {
      gradient: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30 hover:border-blue-500/50',
      text: 'text-blue-400',
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {language === 'tr' ? 'Blog & Makaleler' : 'Blog & Articles'}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {language === 'tr'
              ? 'Eğitim, dil öğrenimi ve kişisel gelişim konularında güncel yazılarımızı keşfedin.'
              : 'Discover our latest articles on education, language learning and personal development.'}
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {blogPosts.map((post) => {
            const colors = colorClasses[post.color]
            return (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.01 }}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                {/* Card Content */}
                <Link href={`/blog/${post.slug}`}>
                  <div className={`relative bg-slate-800/50 backdrop-blur-xl rounded-3xl border ${colors.border} transition-all duration-300 overflow-hidden h-full flex flex-col`}>
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80'
                        }}
                      />
                      <div className="absolute top-4 left-4 z-20">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full text-sm font-semibold border backdrop-blur-sm`}>
                          <BookOpen className="w-4 h-4" />
                          {post.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex-1 flex flex-col">
                      {/* Meta */}
                      <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString(language === 'tr' ? 'tr-TR' : 'en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <User className="w-4 h-4" />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors line-clamp-2">
                        {post.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>

                      {/* Read More */}
                      <div className={`flex items-center gap-2 ${colors.text} font-semibold mt-auto`}>
                        <span>{language === 'tr' ? 'Devamını Oku' : 'Read More'}</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default BlogSection
