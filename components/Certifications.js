"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Award, Calendar, BadgeCheck } from "lucide-react";
import certifications from "@/constants/certifications";

export default function Certifications() {
  return (
    <section className="py-24 relative overflow-hidden" id="certifications">
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Certifications</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id || index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="certification-card relative group flex flex-col rounded-2xl border border-white/8 bg-white/3 overflow-hidden transition-colors duration-300"
            >
              {/* Image area */}
              <div className="certification-image relative h-44 bg-dark-card/60 dark:bg-dark-card/60 bg-gray-100 p-6 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative w-full h-full">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex-1 min-w-0">
                    <h3 className="certification-title text-base font-bold text-white dark:text-white text-gray-900 mb-1 transition-colors leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-xs text-gray-500 font-medium">{cert.issuer}</p>
                  </div>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 p-2 rounded-lg bg-white/5 hover:bg-primary-500/15 hover:text-primary-400 text-gray-500 transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-3 text-xs text-gray-600 mt-auto pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1">
                    <Calendar size={11} />
                    <span>{cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-1">
                      <Award size={11} />
                      <span>ID: {cert.credentialId.slice(0, 8)}...</span>
                    </div>
                  )}
                  <div className="ml-auto flex items-center gap-1 text-emerald-500">
                    <BadgeCheck size={13} />
                    <span className="text-[10px] font-semibold">Verified</span>
                  </div>
                </div>

                {cert.description && (
                  <p className="text-xs text-gray-500 line-clamp-2 mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
