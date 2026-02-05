import React from "react";
import { motion } from "framer-motion";
import { Code2, Smartphone, Terminal, Cpu } from "lucide-react";

export default function Specialization() {
  const data = [
    {
      id: 1,
      icon: <Code2 size={48} />,
      title: "Web Development",
      desc: "Building modern, scalable, and user-friendly full stack solutions that burn down the boring.",
      projects: "15+ PROJECTS",
      color: "bg-primary"
    },
    {
      id: 2,
      icon: <Smartphone size={48} />,
      title: "Mobile Apps",
      desc: "Transforming clashing ideas into interactive, high-performance digital experiences.",
      projects: "8+ PROJECTS",
      color: "bg-secondary"
    },
    {
      id: 3,
      icon: <Terminal size={48} />,
      title: "Backend Magic",
      desc: "Architecting robust systems that hold the chaos together with precision logic.",
      projects: "12+ PROJECTS",
      color: "bg-accent"
    },
    {
      id: 4,
      icon: <Cpu size={48} />,
      title: "AI & Automation",
      desc: "Integrating intelligent agents into workflows to redefine the possible.",
      projects: "5+ PROJECTS",
      color: "bg-cyan-vivid"
    },
  ];

  return (
    <section id="service" className="bg-white py-24 px-6 border-b-[3px] border-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8 text-center md:text-left">
          <motion.h2
            className="text-4xl sm:text-6xl md:text-9xl font-black uppercase leading-none"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
          >
            MY <br /> <span className="text-white bg-black px-2 md:px-4 shadow-[5px_5px_0px_0px_#FF006E] md:shadow-[8px_8px_0px_0px_#FF006E]">EXPERTISE</span>
          </motion.h2>

          <motion.div
            className="max-w-md bg-accent p-6 border-[3px] border-black shadow-brutal rotate-3"
            animate={{ rotate: [3, -3, 3] }}
          >
            <p className="text-xl font-black uppercase italic">"Delivering high-voltage digital impact."</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={item.id}
              className={`brutal-card p-8 flex flex-col items-center text-center ${item.color}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10, rotate: i % 2 === 0 ? 2 : -2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white border-[3px] border-black p-6 mb-8 shadow-brutal-hover">
                {item.icon}
              </div>

              <h3 className="text-3xl font-black uppercase mb-4 leading-tight">
                {item.title}
              </h3>

              <p className="font-bold text-lg mb-8 flex-1">
                {item.desc}
              </p>

              <div className="w-full bg-black text-white py-2 font-black uppercase tracking-widest text-sm border-[2px] border-black">
                {item.projects}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

