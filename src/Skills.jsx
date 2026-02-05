import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", color: "bg-primary", icon: "https://cdn.simpleicons.org/html5/000000" },
  { name: "TailwindCSS", color: "bg-cyan-vivid", icon: "https://cdn.simpleicons.org/tailwindcss/000000" },
  { name: "CSS", color: "bg-secondary", icon: "https://cdn.simpleicons.org/css3/000000" },
  { name: "JavaScript", color: "bg-accent", icon: "https://cdn.simpleicons.org/javascript/000000" },
  { name: "React", color: "bg-primary", icon: "https://cdn.simpleicons.org/react/000000" },
  { name: "Django", color: "bg-secondary", icon: "https://cdn.simpleicons.org/django/000000" },
  { name: "Python", color: "bg-accent", icon: "https://cdn.simpleicons.org/python/000000" },
  { name: "TypeScript", color: "bg-cyan-vivid", icon: "https://cdn.simpleicons.org/typescript/000000" },
  { name: "NodeJs", color: "bg-primary", icon: "https://cdn.simpleicons.org/node.js/000000" },
  { name: "Firebase", color: "bg-secondary", icon: "https://cdn.simpleicons.org/firebase/000000" },
  { name: "Github", color: "bg-accent", icon: "https://cdn.simpleicons.org/github/000000" },
  { name: "Vercel", color: "bg-cyan-vivid", icon: "https://cdn.simpleicons.org/vercel/000000" },
];

const SkillSticker = ({ skill, index }) => (
  <motion.div
    initial={{ scale: 0, rotate: -45 }}
    whileInView={{ scale: 1, rotate: (index % 2 === 0 ? 5 : -5) }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
    className={`p-6 border-[3px] border-black shadow-brutal flex flex-col items-center justify-center gap-4 ${skill.color} cursor-pointer transition-shadow hover:shadow-brutal-lg`}
  >
    <img src={skill.icon} alt={skill.name} className="w-16 h-16 object-contain grayscale brightness-0" />
    <span className="font-black uppercase text-lg">{skill.name}</span>
  </motion.div>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-white border-y-[3px] border-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl text-left">
            <motion.h2
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="text-4xl sm:text-5xl md:text-8xl font-black uppercase mb-6"
            >
              My <br /> <span className="text-white bg-black px-2 md:px-4 shadow-[5px_5px_0px_0px_#3AEE1E] md:shadow-[8px_8px_0px_0px_#3AEE1E]">Arsenal</span>
            </motion.h2>
            <p className="text-xl md:text-2xl font-bold leading-relaxed">
              A Full Stack toolkit designed to build robust, scalable, and visually clashing digital products.
            </p>
          </div>

          <motion.div
            className="hidden md:block bg-secondary p-8 border-[3px] border-black shadow-brutal rotate-3"
            animate={{ rotate: [3, -3, 3] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-4xl font-black text-white uppercase tracking-tighter">
              Full Stack <br /> Mastery
            </div>
          </motion.div>
        </div>

        {/* Marquee Effect for horizontal movement */}
        <div className="mb-12 overflow-hidden py-4">
          <motion.div
            className="flex whitespace-nowrap gap-8"
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {[...skills, ...skills].map((s, i) => (
              <div key={i} className="flex items-center gap-4 px-8 py-4 border-[3px] border-black bg-primary font-black uppercase text-2xl shadow-brutal">
                <img src={s.icon} className="w-8 h-8 grayscale brightness-0" alt="" />
                {s.name}
              </div>
            ))}
          </motion.div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
          {skills.map((s, i) => (
            <SkillSticker key={i} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
