'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, CheckCircle, Target, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const EnglishCoursesSection = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const handleEnroll = (courseName) => {
    toast({
      title: `🎓 ${t.turkishCourses.enrollToast}`,
      description: `${courseName} ${t.turkishCourses.enrollToastDesc}`
    });
  };

  const englishLevels = t.englishCourses.englishLevels;

  const iconMapping = {
    1: GraduationCap,
    2: Award,
    3: Target,
    4: BookOpen,
    5: GraduationCap,
    6: Award,
    7: Users,
    8: Target
  };

  const academicExams = t.englishCourses.academicExams.map(exam => ({
    ...exam,
    icon: iconMapping[exam.id]
  }));

  const colorClasses = {
    blue: 'from-blue-500/10 to-blue-600/10 border-blue-500/30',
    purple: 'from-purple-500/10 to-purple-600/10 border-purple-500/30',
    green: 'from-green-500/10 to-green-600/10 border-green-500/30',
    orange: 'from-brand-500/10 to-brand-600/10 border-brand-500/30',
    red: 'from-red-500/10 to-red-600/10 border-red-500/30',
    indigo: 'from-indigo-500/10 to-indigo-600/10 border-indigo-500/30',
    yellow: 'from-yellow-500/10 to-yellow-600/10 border-yellow-500/30',
    cyan: 'from-cyan-500/10 to-cyan-600/10 border-cyan-500/30'
  };

  return (
    <section id="english-courses" className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        {/* General English Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            <span className="text-brand-500">{t.englishCourses.title}</span> {t.englishCourses.titleSpan}
          </h2>

          <div className="bg-slate-900 p-8 rounded-xl border border-brand-500/20 mb-12">
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                {t.englishCourses.desc1}
              </p>

              <div className="bg-slate-800 p-6 rounded-lg border border-brand-500/20">
                <h3 className="text-xl font-bold text-white mb-4">{t.englishCourses.systemTitle}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-brand-500 flex-shrink-0" />
                    <span>{t.englishCourses.systemPoint1}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-brand-500 flex-shrink-0" />
                    <span>{t.englishCourses.systemPoint2}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-brand-500 flex-shrink-0" />
                    <span>{t.englishCourses.systemPoint3}</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-brand-500 flex-shrink-0" />
                    <span>{t.englishCourses.systemPoint4}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-brand-500/10 to-red-500/10 p-6 rounded-lg border border-brand-500/30 mt-6">
                <h3 className="text-xl font-bold text-white mb-4 text-center">{t.englishCourses.threeStages}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">1</div>
                    <p className="text-sm"><strong className="text-white">{t.englishCourses.stage1}</strong><br/>{t.englishCourses.stage1Desc}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">2</div>
                    <p className="text-sm"><strong className="text-white">{t.englishCourses.stage2}</strong><br/>{t.englishCourses.stage2Desc}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold">3</div>
                    <p className="text-sm"><strong className="text-white">{t.englishCourses.stage3}</strong><br/>{t.englishCourses.stage3Desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* English Levels */}
          <h3 className="text-2xl font-bold text-white mb-6 text-center">{t.englishCourses.levelsTitle}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {englishLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-900 p-4 rounded-lg border border-brand-500/20 text-center hover:border-brand-500/40 transition-all"
              >
                <p className="text-white font-bold text-sm mb-1">{level.name}</p>
                <p className="text-gray-400 text-xs">{level.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Academic Exams Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
            {t.englishCourses.academicTitle} <span className="text-brand-500">{t.englishCourses.academicTitleSpan}</span> {t.englishCourses.programs}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 text-center">
            {t.englishCourses.academicSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {academicExams.map((exam, index) => {
              const Icon = exam.icon;
              return (
                <motion.div
                  key={exam.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${colorClasses[exam.color]} p-6 rounded-xl border backdrop-blur-sm hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white flex-1">{exam.title}</h3>
                    <Icon className="w-8 h-8 text-brand-500 flex-shrink-0" />
                  </div>

                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{exam.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="text-gray-400 mr-2">{t.englishCourses.requirement}</span>
                      <span className="text-white font-medium">{exam.requirement}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="text-gray-400 mr-2">{t.englishCourses.program}</span>
                      <span className="text-white font-medium">{exam.schedule}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Bottom Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-slate-900 p-8 rounded-xl border border-brand-500/20 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            {t.englishCourses.bottomTitle}
          </h3>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {t.englishCourses.bottomDesc}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EnglishCoursesSection;
