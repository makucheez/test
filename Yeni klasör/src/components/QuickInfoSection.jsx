'use client'

import { motion } from 'framer-motion';
import { BookOpen, Globe, GraduationCap, Zap } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const QuickInfoSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const services = [
    {
      icon: BookOpen,
      title: t.quickInfo.services.turkish,
      color: 'text-brand-500',
      bgColor: 'bg-brand-500/10'
    },
    {
      icon: Globe,
      title: t.quickInfo.services.english,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: GraduationCap,
      title: t.quickInfo.services.academic,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      icon: Zap,
      title: t.quickInfo.services.speedReading,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <section className="absolute bottom-0 left-0 right-0 z-20 pb-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-slate-900/90 backdrop-blur-md rounded-2xl border border-brand-500/30 p-6 shadow-2xl">
            <h3 className="text-2xl font-bold text-white text-center mb-6">
              {t.quickInfo.title} <span className="text-brand-500">{t.quickInfo.titleSpan}</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="bg-slate-800/80 p-5 rounded-xl border border-slate-700 hover:border-brand-500/40 transition-all duration-300 text-center"
                  >
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <h4 className="text-white font-semibold text-sm">{service.title}</h4>
                  </motion.div>
                );
              })}
            </div>

            <p className="text-gray-300 text-center mt-6 text-sm">
              {t.quickInfo.subtitle}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickInfoSection;
