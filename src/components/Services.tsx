'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaDesktop, FaRocket, FaTools, FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const Services: React.FC = () => {
  const { translations, language } = useLanguage();
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});

  const toggleCard = (index: number) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const services = [
    {
      icon: <FaDesktop className="text-4xl text-violet-400 group-hover:text-violet-300 transition-colors duration-300" />,
      title: translations.serviceCard1Title,
      description: translations.serviceCard1Description,
      detailedDescription: {
        fr: "Sites web sur mesure avec les dernières technologies (React, Next.js, TypeScript). Design moderne, responsive et optimisé SEO. Analyse de vos besoins pour créer une identité numérique unique qui vous ressemble.",
        en: "Custom websites with latest technologies (React, Next.js, TypeScript). Modern, responsive and SEO-optimized design. Analysis of your needs to create a unique digital identity that reflects you."
      }
    },
    {
      icon: <FaRocket className="text-4xl text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />,
      title: translations.serviceCard2Title,
      description: translations.serviceCard2Description,
      detailedDescription: {
        fr: "Migration vers des technologies modernes, amélioration des performances et optimisation mobile. Votre nouveau site surpassera l'ancien tout en conservant votre identité visuelle.",
        en: "Migration to modern technologies, performance improvements and mobile optimization. Your new site will surpass the old one while maintaining your visual identity."
      }
    },
    {
      icon: <FaTools className="text-4xl text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />,
      title: translations.serviceCard3Title,
      description: translations.serviceCard3Description,
      detailedDescription: {
        fr: "Mises à jour de sécurité, corrections de bugs, optimisations et nouvelles fonctionnalités. Support réactif et sauvegardes régulières pour un site toujours performant.",
        en: "Security updates, bug fixes, optimizations and new features. Responsive support and regular backups for an always efficient site."
      }
    },
  ];

  const getDetailText = () => {
    return language === 'fr' ? 'Détails du service' : 'Service details';
  };

  return (
    <section id="services" className="py-32 bg-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translations.servicesTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {translations.servicesSubtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-40 perspective-1000"
            >
              {/* Card Container with Flip Effect */}
              <div 
                className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                  flippedCards[index] ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:bg-gray-800/70 hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 transform hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-6 h-full">
                    {/* Icon */}
                    <div className="flex-shrink-0 p-3 bg-gray-700/50 rounded-xl group-hover:bg-gray-700/70 transition-all duration-300 transform group-hover:scale-105">
                      {service.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 text-base leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Flip Arrow */}
                    <div className="flex-shrink-0">
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-violet-600/20 hover:bg-violet-600/40 transition-all duration-300 group/arrow"
                      >
                        <FaArrowRight className="w-5 h-5 text-violet-400 group-hover/arrow:text-violet-300 transform group-hover/arrow:translate-x-1 transition-all duration-300" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-violet-600/10 to-purple-600/10 backdrop-blur-sm border border-violet-500/50 rounded-2xl p-6">
                  <div className="flex flex-col h-full">
                    {/* Header with back button */}
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-bold text-violet-300">
                        {getDetailText()}
                      </h3>
                      <button
                        onClick={() => toggleCard(index)}
                        className="flex items-center justify-center w-8 h-8 rounded-full bg-violet-600/20 hover:bg-violet-600/40 transition-all duration-300 group/back"
                      >
                        <FaArrowLeft className="w-4 h-4 text-violet-400 group-hover/back:text-violet-300 transform group-hover/back:-translate-x-1 transition-all duration-300" />
                      </button>
                    </div>

                    {/* Detailed Description */}
                    <div className="flex-1">
                      <p className="text-gray-200 text-sm leading-relaxed">
                        {service.detailedDescription[language]}
                      </p>
                    </div>

                    {/* Decorative elements */}
                    <div className="mt-4 flex items-center space-x-2">
                      <div className="flex-1 h-px bg-gradient-to-r from-violet-500/50 to-transparent"></div>
                      <div className="w-1.5 h-1.5 bg-violet-400 rounded-full"></div>
                      <div className="flex-1 h-px bg-gradient-to-l from-violet-500/50 to-transparent"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;