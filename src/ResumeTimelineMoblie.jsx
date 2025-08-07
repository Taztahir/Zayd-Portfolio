import { FaBriefcase } from "react-icons/fa";
import { useEffect, useState } from "react";
import { div } from "framer-motion/client";

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
    side: "left",
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
    side: "",
  },
];


function ResumeTimelineMobile() {
    return(
        <div>
                <h1 className="text-5xl text-[#000000] text-center mb-16 comic-neue-regular">My Resume</h1>
                <div className="text-center comic-neue-bold bg-gray-200 w-28 mx-auto px-2 my-3 py-1">Experience</div>
            {experiences.map((exp, index) => ( 
           <div key={index} className="md:hidden w- mx-5">

                {/* work experience Mobile  */}
                <div>
                    {/* experience  */}
                    <div className="items-center flex flex-col-reverse justify-center py-5 text-center gap-10">
                        {/* briefcase  */}
                        <div className="bg-orange-500 text-white p-4 rounded-full z-10 shadow-md w-14 mx-4 order-1 md:order-none">
                            <FaBriefcase size={24} />
                        </div>
                        {/* Text  */}
                        <div className="space-y-">
                            <h3 className="text-black comic-neue-bold text-2xl">{exp.title}</h3>
                            <p className="text-gray-400 comic-neue-regular">
                                {exp.company} - {exp.date}
                            </p>
                            <p className="mt-4 comic-neue-regular text-lg text-gray-700">
                                {exp.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
        
            )
}
export default ResumeTimelineMobile;