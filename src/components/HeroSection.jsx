'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const HeroSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80', // Öğrenciler çalışıyor
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&q=80', // Kitaplar ve çalışma masası
    'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1920&q=80', // Sınıf ortamı
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80', // Öğrenciler grup çalışması
    'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&q=80'  // Kitap okuma
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="home" className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt="Etkili Eğitim Kurumları"
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? 'bg-brand-500 w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
    </section>
  );
};

export default HeroSection;