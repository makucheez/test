'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, GraduationCap, CheckCircle, BookOpen, DollarSign, Globe2, Sparkles, Award, Briefcase, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const TurkishCoursesSection = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const handleEnroll = (courseName) => {
    toast({
      title: `🎓 ${t.turkishCourses.enrollToast}`,
      description: `${courseName} ${t.turkishCourses.enrollToastDesc}`
    });
  };

  const courses = t.turkishCourses.courses;

  const colorClasses = {
    orange: {
      gradient: 'from-brand-500/20 to-orange-600/20',
      border: 'border-brand-500/30 hover:border-brand-500/50',
      bg: 'bg-brand-500/10',
      text: 'text-brand-500',
      glow: 'from-brand-500/20 to-orange-600/20',
      badge: 'bg-brand-500/20 text-brand-400 border-brand-500/30'
    },
    blue: {
      gradient: 'from-blue-500/20 to-blue-600/20',
      border: 'border-blue-500/30 hover:border-blue-500/50',
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      glow: 'from-blue-500/20 to-blue-600/20',
      badge: 'bg-blue-500/20 text-blue-400 border-blue-500/30'
    },
    purple: {
      gradient: 'from-purple-500/20 to-purple-600/20',
      border: 'border-purple-500/30 hover:border-purple-500/50',
      bg: 'bg-purple-500/10',
      text: 'text-purple-500',
      glow: 'from-purple-500/20 to-purple-600/20',
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30'
    },
    red: {
      gradient: 'from-red-500/20 to-red-600/20',
      border: 'border-red-500/30 hover:border-red-500/50',
      bg: 'bg-red-500/10',
      text: 'text-red-500',
      glow: 'from-red-500/20 to-red-600/20',
      badge: 'bg-red-500/20 text-red-400 border-red-500/30'
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
    <section id="turkish-courses" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header with Gradient Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t.turkishCourses.title}{' '}
            <span className="bg-gradient-to-r from-brand-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {t.turkishCourses.titleSpan}
            </span>
          </h1>

          <div className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto space-y-3">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="leading-relaxed"
            >
              {t.turkishCourses.desc1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="leading-relaxed"
            >
              {t.turkishCourses.desc2}
            </motion.p>
          </div>
        </motion.div>

        {/* Courses Grid with Glassmorphism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          {courses.map((course) => {
            const colors = colorClasses[course.color];
            return (
              <motion.div
                key={course.id}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.01 }}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.glow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                {/* Card Content */}
                <div className={`relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border ${colors.border} transition-all duration-300 h-full flex flex-col`}>
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {course.title}
                      </h3>
                      <span className={`inline-flex items-center gap-2 px-4 py-2 ${colors.badge} rounded-full text-sm font-semibold border backdrop-blur-sm`}>
                        <Award className="w-4 h-4" />
                        {course.level}
                      </span>
                    </div>
                    <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-xl flex items-center justify-center flex-shrink-0 border ${colors.border} shadow-lg`}>
                      <Briefcase className={`w-7 h-7 ${colors.text}`} />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-8 leading-relaxed text-base">
                    {course.description}
                  </p>

                  {/* Course Info - Grid Layout */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{t.turkishCourses.duration}</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{course.duration}</span>
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{t.turkishCourses.quota}</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{course.students}</span>
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{t.turkishCourses.schedule}</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{course.schedule}</span>
                    </div>
                    <div className="bg-slate-900/50 backdrop-blur-sm p-4 rounded-xl border border-slate-700/50">
                      <div className="flex items-center gap-2 mb-2">
                        <DollarSign className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{t.turkishCourses.price}</span>
                      </div>
                      <span className="text-white font-semibold text-sm">{course.price}</span>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className={`bg-gradient-to-br ${colors.gradient} backdrop-blur-sm p-6 rounded-2xl border ${colors.border} mt-auto`}>
                    <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                      <BookOpen className={`w-5 h-5 ${colors.text}`} />
                      {t.turkishCourses.courseContent}
                    </h4>
                    <motion.ul
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      {course.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                          className="flex items-start text-gray-200 text-sm group/feature cursor-default"
                        >
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mr-3 mt-0.5 bg-slate-800/50 backdrop-blur-sm border ${colors.border}`}>
                            <CheckCircle className={`w-3 h-3 ${colors.text}`} />
                          </div>
                          <span className="group-hover/feature:text-white transition-colors">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Important Info Box with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-brand-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl p-10 md:p-12 rounded-3xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all">
            <div className="flex items-center justify-center gap-3 mb-8">
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Sparkles className="w-8 h-8 text-brand-500" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white text-center">
                {t.turkishCourses.importantInfo}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-brand-500/20"
              >
                <h4 className="text-brand-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  {t.turkishCourses.requirements}
                </h4>
                <ul className="space-y-3">
                  {t.turkishCourses.requirementsList.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-300 text-sm cursor-default"
                    >
                      <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Policies */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20"
              >
                <h4 className="text-purple-400 font-bold text-xl mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  {t.turkishCourses.policies}
                </h4>
                <ul className="space-y-3">
                  {t.turkishCourses.policiesList.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-300 text-sm cursor-default"
                    >
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TurkishCoursesSection;
