"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Briefcase,GraduationCap,Calendar,MapPin } from "lucide-react";
import timelineData from "@/constants/work-education";

function groupByPlace(data) {
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.place]) grouped[item.place] = [];
    grouped[item.place].push(item);
  });
  return grouped;
}

export default function WorkExperience() {
  const workData = timelineData.filter((item) => item.icon === "work");
  const educationData = timelineData.filter((item) => item.icon === "school");
  const groupedWork = groupByPlace(workData);
  const groupedEducation = groupByPlace(educationData);

  const TimelineSection = ({ title,data,icon: Icon,color }) => (
    <div className="flex-1">
      <div className="flex items-center justify-center gap-3 mb-12">
        <div className={`p-3 rounded-xl bg-${color}-500/10 text-${color}-400`}>
          <Icon size={24} />
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>

      <div className="relative space-y-12">
        {Object.entries(data).map(([place,roles],index) => (
          <motion.div
            key={place}
            initial={{ opacity: 0,x: -20 }}
            whileInView={{ opacity: 1,x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white p-1">
                    <Image
                      src={roles[0].logoUrl}
                      alt={place}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{place}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mt-1">
                      <MapPin size={14} />
                      {roles[0].location}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {roles.map((role,i) => (
                  <div key={i} className="relative">
                    {i > 0 && <div className="absolute -left-6 top-0 bottom-0 w-0.5 bg-white/5" />}

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                      <h4 className={`text-lg font-semibold text-${color}-400`}>{role.title}</h4>
                      <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit">
                        <Calendar size={14} />
                        {role.date}
                      </div>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-4 text-sm">
                      {role.description}
                    </p>

                    {role.skills && (
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill,idx) => (
                          <span
                            key={idx}
                            className="text-xs px-2 py-1 rounded-md bg-white/5 text-gray-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-20 relative" id="experience">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0,y: 20 }}
          whileInView={{ opacity: 1,y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary-400">Journey</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
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
