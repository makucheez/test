'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Calendar, GraduationCap, CheckCircle, BookOpen, DollarSign } from 'lucide-react';
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
      border: 'border-brand-500/20 hover:border-brand-500/40',
      bg: 'bg-brand-500/10',
      text: 'text-brand-500',
      button: 'bg-brand-500 hover:bg-brand-600',
      shadow: 'hover:shadow-brand-500/10'
    },
    blue: {
      border: 'border-blue-500/20 hover:border-blue-500/40',
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      button: 'bg-blue-500 hover:bg-blue-600',
      shadow: 'hover:shadow-blue-500/10'
    },
    purple: {
      border: 'border-purple-500/20 hover:border-purple-500/40',
      bg: 'bg-purple-500/10',
      text: 'text-purple-500',
      button: 'bg-purple-500 hover:bg-purple-600',
      shadow: 'hover:shadow-purple-500/10'
    },
    red: {
      border: 'border-red-500/20 hover:border-red-500/40',
      bg: 'bg-red-500/10',
      text: 'text-red-500',
      button: 'bg-red-500 hover:bg-red-600',
      shadow: 'hover:shadow-red-500/10'
    }
  };

  return (
    <section id="turkish-courses" className="py-24 bg-slate-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.turkishCourses.title} <span className="text-brand-500">{t.turkishCourses.titleSpan}</span>
          </h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto space-y-3">
            <p className="leading-relaxed">
              {t.turkishCourses.desc1}
            </p>
            <p className="leading-relaxed">
              {t.turkishCourses.desc2}
            </p>
          </div>
        </motion.div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => {
            const colors = colorClasses[course.color];
            return (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-slate-800 p-8 rounded-xl border ${colors.border} ${colors.shadow} transition-all duration-300 hover:shadow-lg`}
              >
                {/* Course Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {course.title}
                    </h3>
                    <span className={`inline-block px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm font-medium`}>
                      {course.level}
                    </span>
                  </div>
                  <div className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <GraduationCap className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {course.description}
                </p>

                {/* Course Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-slate-700">
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Clock className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-400">{t.turkishCourses.duration}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{course.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Users className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-400">{t.turkishCourses.quota}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{course.students}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-400">{t.turkishCourses.schedule}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{course.schedule}</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center mb-2">
                      <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
                      <span className="text-sm text-gray-400">{t.turkishCourses.price}</span>
                    </div>
                    <span className="text-white font-medium text-sm">{course.price}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-brand-500" />
                    {t.turkishCourses.courseContent}
                  </h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className={`w-4 h-4 mr-2 mt-0.5 flex-shrink-0 ${colors.text}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Important Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 p-8 rounded-xl border border-brand-500/20 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t.turkishCourses.importantInfo}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
            <div>
              <h4 className="text-brand-500 font-semibold mb-2">{t.turkishCourses.requirements}</h4>
              <ul className="space-y-2 text-sm">
                {t.turkishCourses.requirementsList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-brand-500 font-semibold mb-2">{t.turkishCourses.policies}</h4>
              <ul className="space-y-2 text-sm">
                {t.turkishCourses.policiesList.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TurkishCoursesSection;
