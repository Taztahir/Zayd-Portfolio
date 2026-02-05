import React, { useEffect, useState } from "react";
import { Trophy, Briefcase, Grid, Crown, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import AboutImage from "./assets/about-1.png";

const statsData = [
  { icon: <Trophy size={40} />, value: 100, suffix: "%", label: "Achievements", color: "bg-primary" },
  { icon: <Briefcase size={40} />, value: 2, suffix: "+", label: "Experience", color: "bg-secondary" },
  { icon: <Grid size={40} />, value: 50, suffix: "+", label: "Clients", color: "bg-accent" },
  { icon: <Crown size={40} />, value: 50, suffix: "+", label: "Projects", color: "bg-cyan-vivid" },
];

const Counter = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const stepTime = Math.abs(Math.floor(duration / value));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-5xl font-black uppercase">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white border-b-[3px] border-black overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {statsData.map((stat, index) => {
            const ref = React.useRef(null);
            const inView = useInView(ref, { once: true, amount: 0.4 });

            return (
              <motion.div
                ref={ref}
                key={index}
                initial={{ rotate: index % 2 === 0 ? 3 : -3, scale: 0.9 }}
                whileInView={{ rotate: index % 2 === 0 ? -2 : 2, scale: 1 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                className={`flex flex-col items-center text-center p-8 border-[3px] border-black shadow-brutal ${stat.color} transition-all`}
              >
                <div className="bg-white border-[3px] border-black p-4 mb-4 shadow-brutal-hover">
                  {stat.icon}
                </div>
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                <p className="font-black uppercase text-sm mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="brutal-card p-6 md:p-10 bg-secondary text-white flex flex-col justify-between"
          >
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase leading-none mb-8">
                BUILDING <br /> <span className="bg-white text-black px-2 shadow-[5px_5px_0px_0px_#3AEE1E] md:shadow-[8px_8px_0px_0px_#3AEE1E]">DIGITAL</span> <br /> REVOLUTIONS
              </h2>
              <p className="text-lg md:text-2xl font-bold leading-relaxed mb-12">
                Nearly 2 years of pushing boundaries as a Full Stack Developer.
                I've worked with startups, agencies, and visionaries to burn down the boring and build the brave.
              </p>
            </div>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, x: 5 }}
              className="brutal-btn bg-white text-black w-fit flex items-center gap-2 text-lg md:text-xl"
            >
              LET'S TALK <ArrowUpRight />
            </motion.a>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="brutal-card p-0 bg-white overflow-hidden flex flex-col"
          >
            <div className="p-6 md:p-10 border-b-[3px] border-black bg-cyan-vivid">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tighter">Full Stack Mastery</h3>
              <p className="text-lg md:text-xl font-bold mt-4 leading-relaxed">
                I bridge the gap between complex logic and stunning aesthetics.
                Every pixel has a purpose, every line of code is a statement.
              </p>
            </div>
            <div className="flex-1 bg-primary relative group cursor-pointer overflow-hidden max-h-[400px]">
              <img
                src={AboutImage}
                alt="Zayd"
                className="w-full h-full object-contain p-8 group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 bg-black py-2 px-4 translate-y-full group-hover:translate-y-0 transition-transform">
                <p className="text-white font-black text-center uppercase tracking-widest">Crafting the future</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
