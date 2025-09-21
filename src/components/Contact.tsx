'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaEnvelope, FaUser, FaMessage, FaPaperPlane } from 'react-icons/fa6';
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '@/config/emailjs';

const Contact: React.FC = () => {
  const { translations } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Configuration temporaire avec mailto comme fallback
      if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        // Fallback: utiliser mailto si EmailJS n'est pas configuré
        const subject = encodeURIComponent(`Contact depuis le portfolio - ${formData.name}`);
        const body = encodeURIComponent(`
Nom: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}
        `);
        
        const mailtoLink = `mailto:contact@lyper.fr?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Utiliser EmailJS si configuré
        await emailjs.send(
          EMAILJS_CONFIG.SERVICE_ID,
          EMAILJS_CONFIG.TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'contact@lyper.fr',
          },
          EMAILJS_CONFIG.PUBLIC_KEY
        );
        
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status après 5 secondes
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-32 bg-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translations.contactTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            {translations.contactDescription}
          </p>
          
          {/* Email Contact */}
          <div className="inline-flex items-center space-x-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-lg px-6 py-3 hover:border-violet-500/50 transition-all duration-300">
            <FaEnvelope className="text-violet-400 text-lg" />
            <a 
              href="mailto:contact@lyper.fr" 
              className="text-gray-300 hover:text-violet-300 transition-colors duration-300 font-medium"
            >
              contact@lyper.fr
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-violet-500/30 transition-all duration-500">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Field */}
            <div className="relative">
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                {translations.contactForm.name}
              </label>
              <div className="relative">
                <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  placeholder={translations.contactForm.name}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="relative">
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {translations.contactForm.email}
              </label>
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                  placeholder={translations.contactForm.email}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="relative">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                {translations.contactForm.message}
              </label>
              <div className="relative">
                <FaMessage className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder={translations.contactForm.message}
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg shadow-lg transition-all duration-300 transform ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 hover:shadow-violet-500/25 hover:scale-105'
                } group`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Envoi en cours...
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <FaCheckCircle className="mr-3 text-base" />
                    Message envoyé !
                  </>
                ) : submitStatus === 'error' ? (
                  <>
                    <FaExclamationCircle className="mr-3 text-base" />
                    Erreur - Réessayer
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-3 text-base group-hover:translate-x-1 transition-transform duration-300" />
                    {translations.contactForm.send}
                  </>
                )}
              </button>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="mt-3 text-center text-green-400 text-sm">
                  ✅ Votre message a été envoyé avec succès !
                </p>
              )}
              {submitStatus === 'error' && (
                <p className="mt-3 text-center text-red-400 text-sm">
                  ❌ Erreur lors de l'envoi. Vous pouvez aussi nous contacter directement à contact@lyper.fr
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;