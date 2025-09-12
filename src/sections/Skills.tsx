import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaMobileAlt } from "react-icons/fa";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

const SKILLS = [
  { icon: <FaHtml5 className="text-orange-500 text-4xl" />, name: "HTML", description: "Structuration sémantique et accessible des pages web." },
  { icon: <FaCss3Alt className="text-blue-500 text-4xl" />, name: "CSS", description: "Styles modernes, animations et design responsive." },
  { icon: <FaJs className="text-yellow-400 text-4xl" />, name: "JavaScript", description: "Interactivité, logique métier et animations avancées." },
  { icon: <SiNextdotjs className="text-gray-100 text-4xl" />, name: "Next.js", description: "Framework React pour sites performants et SEO friendly." },
  { icon: <SiTypescript className="text-blue-400 text-4xl" />, name: "TypeScript", description: "Sécurité et robustesse du code grâce au typage." },
  { icon: <FaReact className="text-cyan-400 text-4xl" />, name: "React", description: "Création d’interfaces dynamiques et réactives." },
  { icon: <FaPython className="text-green-500 text-4xl" />, name: "Python", description: "Automatisation, scripts et backend léger." },
  { icon: <FaMobileAlt className="text-pink-400 text-4xl" />, name: "Design Responsive", description: "Adaptation optimale sur tous les écrans et appareils." },
];

export default function Skills() {
  return (
  <section id="skills" className="py-32 scroll-mt-32">
  <h2 className="text-5xl font-extrabold text-center text-white mb-10">Compétences</h2>
  <p className="text-center text-gray-300 text-2xl mb-16">Compétences techniques acquises et maîtrisées</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-16 gap-x-8 justify-center items-center max-w-5xl mx-auto">
        {[{ icon: <FaHtml5 className='text-orange-500 text-3xl' />, name: 'HTML' },
          { icon: <FaCss3Alt className='text-blue-500 text-3xl' />, name: 'CSS' },
          { icon: <FaJs className='text-yellow-400 text-3xl' />, name: 'JavaScript' },
          { icon: <SiNextdotjs className='text-gray-100 text-3xl' />, name: 'Next.js' },
          { icon: <SiTypescript className='text-blue-400 text-3xl' />, name: 'TypeScript' },
          { icon: <FaReact className='text-cyan-400 text-3xl' />, name: 'React' },
          { icon: <FaPython className='text-green-500 text-3xl' />, name: 'Python' },
          { icon: <FaMobileAlt className='text-pink-400 text-3xl' />, name: 'Responsive Design' }].map(skill => (
          <div
            key={skill.name}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col items-center group hover:scale-105 hover:shadow-violet-700 transition-all duration-300 animate-fade-in mx-auto w-44 h-44"
          >
            {React.cloneElement(skill.icon, { className: (skill.icon.props.className || '') + ' text-6xl' })}
            <span className="mt-4 text-gray-200 font-bold text-2xl group-hover:text-violet-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
