

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Navbar from "@/components/Navbar";
import Certifications from "@/components/Certifications";
import Link from "next/link";
import { ChevronUp } from "lucide-react";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-dark-bg min-h-screen text-gray-900 dark:text-white selection:bg-primary-500/30">
      <Navbar />

      <div className="flex flex-col">
        <section id="top">
          <Landing />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <WorkExperience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <Footer />

        <Link
          href="#top"
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-primary-600/80 backdrop-blur-md border border-white/10 text-white shadow-lg hover:bg-primary-500 transition-all hover:scale-110 group"
        >
          <ChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </main>
  );
}