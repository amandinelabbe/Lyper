'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { FaExternalLinkAlt } from 'react-icons/fa';

const Projects: React.FC = () => {
  const { translations } = useLanguage();

  const projects = [
    {
      title: 'Sapion',
      description: translations.sapionDescription,
      image: '/logo_sapion.png',
      link: 'https://sapion.vercel.app/',
      bgGradient: 'from-violet-600/20 to-purple-600/20',
    },
    {
      title: 'Portfolio Photographe',
      description: translations.portfolioDescription,
      image: '/logo_photo.png',
      link: 'https://photography-livid.vercel.app/',
      bgGradient: 'from-purple-600/20 to-indigo-600/20',
    },
    {
      title: 'Securicam',
      description: translations.securicamDescription,
      image: '/securicam.png',
      link: 'https://securicam.vercel.app/',
      bgGradient: 'from-indigo-600/20 to-blue-600/20',
    },
  ];

  return (
    <section id="projects" className="py-32 bg-gray-800 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translations.projectsTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {translations.projectsSubtitle}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/20 transform hover:-translate-y-4"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br overflow-hidden bg-gray-800">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
                
                {/* Overlay on hover */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
                >
                  <div className="text-center">
                    <FaExternalLinkAlt className="text-white text-2xl mx-auto mb-2" />
                    <span className="text-white font-semibold">{translations.viewSite}</span>
                  </div>
                </a>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* View Site Button */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-violet-400 hover:text-violet-300 font-semibold transition-colors duration-300 group/link"
                >
                  {translations.viewSite}
                  <FaExternalLinkAlt className="ml-2 text-sm transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-violet-600/20 to-transparent transform rotate-45 translate-x-10 -translate-y-10 group-hover:from-violet-600/40 transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;