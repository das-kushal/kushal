"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import skillSet from "@/constants/skills";

export default function Skills() {
  const skillsByType = skillSet.reduce((acc,skill) => {
    const type = skill.type;
    if (!acc[type]) acc[type] = [];
    acc[type].push(skill);
    return acc;
  },{});

  const typeConfig = {
    language: { title: "Languages",color: "from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400" },
    framework: { title: "Frameworks & Libraries",color: "from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400" },
    database: { title: "Tools & Databases",color: "from-orange-600 to-red-600 dark:from-orange-400 dark:to-red-400" },
  };

  const categoryOrder = ["language","framework","database"];

  return (
    <section className="py-20 relative" id="skills">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0,y: 20 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-primary-400">Skills</span>
          </h2>
        </motion.div>

        <div className="space-y-16">
          {categoryOrder.map((type,categoryIndex) => {
            const skills = skillsByType[type];
            if (!skills?.length) return null;

            return (
              <motion.div
                key={type}
                initial={{ opacity: 0,y: 20 }}
                whileInView={{ opacity: 1,y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.1 }}
              >
                <h3 className={`text-2xl font-bold mb-8 bg-gradient-to-r ${typeConfig[type].color} bg-clip-text text-transparent !text-transparent inline-block`}>
                  {typeConfig[type].title}
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {skills.map((skill,index) => (
                    <motion.div
                      key={skill.id || index}
                      whileHover={{ scale: 1.05,y: -5 }}
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
      </div>
    </section>
  );
}
