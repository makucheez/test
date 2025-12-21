'use client'

import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe, MapPin, BookMarked, Sparkles, Zap, Target, TrendingUp, Shield, Star, Rocket } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      icon: Rocket,
      title: t.about.features.experience.title,
      description: t.about.features.experience.desc,
      color: 'from-blue-500/20 to-blue-600/20',
      iconColor: 'text-blue-400',
      borderColor: 'border-blue-500/30 hover:border-blue-500/50'
    },
    {
      icon: Users,
      title: t.about.features.smallGroups.title,
      description: t.about.features.smallGroups.desc,
      color: 'from-purple-500/20 to-purple-600/20',
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/30 hover:border-purple-500/50'
    },
    {
      icon: Star,
      title: t.about.features.diverse.title,
      description: t.about.features.diverse.desc,
      color: 'from-brand-500/20 to-orange-600/20',
      iconColor: 'text-brand-400',
      borderColor: 'border-brand-500/30 hover:border-brand-500/50'
    },
    {
      icon: Globe,
      title: t.about.features.abroad.title,
      description: t.about.features.abroad.desc,
      color: 'from-green-500/20 to-green-600/20',
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/30 hover:border-green-500/50'
    },
    {
      icon: Zap,
      title: t.about.features.speedReading.title,
      description: t.about.features.speedReading.desc,
      color: 'from-red-500/20 to-red-600/20',
      iconColor: 'text-red-400',
      borderColor: 'border-red-500/30 hover:border-red-500/50'
    },
    {
      icon: MapPin,
      title: t.about.features.location.title,
      description: t.about.features.location.desc,
      color: 'from-cyan-500/20 to-cyan-600/20',
      iconColor: 'text-cyan-400',
      borderColor: 'border-cyan-500/30 hover:border-cyan-500/50'
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
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
    <section id="about" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-10 left-20 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-brand-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
              {t.about.title}
            </span>{' '}
            <span className="text-white">{t.about.titleSpan}</span>
          </h1>

          {/* Description Cards */}
          <div className="max-w-5xl mx-auto space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.desc1 }} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-purple-500/30 group-hover:border-purple-500/50 transition-all">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">{t.about.desc2}</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-brand-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-blue-500/30 group-hover:border-blue-500/50 transition-all">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.desc3 }} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Features Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-8 h-8 text-brand-500" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {language === 'tr' ? 'Özelliklerimiz' : 'Our Features'}
            </h2>
          </div>
        </motion.div>

        {/* Features Grid - Bento Style */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -12, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                {/* Card Content */}
                <div className={`relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border ${feature.borderColor} transition-all duration-300 h-full`}>
                  {/* Icon with Gradient Background */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6 border ${feature.borderColor} shadow-lg`}
                  >
                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {feature.description}
                  </p>

                  {/* Decorative Element */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl p-12 rounded-3xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-16 h-16 mx-auto mb-6"
            >
              <Award className="w-full h-full text-brand-500" />
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === 'tr' ? 'Başarınız İçin Buradayız' : 'We Are Here For Your Success'}
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              {language === 'tr'
                ? 'Modern eğitim teknikleri ve deneyimli eğitmen kadromuzla her zaman yanınızdayız.'
                : 'We are always with you with modern teaching techniques and experienced instructors.'}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
