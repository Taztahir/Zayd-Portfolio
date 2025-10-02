import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// import ReactSvg from './assets/react.svg';
// import HtmlSvg from './assets/html.svg';
// import TailwindSvg from './assets/tailwindcss.svg';
import BootstrapSvg from './assets/bootstrap.svg';
import CssSvg from './assets/css.svg';
import GithubSvg from './assets/github.svg';
import VercelSvg from './assets/vercel.svg';
import JavaScriptSvg from './assets/javascript.svg';
import DjangoSvg from './assets/django.svg';
import WordpressSvg from './assets/wordpress.svg';
// import ReactNativeSvg from './assets/react.svg';
import PythonSvg from './assets/python.svg';

/* === Skills data === */
const skills = [
  // { name: "React", percent: 80, icon: ReactSvg },
  // { name: "HTML", percent: 90, icon: HtmlSvg },
  // { name: "Tailwindcss", percent: 90, icon: TailwindSvg },
  { name: "Bootstrap", percent: 85, icon: BootstrapSvg },
  { name: "CSS", percent: 99, icon: CssSvg },
  { name: "Github", percent: 80, icon: GithubSvg },
  { name: "Vercel", percent: 80, icon: VercelSvg },
  { name: "Javascript", percent: 93, icon: JavaScriptSvg },
  { name: "Django", percent: 93, icon: DjangoSvg },
  { name: "Wordpress", percent: 93, icon: WordpressSvg },
  // { name: "ReactNative", percent: 60, icon: ReactNativeSvg },
  { name: "Python", percent: 70, icon: PythonSvg }
];


/* === Smooth CountUp component (uses requestAnimationFrame) === */
const CountUp = ({ target, isVisible, duration = 1200 }) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.round(progress * target);
      setValue(current);

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(target); // final exact value
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
    };
  }, [isVisible, target, duration]);

  return (
    <span className="mt-4 text-gray-200 text-lg font-semibold">{value}%</span>
  );
};

/* === Single skill card that detects its own visibility === */
const SkillCard = ({ skill, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.45 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.55, delay: index * 0.12 }}
      className="bg-[#12091c] border border-[#2A1454] rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2"
    >
      {/* Icon with dimmed → clear hover */}
      <motion.img
        src={skill.icon}
        alt={skill.name}
        initial={{ scale: 0.85, opacity: 0.4 }}              // dim on load
        animate={inView ? { scale: 1, opacity: 0.6 } : {}}   // slightly dim in view
        whileHover={{ opacity: 1 }}                          // clear on hover
        transition={{
          type: "spring",
          stiffness: 140,
          damping: 16,
          delay: index * 0.12,
        }}
        className="w-16 h-16 object-contain transition-opacity duration-300"
      />

      {/* CountUp starts only when card is in view */}
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
          We put your ideas and thus your wishes in the form of a unique web project that
          inspires you and your customers.
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
