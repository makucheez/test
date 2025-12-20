'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Users, ArrowRight, Globe2, Star, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';
import { useRouter } from 'next/navigation';

const TurkishCoursesPreview = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();

  const courseLevels = [
    { level: 'A1-A2', color: 'from-orange-500/20 to-orange-600/20 border-orange-500/30', textColor: 'text-orange-400' },
    { level: 'B1', color: 'from-blue-500/20 to-blue-600/20 border-blue-500/30', textColor: 'text-blue-400' },
    { level: 'B2', color: 'from-purple-500/20 to-purple-600/20 border-purple-500/30', textColor: 'text-purple-400' },
    { level: 'C1', color: 'from-red-500/20 to-red-600/20 border-red-500/30', textColor: 'text-red-400' }
  ];

  const highlights = [
    {
      icon: Clock,
      text: language === 'tr' ? '4 Aylık Programlar' : '4-Month Programs',
      color: 'text-brand-400'
    },
    {
      icon: Users,
      text: language === 'tr' ? 'Max 12 Kişilik Gruplar' : 'Max 12 Students per Class',
      color: 'text-green-400'
    },
    {
      icon: Globe2,
      text: language === 'tr' ? 'Online & Yüz Yüze' : 'Online & In-Person',
      color: 'text-blue-400'
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/95 via-slate-900 to-slate-900"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.turkishCourses.title}
              <br />
              <span className="text-brand-500">{t.turkishCourses.titleSpan}</span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t.turkishCourses.desc1}
            </p>

            {/* Highlights */}
            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center border border-brand-500/20">
                      <Icon className={`w-6 h-6 ${highlight.color}`} />
                    </div>
                    <span className="text-lg text-gray-300 font-medium">{highlight.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <Button
              onClick={() => router.push('/turkce-kurslari')}
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-brand-500/25 transition-all group"
            >
              {language === 'tr' ? 'Kursları Keşfet' : 'Discover Courses'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-500/20 to-purple-500/20 p-8 rounded-2xl border border-brand-500/30 backdrop-blur-sm"
          >
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-500 rounded-lg flex items-center justify-center">
                <Star className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">
                {language === 'tr' ? 'Seviyeler' : 'Levels'}
              </h3>
            </div>

            {/* Course Levels Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {courseLevels.map((course, index) => (
                <motion.div
                  key={course.level}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${course.color} p-5 rounded-lg border text-center hover:scale-105 transition-transform`}
                >
                  <div className={`text-2xl font-bold ${course.textColor} mb-1`}>{course.level}</div>
                  <div className="text-xs text-gray-400">
                    {language === 'tr' ? 'Seviye' : 'Level'}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Info */}
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-4 text-center">
                {language === 'tr' ? '4 Temel Beceri' : '4 Core Skills'}
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {['Okuma', 'Yazma', 'Dinleme', 'Konuşma'].map((skill, index) => (
                  <div key={skill} className="text-center">
                    <div className="w-10 h-10 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                      <span className="text-brand-400 font-bold">{index + 1}</span>
                    </div>
                    <div className="text-sm text-gray-300">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TurkishCoursesPreview;
