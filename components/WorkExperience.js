"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Briefcase, GraduationCap, Calendar, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";
import timelineData from "@/constants/work-education";

function groupByPlace(data) {
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.place]) grouped[item.place] = [];
    grouped[item.place].push(item);
  });
  return grouped;
}

const parseDate = (dateStr) => {
  if (dateStr === "Present") return new Date();
  const [month, year] = dateStr.split(" ");
  return new Date(`${month} 1, ${year}`);
};

const calculateDateRange = (roles) => {
  if (!roles || roles.length === 0) return "";
  let currentRole = roles[0];
  let [latestStart, latestEnd] = currentRole.date.split(" - ");
  let overallStart = latestStart;
  let overallEnd = latestEnd;

  for (let i = 1; i < roles.length; i++) {
    const nextRole = roles[i];
    const [nextStart, nextEnd] = nextRole.date.split(" - ");
    const currentStartDate = parseDate(overallStart);
    const nextEndDate = parseDate(nextEnd);
    const diffMonths =
      (currentStartDate.getFullYear() - nextEndDate.getFullYear()) * 12 +
      (currentStartDate.getMonth() - nextEndDate.getMonth());
    if (diffMonths <= 1) {
      overallStart = nextStart;
    } else {
      break;
    }
  }
  return `${overallStart} - ${overallEnd}`;
};

export default function WorkExperience() {
  const workData = timelineData.filter((item) => item.icon === "work");
  const educationData = timelineData.filter((item) => item.icon === "school");
  const groupedWork = groupByPlace(workData);
  const groupedEducation = groupByPlace(educationData);

  const colorVariants = {
    primary: {
      gradient: "from-primary-600 to-rose-500",
      skillBg: "bg-primary-500/10 text-primary-300 border-primary-500/20",
      accent: "text-primary-400",
    },
    purple: {
      gradient: "from-purple-600 to-indigo-500",
      skillBg: "bg-purple-500/10 text-purple-300 border-purple-500/20",
      accent: "text-purple-400",
    },
  };

  const ExperienceCard = ({ place, roles, color, index }) => {
    const [isOpen, setIsOpen] = useState(false);
    const latestRole = roles[0];
    const dateRange = calculateDateRange(roles);
    const cv = colorVariants[color];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
      >
        <div className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden hover:border-white/15 transition-all duration-300 group">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-left"
          >
            <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-white flex-shrink-0 shadow-lg">
                <Image
                  src={latestRole.logoUrl}
                  alt={place}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className={`text-xl font-bold text-gray-100 group-hover:${cv.accent} transition-colors`}>{place}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
                  <MapPin size={11} />
                  {latestRole.location}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 sm:w-auto w-full">
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/8">
                <Calendar size={11} />
                <span>{dateRange}</span>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25 }}
                className={`${cv.accent} opacity-60`}
              >
                <ChevronDown size={18} />
              </motion.div>
            </div>
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5 space-y-6 border-t border-white/5 pt-5">
                  {roles.map((role, i) => (
                    <div key={i} className="relative">
                      {i > 0 && (
                        <div className="absolute -left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500/20 to-transparent" />
                      )}

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                        <h4 className={`text-lg font-semibold ${cv.accent}`}>{role.title}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit border border-white/8">
                          <Calendar size={11} />
                          {role.date}
                        </div>
                      </div>

                      <p className="text-gray-400 leading-relaxed mb-3 text-sm">
                        {role.description}
                      </p>

                      {role.skills && (
                        <div className="flex flex-wrap gap-1.5">
                          {role.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className={`text-xs px-2 py-0.5 rounded-md border ${cv.skillBg}`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    );
  };

  const TimelineSection = ({ title, data, icon: Icon, color }) => {
    const cv = colorVariants[color];
    return (
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-8">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cv.gradient} shadow-lg`}>
            <Icon size={20} className="text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        </div>

        <div className="space-y-3">
          {Object.entries(data).map(([place, roles], index) => (
            <ExperienceCard
              key={place}
              place={place}
              roles={roles}
              color={color}
              index={index}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 relative overflow-hidden" id="experience">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary-500/4 rounded-full blur-[80px] -z-10" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-divider" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Journey</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <TimelineSection
            title="Work Experience"
            data={groupedWork}
            icon={Briefcase}
            color="primary"
          />
          <TimelineSection
            title="Education"
            data={groupedEducation}
            icon={GraduationCap}
            color="purple"
          />
        </div>
      </div>
    </section>
  );
}
