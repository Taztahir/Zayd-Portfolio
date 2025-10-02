import React from "react";
import { motion } from "framer-motion";
import { Code2, GitBranch } from "lucide-react";

export default function Specialization() {
  const data = [
    {
      id: 1,
      icon: <Code2 className="w-6 h-6 text-white" />,
      title: "Web Development",
      desc: "Building modern, scalable, and user-friendly web solutions.",
      projects: "10 PROJECTS",
    },
    {
      id: 2,
      icon: <GitBranch className="w-6 h-6 text-white" />,
      title: "Mobile Development",
      desc: "Transforming ideas into interactive digital experiences.",
      projects: "5 PROJECTS",
    },
  ];

  return (
    <section id="service" className="bg-[#0F0715] py-20 px-6 md:px-20">
      {/* Heading */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-[#8750F7] mb-10"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        My <span className="text-white">Specialization</span>
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((item, i) => (
          <motion.div
            key={item.id}
            className="bg-gradient-to-b from-[#2A1454] to-[#0F0715] p-6 rounded-2xl shadow-lg relative"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#8750F7] mb-6">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-300 mb-6">{item.desc}</p>

            {/* Projects Link */}
            <a
              href="#"
              className="underline text-[#8750F7] font-medium hover:text-purple-400 transition"
            >
              {item.projects}
            </a>

            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
