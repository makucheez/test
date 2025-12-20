'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe, Clock, Building, Sparkles, Send, CreditCard, MessageCircle, Headphones, Briefcase } from 'lucide-react';
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
      icon: Briefcase,
      title: t.contact.institutionName,
      info: t.contact.institutionValue,
      detail: t.contact.institutionDetail,
      color: {
        text: 'text-brand-400',
        gradient: 'from-brand-500/20 to-orange-600/20',
        border: 'border-brand-500/30 hover:border-brand-500/50'
      }
    },
    {
      icon: MapPin,
      title: t.contact.address,
      info: t.contact.addressValue,
      detail: t.contact.addressDetail,
      color: {
        text: 'text-red-400',
        gradient: 'from-red-500/20 to-red-600/20',
        border: 'border-red-500/30 hover:border-red-500/50'
      },
      link: 'https://maps.google.com/?q=Karanfil+2+Sokak+No:30/5-6+Kızılay+Ankara'
    },
    {
      icon: Mail,
      title: t.contact.email,
      info: 'yunuscanli0@hotmail.com',
      detail: t.contact.emailDetail,
      color: {
        text: 'text-blue-400',
        gradient: 'from-blue-500/20 to-blue-600/20',
        border: 'border-blue-500/30 hover:border-blue-500/50'
      },
      link: 'mailto:yunuscanli0@hotmail.com'
    },
    {
      icon: Phone,
      title: t.contact.phone,
      info: t.contact.phoneValue,
      detail: t.contact.phoneDetail,
      color: {
        text: 'text-green-400',
        gradient: 'from-green-500/20 to-green-600/20',
        border: 'border-green-500/30 hover:border-green-500/50'
      }
    },
    {
      icon: Clock,
      title: t.contact.hours,
      info: t.contact.hoursValue,
      detail: t.contact.hoursDetail,
      color: {
        text: 'text-purple-400',
        gradient: 'from-purple-500/20 to-purple-600/20',
        border: 'border-purple-500/30 hover:border-purple-500/50'
      }
    },
    {
      icon: Globe,
      title: t.contact.website,
      info: 'www.yusufguler.com.tr',
      detail: t.contact.websiteDetail,
      color: {
        text: 'text-cyan-400',
        gradient: 'from-cyan-500/20 to-cyan-600/20',
        border: 'border-cyan-500/30 hover:border-cyan-500/50'
      },
      link: 'https://www.yusufguler.com.tr'
    }
  ];

  const founders = t.contact.foundersList.map((founder, idx) => ({
    ...founder,
    title: idx === 2 ? t.contact.director : t.contact.founder
  }));

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-brand-500/10 backdrop-blur-sm px-6 py-3 rounded-full border border-brand-500/30 mb-6"
          >
            <MessageCircle className="w-5 h-5 text-brand-400" />
            <span className="text-brand-400 font-semibold">
              {language === 'tr' ? 'İletişim' : 'Contact'}
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-brand-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              {t.contact.title}
            </span>{' '}
            <span className="text-white">{t.contact.titleSpan}</span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </motion.div>

        {/* Contact Info Grid with Glassmorphism */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
        >
          {contactInfo.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group cursor-pointer"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}></div>

                {/* Card Content */}
                <div className={`relative bg-slate-800/50 backdrop-blur-xl p-6 rounded-2xl border ${item.color.border} transition-all duration-300 h-full`}>
                  <div className="flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`w-14 h-14 bg-gradient-to-br ${item.color.gradient} rounded-xl flex items-center justify-center flex-shrink-0 border ${item.color.border} shadow-lg`}
                    >
                      <Icon className={`w-7 h-7 ${item.color.text}`} />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                      {item.link ? (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`${item.color.text} hover:underline font-semibold block mb-2`}
                        >
                          {item.info}
                        </a>
                      ) : (
                        <p className="text-white font-semibold mb-2">{item.info}</p>
                      )}
                      <p className="text-gray-400 text-sm leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Founders Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-12">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-8 h-8 text-brand-500" />
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {t.contact.founders}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 rounded-2xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all text-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-24 h-24 bg-gradient-to-br from-brand-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-4xl font-bold shadow-lg shadow-brand-500/30"
                  >
                    {founder.name.charAt(0)}
                  </motion.div>
                  <h4 className="text-2xl font-bold text-white mb-2">{founder.name}</h4>
                  <p className="text-brand-400 font-semibold mb-3 text-sm">{founder.title}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{founder.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Map and Additional Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* Location Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-brand-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-red-500/30 group-hover:border-red-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-600/20 rounded-xl flex items-center justify-center border border-red-500/30">
                  <MapPin className="w-6 h-6 text-red-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t.contact.transportation}
                </h3>
              </div>

              <div className="space-y-6 text-gray-300">
                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20">
                  <h4 className="text-white font-bold mb-3 text-lg">{t.contact.transportationTitle}</h4>
                  <p className="leading-relaxed">
                    {t.contact.transportationDesc}
                  </p>
                </div>
                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-red-500/20">
                  <h4 className="text-white font-bold mb-3 text-lg">{t.contact.facilityTitle}</h4>
                  <p className="leading-relaxed">
                    {t.contact.facilityDesc}
                  </p>
                </div>
                <div className="pt-2">
                  <a
                    href="https://maps.google.com/?q=Karanfil+2+Sokak+No:30/5-6+Kızılay+Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full"
                  >
                    <Button className="w-full bg-gradient-to-r from-red-500 to-brand-500 hover:from-red-600 hover:to-brand-600 text-white py-6 text-base font-semibold shadow-lg shadow-red-500/20">
                      <MapPin className="w-5 h-5 mr-2" />
                      {t.contact.openMaps}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Contact Form Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-blue-500/30 group-hover:border-blue-500/50 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl flex items-center justify-center border border-blue-500/30">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {t.contact.preEnrollment}
                </h3>
              </div>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-base">
                  {t.contact.preEnrollmentDesc}
                </p>

                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm p-6 rounded-xl border border-blue-500/30">
                  <p className="text-sm text-gray-400 mb-2">{t.contact.emailAddress}</p>
                  <a
                    href="mailto:yunuscanli0@hotmail.com"
                    className="text-blue-400 hover:text-blue-300 font-bold text-xl break-all"
                  >
                    yunuscanli0@hotmail.com
                  </a>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20">
                  <h4 className="text-white font-bold mb-4 text-lg">{t.contact.requiredInfo}</h4>
                  <ul className="space-y-3">
                    {t.contact.requiredInfoList.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start text-gray-300"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => handleContact('E-posta')}
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white py-6 text-base font-semibold shadow-lg shadow-blue-500/20"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t.contact.sendForm}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Services Summary */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl p-10 md:p-12 rounded-3xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all">
            <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-10">
              {t.contact.services}
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
              {t.contact.servicesList.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="bg-slate-900/50 backdrop-blur-sm p-5 rounded-xl border border-brand-500/20 hover:border-brand-500/40 transition-all"
                >
                  <p className="text-brand-400 font-bold text-center">{service}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center space-y-3">
              <p className="text-2xl md:text-3xl font-bold text-white">
                {t.contact.servicesTagline1}
              </p>
              <p className="text-3xl md:text-4xl font-bold text-brand-500">
                {t.contact.servicesTagline2}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Payment Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
          <div className="relative bg-slate-800/50 backdrop-blur-xl p-10 md:p-12 rounded-3xl border border-green-500/30 group-hover:border-green-500/50 transition-all">
            <div className="flex items-center justify-center gap-3 mb-10">
              <motion.div
                animate={{ rotate: [0, 15, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <CreditCard className="w-8 h-8 text-green-400" />
              </motion.div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                {t.turkishCourses.payment}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 text-center"
              >
                <p className="text-gray-400 text-sm mb-3">{t.turkishCourses.bank}</p>
                <p className="text-white font-bold text-xl mb-1">T.C. Ziraat Bankası</p>
                <p className="text-green-400 text-sm">AKAY / ANKARA Şubesi</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 text-center"
              >
                <p className="text-gray-400 text-sm mb-3">{t.turkishCourses.accountHolder}</p>
                <p className="text-white font-bold text-xl">YUNUS CANLI</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 text-center"
              >
                <p className="text-gray-400 text-sm mb-3">{t.turkishCourses.accountNo}</p>
                <p className="text-white font-bold text-xl">5963671-5029 760</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-green-500/20 text-center"
              >
                <p className="text-gray-400 text-sm mb-3">IBAN</p>
                <p className="text-white font-bold text-base md:text-lg break-all">TR48 0001 0007 6005 9636 7150 29</p>
                <p className="text-green-400 text-sm mt-2">Para Birimi: USD</p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-sm p-6 rounded-xl border border-green-500/30 text-center">
              <p className="text-gray-300 text-lg">
                {t.turkishCourses.programFee}{' '}
                <strong className="text-green-400 text-2xl font-bold">300 USD</strong>{' '}
                <span className="text-gray-400">(Amerikan Doları)</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
