'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface Translations {
  // Navigation
  home: string;
  services: string;
  projects: string;
  skills: string;
  contact: string;
  
  // Home Section
  heroTitle: string;
  heroDescription: string;
  discoverProjects: string;
  
  // Services Section
  servicesTitle: string;
  servicesSubtitle: string;
  serviceCard1Title: string;
  serviceCard1Description: string;
  serviceCard2Title: string;
  serviceCard2Description: string;
  serviceCard3Title: string;
  serviceCard3Description: string;
  
  // Projects Section
  projectsTitle: string;
  projectsSubtitle: string;
  viewSite: string;
  sapionDescription: string;
  portfolioDescription: string;
  securicamDescription: string;
  
  // Skills Section
  skillsTitle: string;
  skillsSubtitle: string;
  
  // Contact Section
  contactTitle: string;
  contactDescription: string;
  contactForm: {
    name: string;
    email: string;
    message: string;
    send: string;
  };
  
  // Footer
  legalNotices: string;
  privacyPolicy: string;
  allRightsReserved: string;
}

const translations: Record<Language, Translations> = {
  fr: {
    // Navigation
    home: 'Accueil',
    services: 'Services',
    projects: 'Projets',
    skills: 'Compétences',
    contact: 'Contact',
    
    // Home Section
    heroTitle: 'Créatrice de Sites Web Modernes et Sur Mesure',
    heroDescription: 'Développeuse frontend passionnée, je crée des expériences web uniques et performantes qui donnent vie à vos idées.',
    discoverProjects: 'Découvrir mes Projets',
    
    // Services Section
    servicesTitle: 'Mes Services',
    servicesSubtitle: 'Chaque besoin à sa solution...',
    serviceCard1Title: 'Création de Sites Vitrine Sur Mesure',
    serviceCard1Description: 'Des sites web élégants et modernes qui reflètent parfaitement votre identité de marque.',
    serviceCard2Title: 'Modernisation et Refonte de Sites Existants',
    serviceCard2Description: 'Transformez votre site existant en une plateforme moderne et performante.',
    serviceCard3Title: 'Maintenance, Suivi et Correction',
    serviceCard3Description: 'Un accompagnement continu pour maintenir votre site à jour et sécurisé.',
    
    // Projects Section
    projectsTitle: 'Mes Réalisations',
    projectsSubtitle: 'Ils m\'ont fait confiance...',
    viewSite: 'Voir le site',
    sapionDescription: 'Site vitrine moderne pour une entreprise de services',
    portfolioDescription: 'Portfolio créatif pour un photographe professionnel',
    securicamDescription: 'Plateforme de sécurité et surveillance',
    
    // Skills Section
    skillsTitle: 'Mes Compétences',
    skillsSubtitle: 'Compétences techniques acquises...',
    
    // Contact Section
    contactTitle: 'Contactez-moi',
    contactDescription: 'Prêt à donner vie à votre projet ? Discutons ensemble de vos besoins.',
    contactForm: {
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer'
    },
    
    // Footer
    legalNotices: 'Mentions légales',
    privacyPolicy: 'Politique de confidentialité',
    allRightsReserved: '© 2025 Lyper. Tous droits réservés.'
  },
  en: {
    // Navigation
    home: 'Home',
    services: 'Services',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',
    
    // Home Section
    heroTitle: 'Creator of Modern and Custom Websites',
    heroDescription: 'Passionate frontend developer, I create unique and performant web experiences that bring your ideas to life.',
    discoverProjects: 'Discover my Projects',
    
    // Services Section
    servicesTitle: 'My Services',
    servicesSubtitle: 'Every need has its solution...',
    serviceCard1Title: 'Custom Showcase Website Creation',
    serviceCard1Description: 'Elegant and modern websites that perfectly reflect your brand identity.',
    serviceCard2Title: 'Modernization and Redesign of Existing Sites',
    serviceCard2Description: 'Transform your existing site into a modern and performant platform.',
    serviceCard3Title: 'Maintenance, Monitoring and Correction',
    serviceCard3Description: 'Continuous support to keep your site up-to-date and secure.',
    
    // Projects Section
    projectsTitle: 'My Work',
    projectsSubtitle: 'They trusted me...',
    viewSite: 'View site',
    sapionDescription: 'Modern showcase site for a service company',
    portfolioDescription: 'Creative portfolio for a professional photographer',
    securicamDescription: 'Security and surveillance platform',
    
    // Skills Section
    skillsTitle: 'My Skills',
    skillsSubtitle: 'Technical skills acquired...',
    
    // Contact Section
    contactTitle: 'Contact me',
    contactDescription: 'Ready to bring your project to life? Let\'s discuss your needs together.',
    contactForm: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send'
    },
    
    // Footer
    legalNotices: 'Legal notices',
    privacyPolicy: 'Privacy policy',
    allRightsReserved: '© 2025 Lyper. All rights reserved.'
  }
};

interface LanguageContextType {
  language: Language;
  translations: Translations;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  const value = {
    language,
    translations: translations[language],
    toggleLanguage
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};