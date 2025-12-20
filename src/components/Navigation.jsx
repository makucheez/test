'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/locales/translations'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslation(language)

  const menuItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.turkishCourses, href: '/turkce-kurslari' },
    { name: t.nav.english, href: '/ingilizce' },
    { name: t.nav.speedReading, href: '/hizli-okuma' },
    { name: t.nav.about, href: '/hakkimizda' },
    { name: t.nav.contact, href: '/iletisim' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-500 border-b border-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/">
              <img
                src="/logo.png"
                alt="Etkili Eğitim Kurumları Logo"
                className="h-16 w-auto cursor-pointer"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-900 hover:text-white transition-colors duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Language Switcher Desktop */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-slate-900 hover:text-white transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-black/10"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5" />
              <span className="uppercase font-bold">{language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-white transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden py-4 border-t border-black/20"
          >
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-slate-900 hover:text-white transition-colors duration-300 font-medium py-3 px-4 hover:bg-black/10 rounded-lg"
              >
                {item.name}
              </Link>
            ))}

            {/* Language Switcher Mobile */}
            <button
              onClick={() => {
                toggleLanguage()
                setIsOpen(false)
              }}
              className="w-full flex items-center space-x-2 text-slate-900 hover:text-white transition-colors duration-300 font-medium py-3 px-4 hover:bg-black/10 rounded-lg"
            >
              <Globe className="w-5 h-5" />
              <span>{language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}</span>
            </button>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
