'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, CheckCircle, Target, Award, Users, Sparkles, Globe2, Zap, Rocket, Brain, TrendingUp, Star, Lightbulb } from 'lucide-react';
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
    1: Rocket,
    2: Brain,
    3: TrendingUp,
    4: Star,
    5: Lightbulb,
    6: Globe2,
    7: Target,
    8: Award
  };

  const academicExams = t.englishCourses.academicExams.map(exam => ({
    ...exam,
    icon: iconMapping[exam.id]
  }));

  const colorClasses = {
    blue: {
      gradient: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30 hover:border-blue-500/50',
      glow: 'from-blue-500/20 to-blue-600/20',
      icon: 'text-blue-400'
    },
    purple: {
      gradient: 'from-purple-500/20 to-purple-600/20',
      border: 'border-purple-500/30 hover:border-purple-500/50',
      glow: 'from-purple-500/20 to-purple-600/20',
      icon: 'text-purple-400'
    },
    green: {
      gradient: 'from-green-500/20 to-green-600/20',
      border: 'border-green-500/30 hover:border-green-500/50',
      glow: 'from-green-500/20 to-green-600/20',
      icon: 'text-green-400'
    },
    orange: {
      gradient: 'from-brand-500/20 to-orange-600/20',
      border: 'border-brand-500/30 hover:border-brand-500/50',
      glow: 'from-brand-500/20 to-orange-600/20',
      icon: 'text-brand-400'
    },
    red: {
      gradient: 'from-red-500/20 to-red-600/20',
      border: 'border-red-500/30 hover:border-red-500/50',
      glow: 'from-red-500/20 to-red-600/20',
      icon: 'text-red-400'
    },
    indigo: {
      gradient: 'from-indigo-500/20 to-indigo-600/20',
      border: 'border-indigo-500/30 hover:border-indigo-500/50',
      glow: 'from-indigo-500/20 to-indigo-600/20',
      icon: 'text-indigo-400'
    },
    yellow: {
      gradient: 'from-yellow-500/20 to-yellow-600/20',
      border: 'border-yellow-500/30 hover:border-yellow-500/50',
      glow: 'from-yellow-500/20 to-yellow-600/20',
      icon: 'text-yellow-400'
    },
    cyan: {
      gradient: 'from-cyan-500/20 to-cyan-600/20',
      border: 'border-cyan-500/30 hover:border-cyan-500/50',
      glow: 'from-cyan-500/20 to-cyan-600/20',
      icon: 'text-cyan-400'
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

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
  };

  return (
    <section id="english-courses" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-brand-500 bg-clip-text text-transparent">
              {t.englishCourses.title}
            </span>{' '}
            {t.englishCourses.titleSpan}
          </h1>
        </motion.div>

        {/* Main Content Card with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Floating Card with Glow */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-brand-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
              >
                {t.englishCourses.desc1}
              </motion.p>

              {/* System Features with Glassmorphism */}
              <div className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-brand-500/20 mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-brand-500/20 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-brand-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.englishCourses.systemTitle}</h3>
                </div>

                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {[
                    t.englishCourses.systemPoint1,
                    t.englishCourses.systemPoint2,
                    t.englishCourses.systemPoint3,
                    t.englishCourses.systemPoint4
                  ].map((point, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start group/item cursor-default"
                    >
                      <div className="w-6 h-6 bg-brand-500/20 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 group-hover/item:bg-brand-500/30 transition-colors">
                        <CheckCircle className="w-4 h-4 text-brand-500" />
                      </div>
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{point}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Three Stages - Bento Style */}
              <div className="bg-gradient-to-br from-brand-500/10 via-red-500/10 to-orange-500/10 backdrop-blur-sm p-8 rounded-2xl border border-brand-500/30">
                <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center gap-3">
                  <Rocket className="w-6 h-6 text-brand-500" />
                  {t.englishCourses.threeStages}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { num: 1, title: t.englishCourses.stage1, desc: t.englishCourses.stage1Desc },
                    { num: 2, title: t.englishCourses.stage2, desc: t.englishCourses.stage2Desc },
                    { num: 3, title: t.englishCourses.stage3, desc: t.englishCourses.stage3Desc }
                  ].map((stage) => (
                    <motion.div
                      key={stage.num}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -8, scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative group/stage cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-red-500/20 rounded-xl blur-lg opacity-0 group-hover/stage:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-brand-500/20 group-hover/stage:border-brand-500/40 transition-all">
                        <div className="w-14 h-14 bg-gradient-to-br from-brand-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-brand-500/20 group-hover/stage:shadow-brand-500/40 transition-shadow">
                          <span className="text-white font-bold text-xl">{stage.num}</span>
                        </div>
                        <p className="text-center">
                          <strong className="text-white text-lg block mb-2">{stage.title}</strong>
                          <span className="text-gray-400 text-sm">{stage.desc}</span>
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* English Levels Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
            {t.englishCourses.levelsTitle}
          </h3>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
          >
            {englishLevels.map((level) => (
              <motion.div
                key={level.name}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-sm p-5 rounded-xl border border-blue-500/20 group-hover:border-blue-500/40 transition-all text-center">
                  <p className="text-white font-bold text-base mb-2">{level.name}</p>
                  <p className="text-gray-400 text-xs leading-relaxed">{level.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Academic Exams Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t.englishCourses.academicTitle}{' '}
              <span className="bg-gradient-to-r from-brand-500 via-red-500 to-orange-500 bg-clip-text text-transparent">
                {t.englishCourses.academicTitleSpan}
              </span>{' '}
              {t.englishCourses.programs}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.englishCourses.academicSubtitle}
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {academicExams.map((exam) => {
              const Icon = exam.icon;
              const colors = colorClasses[exam.color];

              return (
                <motion.div
                  key={exam.id}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  {/* Glow Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                  {/* Card Content */}
                  <div className={`relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border ${colors.border} transition-all duration-300 h-full flex flex-col`}>
                    <div className="flex items-start justify-between mb-6">
                      <h3 className="text-2xl font-bold text-white flex-1">{exam.title}</h3>
                      <div className={`w-12 h-12 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center flex-shrink-0 border ${colors.border}`}>
                        <Icon className={`w-6 h-6 ${colors.icon}`} />
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed flex-1">{exam.description}</p>

                    <div className="space-y-3 mt-auto">
                      <div className="flex items-center bg-slate-900/50 backdrop-blur-sm p-3 rounded-lg">
                        <span className="text-gray-400 text-sm mr-3">{t.englishCourses.requirement}</span>
                        <span className="text-white font-medium">{exam.requirement}</span>
                      </div>
                      <div className="flex items-center bg-slate-900/50 backdrop-blur-sm p-3 rounded-lg">
                        <span className="text-gray-400 text-sm mr-3">{t.englishCourses.program}</span>
                        <span className="text-white font-medium">{exam.schedule}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Bottom CTA Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-brand-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl p-12 rounded-3xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all text-center">
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <GraduationCap className="w-full h-full text-brand-500" />
            </motion.div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t.englishCourses.bottomTitle}
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {t.englishCourses.bottomDesc}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnglishCoursesSection;
