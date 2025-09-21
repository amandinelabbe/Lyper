'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaPython,
  FaMobile
} from 'react-icons/fa';
import { 
  SiNextdotjs, 
  SiTypescript 
} from 'react-icons/si';

const Skills: React.FC = () => {
  const { translations } = useLanguage();

  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-6xl text-orange-500 group-hover:text-orange-400 transition-colors duration-300" />,
      color: 'orange',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-6xl text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />,
      color: 'blue',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-6xl text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />,
      color: 'yellow',
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs className="text-6xl text-white group-hover:text-gray-300 transition-colors duration-300" />,
      color: 'gray',
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript className="text-6xl text-blue-600 group-hover:text-blue-500 transition-colors duration-300" />,
      color: 'blue',
    },
    {
      name: 'React',
      icon: <FaReact className="text-6xl text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300" />,
      color: 'cyan',
    },
    {
      name: 'Python',
      icon: <FaPython className="text-6xl text-green-500 group-hover:text-green-400 transition-colors duration-300" />,
      color: 'green',
    },
    {
      name: 'Responsive Design',
      icon: <FaMobile className="text-6xl text-purple-500 group-hover:text-purple-400 transition-colors duration-300" />,
      color: 'purple',
    },
  ];

  const getHoverGradient = (color: string) => {
    const gradients = {
      orange: 'group-hover:from-orange-500/20 group-hover:to-red-500/20',
      blue: 'group-hover:from-blue-500/20 group-hover:to-cyan-500/20',
      yellow: 'group-hover:from-yellow-500/20 group-hover:to-orange-500/20',
      gray: 'group-hover:from-gray-500/20 group-hover:to-slate-500/20',
      cyan: 'group-hover:from-cyan-500/20 group-hover:to-blue-500/20',
      green: 'group-hover:from-green-500/20 group-hover:to-emerald-500/20',
      purple: 'group-hover:from-purple-500/20 group-hover:to-violet-500/20',
    };
    return gradients[color as keyof typeof gradients] || 'group-hover:from-violet-500/20 group-hover:to-purple-500/20';
  };

  return (
    <section id="skills" className="py-32 bg-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {translations.skillsTitle}
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {translations.skillsSubtitle}
          </p>
        </div>

        {/* Skills Grid - 2x4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 lg:p-8 hover:border-violet-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/10 transform hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-transparent to-transparent ${getHoverGradient(skill.color)}`}
            >
              {/* Skill Icon */}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                
                {/* Skill Name */}
                <h3 className="text-lg lg:text-xl font-semibold text-white group-hover:text-violet-300 transition-colors duration-300">
                  {skill.name}
                </h3>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-violet-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-2 left-2 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75"></div>
              
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/0 via-purple-500/0 to-violet-500/0 group-hover:from-violet-500/50 group-hover:via-purple-500/50 group-hover:to-violet-500/50 opacity-0 group-hover:opacity-20 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;