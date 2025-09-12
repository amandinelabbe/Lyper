import React from "react";

export default function Hero() {
  return (
  <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6 scroll-mt-24">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-100 mb-2 animate-fade-in">
        Créatrice de Sites Web Modernes et Sur Mesure<br />
      </h1>
      <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl animate-fade-in delay-100">
      </p>
      <p></p>
      <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl animate-fade-in delay-100">
        Développeuse frontend passionnée et autodidacte, j'ai acquis ma maîtrise des technologies modernes à travers de nombreux projets personnels. 
      </p>
      <p></p>
      <p></p>
      <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl animate-fade-in delay-100">
        Mon objectif ? 
        Transformer vos idées en expériences web sur mesure, performantes et visuellement marquantes.
      </p>
      <p></p>
      <p></p>
      <a
        href="#projects"
        className="mt-6 px-8 py-3 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 text-lg font-semibold animate-fade-in delay-200"
      >
        Découvrir mes Projets
      </a>
    </section>
  );
}
