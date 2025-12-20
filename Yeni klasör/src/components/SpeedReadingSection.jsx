'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Zap, Target, TrendingUp, Eye, Clock, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const SpeedReadingSection = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const handleEnroll = () => {
    toast({
      title: `📚 ${t.speedReading.title}`,
      description: `${t.speedReading.title} ${t.turkishCourses.enrollToastDesc}`
    });
  };

  const iconMapping = [Zap, Brain, Target, TrendingUp, Eye, BookOpen];

  const benefits = t.speedReading.benefitsList.map((benefit, idx) => ({
    ...benefit,
    icon: iconMapping[idx]
  }));

  const problems = t.speedReading.problemsList;

  const solutions = t.speedReading.solutionsList;

  return (
    <section id="speed-reading" className="py-24 bg-slate-900">
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
            <span className="text-brand-500">{t.speedReading.title}</span> {t.speedReading.titleSpan}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            {t.speedReading.subtitle}
          </p>
          <p className="text-lg text-brand-400 font-semibold">
            {t.speedReading.instructor}
          </p>
          <a href="https://www.yusufguler.com.tr" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 text-sm">
            www.yusufguler.com.tr
          </a>
        </motion.div>

        {/* What is Speed Reading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 p-8 rounded-xl border border-brand-500/20 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
            <BookOpen className="w-8 h-8 mr-3 text-brand-500" />
            {t.speedReading.whatIs}
          </h3>
          <div className="space-y-4 text-gray-300">
            <p className="leading-relaxed">
              {t.speedReading.whatIsDesc1}
            </p>
            <p className="leading-relaxed">
              {t.speedReading.whatIsDesc2}
            </p>
            <div className="bg-gradient-to-r from-brand-500/10 to-red-500/10 p-6 rounded-lg border border-brand-500/30">
              <p className="text-lg font-semibold text-white mb-2">{t.speedReading.foundation}</p>
              <p>{t.speedReading.foundationDesc}</p>
            </div>
          </div>
        </motion.div>

        {/* Problems vs Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Problems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-red-500/10 p-8 rounded-xl border border-red-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">⚠️</span>
              </div>
              {t.speedReading.problems}
            </h3>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-green-500/10 p-8 rounded-xl border border-green-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-2xl">✅</span>
              </div>
              {t.speedReading.solutions}
            </h3>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Benefits Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t.speedReading.benefits}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-slate-800 p-6 rounded-xl border border-brand-500/20 hover:border-brand-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10"
                >
                  <Icon className={`w-10 h-10 ${benefit.color} mb-4`} />
                  <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Facts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold text-white mb-4">{t.speedReading.visionTitle}</h4>
            <p className="text-gray-300 mb-4">
              {t.speedReading.visionDesc1}
            </p>
            <p className="text-brand-400 font-semibold">
              {t.speedReading.visionDesc2}
            </p>
          </div>

          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-8 rounded-xl border border-green-500/30">
            <h4 className="text-xl font-bold text-white mb-4">{t.speedReading.worldTitle}</h4>
            <p className="text-gray-300 mb-4">
              {t.speedReading.worldDesc1}
            </p>
            <p className="text-gray-300 mb-2">
              {t.speedReading.worldDesc2}
            </p>
          </div>
        </motion.div>

        {/* Target Audience */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-800 p-8 rounded-xl border border-brand-500/20 mb-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t.speedReading.whoFor}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📚</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{t.speedReading.students}</h4>
              <p className="text-gray-400 text-sm">{t.speedReading.studentsDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💼</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{t.speedReading.professionals}</h4>
              <p className="text-gray-400 text-sm">{t.speedReading.professionalsDesc}</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📖</span>
              </div>
              <h4 className="text-white font-semibold mb-2">{t.speedReading.readers}</h4>
              <p className="text-gray-400 text-sm">{t.speedReading.readersDesc}</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-brand-500/10 to-red-500/10 p-10 rounded-xl border border-brand-500/30 text-center"
        >
          <Clock className="w-16 h-16 text-brand-500 mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-white mb-4">
            {t.speedReading.invest}
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            {t.speedReading.investDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>{t.speedReading.benefitLifelong}</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>{t.speedReading.benefitSpeed}</span>
            </div>
            <div className="flex items-center text-green-400">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>{t.speedReading.benefitSuccess}</span>
            </div>
          </div>
          <Button
            onClick={handleEnroll}
            className="bg-brand-500 hover:bg-brand-600 text-white px-10 py-7 rounded-lg text-lg font-semibold shadow-lg hover:shadow-brand-500/25 transition-all"
          >
            {t.speedReading.enroll}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedReadingSection;
