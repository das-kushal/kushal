"use client";
import { motion } from "framer-motion";
import { Code2,GraduationCap,Briefcase,Trophy } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Briefcase,label: "Experience",value: "Wells Fargo" },
    { icon: GraduationCap,label: "Education",value: "Jadavpur Univ." },
    { icon: Code2,label: "LeetCode",value: "1300+ Solved" },
    { icon: Trophy,label: "Role",value: "Software Engineer" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0,y: 20 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            About <span className="text-primary-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Kushal, a passionate Software Engineer currently working at{" "}
                <span className="text-primary-400 font-semibold">Wells Fargo</span> in Hyderabad.
              </p>
              <p>
                I graduated with Honors in Computer Science & Engineering from{" "}
                <span className="text-primary-400 font-semibold">Jadavpur University</span> in 2024.
                My journey in tech is driven by a deep curiosity for Data Structures and Algorithms,
                having solved over 1300 problems on LeetCode.
              </p>
              <p>
                Previously, I interned at Wells Fargo, where I honed my skills in React and Flask,
                building robust full-stack applications. When I'm not coding, you can find me
                exploring new music or diving into tech blogs.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat,index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0,scale: 0.9 }}
                  whileInView={{ opacity: 1,scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-colors text-center group"
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary-400 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
