"use client";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Github,ExternalLink,Play,FileText,MonitorPlay } from "lucide-react";
import Image from "next/image";
import projectData from "@/constants/projects";

export default function Projects() {
  const [filter,setFilter] = useState("personal");
  const [hoveredId,setHoveredId] = useState(null);

  const filteredProjects = projectData.filter((project) =>
    filter === "personal" ? project.type === "personal" : project.type === "finalYear"
  );

  return (
    <section className="py-20 relative" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0,y: 20 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-primary-400">Projects</span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-4 mt-8">
            {["personal","finalYear"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === tab
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
              >
                {tab === "personal" ? "Personal Projects" : "Final Year Project"}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0,scale: 0.9 }}
                animate={{ opacity: 1,scale: 1 }}
                exit={{ opacity: 0,scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="bg-white dark:bg-dark-card rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden group hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-500 cursor-pointer"
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image Container */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.imgUrl}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100 dark:from-dark-card via-transparent to-transparent opacity-80" />
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4">
                    {project.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.slice(0,4).map((skill,i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-primary-600 dark:text-primary-300 border border-gray-200 dark:border-white/5"
                      >
                        {skill}
                      </span>
                    ))}
                    {project.skills.length > 4 && (
                      <span className="text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                        +{project.skills.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/5">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="View Code"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="Watch Demo"
                      >
                        <Play size={20} />
                      </a>
                    )}
                    {project.reportUrl && (
                      <a
                        href={project.reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="View Report"
                      >
                        <FileText size={20} />
                      </a>
                    )}
                    {project.presentationUrl && (
                      <a
                        href={project.presentationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                        title="View Presentation"
                      >
                        <MonitorPlay size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}