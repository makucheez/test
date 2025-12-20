'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Zap, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';
import { useRouter } from 'next/navigation';

const SpeedReadingPreview = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const router = useRouter();

  const highlights = [
    {
      icon: Zap,
      title: t.speedReading.benefitSpeed || "2-4x Hızlı Okuma",
      color: "text-yellow-400"
    },
    {
      icon: TrendingUp,
      title: t.speedReading.benefitSuccess || "Sınav Başarısı",
      color: "text-green-400"
    },
    {
      icon: Brain,
      title: t.speedReading.instructor || "Türkolog Yusuf Güler",
      color: "text-brand-400"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Top Divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent z-20"></div>

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-900 z-0"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-500/10 rounded-full blur-3xl animate-pulse z-0"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse z-0" style={{ animationDelay: '1s' }}></div>

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
              <span className="text-brand-500">{t.speedReading.title}</span>
              <br />
              {t.speedReading.titleSpan}
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {t.speedReading.subtitle}
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
                    <span className="text-lg text-gray-300 font-medium">{highlight.title}</span>
                  </motion.div>
                );
              })}
            </div>

            <Button
              onClick={() => router.push('/hizli-okuma')}
              className="bg-brand-500 hover:bg-brand-600 text-white px-8 py-6 rounded-lg text-lg font-semibold shadow-lg hover:shadow-brand-500/25 transition-all group"
            >
              {language === 'tr' ? 'Detaylı Bilgi' : 'Learn More'}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-brand-500/20 to-red-500/20 p-8 rounded-2xl border border-brand-500/30 backdrop-blur-sm"
          >
            <div className="bg-slate-800/50 p-6 rounded-xl mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">{t.speedReading.whatIs}</h3>
              <p className="text-gray-300 leading-relaxed">
                {t.speedReading.whatIsDesc1}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-1">2-4x</div>
                <div className="text-sm text-gray-300">{language === 'tr' ? 'Okuma Hızı' : 'Reading Speed'}</div>
              </div>
              <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-1">100%</div>
                <div className="text-sm text-gray-300">{language === 'tr' ? 'Anlama' : 'Comprehension'}</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeedReadingPreview;
