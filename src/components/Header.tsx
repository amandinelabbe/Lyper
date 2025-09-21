'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaGlobe, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const { language, translations, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button 
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 text-2xl font-bold text-violet-400 hover:text-violet-300 transition-colors duration-300"
            >
              <img 
                src="/logo_lyper_without_bg.png" 
                alt="Lyper Logo" 
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {translations.home}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {translations.services}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {translations.projects}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {translations.skills}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-gray-300 hover:text-white transition-colors duration-300 group"
            >
              {translations.contact}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-400 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Right side - Language Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-all duration-300"
            >
              <FaGlobe className="text-violet-400" />
              <span className="text-sm font-medium">{language.toUpperCase()}</span>
            </button>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={toggleMobileMenu}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {isMobileMenuOpen ? (
                  <FaTimes className="h-6 w-6" />
                ) : (
                  <FaBars className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-900/98 backdrop-blur-sm border-b border-gray-800 py-4">
            <nav className="flex flex-col space-y-4 px-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-300 hover:text-violet-300 transition-colors duration-300 py-2"
              >
                {translations.home}
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-300 hover:text-violet-300 transition-colors duration-300 py-2"
              >
                {translations.services}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-left text-gray-300 hover:text-violet-300 transition-colors duration-300 py-2"
              >
                {translations.projects}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-left text-gray-300 hover:text-violet-300 transition-colors duration-300 py-2"
              >
                {translations.skills}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left text-gray-300 hover:text-violet-300 transition-colors duration-300 py-2"
              >
                {translations.contact}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;