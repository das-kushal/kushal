"use client";
import { motion } from "framer-motion";
import { Mail,MapPin,Github,Linkedin } from "lucide-react";
import { SiLeetcode,SiGeeksforgeeks } from "react-icons/si";
import ContactForm from "@/utils/ContactForm";

export default function Contact() {
  const contactInfo = [
    { icon: Mail,label: "Email",value: "kushaldas30102002@gmail.com",href: "mailto:kushaldas30102002@gmail.com" },
    { icon: Linkedin,label: "LinkedIn",value: "linkedin.com/in/kushal-das-3936b3211",href: "https://www.linkedin.com/in/kushal-das-3936b3211/" },
    { icon: Github,label: "GitHub",value: "github.com/das-kushal",href: "https://github.com/das-kushal" },
    { icon: SiLeetcode,label: "LeetCode",value: "leetcode.com/u/kd-83",href: "https://leetcode.com/u/kd-83/" },
    // { icon: SiGeeksforgeeks,label: "GeeksForGeeks",value: "geeksforgeeks.org/user/kushaldas30102002",href: "https://auth.geeksforgeeks.org/user/kushaldas30102002/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" },
    { icon: MapPin,label: "Location",value: "Hyderabad, India",href: null },
  ];

  return (
    <section className="py-20 relative" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0,y: 20 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get in <span className="text-primary-400">Touch</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0,x: -20 }}
            whileInView={{ opacity: 1,x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="grid gap-9">
              {contactInfo.map((item,index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href ? "_blank" : undefined}
                  rel={item.href ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0,y: 10 }}
                  whileInView={{ opacity: 1,y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors ${!item.href && 'cursor-default'}`}
                >
                  <div className="p-3 rounded-full bg-primary-500/20 text-primary-400">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{item.label}</div>
                    <div className="text-gray-900 dark:text-white font-medium">{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
