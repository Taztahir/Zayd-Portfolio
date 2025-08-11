import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const SkillCircle = ({ percentage, label }) => {
  const circleRadius = 90;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * circleRadius;

  // Ref to track when the circle is visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // triggers only once

  const [progress, setProgress] = useState(0);

  // Animate the circle when it becomes visible
  useEffect(() => {
    if (isInView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        setProgress(start);
        if (start >= percentage) clearInterval(interval);
      }, 10); // speed of animation
    }
  }, [isInView, percentage]);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div ref={ref} className="flex flex-col items-center my-8 relative">
      <svg
        height={circleRadius * 2}
        width={circleRadius * 2}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke="#f3f4f6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={circleRadius - strokeWidth}
          cx={circleRadius}
          cy={circleRadius}
        />
        {/* Progress circle */}
        <motion.circle
          stroke="orange"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={circleRadius - strokeWidth}
          cx={circleRadius}
          cy={circleRadius}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Centered text */}
      <div className="absolute flex flex-col items-center justify-center h-[180px] w-[180px]">
        <span className="comic-neue-bold text-lg">{label}</span>
        <span className="comic-neue-regular">{progress}%</span>
      </div>
    </div>
  );
};

function Skills() {
  const skills = [
    { label: "HTML5", percentage: 95 },
    { label: "CSS3", percentage: 93 },
    { label: "TailwindCSS", percentage: 90 },
    { label: "Javascript", percentage: 80 },
    { label: "React", percentage: 80 },
    { label: "Git & Github", percentage: 70 },
    { label: "WordPress", percentage: 70 },
    { label: "React Native", percentage: 30 },
  ];

  return (
    <div className="my-20">
      <h1 className="text-center comic-neue-bold text-5xl">Skills</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 justify-items-center mt-10">
        {skills.map((skill, index) => (
          <SkillCircle
            key={index}
            label={skill.label}
            percentage={skill.percentage}
          />
        ))}
      </div>
    </div>
  );
}

export default Skills;
