"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight,Download,Github,Linkedin,Mail } from "lucide-react";
import { SiLeetcode,SiGeeksforgeeks } from "react-icons/si";
import myImg from "@/public/images/me.jpg";

export default function Landing() {
  const socialLinks = [
    { icon: Github,href: "https://github.com/das-kushal",label: "GitHub" },
    { icon: Linkedin,href: "https://www.linkedin.com/in/kushal-das-3936b3211/",label: "LinkedIn" },
    { icon: SiLeetcode,href: "https://leetcode.com/u/kd-83/",label: "LeetCode" },
    { icon: SiGeeksforgeeks,href: "https://auth.geeksforgeeks.org/user/kushaldas30102002/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user",label: "GeeksForGeeks" },
    { icon: Mail,href: "mailto:kushaldas30102002@gmail.com",label: "Email" },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0,x: -50 }}
          animate={{ opacity: 1,x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0,y: 20 }}
              animate={{ opacity: 1,y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-400 text-sm font-medium"
            >
              Software Engineer @ Wells Fargo
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">
                Kushal Das
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed">
              I am a <span className="text-gray-300 dark:text-gray-200">Web & App Developer</span> passionate about crafting elegant solutions
              to complex problems. From responsive web interfaces to scalable applications,
              I turn ideas into reality with clean, efficient code.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="#contact"
              className="group px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
            >
              Contact Me
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/resume/Kushal-Das-Resume.pdf"
              target="_blank"
              className="group px-8 py-3 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded-full font-medium transition-all flex items-center justify-center gap-2"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
            {socialLinks.map((social,index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0,y: 20 }}
                animate={{ opacity: 1,y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-gray-400 hover:text-primary-400 transition-colors p-2 hover:bg-white/5 rounded-full"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Image/Visual */}
        <motion.div
          initial={{ opacity: 0,scale: 0.8 }}
          animate={{ opacity: 1,scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96 aspect-square flex-shrink-0">
            {/* Decorative circles - Ripple Effect */}
            <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/10 animate-ripple" />
            <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/10 animate-ripple" style={{ animationDelay: "1s" }} />
            <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/10 animate-ripple" style={{ animationDelay: "2s" }} />

            {/* Main Image Container */}
            <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-gray-100 dark:border-white/5 shadow-2xl">
              <Image
                src={myImg}
                alt="Kushal Das"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
