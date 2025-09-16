import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex flex-col gap-0 min-h-screen w-full">
        <div className="pt-24" />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
