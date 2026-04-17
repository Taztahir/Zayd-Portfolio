// Gallery.jsx
import React from "react";

const projects = [
  {
    title: "Project Name",
    subtitle: "Illustration",
    isText: true,
  },
  { img: "https://source.unsplash.com/random/400x400?windmill" },
  { img: "https://source.unsplash.com/random/400x400?glass" },
  { img: "https://source.unsplash.com/random/400x400?portrait" },
  { img: "https://source.unsplash.com/random/400x400?magnifying" },
  { img: "https://source.unsplash.com/random/400x400?airplane" },
  { img: "https://source.unsplash.com/random/400x400?drone" },
  { img: "https://source.unsplash.com/random/400x400?love" },
];

export default function Gallery() {
  return (
    <div className="bg-orange-500 min-h-screen flex items-center justify-center">
      <div className="grid grid-cols-4 gap-2 w-[90%] max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden group bg-white flex items-center justify-center"
          >
            {project.isText ? (
              <div className="text-center p-4">
                <h3 className="text-xl font-mono font-semibold">
                  {project.title}
                </h3>
                <p className="text-gray-500 font-mono">{project.subtitle}</p>
              </div>
            ) : (
              <img
                src={project.img}
                alt=""
                className="w-full h-full object-cover transform transition duration-500 group-hover:scale-110"
              />
            )}
            {!project.isText && (
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition duration-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
