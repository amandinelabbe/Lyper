'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer: React.FC = () => {
  const { translations } = useLanguage();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <h3 className="text-2xl font-bold text-violet-400">Lyper</h3>
            <div className="w-px h-8 bg-gray-700"></div>
            <span className="text-gray-400 text-sm">Web Development</span>
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <a 
              href="#" 
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300 text-sm"
            >
              {translations.legalNotices}
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-violet-300 transition-colors duration-300 text-sm"
            >
              {translations.privacyPolicy}
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm">
              {translations.allRightsReserved}
            </p>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-500 text-xs">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
              <span>Made with ❤️ by Lyper</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-violet-400 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;