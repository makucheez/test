'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Zap, Target, TrendingUp, Eye, Clock, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="speed-reading" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 z-0"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute top-1/3 right-20 w-80 h-80 bg-yellow-500/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-brand-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {t.speedReading.title}
            </span>
            <br />
            <span className="text-white">{t.speedReading.titleSpan}</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            {t.speedReading.subtitle}
          </p>

          <a
            href="https://www.yusufguler.com.tr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <span>www.yusufguler.com.tr</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Featured Card - What is Speed Reading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-brand-500/30 hover:border-brand-500/50 transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-brand-500 to-red-500 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">{t.speedReading.whatIs}</h3>
            </div>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>{t.speedReading.whatIsDesc1}</p>
              <p>{t.speedReading.whatIsDesc2}</p>

              <div className="bg-gradient-to-r from-brand-500/10 to-red-500/10 p-6 rounded-2xl border border-brand-500/30 mt-6">
                <p className="text-xl font-semibold text-white mb-2">{t.speedReading.foundation}</p>
                <p className="text-gray-300">{t.speedReading.foundationDesc}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Problems vs Solutions - Bento Grid Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Problems Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-red-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-red-500/30 hover:border-red-500/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{t.speedReading.problems}</h3>
              </div>

              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>{problem}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Solutions Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-green-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300 h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-white">{t.speedReading.solutions}</h3>
              </div>

              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{solution}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Benefits - Interactive Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-12 text-center">
            <span className="bg-gradient-to-r from-brand-500 to-yellow-500 bg-clip-text text-transparent">
              {t.speedReading.benefits}
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="relative group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-500/10 to-purple-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative bg-slate-800/70 backdrop-blur-xl p-6 rounded-2xl border border-slate-700/50 group-hover:border-brand-500/50 transition-all duration-300 h-full">
                    <div className="w-14 h-14 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`w-7 h-7 ${benefit.color}`} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Key Facts - Side by Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-xl p-8 rounded-3xl border border-blue-500/30 hover:border-blue-500/50 transition-all duration-300"
          >
            <h4 className="text-2xl font-bold text-white mb-4">{t.speedReading.visionTitle}</h4>
            <p className="text-gray-300 mb-4 leading-relaxed">{t.speedReading.visionDesc1}</p>
            <p className="text-brand-400 font-semibold text-lg">{t.speedReading.visionDesc2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-8 rounded-3xl border border-green-500/30 hover:border-green-500/50 transition-all duration-300"
          >
            <h4 className="text-2xl font-bold text-white mb-4">{t.speedReading.worldTitle}</h4>
            <p className="text-gray-300 mb-4 leading-relaxed">{t.speedReading.worldDesc1}</p>
            <p className="text-gray-300 leading-relaxed">{t.speedReading.worldDesc2}</p>
          </motion.div>
        </div>

        {/* Target Audience - Modern Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-slate-800/50 backdrop-blur-xl p-10 rounded-3xl border border-brand-500/30 mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-10 text-center">
            {t.speedReading.whoFor}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { emoji: '📚', title: t.speedReading.students, desc: t.speedReading.studentsDesc, color: 'brand' },
              { emoji: '💼', title: t.speedReading.professionals, desc: t.speedReading.professionalsDesc, color: 'blue' },
              { emoji: '📖', title: t.speedReading.readers, desc: t.speedReading.readersDesc, color: 'purple' }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-${item.color}-500/20 rounded-3xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{item.emoji}</span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA - Premium Design */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/30 to-red-500/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-gradient-to-r from-brand-500/10 to-red-500/10 backdrop-blur-xl p-12 rounded-3xl border border-brand-500/30 text-center">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Clock className="w-20 h-20 text-brand-500 mx-auto mb-6" />
            </motion.div>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {t.speedReading.invest}
            </h3>

            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t.speedReading.investDesc}
            </p>

            <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
              {[
                t.speedReading.benefitLifelong,
                t.speedReading.benefitSpeed,
                t.speedReading.benefitSuccess
              ].map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-full border border-green-500/30"
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={handleEnroll}
                className="bg-gradient-to-r from-brand-500 to-red-500 hover:from-brand-600 hover:to-red-600 text-white px-12 py-7 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-brand-500/50 transition-all duration-300"
              >
                {t.speedReading.enroll}
                <ArrowRight className="w-6 h-6 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedReadingSection;
