import ContactSection from '@/components/ContactSection'

export const metadata = {
  title: 'İletişim - Etkili Eğitim Kurumları',
  description: 'Karanfil 2 Sokak No:30/5-6 Kızılay/Ankara adresinde bulunan kurumumuzla iletişime geçin. Telefon: Bilgi için arayın, Email: yunuscanli0@hotmail.com',
  keywords: 'Etkili Eğitim iletişim, Kızılay dil kursu adres, Ankara eğitim kurumu telefon, ön kayıt formu',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  )
}
