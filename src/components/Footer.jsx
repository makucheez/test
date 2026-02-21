'use client'

import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';
import Link from 'next/link';

const Footer = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);

  const quickLinks = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.about, href: '/hakkimizda' },
    { name: t.nav.turkishCourses, href: '/turkce-kurslari' },
    { name: t.nav.english, href: '/ingilizce' },
    { name: t.nav.speedReading, href: '/hizli-okuma' },
    { name: t.nav.gallery, href: '/galeri' },
    { name: t.nav.contact, href: '/iletisim' }
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t.contact.institutionValue}
            </h3>
            <p className="text-gray-400 text-sm mb-4 leading-relaxed">
              {t.contact.institutionDetail}
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              {language === 'tr'
                ? '25 yıllık deneyimimizle başarıya giden yolda yanınızdayız.'
                : 'With our 25 years of experience, we are with you on the road to success.'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {language === 'tr' ? 'Hızlı Bağlantılar' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-brand-500 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t.contact.title}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">{t.contact.addressValue}</p>
                  <p className="text-gray-500">{t.contact.addressDetail}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">{t.contact.phoneValue}</p>
                  <p className="text-gray-500">{t.contact.phoneDetail}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">{t.contact.emailDetail}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-brand-500 flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="text-gray-400">{t.contact.hoursValue}</p>
                  <p className="text-gray-500">{t.contact.hoursDetail}</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              {t.contact.services}
            </h3>
            <ul className="space-y-2">
              {t.contact.servicesList.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-brand-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-400 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} {t.contact.institutionValue}. {language === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}
            </p>
            <p className="text-gray-500 text-sm text-center md:text-right">
              {t.contact.servicesTagline1} <span className="text-brand-500 font-semibold">{t.contact.servicesTagline2}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
