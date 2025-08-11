import { div } from "framer-motion/client";

const SkillCircle = ({ percentage, label }) => {
  const circleRadius = 90;
  const strokeWidth = 4;
  const circumference = 2 * Math.PI * circleRadius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center my-8 relative">
      <svg
        height={circleRadius * 2}
        width={circleRadius * 2}
        className="transform -rotate-90"
      >
        {/* Background circle */}
        <circle
          stroke="#f3f4f6" // gray-100
          fill="transparent"
          strokeWidth={strokeWidth}
          r={circleRadius - strokeWidth}
          cx={circleRadius}
          cy={circleRadius}
        />
        {/* Progress circle */}
        <circle
          stroke="orange"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={circleRadius - strokeWidth}
          cx={circleRadius}
          cy={circleRadius}
          style={{ transition: "stroke-dashoffset 1s ease" }}
        />
      </svg>

      {/* Centered text */}
      <div className="absolute flex flex-col items-center justify-center h-[190px] w-[100px]">
        <span className="comic-neue-bold text-lg">{label}</span>
        <span>{percentage}%</span>
      </div>
    </div>
  );
};

function Skills() {
  const skills = [
    { label: "HTML5", percentage: 95 },
    { label: "CSS3", percentage: 93 },
    { label: "Tailwindcss", percentage: 95 },
    { label: "Javascript", percentage: 80 },
    { label: "React", percentage: 85},
    { label: "WordPress", percentage: 70},
    { label: "Git & Github", percentage: 80},

  ];

  return (
    <div className="my-10">
      <h1 className="text-center comic-neue-bold text-5xl">Skills</h1>
      <div className="flex flex-col items-center mt-10">
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
