"use client";
import { motion } from "framer-motion";
import { Code2, GraduationCap, Briefcase, Trophy } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Briefcase, label: "Experience", value: "Wells Fargo", gradient: "from-primary-600 to-rose-500", glow: "rgba(194, 162, 122, 0.18)" },
    { icon: GraduationCap, label: "Education", value: "Jadavpur Univ.", gradient: "from-purple-600 to-indigo-500", glow: "rgba(194, 162, 122, 0.18)" },
    { icon: Code2, label: "LeetCode", value: "1300+ Solved", gradient: "from-orange-500 to-amber-400", glow: "rgba(194, 162, 122, 0.18)" },
    { icon: Trophy, label: "Role", value: "Software Engineer", gradient: "from-emerald-500 to-teal-400", glow: "rgba(194, 162, 122, 0.18)" },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-14">
            <div className="section-divider" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Me</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-5">
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed text-lg">
                Hello! I&apos;m Kushal, a passionate Software Engineer currently working at{" "}
                <span className="text-primary-400 font-semibold">Wells Fargo</span> in Hyderabad.
              </p>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed">
                I graduated with Honors in Computer Science &amp; Engineering from{" "}
                <span className="text-primary-400 font-semibold">Jadavpur University</span> in 2024.
                My journey in tech is driven by a deep curiosity for Data Structures and Algorithms,
                having solved over 1300 problems on LeetCode.
              </p>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed">
                Previously, I interned at Wells Fargo, where I honed my skills in React and Flask,
                building robust full-stack applications. When I&apos;m not coding, you can find me
                exploring new music or diving into tech blogs.
              </p>

              <div className="flex items-center gap-3 pt-2">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <span className="text-xs text-gray-500 font-medium uppercase tracking-widest">Based in Hyderabad, India</span>
                <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="p-6 rounded-2xl bg-white/3 dark:bg-white/3 border border-white/8 hover:border-white/15 transition-all duration-300 text-center group relative overflow-hidden"
                  style={{ boxShadow: `0 0 24px -8px ${stat.glow}` }}
                >
                  <div
                    className="absolute inset-0 z-0 opacity-100 rounded-2xl pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${stat.glow} 0%, transparent 70%)` }}
                  />

                  <div className={`relative z-10 w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="relative z-10 text-2xl font-bold text-gray-900 dark:text-white mb-1 leading-tight">{stat.value}</div>
                  <div className="relative z-10 text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
