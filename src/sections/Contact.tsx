import React from "react";

export default function Contact() {
  return (
  <section id="contact" className="py-32 flex flex-col items-center justify-center text-center scroll-mt-32">
  <h2 className="text-5xl font-extrabold text-gray-100 mb-6">Contact</h2>
  <p className="text-gray-300 mb-4 max-w-xl text-2xl">
        Vous souhaitez discuter d'un projet ou obtenir un devis ? N'hésitez pas à me contacter !
      </p>
      <a
        href="mailto:contact.lyper.fr"
        className="text-violet-400 text-lg font-semibold mb-8 hover:underline hover:text-violet-300 transition-colors duration-200"
      >
        contact.lyper.fr
      </a>
      <form className="w-full max-w-md bg-gray-900/80 border border-gray-800 rounded-xl p-8 shadow-lg flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="bg-gray-800 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre e-mail"
          className="bg-gray-800 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="bg-gray-800 text-gray-200 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-violet-600 text-white py-3 rounded font-semibold hover:bg-violet-700 transition-colors duration-300"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
}
