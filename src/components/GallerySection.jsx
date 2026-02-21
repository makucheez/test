'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { useTranslation } from '@/locales/translations'

const images = [1,2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,101].map((n) => ({
  src: `/${n}.jpeg`,
  alt: `Etkili Eğitim Kurumları - Fotoğraf ${n}`
}))

const GallerySection = () => {
  const { language } = useLanguage()
  const t = useTranslation(language)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (index) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)

  const prev = () =>
    setLightboxIndex((i) => (i - 1 + images.length) % images.length)
  const next = () =>
    setLightboxIndex((i) => (i + 1) % images.length)

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prev()
    if (e.key === 'ArrowRight') next()
    if (e.key === 'Escape') closeLightbox()
  }

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {t.gallery.title}{' '}
            <span className="text-brand-500">{t.gallery.titleSpan}</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group shadow-md"
              onClick={() => openLightbox(index)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-2xl" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white hover:text-brand-400 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X size={36} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-4 text-white hover:text-brand-400 transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); prev() }}
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl max-h-[85vh] px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].alt}
                className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
              <p className="text-center text-slate-400 text-sm mt-3">
                {lightboxIndex + 1} / {images.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              className="absolute right-4 text-white hover:text-brand-400 transition-colors z-10 p-2"
              onClick={(e) => { e.stopPropagation(); next() }}
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GallerySection
