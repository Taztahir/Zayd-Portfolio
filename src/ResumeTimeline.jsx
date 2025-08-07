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
      "Acquired hands-on knowledge of Front-end Development skills, delving into HTML5, CSS, TAILWIND, REACTJS and JAVASCRIPT. I also gained a solid foundation in Git and Git Hub and also gaining experience in collaborating with Team Members.",
    side: "left",
  },
  {
    title: "Frontend Internship",
    company: "Gravity Lab",
    date: "January 2025 - Current",
    description:
      "Collaborated with a team of developers to build responsive user interfaces using React.js and Tailwind CSS. Gained practical experience working with REST APIs, Git version control, and debugging tools. Improved code quality through regular reviews and learned agile development practices in a real-world environment.",
    side: "right",
  },
  {
    title: "Frontend Tutor",
    company: "Dervac HUB",
    date: "June 2025 - August 2025",
    description:
      "Guided beginners at YABATECH Secondary school through the fundamentals of frontend development, including HTML, CSS, JavaScript, and Tailwind CSS. Created learning materials, offered one-on-one support, and helped students build real-world projects. Improved my communication skills and deepened my understanding of core frontend concepts through teaching.",
    side: "left",
  },
  {
    title: "Frontend Developer",
    company: "Freelancer",
    date: "August 2025 - Current",
    description:
      "Worked independently with clients to design and develop responsive, user-friendly web interfaces using React.js, Tailwind CSS, Bootstrap, and JavaScript. Translated client requirements into functional websites, implemented interactive components, and ensured mobile-first design and cross-browser compatibility. Utilized Git and GitHub for version control and project collaboration. Gained experience in project management, remote communication, and delivering high-quality work within deadlines.",
    side: "right",
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
    <section className="bg-white py-16 px-4 overflow-hidden max-md:hidden">
      <h1 className="text-5xl text-[#000000] text-center mb-16 comic-neue-regular">My Resume</h1>
        <div className="text-center comic-neue-bold bg-gray-200 max-w-28 mx-auto py-1">Experience</div>
      <div className="relative max-w-screen-xl mx-auto ">
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
      <div>

      </div>
    </section>
  );
}
