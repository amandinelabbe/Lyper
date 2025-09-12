import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-black/80 border-t border-gray-800 text-center mt-16">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-6">
        <span className="text-2xl font-bold text-violet-500 tracking-wide mb-4 sm:mb-0"><br /></span>
        <div className="flex gap-6 mb-4 sm:mb-0">
          <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">Mentions Légales</a>
          <br />
          <a href="#" className="text-gray-400 hover:text-violet-400 transition-colors duration-200">Politique de Confidentialité</a>
        </div>
        <span className="text-gray-500 text-sm">© {new Date().getFullYear()} Lyper. Tous droits réservés.</span>
      </div>
    </footer>
  );
}
