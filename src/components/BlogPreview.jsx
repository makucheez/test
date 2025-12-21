'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BookOpen, ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

const BlogPreview = () => {
  const { language } = useLanguage()

  const blogPosts = [
    {
      slug: 'hizli-okuma-teknikleri',
      title: language === 'tr' ? 'Hızlı Okuma Teknikleri' : 'Speed Reading Techniques',
      excerpt: language === 'tr'
        ? 'Sınavlarda başarı için hızlı okuma tekniklerini öğrenin'
        : 'Learn speed reading techniques for exam success',
      color: 'orange'
    },
    {
      slug: 'ingilizce-sinavlari-rehberi',
      title: language === 'tr' ? 'İngilizce Sınavları Rehberi' : 'English Exams Guide',
      excerpt: language === 'tr'
        ? 'YDS, YÖKDİL, TOEFL ve IELTS sınavları hakkında bilmeniz gerekenler'
        : 'Everything you need to know about YDS, YÖKDİL, TOEFL and IELTS',
      color: 'blue'
    }
  ]

  const colorClasses = {
    orange: {
      gradient: 'from-brand-500/20 to-orange-600/20',
      border: 'border-brand-500/30 hover:border-brand-500/50',
      text: 'text-brand-400'
    },
    blue: {
      gradient: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30 hover:border-blue-500/50',
      text: 'text-blue-400'
    }
  }

  return (
    <section className="py-16 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="w-6 h-6 text-brand-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-brand-500">
              {language === 'tr' ? 'Blog' : 'Blog'}
            </h2>
          </div>
          <p className="text-gray-400">
            {language === 'tr' ? 'Güncel yazılarımızı keşfedin' : 'Discover our latest articles'}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {blogPosts.map((post, idx) => {
            const colors = colorClasses[post.color]
            return (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>
                <Link href={`/blog/${post.slug}`}>
                  <div className={`relative bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border ${colors.border} transition-all duration-300`}>
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${colors.gradient} rounded-lg flex items-center justify-center border ${colors.border}`}>
                        <BookOpen className={`w-5 h-5 ${colors.text}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3">{post.excerpt}</p>
                        <div className={`flex items-center gap-2 ${colors.text} font-medium text-sm`}>
                          <span>{language === 'tr' ? 'Devamını Oku' : 'Read More'}</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 font-semibold transition-colors group"
          >
            <span>{language === 'tr' ? 'Tüm Yazılar' : 'All Articles'}</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview
