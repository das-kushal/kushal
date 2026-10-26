"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Code2, Download, Github, Linkedin, Mail } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import myImg from "@/public/images/me.jpg";

const particles = [
  { x: "15%", y: "20%", size: 2, color: "bg-primary-500", duration: 3, delay: 0 },
  { x: "85%", y: "15%", size: 3, color: "bg-purple-500", duration: 4, delay: 0.5 },
  { x: "75%", y: "70%", size: 2, color: "bg-blue-500", duration: 3.5, delay: 1 },
  { x: "10%", y: "80%", size: 2, color: "bg-primary-400", duration: 5, delay: 0.3 },
  { x: "50%", y: "10%", size: 1.5, color: "bg-purple-400", duration: 4.5, delay: 1.2 },
  { x: "90%", y: "50%", size: 2.5, color: "bg-primary-500", duration: 3.2, delay: 0.8 },
  { x: "30%", y: "90%", size: 2, color: "bg-indigo-400", duration: 4.2, delay: 0.2 },
];

export default function Landing() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/das-kushal", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/kushal-das-3936b3211/", label: "LinkedIn" },
    { icon: SiLeetcode, href: "https://leetcode.com/u/kd-83/", label: "LeetCode" },
    { icon: SiGeeksforgeeks, href: "https://auth.geeksforgeeks.org/user/kushaldas30102002/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user", label: "GeeksForGeeks" },
    { icon: Mail, href: "mailto:kushaldas30102002@gmail.com", label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Ambient glow orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/8 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500/8 rounded-full blur-[100px] -z-10 animate-pulse-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[80px] -z-10" />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className={`particle ${p.color}`}
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          }}
        />
      ))}

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-medium backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              Software Engineer @ Wells Fargo
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
              <span className="block text-white/90 dark:text-white/90 text-gray-900">Hi, I&apos;m</span>
              <span className="block shimmer-text mt-1">
                Kushal Das
              </span>
            </h1>

            <p className="text-xl text-gray-400 dark:text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I am a{" "}
              <span className="text-white dark:text-white font-semibold">Web &amp; App Developer</span>{" "}
              passionate about crafting elegant solutions
              to complex problems. From responsive web interfaces to scalable applications,
              I turn ideas into reality with clean, efficient code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="group relative px-8 py-3.5 bg-primary-600 hover:bg-primary-500 text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-primary-600/25 hover:shadow-primary-500/40 hover:scale-[1.03]"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/resume/Kushal-Das-Resume.pdf"
              target="_blank"
              className="group px-8 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white dark:text-white rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover:scale-[1.03]"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-primary-400 hover:bg-primary-500/10 hover:border-primary-500/30 transition-all duration-200"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] animate-float">
            {/* Rotating gradient ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-purple-500 to-blue-500 animate-spin-slow opacity-70 blur-[2px]" />
            <div className="absolute inset-[3px] rounded-full bg-dark-bg dark:bg-dark-bg bg-gray-50" />

            {/* Ripple rings */}
            <div className="absolute inset-0 rounded-full border border-primary-500/20 animate-ripple" />
            <div className="absolute inset-0 rounded-full border border-purple-500/15 animate-ripple" style={{ animationDelay: "1.2s" }} />
            <div className="absolute inset-0 rounded-full border border-blue-500/10 animate-ripple" style={{ animationDelay: "2.4s" }} />

            {/* Main Image Container */}
            <div className="absolute inset-[6px] rounded-full overflow-hidden">
              <Image
                src={myImg}
                alt="Kushal Das"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.8 }}
              className="absolute -top-2 -right-4 md:top-4 md:-right-8 px-3 py-1.5 rounded-xl bg-dark-card/90 dark:bg-dark-card/90 border border-white/10 backdrop-blur-md text-xs font-semibold text-primary-400 shadow-xl whitespace-nowrap"
            >
              <Building2 size={14} /> Wells Fargo
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-2 -left-4 md:bottom-4 md:-left-8 px-3 py-1.5 rounded-xl bg-dark-card/90 dark:bg-dark-card/90 border border-white/10 backdrop-blur-md text-xs font-semibold text-purple-400 shadow-xl whitespace-nowrap"
            >
              <Code2 size={14} /> Full Stack Dev
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
