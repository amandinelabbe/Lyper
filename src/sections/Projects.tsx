"use client";
import React, { useContext } from "react";
import { LanguageContext } from "../app/layout";

const PROJECTS = [
  {
    image: "/logo_sapion.png",
    title: "Site Web SAP Cloud Solutions",
    description: "Site vitrine moderne pour un fournisseur de solutions SAP.",
    link: "https://sapion.netlify.app/",
  },
  {
    image: "/project2.jpg",
    title: "Agence Digitale",
    description: "Refonte complète d'un site d'agence web.",
    link: "https://agence-digitale.fr",
  },
  {
    image: "/project3.jpg",
    title: "Boutique en Ligne",
    description: "Création d'une boutique e-commerce performante.",
    link: "https://boutique-en-ligne.fr",
  },
];

export default function Projects() {
  const { lang } = useContext(LanguageContext);
  const sectionTitle = lang === "fr" ? "Projets" : "Projects";
  const sectionDesc = lang === "fr"
    ? "Ils m'ont fait confiance. Voici le résultat."
    : "They trusted me. Here is the result.";
  const PROJECTS = lang === "fr"
    ? [
        {
          image: "/logo_sapion.png",
          title: "Site Web SAP Cloud Solutions",
          description: "Site vitrine moderne pour un fournisseur de solutions SAP.",
          link: "https://sapion.netlify.app/",
      },
        {
          image: "/public/logo_agence_digitale.png",
          title: "Agence Digitale",
          description: "Refonte complète d'un site d'agence web.",
          link: "https://agence-digitale.fr",
        },
        {
          image: "/project3.jpg",
          title: "Boutique en Ligne",
          description: "Création d'une boutique e-commerce performante.",
          link: "https://boutique-en-ligne.fr",
        },
      ]
    : [
        {
        image: "/logo_sapion.png",
        title: "Site Web SAP Cloud Solutions",
        description: "Site vitrine moderne pour un fournisseur de solutions SAP.",
        link: "https://sapion.netlify.app/",
        },
        {
          image: "/project2.jpg",
          title: "Digital Agency",
          description: "Complete redesign of a web agency site.",
          link: "https://agence-digitale.fr",
        },
        {
          image: "/project3.jpg",
          title: "Online Store",
          description: "Creation of a high-performance e-commerce store.",
          link: "https://boutique-en-ligne.fr",
        },
      ];
  return (
    <section id="projects" className="py-32 scroll-mt-32">
      <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">{sectionTitle}</h2>
      <p className="text-center text-gray-300 text-2xl mb-16 mt-8">{sectionDesc}</p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center items-center">
        {PROJECTS.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-900/80 border border-gray-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-violet-700 transition-all duration-300 flex flex-col max-w-md w-full"
          >
            <div className="h-48 w-full bg-gray-800 flex items-center justify-center">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover h-full w-full group-hover:opacity-80 transition-opacity duration-300"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-xl font-semibold text-violet-400 mb-2 group-hover:text-violet-300 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <span className="text-blue-400 group-hover:underline">{lang === "fr" ? "Voir le site →" : "View site →"}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
