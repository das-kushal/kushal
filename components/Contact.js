"use client";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin } from "lucide-react";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import ContactForm from "@/utils/ContactForm";

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: "Email", value: "kushaldas30102002@gmail.com", href: "mailto:kushaldas30102002@gmail.com", gradient: "from-primary-600 to-rose-500" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/kushal-das-3936b3211", href: "https://www.linkedin.com/in/kushal-das-3936b3211/", gradient: "from-blue-600 to-sky-400" },
    { icon: Github, label: "GitHub", value: "github.com/das-kushal", href: "https://github.com/das-kushal", gradient: "from-gray-600 to-gray-400" },
    { icon: SiLeetcode, label: "LeetCode", value: "leetcode.com/u/kd-83", href: "https://leetcode.com/u/kd-83/", gradient: "from-orange-500 to-amber-400" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null, gradient: "from-emerald-600 to-teal-400" },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="contact">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/4 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/4 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Touch</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Want to say hi? I&apos;d love to hear from you.
          </p>
        </motion.div>

        <div className="grid items-stretch gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex h-full flex-col space-y-3"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.href || undefined}
                target={item.href ? "_blank" : undefined}
                rel={item.href ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={item.href ? { x: 6, scale: 1.01 } : {}}
                className={`flex flex-1 items-center gap-4 p-4 rounded-2xl border border-white/8 bg-white/3 hover:border-white/18 transition-all duration-300 group ${!item.href && "cursor-default"}`}
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-gray-600 dark:text-gray-500 uppercase tracking-widest font-semibold mb-0.5">{item.label}</div>
                  <div className="text-sm font-medium text-gray-200 dark:text-gray-200 text-gray-800 truncate">{item.value}</div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
