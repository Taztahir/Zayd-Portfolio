import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "EDUCATION",
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
    items: [
      {
        role: "GravityLab",
        position: "Internship",
        date: "January 2024 - december 2024",
      },
       {
        role: "Dervac Hub",
        position: "Frontend Tutor",
        date: "June 2025 - August 2025",
      },
      {
        role: "Freelancer",
        position: "FullStack Developer",
        date: "January 2025 - Date",
      },
    ],
  },
//   {
//     title: "PAST ROLES",
//     items: [
//       {
//         role: "LION PARCEL",
//         position: "Product Designer",
//         date: "February 2024 - Present",
//       },
//       {
//         role: "ENVER STUDIO",
//         position: "Product Designer",
//         date: "May 2024 - Present",
//       },
//       {
//         role: "TOKO DISTRIBUTOR",
//         position: "Product Designer",
//         date: "March 2024 - Present",
//       },
//     ],
//   },
];

const ExperienceSection = () => {
  return (
    <section id="resume" className="min-h-screen bg-[#0f0715] text-white py-20 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-semibold text-center mb-12"
      >
        <span className="text-[#8750F7]">Education</span> & Work Experience
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {sections.map((section, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 border border-purple-800/30"
          >
            <h3 className="text-[#8750F7] font-bold mb-6">{section.title}</h3>
            <div className="space-y-6 relative">
              {section.items.map((item, idx) => (
                <div key={idx} className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-[#8750F7] rounded-full"></span>
                  {idx !== section.items.length - 1 && (
                    <motion.span
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="absolute left-[3px] top-4 w-[2px] bg-purple-600"
                    ></motion.span>
                  )}
                  <h4 className="font-semibold text-lg">{item.role}</h4>
                  <p className="text-gray-300 text-sm">{item.position}</p>
                  <p className="text-gray-400 text-xs">{item.date}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default ExperienceSection;