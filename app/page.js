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
    <main className="min-h-screen bg-gray-50 text-gray-900 dark:bg-dark-bg dark:text-gray-100">
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
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-gradient-to-br from-primary-600 to-primary-500 text-white shadow-xl shadow-primary-600/30 hover:shadow-primary-500/50 hover:scale-110 transition-all duration-300 border border-primary-400/30 group"
        >
          <ChevronUp size={22} className="group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </main>
  );
}
