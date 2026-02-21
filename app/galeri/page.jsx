import GallerySection from '@/components/GallerySection'

export const metadata = {
  title: 'Galeri | Etkili Eğitim Kurumları',
  description: 'Etkili Eğitim Kurumları fotoğraf galerisi',
  keywords: 'galeri, fotoğraflar, etkili eğitim'
}

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <GallerySection />
    </div>
  )
}
