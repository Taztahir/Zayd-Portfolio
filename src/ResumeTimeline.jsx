import React from "react";
import PresentoImage from "./assets/Presento.png";
import ProfileImage from "./assets/profile.svg";
import ClipfyImage1 from './assets/Clipfy1.png'
import ClipfyImage2 from './assets/Runspadi.png'


// Reusable Project Card for grid projects
const ProjectCard = ({ image, category, title, description, tags, links }) => {
  return (
    <div className="bg-[#1a1329] border border-purple-900 rounded-2xl p-6 flex flex-col hover:scale-[1.02] transition duration-300">
      <a href={links} target="blank">
      {/* Image */}
      <div className="rounded-xl bg-[#10171C] flex justify-center p-5 items-center mb-6 overflow-hidden">
        <img src={image} alt={title} className="lg:size-90" />
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
    </div>
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
      links: "https://clipfy-omega.vercel.app/"
    },
    {
      image: ClipfyImage2, 
      category: "Transport & Logistics",
      title: "Runspadi",
      description: "Project was about precision and information. That’s all.",
      tags: ["HTML", "React", "TailwindCSS", "JavaScript"],
      links: "https://runspadi.vercel.app/"
    },
  ];

  return (
    <section id="resume" className="bg-[#0F0715] py-20 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-[#8750F7] mb-12">
          Recent Projects
        </h2>

        {/* === FEATURED PROJECT === */}
        <div className="bg-[#1a1329] rounded-2xl p-10 flex flex-col md:flex-row gap-10 mb-16">
          {/* Left Content */}
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <p className="text-[#8750F7] text-sm mb-2">Social Website</p>
              <h3 className="text-3xl font-bold mb-4">Presento</h3>
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
          <div className="md:flex bg-gray-800 p-4 rounded-xl justify-center md:space-x-6 items-center">
            <div className="shadow-lg">
              <a href="https://presento-lovat.vercel.app/">
              <img
                src={PresentoImage}
                alt="Project Preview"
                className="h-[500px] w-full object-cover"
              />
              </a>
            </div>
            <div className="shadow-lg max-md:hidden">
              <a href="https://presento-lovat.vercel.app/">
              <img
                src={PresentoImage}
                alt="Project Preview"
                className="h-[500px] w-full object-cover"
              />
              </a>
            </div>
          </div>
        </div>

        {/* === OTHER PROJECTS GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
