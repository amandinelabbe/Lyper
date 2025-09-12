"use client";
import React, { useContext } from "react";
import { LanguageContext } from "../app/layout";

export default function Hero() {
  const { lang } = useContext(LanguageContext);
  const title = lang === "fr"
    ? "Créatrice de Sites Web Modernes et Sur Mesure"
    : "Creator of Modern & Custom Websites";
  const desc1 = lang === "fr"
    ? "Développeuse frontend passionnée et autodidacte, j'ai acquis ma maîtrise des technologies modernes à travers de nombreux projets personnels."
    : "Passionate and self-taught frontend developer, I mastered modern technologies through many personal projects.";
  const desc2 = lang === "fr"
    ? "Mon objectif ? Transformer vos idées en expériences web sur mesure, performantes et visuellement marquantes."
    : "My goal? To turn your ideas into custom, high-performance, visually striking web experiences.";
  const cta = lang === "fr" ? "Découvrir mes Projets" : "See My Projects";
  return (
    <section id="home" className="flex flex-col items-center justify-center min-h-[80vh] text-center gap-6 scroll-mt-24">
      <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-100 mb-2 animate-fade-in">
        {title}<br />
      </h1>
      <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl animate-fade-in delay-100">
        {desc1}
      </p>
      <p className="text-lg sm:text-2xl text-gray-400 max-w-2xl animate-fade-in delay-100">
        {desc2}
      </p>
      <a
        href="#projects"
        className="mt-6 px-8 py-3 bg-violet-600 text-white rounded-full shadow-lg hover:bg-violet-700 transition-all duration-300 text-lg font-semibold animate-fade-in delay-200"
      >
        {cta}
      </a>
    </section>
  );
}
