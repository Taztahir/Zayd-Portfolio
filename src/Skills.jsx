import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";


/* === Skills data === */
const skills = [
  { name: "HTML", percent: 95, icon: "https://cdn.simpleicons.org/html5/E34F26"},
  { name: "TailwindCSS", percent: 90, icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4"},
  { name: "Bootstrap", percent: 80, icon: "https://cdn.simpleicons.org/bootstrap/7952B3" },
  { name: "CSS", percent: 95, icon: "https://cdn.simpleicons.org/css/663399" },
  { name: "Github", percent: 80, icon: "https://cdn.simpleicons.org/github/fff" },
  { name: "JavaScript", percent: 70, icon: "https://cdn.simpleicons.org/javascript/F7DF1E"},
  { name: "Vercel", percent: 80, icon: "https://cdn.simpleicons.org/vercel/000000" },
  { name: "React", percent: 80, icon: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Django", percent: 80, icon: "https://cdn.simpleicons.org/django/092E20" },
  { name: "Wordpress", percent: 80, icon: "https://cdn.simpleicons.org/wordpress/21759B" },
  { name: "Python", percent: 70, icon: "https://cdn.simpleicons.org/python/3776AB"},
  { name: "ReactNative", percent: 60, icon: "https://cdn.simpleicons.org/react/61DAFB"},
  { name: "TypeScript", percent: 90, icon: "https://cdn.simpleicons.org/typescript/3178C6"},
  { name: "NodeJs", percent: 50, icon: "https://cdn.simpleicons.org/node.js/5FA04E"},
  { name: "Firebase", percent: 80, icon: "https://cdn.simpleicons.org/firebase/DD2C00"},


];

/* === Optimized CountUp hook (updates ~30fps instead of 60fps) === */
const useCountUp = (target, isVisible, duration = 1200, fps = 30) => {
  const [value, setValue] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(progress * target));

      if (progress < 1) {
        rafRef.current = setTimeout(
          () => requestAnimationFrame(step),
          1000 / fps
        );
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [isVisible, target, duration, fps]);

  return value;
};

/* === CountUp component === */
const CountUp = ({ target, isVisible, duration = 1200 }) => {
  const value = useCountUp(target, isVisible, duration, 30);
  return (
    <span className="mt-4 text-gray-200 text-lg font-semibold">{value}%</span>
  );
};

/* === Single skill card === */
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.18 }} // slightly larger stagger
      className="bg-[#12091c] border border-[#2A1454] rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
    >
      <motion.img
        src={skill.icon}
        alt={skill.name}
        initial={{ scale: 0.85, opacity: 1 }}
        animate={inView ? { scale: 1, opacity: 1} : {}}
        whileHover={{ opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 16,
          delay: index * 0.1,
        }}
        className="w-16 h-16 object-contain transition-opacity"
      />

      {/* CountUp starts when card is visible */}
      <CountUp target={skill.percent} isVisible={inView} duration={1200} />

      <span className="mt-2 text-sm text-gray-400">{skill.name}</span>
    </motion.div>
  );
};

/* === Skills section (main) === */
const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-[#0f0715] text-white py-20 px-6 sora overflow-hidden"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-[#8750F7]"
        >
          My Skills
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          viewport={{ once: true }}
          className="mt-4 text-gray-300 max-w-2xl mx-auto"
        >
          We put your ideas and thus your wishes in the form of a unique web
          project that inspires you and your customers.
        </motion.p>

        <div className="mt-12 grid grid-cols-2 justify-center items-center sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((s, i) => (
            <SkillCard key={s.name} skill={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
