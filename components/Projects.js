"use client";
import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import { Github,ExternalLink,Play,FileText,MonitorPlay,ChevronDown,ChevronUp } from "lucide-react";
import Image from "next/image";
import projectData from "@/constants/projects";

const ProjectCard = ({ project }) => {
  const [isExpanded,setIsExpanded] = useState(false);
  const [isHovered,setIsHovered] = useState(false);

  // Threshold for showing "Read More" - approx 2 lines
  const showReadMore = project.desc.length > 200;

  return (
    <motion.div
      layout
      initial={{ opacity: 0,y: 20 }}
      animate={{ opacity: 1,y: 0 }}
      exit={{ opacity: 0,y: 20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 group flex flex-col md:flex-row"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative w-full md:w-1/3 h-64 md:h-auto shrink-0 overflow-hidden">
        <Image
          src={project.imgUrl}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-gray-900/50" />

        {/* Optional Badge Overlay - mimicking the "Click to View" style if needed, 
            but keeping it clean for now as per "like certification card" instruction 
            combined with "horizontal layout". 
        */}
      </div>

      {/* Content */}
      <div className="p-6 md:p-8 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {project.name}
          </h3>

          {/* Links moved to top right for better horizontal use of space, or keep at bottom? 
              User image shows links at bottom. I'll keep them at bottom for now but maybe add github icon here?
              Actually, let's stick to the user's image layout roughly: Title top, description, tags, links bottom.
          */}
        </div>

        <div className="relative mb-6 flex-1">
          <p className={`text-gray-600 dark:text-gray-400 text-sm leading-relaxed ${!isExpanded ? 'line-clamp-2' : ''}`}>
            {project.desc}
          </p>
          {showReadMore && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="text-primary-600 dark:text-primary-400 text-xs font-medium hover:text-primary-700 dark:hover:text-primary-300 flex items-center gap-1 mt-2"
            >
              {isExpanded ? (
                <>Show Less <ChevronUp size={14} /></>
              ) : (
                <>Read More <ChevronDown size={14} /></>
              )}
            </button>
          )}
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.skills.slice(0,6).map((skill,i) => (
              <span
                key={i}
                className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-white/5 text-primary-600 dark:text-primary-300 border border-gray-200 dark:border-white/5"
              >
                {skill}
              </span>
            ))}
            {project.skills.length > 6 && (
              <span className="text-xs px-3 py-1.5 rounded-md bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400">
                +{project.skills.length - 6}
              </span>
            )}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-4 border-t border-gray-200 dark:border-white/5">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                title="View Code"
              >
                <Github size={18} />
                <span>Code</span>
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                title="Watch Demo"
              >
                <Play size={18} />
                <span>Demo</span>
              </a>
            )}
            {project.reportUrl && (
              <a
                href={project.reportUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                title="View Report"
              >
                <FileText size={18} />
                <span>Report</span>
              </a>
            )}
            {project.presentationUrl && (
              <a
                href={project.presentationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium"
                title="View Presentation"
              >
                <MonitorPlay size={18} />
                <span>Slides</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [filter,setFilter] = useState("personal");

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
                  : "bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                  }`}
              >
                {tab === "personal" ? "Personal Projects" : "Final Year Project"}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          layout
          className="flex flex-col gap-8"
        >
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