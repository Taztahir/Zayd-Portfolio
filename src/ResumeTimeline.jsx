// ResumeTimeline.jsx
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const experiences = [
  {
    title: "Frontend Training",
    company: "Dervac HUB",
    date: "July 2024 - December 2024",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    side: "left",
  },
  {
    title: "Frontend Tutor",
    company: "Dervac HUB",
    date: "June 2025 - August 2025",
    description:
      "Far far away, behind the word mountains, they live in Bookmarksgrove right at the coast.",
    side: "right",
  },
  {
    title: "Frontend Developer",
    company: "Freelancer",
    date: "August 2025 - Current",
    description:
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    side: "left",
  },
];

export default function ResumeTimeline() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <h1 className="text-5xl text-[#000000] text-center mb-16 comic-neue-regular">My Resume</h1>
        <div className="text-center comic-neue-bold bg-gray-200 max-w-3xs mx-auto py-1">Work Experience</div>
      <div className="relative max-w-screen-xl mx-auto">
        {/* Vertical center line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-200 hidden md:block"></div>

        {experiences.map((exp, index) => {
          const isLeft = exp.side === "left";

          return (
            <motion.div
              key={index}
              initial={!isMobile ? { opacity: 0, x: isLeft ? -100 : 100 } : false}
              whileInView={!isMobile ? { opacity: 1, x: 0 } : false}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`mb-20 flex flex-col md:flex-row items-center w-full ${
                isLeft ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Icon on left if right-side entry */}
              {!isLeft && (
                <div className="bg-orange-500 text-white p-4 rounded-full z-10 shadow-md mx-4 order-1 md:order-none">
                  <FaBriefcase size={24} />
                </div>
              )}

              <div
                className={`w-full md:w-1/2 px-4 md:px-0 ${
                  isLeft ? "md:pr-10 text-right" : "md:pl-10 text-left"
                }`}
              >
                <h3 className="text-3xl comic-neue-bold ">{exp.title}</h3>
                <p className="text-gray-400 comic-neue-regular">
                  {exp.company} - {exp.date}
                </p>
                <p className="mt-4 comic-neue-regular text-lg text-gray-700">{exp.description}</p>
              </div>

              {/* Icon on right if left-side entry */}
              {isLeft && (
                <div className="bg-orange-500 text-white p-4 rounded-full z-10 shadow-md mx-4">
                  <FaBriefcase size={24} />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
