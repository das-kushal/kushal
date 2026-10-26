"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Play, FileText, MonitorPlay, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import projectData from "@/constants/projects";

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const showReadMore = project.desc.length > 180;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-white/18 transition-all duration-400 flex flex-col md:flex-row hover:shadow-2xl"
    >
      {/* Top glow on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

      {/* Image Container */}
      <div className="relative w-full md:w-64 lg:w-72 h-56 md:h-auto shrink-0 overflow-hidden bg-dark-card/60">
        <Image
          src={project.imgUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-600 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-dark-bg/30" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-gray-300">
            {project.type === "finalYear" ? "Final Year" : "Personal"}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 md:p-7 flex flex-col flex-1 min-w-0">
        <div className="mb-3">
          <h3 className="text-xl font-bold text-gray-100 group-hover:text-primary-400 transition-colors mb-1.5">
            {project.name}
          </h3>
          <div className={`text-sm text-gray-400 leading-relaxed ${!isExpanded ? "line-clamp-2" : ""}`}>
            {project.desc}
          </div>
          {showReadMore && (
            <button
              onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
              className="mt-1.5 text-primary-400 text-xs font-semibold hover:text-primary-300 flex items-center gap-1 transition-colors"
            >
              {isExpanded ? <><span>Show Less</span><ChevronUp size={12} /></> : <><span>Read More</span><ChevronDown size={12} /></>}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mb-5 mt-auto">
          {project.skills.slice(0, 6).map((skill, i) => (
            <span
              key={i}
              className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/8 text-gray-400 hover:text-gray-200 hover:border-white/15 transition-colors"
            >
              {skill}
            </span>
          ))}
          {project.skills.length > 6 && (
            <span className="text-xs px-2.5 py-1 rounded-lg bg-white/5 text-gray-600">
              +{project.skills.length - 6}
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          {project.githubLink && (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <Github size={16} className="group-hover/link:text-primary-400 transition-colors" />
              <span>Code</span>
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <Play size={16} className="group-hover/link:text-primary-400 transition-colors" />
              <span>Demo</span>
            </a>
          )}
          {project.reportUrl && (
            <a
              href={project.reportUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <FileText size={16} className="group-hover/link:text-primary-400 transition-colors" />
              <span>Report</span>
            </a>
          )}
          {project.presentationUrl && (
            <a
              href={project.presentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-gray-400 hover:text-white transition-colors group/link"
            >
              <MonitorPlay size={16} className="group-hover/link:text-primary-400 transition-colors" />
              <span>Slides</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter, setFilter] = useState("personal");

  const filteredProjects = projectData.filter((project) =>
    filter === "personal" ? project.type === "personal" : project.type === "finalYear"
  );

  return (
    <section className="py-24 relative overflow-hidden" id="projects">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/4 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-black mb-3">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Projects</span>
          </h2>

          {/* Filter Tabs */}
          <div className="flex justify-center gap-3 mt-8">
            {["personal", "finalYear"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`relative px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden ${
                  filter === tab
                    ? "text-white shadow-lg shadow-primary-600/20"
                    : "text-gray-400 border border-white/10 hover:border-white/20 hover:text-gray-200"
                }`}
              >
                {filter === tab && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-500"
                  />
                )}
                <span className="relative z-10">
                  {tab === "personal" ? "Personal Projects" : "Final Year Project"}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="flex flex-col gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
