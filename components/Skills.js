"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Blocks, Code2, Database } from "lucide-react";
import skillSet from "@/constants/skills";
import SkillsGlobe from "@/utils/SkillsGlobe";

const categories = {
  language: "Languages",
  framework: "Frameworks & Libraries",
  database: "Tools & Databases",
};

const categoryStyles = {
  language: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400",
  framework: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400",
  database: "from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400",
};

const categoryOrder = ["language", "framework", "database"];
const categoryIcons = {
  language: Code2,
  framework: Blocks,
  database: Database,
};

export default function Skills() {
  const skillsByType = skillSet.reduce((groupedSkills, skill) => {
    (groupedSkills[skill.type] ??= []).push(skill);
    return groupedSkills;
  }, {});

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:hidden"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary-400">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-16 md:hidden">
          {categoryOrder.map((type, categoryIndex) => {
            const skills = skillsByType[type];
            if (!skills?.length) return null;

            return (
              <motion.div
                key={type}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3
                  className={`text-2xl font-bold mb-8 bg-gradient-to-r ${categoryStyles[type]} bg-clip-text text-transparent !text-transparent inline-block`}
                >
                  {categories[type]}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.id ?? index}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-white/10 transition-colors group"
                    >
                      <div className="relative w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300">
                        <Image
                          src={skill.imageUrl}
                          alt={skill.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="hidden md:block">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500">
                Skills
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Explore the technologies I work with
            </p>
          </motion.div>

          <SkillsGlobe skills={skillSet} categories={categories} />

          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 items-start gap-4 lg:grid-cols-3">
            {categoryOrder.map((type) => {
              const Icon = categoryIcons[type];
              const skills = skillsByType[type] ?? [];

              return (
                <section
                  key={type}
                  aria-label={categories[type]}
                  className="skills-category-card rounded-2xl border border-white/10 p-5 md:p-6"
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="flex items-center gap-3 text-base font-semibold text-gray-200">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-primary-400">
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      {categories[type]}
                    </h3>
                    <span className="font-mono text-xs text-gray-500">
                      {String(skills.length).padStart(2, "0")}
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill.id}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-gray-400"
                      >
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
