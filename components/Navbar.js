"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Trophy, BriefcaseBusiness } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("top");
    const [scrolled, setScrolled] = useState(false);
    const [isHomePage, setIsHomePage] = useState(true);

    useEffect(() => {
        setIsHomePage(window.location.pathname === "/");
    }, []);

    const navItems = [
        { href: "#top", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#experience", label: "Experience" },
        { href: "#skills", label: "Skills" },
        { href: "#certifications", label: "Certifications" },
        { href: "#projects", label: "Projects" },
        { href: "#contact", label: "Contact" },
    ];
    const utilityLinks = [
        { href: "/achievements", label: "Achievements", shortLabel: "Awards", icon: Trophy },
        // { href: "/interviews", label: "Interviews", shortLabel: "Interviews", icon: BriefcaseBusiness },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            const sections = navItems.map((item) => item.href.substring(1));
            const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

            if (isAtBottom) {
                setActiveSection("contact");
                return;
            }

            let currentSection = "top";
            let minDistance = Infinity;

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    const distance = Math.abs(rect.top);
                    if (rect.top <= 150 && rect.bottom >= 0 && distance < minDistance) {
                        minDistance = distance;
                        currentSection = section;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isHomePage]);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className={`fixed top-0 left-0 right-0 z-[1000] flex justify-center transition-all duration-500 ${scrolled ? "pt-2 md:pt-3" : "pt-4 md:pt-6"
                    } px-4`}
            >
                <div
                    className="theme-nav relative flex items-center gap-2 md:gap-1 px-3 py-2 md:px-5 md:py-2.5 rounded-full transition-all duration-300"
                >
                    {/* Gradient top line */}
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary-500/40 to-transparent rounded-full" />

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-0.5">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.substring(1);
                            return (
                                <Link
                                    key={item.href}
                                    href={item.isExternal ? item.href : (isHomePage ? item.href : `/${item.href}`)}
                                    onClick={() => {
                                        if (!item.isExternal) setActiveSection(item.href.substring(1));
                                    }}
                                    className={`nav-hover-highlight relative px-3.5 py-2 text-xs font-medium transition-all duration-300 flex items-center gap-1.5 rounded-full ${isActive
                                            ? "text-white"
                                            : "text-gray-400"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="active-pill"
                                            className="nav-active-indicator absolute inset-0 rounded-full"
                                            transition={{ type: "spring", duration: 0.5 }}
                                        />
                                    )}
                                    {item.label}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden lg:block w-px h-5 bg-white/10 mx-1" />

                    <div className="flex items-center gap-1.5">
                        <div className="flex items-center gap-1 rounded-full border border-primary-400/20 bg-primary-400/5 p-1">
                            {utilityLinks.map(({ href, label, shortLabel, icon: Icon }) => (
                                <Link
                                    key={href}
                                    href={href}
                                    title={label}
                                    aria-label={label}
                                    className="nav-hover-highlight flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold text-primary-400 transition-colors"
                                >
                                    <Icon size={13} aria-hidden="true" />
                                    <span className="lg:hidden">{shortLabel}</span>
                                    <span className="hidden lg:inline">{label}</span>
                                </Link>
                            ))}
                        </div>
                        <ThemeToggle />
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label={isOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isOpen}
                            className="nav-hover-highlight lg:hidden rounded-full p-1.5 text-gray-400 transition-colors"
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
                        initial={{ opacity: 0, scale: 0.95, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed inset-x-4 top-20 z-40 lg:hidden"
                    >
                        <div className="theme-nav-menu rounded-2xl p-2 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={isHomePage ? item.href : `/${item.href}`}
                                    onClick={() => setIsOpen(false)}
                                    className="theme-nav-link nav-hover-highlight p-3 text-sm text-center rounded-full transition-all flex items-center justify-center gap-2 font-medium text-gray-300"
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
