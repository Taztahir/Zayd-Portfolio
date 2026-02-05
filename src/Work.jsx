import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const sections = [
  {
    title: "EDUCATION",
    icon: <GraduationCap size={32} />,
    color: "bg-cyan-vivid",
    items: [
      {
        role: "Dervac Hub",
        position: "Frontend Development",
        date: "July 2023 - December 2023",
      },
      {
        role: "Udemy",
        position: "Backend Development",
        date: "January 2024 - April 2024",
      },
      {
        role: "Udemy",
        position: "Mobile Development",
        date: "April 2024 - August 2024",
      },
    ],
  },
  {
    title: "EXPERIENCE",
    icon: <Briefcase size={32} />,
    color: "bg-primary",
    items: [
      {
        role: "GravityLab",
        position: "Internship",
        date: "January 2024 - December 2024",
      },
      {
        role: "Yabatech",
        position: "Frontend Tutor",
        date: "June 2025 - August 2025",
      },
      {
        role: "Dervac Hub",
        position: "Frontend Tutor & Developer",
        date: "June 2025 - August 2025",
      },
      {
        role: "Freelancer",
        position: "FullStack Developer",
        date: "January 2025 - Date",
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="resume" className="py-24 bg-white border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            className="text-4xl sm:text-6xl md:text-9xl font-black uppercase leading-none mb-6"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            MY <br /> <span className="text-white bg-black px-2 md:px-4 shadow-[5px_5px_0px_0px_#FACC15] md:shadow-[8px_8px_0px_0px_#FACC15]">JOURNEY</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {sections.map((section, i) => (
            <div key={i} className="flex flex-col gap-8">
              <div className={`flex items-center gap-4 p-4 border-[3px] border-black shadow-brutal ${section.color} w-fit rotate-[-2deg]`}>
                {section.icon}
                <h3 className="text-3xl font-black uppercase">{section.title}</h3>
              </div>

              <div className="relative pl-8 border-l-[4px] border-black space-y-12 ml-4">
                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="absolute -left-[46px] top-2 w-8 h-8 bg-white border-[4px] border-black rounded-full z-10" />

                    <div className="brutal-card p-6 rotate-[1deg] hover:rotate-0">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <h4 className="text-2xl font-black uppercase leading-tight">{item.role}</h4>
                        <span className="bg-black text-white px-3 py-1 text-xs font-black uppercase whitespace-nowrap w-fit">
                          {item.date}
                        </span>
                      </div>
                      <p className="text-xl font-bold text-secondary uppercase">{item.position}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
