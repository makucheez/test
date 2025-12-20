'use client'

import { motion } from 'framer-motion';
import { BookOpen, Users, Award, Globe, MapPin, BookMarked } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const AboutSection = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const features = [
    {
      icon: BookOpen,
      title: t.about.features.experience.title,
      description: t.about.features.experience.desc
    },
    {
      icon: Users,
      title: t.about.features.smallGroups.title,
      description: t.about.features.smallGroups.desc
    },
    {
      icon: Award,
      title: t.about.features.diverse.title,
      description: t.about.features.diverse.desc
    },
    {
      icon: Globe,
      title: t.about.features.abroad.title,
      description: t.about.features.abroad.desc
    },
    {
      icon: BookMarked,
      title: t.about.features.speedReading.title,
      description: t.about.features.speedReading.desc
    },
    {
      icon: MapPin,
      title: t.about.features.location.title,
      description: t.about.features.location.desc
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-brand-500">{t.about.title}</span> {t.about.titleSpan}
          </h2>
          <div className="text-lg text-gray-300 max-w-4xl mx-auto space-y-4">
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.desc1 }} />
            <p className="leading-relaxed">{t.about.desc2}</p>
            <p className="leading-relaxed" dangerouslySetInnerHTML={{ __html: t.about.desc3 }} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-900 p-8 rounded-xl border border-brand-500/20 hover:border-brand-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10"
              >
                <div className="w-14 h-14 bg-brand-500/10 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-brand-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
