"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import awards from "@/constants/awards";

export default function AchievementsPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-12 pb-20 dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-gray-600 transition-colors hover:text-primary-400 dark:border-white/10 dark:bg-white/5 dark:text-gray-400"
          >
            <ArrowLeft
              size={18}
              className="transition-colors"
            />
            <span className="font-medium">Back to Portfolio</span>
          </Link>
        </motion.div>

        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 text-center"
        >
          <div className="section-divider" />
          <h1 className="mb-4 text-3xl font-bold md:text-4xl">
            Achievements <span className="text-primary-400">&amp; Awards</span>
          </h1>
          <p className="mx-auto max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            A few milestones that reflect my curiosity, creativity, and growth.
          </p>
        </motion.header>

        <div className="mx-auto max-w-5xl space-y-8">
          {awards.map((achievement, index) => (
            <motion.article
              key={achievement.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="grid overflow-hidden rounded-2xl border border-white/10 bg-white/3 md:grid-cols-2"
            >
              <div className="flex flex-col justify-center p-6 md:p-9">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-primary-400/20 bg-primary-400/10 text-primary-400">
                  <Award size={21} aria-hidden="true" />
                </div>
                <p className="mb-2 text-sm font-semibold tracking-wide text-primary-400">
                  {achievement.year}
                </p>
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100 md:text-2xl">
                  {achievement.title}
                </h2>
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  {achievement.description}
                </p>
              </div>

              <div className="relative min-h-64 bg-white p-4 md:min-h-80 md:p-6">
                <Image
                  src={achievement.image}
                  alt={achievement.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-4"
                />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}
