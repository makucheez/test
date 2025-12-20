'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Target, Users, ArrowRight, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';
import { useRouter } from 'next/navigation';

const EnglishCoursesPreview = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();

  const examTypes = [
    { name: 'YDS', icon: GraduationCap, color: 'text-blue-400' },
    { name: 'YÖKDİL', icon: Award, color: 'text-purple-400' },
    { name: 'TOEFL', icon: Target, color: 'text-green-400' },
    { name: 'IELTS', icon: Globe, color: 'text-brand-400' }
  ];

  const features = [
    t.englishCourses.systemPoint1 || "3 Aşamalı Eğitim Sistemi",
    t.englishCourses.systemPoint2 || "Küçük Gruplar (Max 8-10 kişi)",
    t.englishCourses.systemPoint3 || "A1'den C2'ye Tüm Seviyeler"
  ];

  return (
    <section className="py-20 bg-slate-800 relative">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 rounded-2xl border border-blue-500/30 backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">{language === 'tr' ? 'Akademik Sınavlar' : 'Academic Exams'}</h3>
            </div>

            {/* Exam Types Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {examTypes.map((exam, index) => {
                const Icon = exam.icon;
                return (
                  <motion.div
                    key={exam.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-slate-800/50 p-4 rounded-lg border border-slate-700 text-center hover:border-blue-500/30 transition-all"
                  >
                    <Icon className={`w-6 h-6 ${exam.color} mx-auto mb-2`} />
                    <div className="text-white font-semibold text-sm">{exam.name}</div>
                  </motion.div>
                );
              })}
            </div>

            {/* 3 Stages Info */}
            <div className="bg-slate-800/50 p-6 rounded-xl">
              <h4 className="text-white font-bold mb-3 text-center">{t.englishCourses.threeStages}</h4>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-1 text-white font-bold">1</div>
                  <div className="text-xs text-gray-400">{t.englishCourses.stage1}</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-1 text-white font-bold">2</div>
                  <div className="text-xs text-gray-400">{t.englishCourses.stage2}</div>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-1 text-white font-bold">3</div>
                  <div className="text-xs text-gray-400">{t.englishCourses.stage3}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <span className="text-brand-500">{t.englishCourses.title}</span>
              <br />
              {t.englishCourses.titleSpan}
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t.englishCourses.desc1}
            </p>

            {/* Features List */}
            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <Button
              onClick={() => router.push('/ingilizce')}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-blue-500/25 transition-all group"
            >
              {language === 'tr' ? 'Kursları İncele' : 'Explore Courses'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnglishCoursesPreview;
