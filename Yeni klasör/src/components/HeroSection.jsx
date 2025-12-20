'use client'

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';
import QuickInfoSection from './QuickInfoSection';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://horizons-cdn.hostinger.com/4bb107bf-15c8-48b4-b8a0-a76b2ea6c898/8f39cacad5a34eb9a6fe51a26f77bb6d.jpg"
          alt="Etkili Eğitim Kurumları"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            {t.hero.title1}
            <span className="block text-brand-500 mt-2">{t.hero.title2}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
        </motion.div>
      </div>

      {/* Quick Info Section */}
      <QuickInfoSection />
    </section>
  );
};

export default HeroSection;