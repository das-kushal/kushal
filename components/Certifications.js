"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink,Award,Calendar } from "lucide-react";
import certifications from "@/constants/certifications";

export default function Certifications() {
  return (
    <section className="py-20 relative" id="certifications">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0,y: 20 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-400">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Continuous learning and professional development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert,index) => (
            <motion.div
              key={cert.id || index}
              initial={{ opacity: 0,y: 20 }}
              whileInView={{ opacity: 1,y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all group"
            >
              <div className="relative h-48 w-full bg-dark-card/50 p-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image
                    src={cert.imageUrl}
                    alt={cert.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-primary-500/20 hover:text-primary-400 transition-colors"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {cert.date}
                  </div>
                  {cert.credentialId && (
                    <div className="flex items-center gap-1">
                      <Award size={14} />
                      ID: {cert.credentialId.slice(0,8)}...
                    </div>
                  )}
                </div>

                {cert.description && (
                  <p className="text-sm text-gray-400 line-clamp-3">
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