import React from "react";
import { motion } from "framer-motion";
import TymcampImage from "./assets/Tym-camp1.png";
import TymcampImage2 from "./assets/Tym-camp2.png";
import PresentoImage from "./assets/Presento.png";
import ProfileImage from "./assets/profile.svg";
import ClipfyImage1 from "./assets/Clipfy1.png";
import ClipfyImage2 from "./assets/Runspadi.png";

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

// Reusable Project Card for grid projects
const ProjectCard = ({ image, category, title, description, tags, links }) => {
  return (
    <motion.div
      variants={fadeUp}
      className="bg-[#1a1329] border border-[#2A1454] rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition duration-300"
    >
      <a href={links} target="blank">
        {/* Image */}
        <div className="rounded-xl bg-[#10171C] flex justify-center p-5 items-center mb-6 overflow-hidden">
          <img src={image} alt={title} className="lg:size-99" />
        </div>

        {/* Category */}
        <p className="text-[#8750F7] text-sm mb-1">{category}</p>

        {/* Title */}
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>

        {/* Description */}
        <p className="text-gray-300 mb-5">{description}</p>

        {/* Tags */}
        <div className="flex gap-3 flex-wrap mt-auto">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="bg-[#8750F7] text-white px-4 py-1 rounded-full text-sm rotate-3 hover:rotate-0 transition"
            >
              {tag}
            </span>
          ))}
        </div>
      </a>
    </motion.div>
  );
};

export default function RecentProjects() {
  const projects = [
    {
      image: ClipfyImage1,
      category: "Saas",
      title: "Clipfy",
      description: "Project was about precision and information. That’s all.",
      tags: ["HTML", "React", "TailwindCSS", "JavaScript", "Firebase", "Firestore"],
      links: "https://clipfy-omega.vercel.app/",
    },
    {
      image: ClipfyImage2,
      category: "Transport & Logistics",
      title: "Runspadi",
      description: "Project was about precision and information. That’s all.",
      tags: ["HTML", "React", "TailwindCSS", "JavaScript"],
      links: "https://runspadi-ygam.vercel.app/ ",
    },
  ];

  return (
    <section id="project" className="bg-[#0F0715] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          className="text-4xl font-bold text-[#8750F7] mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Recent Projects
        </motion.h2>

        {/* === FEATURED PROJECT === */}
        <motion.div
          className="bg-[#1a1329] rounded-2xl p-10 flex flex-col md:flex-row gap-10 mb-16"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-[#8750F7] text-sm mb-2">Social Website</p>
              <h3 className="text-3xl font-bold mb-4">Tym Camp Platform</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Project was about precision and information. That’s all. I help
                clients achieve their marketing target and create a website
                that’s appealing.
              </p>

              {/* Tags */}
              <div className="flex gap-3 mb-8 flex-wrap">
                <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 transition">
                  HTML
                </span>
                <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 transition">
                  React
                </span>
                <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 transition">
                  TailwindCSS
                </span>
                <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 transition">
                  TypeScript
                </span>
                <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 transition">
                  Firebase
                </span>
                <span className="bg-[#8750F7] px-4 py-1 rounded-full text-sm rotate-5 hover:rotate-0 transition">
                  PayStack
                </span>
              </div>

              {/* Testimonial */}
              <blockquote className="italic text-gray-300 mb-6">
                “The service was excellent. Template example is the next killer
                app.”
              </blockquote>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 mt-4">
              <img
                src={ProfileImage}
                alt="author"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="font-semibold text-white">Tahir Zayd</p>
                <p className="text-sm text-gray-400">Web Developer</p>
              </div>
            </div>
          </div>

          {/* Right Image Preview */}
          <motion.div
            className="md:flex bg-gray-800 p-4 rounded-xl justify-center md:space-x-6 items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="shadow-lg">
              <a href="https://presento-lovat.vercel.app/">
                <img
                  src={TymcampImage2}
                  alt="Project Preview"
                  className="h-[500px] lg:w-[300px] w-full object-cover"
                />
              </a>
            </div>
            <div className="shadow-lg max-md:hidden">
              <a href="https://presento-lovat.vercel.app/">
                <img
                  src={TymcampImage}
                  alt="Project Preview"
                  className="h-[500px] lg:w-[300px] w-full object-cover"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* === OTHER PROJECTS GRID === */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
