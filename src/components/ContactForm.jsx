'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Phone, BookOpen, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactForm = () => {
  const { toast } = useToast();
  const { language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: language === 'tr' ? 'Başarılı!' : 'Success!',
          description: language === 'tr'
            ? 'Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.'
            : 'Your message has been sent successfully. We will get back to you soon.',
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          course: '',
          message: ''
        });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: language === 'tr' ? 'Hata!' : 'Error!',
        description: language === 'tr'
          ? 'Mesaj gönderilemedi. Lütfen daha sonra tekrar deneyin veya doğrudan email gönderin.'
          : 'Failed to send message. Please try again later or send an email directly.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const courses = language === 'tr'
    ? ['Türkçe Kursları', 'İngilizce', 'Hızlı Okuma', 'Diğer']
    : ['Turkish Courses', 'English', 'Speed Reading', 'Other'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-brand-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

      <div className="relative bg-slate-800/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-brand-500/30 group-hover:border-brand-500/50 transition-all">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-brand-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-brand-500/30">
            <MessageSquare className="w-6 h-6 text-brand-400" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            {language === 'tr' ? 'Bize Ulaşın' : 'Contact Us'}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
              <User className="w-4 h-4 inline mr-2" />
              {language === 'tr' ? 'Ad Soyad' : 'Full Name'} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              placeholder={language === 'tr' ? 'Adınız ve soyadınız' : 'Your full name'}
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
              <Mail className="w-4 h-4 inline mr-2" />
              {language === 'tr' ? 'E-posta' : 'Email'} *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              placeholder={language === 'tr' ? 'ornek@email.com' : 'example@email.com'}
            />
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
              <Phone className="w-4 h-4 inline mr-2" />
              {language === 'tr' ? 'Telefon' : 'Phone'}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
              placeholder={language === 'tr' ? '+90 (5XX) XXX XX XX' : '+90 (5XX) XXX XX XX'}
            />
          </div>

          {/* Course Selection */}
          <div>
            <label htmlFor="course" className="block text-sm font-semibold text-gray-300 mb-2">
              <BookOpen className="w-4 h-4 inline mr-2" />
              {language === 'tr' ? 'İlgilendiğiniz Kurs' : 'Course of Interest'}
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
            >
              <option value="">{language === 'tr' ? 'Seçiniz' : 'Select'}</option>
              {courses.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
              <MessageSquare className="w-4 h-4 inline mr-2" />
              {language === 'tr' ? 'Mesajınız' : 'Your Message'} *
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
              placeholder={language === 'tr'
                ? 'Lütfen mesajınızı buraya yazın...'
                : 'Please write your message here...'}
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-brand-500 to-purple-500 hover:from-brand-600 hover:to-purple-600 text-white py-6 text-base font-semibold shadow-lg shadow-brand-500/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                {language === 'tr' ? 'Gönderiliyor...' : 'Sending...'}
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                {language === 'tr' ? 'Mesaj Gönder' : 'Send Message'}
              </>
            )}
          </Button>

          <p className="text-xs text-gray-400 text-center">
            {language === 'tr'
              ? '* ile işaretli alanlar zorunludur'
              : '* marked fields are required'}
          </p>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
