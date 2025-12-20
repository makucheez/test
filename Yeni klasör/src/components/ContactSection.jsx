'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, Building } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const ContactSection = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const t = useTranslation(language);

  const handleContact = (method) => {
    toast({
      title: `📞 ${t.contact.title}`,
      description: `${method} üzerinden bizimle iletişime geçebilirsiniz.`
    });
  };

  const contactInfo = [
    {
      icon: Building,
      title: t.contact.institutionName,
      info: t.contact.institutionValue,
      detail: t.contact.institutionDetail,
      color: 'text-brand-500'
    },
    {
      icon: MapPin,
      title: t.contact.address,
      info: t.contact.addressValue,
      detail: t.contact.addressDetail,
      color: 'text-red-500',
      link: 'https://maps.google.com/?q=Karanfil+2+Sokak+No:30/5-6+Kızılay+Ankara'
    },
    {
      icon: Mail,
      title: t.contact.email,
      info: 'yunuscanli0@hotmail.com',
      detail: t.contact.emailDetail,
      color: 'text-blue-500',
      link: 'mailto:yunuscanli0@hotmail.com'
    },
    {
      icon: Phone,
      title: t.contact.phone,
      info: t.contact.phoneValue,
      detail: t.contact.phoneDetail,
      color: 'text-green-500'
    },
    {
      icon: Clock,
      title: t.contact.hours,
      info: t.contact.hoursValue,
      detail: t.contact.hoursDetail,
      color: 'text-purple-500'
    },
    {
      icon: Globe,
      title: t.contact.website,
      info: 'www.yusufguler.com.tr',
      detail: t.contact.websiteDetail,
      color: 'text-cyan-500',
      link: 'https://www.yusufguler.com.tr'
    }
  ];

  const founders = t.contact.foundersList.map((founder, idx) => ({
    ...founder,
    title: idx === 2 ? t.contact.director : t.contact.founder
  }));

  return (
    <section id="contact" className="py-24 bg-slate-800">
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
            <span className="text-brand-500">{t.contact.title}</span> {t.contact.titleSpan}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-900 p-6 rounded-xl border border-brand-500/20 hover:border-brand-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-brand-500/10"
              >
                <div className="flex items-start">
                  <div className={`w-12 h-12 ${item.color} bg-opacity-10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${item.color} hover:underline font-medium block mb-1`}
                      >
                        {item.info}
                      </a>
                    ) : (
                      <p className="text-white font-medium mb-1">{item.info}</p>
                    )}
                    <p className="text-gray-400 text-sm">{item.detail}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            {t.contact.founders}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-brand-500/10 to-red-500/10 p-8 rounded-xl border border-brand-500/30 text-center"
              >
                <div className="w-20 h-20 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-3xl font-bold">
                  {founder.name.charAt(0)}
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{founder.name}</h4>
                <p className="text-brand-400 font-semibold mb-3">{founder.title}</p>
                <p className="text-gray-300 text-sm">{founder.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-8 rounded-xl border border-brand-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <MapPin className="w-8 h-8 text-brand-500 mr-3" />
              {t.contact.transportation}
            </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="text-white font-semibold mb-2">{t.contact.transportationTitle}</h4>
                <p className="leading-relaxed">
                  {t.contact.transportationDesc}
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">{t.contact.facilityTitle}</h4>
                <p className="leading-relaxed">
                  {t.contact.facilityDesc}
                </p>
              </div>
              <div className="pt-4">
                <a
                  href="https://maps.google.com/?q=Karanfil+2+Sokak+No:30/5-6+Kızılay+Ankara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <Button className="bg-brand-500 hover:bg-brand-600 text-white">
                    <MapPin className="w-4 h-4 mr-2" />
                    {t.contact.openMaps}
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-slate-900 p-8 rounded-xl border border-brand-500/20"
          >
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Mail className="w-8 h-8 text-brand-500 mr-3" />
              {t.contact.preEnrollment}
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="leading-relaxed">
                {t.contact.preEnrollmentDesc}
              </p>
              <div className="bg-slate-800 p-4 rounded-lg border border-brand-500/30">
                <p className="text-sm text-gray-400 mb-1">{t.contact.emailAddress}</p>
                <a
                  href="mailto:yunuscanli0@hotmail.com"
                  className="text-brand-400 hover:text-brand-300 font-semibold text-lg"
                >
                  yunuscanli0@hotmail.com
                </a>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-2">{t.contact.requiredInfo}</h4>
                <ul className="space-y-2 text-sm">
                  {t.contact.requiredInfoList.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-brand-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                onClick={() => handleContact('E-posta')}
                className="w-full bg-brand-500 hover:bg-brand-600 text-white py-6"
              >
                {t.contact.sendForm}
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-slate-900 p-10 rounded-xl border border-brand-500/30 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            {t.contact.services}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {t.contact.servicesList.map((service, idx) => (
              <div key={idx} className="bg-slate-800/50 p-4 rounded-lg">
                <p className="text-brand-400 font-semibold">{service}</p>
              </div>
            ))}
          </div>
          <p className="text-2xl font-bold text-white mb-2">
            {t.contact.servicesTagline1}
          </p>
          <p className="text-3xl font-bold text-brand-500">
            {t.contact.servicesTagline2}
          </p>
        </motion.div>

        {/* Payment Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-r from-brand-500/10 to-red-500/10 p-8 rounded-xl border border-brand-500/30 mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            {t.turkishCourses.payment}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">{t.turkishCourses.bank}</p>
              <p className="text-white font-bold text-lg">T.C. Ziraat Bankası</p>
              <p className="text-brand-400 text-sm mt-1">AKAY / ANKARA Şubesi</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">{t.turkishCourses.accountHolder}</p>
              <p className="text-white font-bold text-lg">YUNUS CANLI</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">{t.turkishCourses.accountNo}</p>
              <p className="text-white font-bold text-lg">5963671-5029 760</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-lg">
              <p className="text-gray-400 text-sm mb-2">IBAN</p>
              <p className="text-white font-bold text-base">TR48 0001 0007 6005 9636 7150 29</p>
              <p className="text-brand-400 text-sm mt-1">Para Birimi: USD</p>
            </div>
          </div>
          <p className="text-center text-gray-400 mt-6 text-sm">
            {t.turkishCourses.programFee} <strong className="text-brand-500">300 USD</strong> (Amerikan Doları)
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
