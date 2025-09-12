"use client";


export default function Header() {
		const { lang, setLang } = useContext(LanguageContext);
		const navLinks = lang === "fr"
			? [
					{ label: "Accueil", href: "#hero" },
					{ label: "Services", href: "#services" },
					{ label: "Projets", href: "#projects" },
					{ label: "Compétences", href: "#skills" },
					{ label: "Contact", href: "#contact" },
				]
			: [
					{ label: "Home", href: "#hero" },
					{ label: "Services", href: "#services" },
					{ label: "Projects", href: "#projects" },
					{ label: "Skills", href: "#skills" },
					{ label: "Contact", href: "#contact" },
				];
	return (
		<header className="fixed top-0 left-0 w-full z-50 bg-gray-950/80 backdrop-blur border-b border-gray-800 shadow-lg">
			<div className="max-w-7xl mx-auto px-6 py-3 flex items-center">
				<span className="text-2xl font-extrabold text-violet-400 tracking-tight mr-12">Lyper</span>
				<nav className="ml-auto flex items-center gap-6">
					<ul className="flex space-x-8 text-gray-200 font-semibold text-lg">
						{navLinks.map(link => (
							<li key={link.label}>
								<a
									href={link.href}
									className="relative transition-colors duration-200 hover:text-violet-400 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-violet-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
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
			</div>
		</header>
	);
}



import React, { useContext } from "react";
import { LanguageContext } from "../app/layout";


