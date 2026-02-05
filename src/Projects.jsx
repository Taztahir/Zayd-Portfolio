import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Monitor, X, Minus, Square } from "lucide-react";
import TymcampImage from "./assets/Tym-camp1.png";
import TymcampImage2 from "./assets/Tym-camp2.png";
import ClipfyImage1 from "./assets/Clipfy1.png";
import SparkcodeImage from "./assets/Sparkcode.png";

const WindowHeader = ({ title, color = "bg-black" }) => (
  <div className={`${color} p-2 border-b-[3px] border-black flex justify-between items-center`}>
    <span className="text-white font-black uppercase text-sm flex items-center gap-2">
      <Monitor size={14} /> {title}
    </span>
    <div className="flex gap-2">
      <div className="w-3 h-3 bg-white border-[2px] border-black" />
      <div className="w-3 h-3 bg-white border-[2px] border-black" />
      <div className="w-3 h-3 bg-white border-[2px] border-black" />
    </div>
  </div>
);

const ProjectCard = ({ image, category, title, description, tags, links, color = "bg-primary" }) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5, x: -5, shadow: "12px 12px 0px 0px black" }}
      className={`border-[3px] border-black shadow-brutal flex flex-col h-full bg-white group`}
    >
      <WindowHeader title={category} color={color === "bg-primary" ? "bg-black" : "bg-secondary"} />

      <div className="p-4 flex-1 flex flex-col">
        <div className="border-[3px] border-black mb-4 overflow-hidden aspect-video bg-gray-100">
          <img src={image} alt={title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
        </div>

        <h3 className="text-3xl font-black uppercase mb-2 tracking-tighter">{title}</h3>
        <p className="font-bold text-lg mb-6 leading-tight flex-1">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-black text-white px-3 py-1 text-xs font-black uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={links}
          target="_blank"
          className={`w-full text-center py-3 border-[3px] border-black font-black uppercase shadow-brutal-hover active:shadow-none active:translate-x-[2px] active:translate-y-[2px] transition-all bg-accent`}
        >
          View Project
        </a>
      </div>
    </motion.div>
  );
};

export default function RecentProjects() {
  const projects = [
    {
      image: ClipfyImage1,
      category: "SaaS App",
      title: "Clipfy",
      description: "Precision-driven AI video orchestration platform. Full stack execution with real-time feedback.",
      tags: ["React", "Firebase", "Node.js", "Tailwind"],
      links: "https://clipfy-omega.vercel.app/",
      color: "bg-secondary"
    },
    {
      image: SparkcodeImage,
      category: "Web Platform",
      title: "Sparkcode",
      description: "A high-performance educational platform for modern developers. Clean architecture and seamless UX.",
      tags: ["React", "Firebase", "Tailwind"],
      links: "https://sparkcode-admin.vercel.app/",
      color: "bg-primary"
    },
  ];

  return (
    <section id="project" className="bg-white py-24 px-6 border-b-[3px] border-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <motion.h2
              className="text-4xl sm:text-6xl md:text-9xl font-black uppercase leading-none"
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
            >
              SELECTED <br /> <span className="text-secondary">WORKS</span>
            </motion.h2>
          </div>
          <motion.div
            className="bg-primary p-6 border-[3px] border-black shadow-brutal -rotate-3 hidden lg:block"
            animate={{ rotate: [-3, 3, -3] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <div className="font-black text-xl uppercase">Full Stack Proof</div>
          </motion.div>
        </div>

        {/* Featured Project */}
        <motion.div
          className="border-[4px] border-black shadow-brutal-lg mb-16 bg-white overflow-hidden flex flex-col lg:flex-row"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="lg:w-1/2 border-b-[4px] lg:border-b-0 lg:border-r-[4px] border-black bg-cyan-vivid p-6 md:p-8 flex flex-col justify-center">
            <div className="inline-block bg-black text-white px-4 py-1 font-black uppercase mb-4 w-fit text-sm">Featured NGOs</div>
            <h3 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">TYM CAMP <br /> PLATFORM</h3>
            <p className="text-lg md:text-2xl font-bold mb-8 leading-snug">
              Achieving marketing targets through precision and high-impact design.
              A website that doesn't just look good—it performs.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {["React", "TypeScript", "PayStack", "Firebase"].map(tag => (
                <span key={tag} className="bg-white border-[2px] border-black px-4 py-1 font-black uppercase text-xs md:text-sm">{tag}</span>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://tym-camp-platform.vercel.app/" target="_blank" className="brutal-btn bg-black text-white flex items-center gap-2 text-sm md:text-base">
                Live Demo <ExternalLink size={20} />
              </a>
              <div className="bg-white border-[3px] border-black p-3 md:p-4 shadow-brutal flex items-center justify-center">
                <Github size={24} />
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-100 p-4 relative group overflow-hidden min-h-[250px] md:min-h-0">
            <motion.img
              src={TymcampImage2}
              alt="Project"
              className="w-full h-full object-cover border-[3px] border-black shadow-brutal group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4 md:top-10 md:left-10 bg-accent p-2 md:p-4 border-[3px] border-black shadow-brutal font-black uppercase rotate-[-10deg] z-20 text-xs md:text-base">
              100% Impact
            </div>
          </div>
        </motion.div>

        {/* Other Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

