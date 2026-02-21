'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/locales/translations'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslation(language)

  const menuItems = [
    { name: t.nav.home, href: '/' },
    { name: t.nav.turkishCourses, href: '/turkce-kurslari' },
    { name: t.nav.english, href: '/ingilizce' },
    { name: t.nav.speedReading, href: '/hizli-okuma' },
    { name: t.nav.about, href: '/hakkimizda' },
    { name: t.nav.blog, href: '/blog' },
    { name: t.nav.gallery, href: '/galeri' },
    { name: t.nav.contact, href: '/iletisim' }
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-500/95 backdrop-blur-xl border-b border-black/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center z-10"
          >
            <Link href="/" className="relative group">
              <img
                src="/logo.png"
                alt="Etkili Eğitim Kurumları Logo"
                className="h-14 sm:h-16 w-auto cursor-pointer transition-transform duration-300 group-hover:scale-105"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden lg:flex items-center space-x-1"
          >
            {menuItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative px-4 py-2 rounded-xl font-semibold transition-all duration-300
                    ${isActive
                      ? 'text-white bg-white/20 shadow-lg'
                      : 'text-slate-900 hover:text-white hover:bg-white/10'
                    }
                  `}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/20 rounded-xl -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}

            {/* Language Switcher Desktop */}
            <button
              onClick={toggleLanguage}
              className="ml-2 flex items-center gap-2 text-slate-900 hover:text-white transition-all duration-300 font-semibold px-4 py-2 rounded-xl hover:bg-white/10 group"
              aria-label="Change language"
            >
              <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span className="uppercase font-bold">{language === 'tr' ? 'EN' : 'TR'}</span>
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-2 text-slate-900 hover:text-white transition-colors duration-300 hover:bg-white/10 rounded-lg"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-black/20">
                {menuItems.map((item, index) => {
                  const isActive = pathname === item.href
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`
                          block font-semibold py-3 px-4 rounded-xl mb-1 transition-all duration-300
                          ${isActive
                            ? 'text-white bg-white/20 shadow-md'
                            : 'text-slate-900 hover:text-white hover:bg-white/10'
                          }
                        `}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          {isActive && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-2 h-2 bg-white rounded-full"
                            />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}

                {/* Language Switcher Mobile */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: menuItems.length * 0.05 }}
                  onClick={() => {
                    toggleLanguage()
                    setIsOpen(false)
                  }}
                  className="w-full flex items-center gap-2 text-slate-900 hover:text-white transition-all duration-300 font-semibold py-3 px-4 hover:bg-white/10 rounded-xl mt-2 border-t border-black/10 pt-4"
                >
                  <Globe className="w-5 h-5" />
                  <span>{language === 'tr' ? 'Switch to English' : 'Türkçe\'ye Geç'}</span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navigation
