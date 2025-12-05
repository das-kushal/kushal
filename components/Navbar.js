"use client";
import { useState,useEffect } from "react";
import Link from "next/link";
import { motion,AnimatePresence } from "framer-motion";
import { Menu,X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isOpen,setIsOpen] = useState(false);
  const [activeSection,setActiveSection] = useState("top");
  const [scrolled,setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));

      // Check if we're at the bottom of the page
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      if (isAtBottom) {
        // If at bottom, highlight the last section (Contact)
        setActiveSection("contact");
        return;
      }

      // Find the section that is currently most visible
      let currentSection = "top";
      let minDistance = Infinity;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);

          // If section is in viewport and closer to top than previous sections
          if (rect.top <= 150 && rect.bottom >= 0 && distance < minDistance) {
            minDistance = distance;
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    handleScroll(); // Call once on mount
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  const navItems = [
    { href: "#top",label: "Home" },
    { href: "#about",label: "About" },
    { href: "#experience",label: "Experience" },
    { href: "#skills",label: "Skills" },
    { href: "#certifications",label: "Certifications" },
    { href: "#projects",label: "Projects" },
    { href: "#contact",label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 md:pt-4 px-4 transition-all duration-300 ${scrolled ? "pt-2 md:pt-3" : "pt-4 md:pt-8"
          }`}
      >
        <div className="relative bg-white/60 dark:bg-dark-card/40 backdrop-blur-xl border border-gray-200/50 dark:border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg flex items-center gap-4 md:gap-8 hover:bg-white/80 dark:hover:bg-dark-card/60 transition-all">
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setActiveSection(item.href.substring(1))}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary-600/20 rounded-full -z-10"
                      transition={{ type: "spring",duration: 0.6 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-1 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0,scale: 0.95,y: -20 }}
            animate={{ opacity: 1,scale: 1,y: 0 }}
            exit={{ opacity: 0,scale: 0.95,y: -20 }}
            className="fixed inset-x-4 top-24 z-40 md:hidden"
          >
            <div className="bg-white/90 dark:bg-dark-card/90 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="p-4 text-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
