"use client";
import { motion } from "framer-motion";
import interviewExperiences from "@/constants/interviews";
import Link from "next/link";
import { BadgeCheck,Calendar,User,BookOpen,Layers,Code,MessageSquare,Terminal,HelpCircle,Lightbulb,ArrowLeft } from "lucide-react";

export default function InterviewExperiencePage() {
    return (
        <main className="min-h-screen bg-gray-50 dark:bg-dark-bg pt-12 pb-20">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0,x: -20 }}
                    animate={{ opacity: 1,x: 0 }}
                    className="mb-12"
                >
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-400 transition-colors group px-4 py-2 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm"
                    >
                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0,y: 20 }}
                    animate={{ opacity: 1,y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                        Interview <span className="text-primary-400">Experiences</span>
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center leading-relaxed">
                        A comprehensive log of my technical interviews, including questions asked, system design challenges, and behavioral discussions.
                    </p>
                </motion.div>

                <div className="space-y-24">
                    {interviewExperiences.map((exp,idx) => (
                        <motion.section
                            key={idx}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-gray-200 dark:border-white/10">
                                <div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                                        {exp.company}
                                    </h2>
                                    <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                                        {exp.role && (
                                            <span className="flex items-center gap-1.5">
                                                <User size={16} className="text-primary-400" />
                                                {exp.role}
                                            </span>
                                        )}
                                        {exp.date && (
                                            <span className="flex items-center gap-1.5">
                                                <Calendar size={16} className="text-primary-400" />
                                                {exp.date}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-400/10 text-primary-400 border border-primary-400/20 text-sm font-semibold">
                                    <BadgeCheck size={18} />
                                    <span>Verified Experience</span>
                                </div>
                            </div>

                            <div className="">
                                {exp.rounds.map((round,rIdx) => (
                                    <div key={rIdx} className="relative pl-8 border-l-2 border-primary-400/20 pb-12 last:pb-0">
                                        <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary-400 border-4 border-white dark:border-dark-bg shadow-sm" />

                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                                                {round.name}
                                            </h3>
                                            <div className="flex flex-wrap gap-3 text-xs">
                                                {round.interviewer && (
                                                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                        <User size={12} /> {round.interviewer}
                                                    </span>
                                                )}
                                                {round.date && (
                                                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                                        <Calendar size={12} /> {round.date}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {round.questions.map((q,qIdx) => (
                                                <div
                                                    key={qIdx}
                                                    className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/10 transition-all group"
                                                >
                                                    <div className="flex items-start gap-4">
                                                        <div className="mt-1 p-2 rounded-xl bg-primary-400/10 text-primary-400 group-hover:scale-110 transition-transform">
                                                            {getIconForType(q.type)}
                                                        </div>
                                                        <div>
                                                            <span className="text-[10px] uppercase tracking-widest font-bold text-primary-400 mb-2 block">
                                                                {q.type}
                                                            </span>
                                                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed font-medium">
                                                                {q.content}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {round.notes && (
                                            <div className="mt-6 p-6 rounded-2xl bg-primary-400/5 border border-primary-400/10">
                                                <div className="flex items-center gap-2 mb-3 text-primary-400 font-bold text-xs uppercase tracking-widest">
                                                    <Lightbulb size={16} />
                                                    <span>Technical Notes</span>
                                                </div>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm italic leading-relaxed">
                                                    "{round.notes}"
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.section>
                    ))}
                </div>
            </div>
        </main>
    );
}

function getIconForType(type) {
    const t = type.toLowerCase();
    if (t.includes('coding') || t.includes('algorithm')) return <Code size={14} />;
    if (t.includes('java') || t.includes('python') || t.includes('js') || t.includes('technical')) return <Terminal size={14} />;
    if (t.includes('system design') || t.includes('architecture')) return <Layers size={14} />;
    if (t.includes('behavioral') || t.includes('resume') || t.includes('general')) return <MessageSquare size={14} />;
    if (t.includes('puzzle') || t.includes('logic')) return <HelpCircle size={14} />;
    return <BookOpen size={14} />;
}
