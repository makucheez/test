# Component Çeviri Güncelleme Rehberi

Kalan componentleri güncellemek için her dosyanın başına şunları ekleyin:

## 1. TurkishCoursesSection.jsx

Dosya başına ekleyin:
```javascript
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

// Component içinde:
const { language } = useLanguage();
const t = useTranslation(language);
```

Güncellenecek metinler:
- Line 12: `title: "🎓 Kayıt Talebi"` → `title: t.turkishCourses.enrollToast`
- Line 13: description → `t.turkishCourses.enrollToastDesc`
- Line 139: "Yabancılar İçin" → `t.turkishCourses.title`
- Line 139: "Türkçe Kursları" → `t.turkishCourses.titleSpan`
- Ve diğer tüm Türkçe metinler...

## 2. EnglishCoursesSection.jsx

Dosya başına ekleyin:
```javascript
import { useLanguage } from '@/contexts/LanguageContext';
import { useTranslation } from '@/locales/translations';

const { language } = useLanguage();
const t = useTranslation(language);
```

Güncellenecek metinler:
- Tüm başlıklar ve açıklamalar t.englishCourses.* ile değiştirilmeli

## 3. SpeedReadingSection.jsx

Aynı import'ları ekleyin ve:
- t.speedReading.* kullanarak tüm metinleri değiştirin

## 4. ContactSection.jsx

Aynı import'ları ekleyin ve:
- t.contact.* kullanarak tüm metinleri değiştirin

## Hızlı Güncelleme

Her component için:
1. Import ekle
2. Hook'ları kullan
3. Metinleri {t.section.key} ile değiştir

Çeviriler zaten translations.js dosyasında hazır!
