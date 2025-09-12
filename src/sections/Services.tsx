import React from "react";
import { FaLaptopCode, FaSyncAlt } from "react-icons/fa";

const SERVICES = [
  {
    icon: <FaLaptopCode className="text-3xl text-violet-500" />,
    title: "Création de Sites Vitrine Sur Mesure",
    description:
      "Sites web élégants, performants et adaptés à votre marque, avec design personnalisé, responsive et SEO de base.",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-blue-400" />,
    title: "Modernisation et Refonte de Sites Existants",
    description:
      "Refonte visuelle, optimisation des performances et sécurité renforcée pour donner une nouvelle vie à votre site.",
  },
  {
    icon: <FaLaptopCode className="text-3xl text-violet-500" />,
    title: "Maintenance, Suivi et Correction du site web",
    description:
      "Suivi, corrections de bugs, mises à jour régulières et support technique pour garantir la fiabilité et la sécurité de votre site.",
  },
];

export default function Services() {
  return (
  <section id="services" className="py-32 scroll-mt-32">
  <h2 className="text-4xl font-extrabold text-gray-100 mb-12 text-center">Services</h2>
  <p className="text-center text-gray-300 text-2xl mb-16 mt-8">Chaque besoin à sa solution. Définissons la vôtre. Découvrez les services proposés.</p>
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
        {SERVICES.map((service) => (
          <div
            key={service.title}
            className="bg-gray-900/80 border border-gray-800 rounded-xl p-8 w-96 shadow-lg hover:scale-105 hover:shadow-violet-700 transition-all duration-300 flex flex-col items-center group"
          >
            <div className="mb-4 group-hover:animate-bounce">{service.icon}</div>
            <h3 className="text-2xl font-extrabold text-violet-400 mb-4 text-center">{service.title}</h3>
            <p className="text-gray-300 text-lg text-center mb-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
