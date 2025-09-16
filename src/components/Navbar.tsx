"use client";

import Image from "next/image";
import React, { useContext, useState } from "react";
import { LanguageContext } from "../app/layout";

export default function Navbar() {
	const { lang, setLang } = useContext(LanguageContext);
	const [menuOpen, setMenuOpen] = useState(false);
	const navLinks = lang === "fr"
		? [
				{ label: "Accueil", href: "#home" },
				{ label: "Services", href: "#services" },
				{ label: "Projets", href: "#projects" },
				{ label: "Compétences", href: "#skills" },
				{ label: "Contact", href: "#contact" },
			]
		: [
				{ label: "Home", href: "#home" },
				{ label: "Services", href: "#services" },
				{ label: "Projects", href: "#projects" },
				{ label: "Skills", href: "#skills" },
				{ label: "Contact", href: "#contact" },
			];
	return (
	 <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800 shadow-lg animate-fade-in">
		 <div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
			 <div className="flex items-center mr-12 select-none cursor-pointer gap-3">
				 <Image
					 src="/logo_lyper_without_bg.png"
					 alt="Logo Lyper"
					 width={35}
					 height={35}
					 className="object-contain drop-shadow-lg"
					 priority
				 />
				 <span className="text-2xl text-white-500 tracking-tight transition-transform hover:scale-105" style={{ fontFamily: 'Sundori, sans-serif', fontWeight: 300 }}>Lyper</span>
			 </div>
			 {/* Desktop nav */}
			 <nav className="ml-auto hidden md:flex items-center gap-6">
				 <ul className="flex space-x-8 text-gray-200 font-semibold text-lg">
					 {navLinks.map(link => (
						 <li key={link.label}>
							 <a
								 href={link.href}
								 className="relative transition-colors duration-200 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-violet-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left px-1"
								 style={{ display: 'inline-block', paddingBottom: '2px' }}
							 >
								 {link.label}
							 </a>
						 </li>
					 ))}
				 </ul>
				 <button
					 onClick={() => setLang(lang === "fr" ? "en" : "fr")}
					 className="ml-8 px-4 py-2 rounded-full bg-violet-700 text-white font-bold shadow-lg hover:bg-violet-800 transition-all duration-200"
				 >
					 {lang === "fr" ? "EN" : "FR"}
				 </button>
			 </nav>
			 {/* Hamburger icon for mobile/tablet */}
			 <button
				 className="ml-auto md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
				 aria-label="Ouvrir le menu"
				 onClick={() => setMenuOpen(!menuOpen)}
			 >
				 <span className="sr-only">Menu</span>
				 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
					 <line x1="3" y1="7" x2="21" y2="7" />
					 <line x1="3" y1="12" x2="21" y2="12" />
					 <line x1="3" y1="17" x2="21" y2="17" />
				 </svg>
			 </button>
			 {/* Mobile menu */}
					 {menuOpen && (
						 <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-end md:hidden animate-fade-in">
							 <button
								 className="m-6 p-2 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
								 aria-label="Fermer le menu"
								 onClick={() => setMenuOpen(false)}
							 >
								 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-400">
									 <line x1="18" y1="6" x2="6" y2="18" />
									 <line x1="6" y1="6" x2="18" y2="18" />
								 </svg>
							 </button>
							 <nav className="w-full flex flex-col items-center gap-8 mt-12">
								 <div className="w-11/12 max-w-xs rounded-2xl bg-violet-900/90 shadow-2xl p-8 flex flex-col items-center">
									 <ul className="flex flex-col gap-8 text-gray-100 font-semibold text-2xl w-full">
										 {navLinks.map(link => (
											 <li key={link.label} className="w-full text-center">
												 <a
													 href={link.href}
													 className="block w-full py-2 rounded-lg transition-colors duration-200 hover:text-violet-300 hover:bg-violet-800/80"
													 onClick={() => setMenuOpen(false)}
												 >
													 {link.label}
												 </a>
											 </li>
										 ))}
									 </ul>
									 <button
										 onClick={() => { setLang(lang === "fr" ? "en" : "fr"); setMenuOpen(false); }}
										 className="mt-8 px-6 py-3 rounded-full bg-violet-700 text-white font-bold shadow-lg hover:bg-violet-800 transition-all duration-200 text-lg"
									 >
										 {lang === "fr" ? "EN" : "FR"}
									 </button>
								 </div>
							 </nav>
						 </div>
					 )}
		 </div>
	 </header>
 );
}


