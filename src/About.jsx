import React, { useEffect, useState } from "react";
import { Trophy, Briefcase, Grid, Crown, ArrowUpRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import AboutImage from "./assets/about-1.png";

// ---- Stats Data ----
const statsData = [
  { icon: <Trophy size={40} className="text-[#8750F7]" />, value: 14, suffix: "%", label: "Job achievements" },
  { icon: <Briefcase size={40} className="text-[#8750F7]" />, value: 2, suffix: "+", label: "Years of Experience" },
  { icon: <Grid size={40} className="text-[#8750F7]" />, value: 15, suffix: "+", label: "Happy Clients" },
  { icon: <Crown size={40} className="text-[#8750F7]" />, value: 14, suffix: "+", label: "Projects Completed" },
];

// ---- Counter Component ----
const Counter = ({ value, suffix, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return; // only start when visible

    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / value));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span className="text-5xl font-bold text-gray-100">
      {count}
      {suffix}
    </span>
  );
};

// ---- About Section (Stats + Info) ----
const About = () => {
  return (
    <section id="about" className="bg-[#0f0715] text-white py-26 px-6 sora">
      {/* Stats Section */}
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto bg-[#12091c] border border-[#2A1454] rounded-2xl p-10">
          {statsData.map((stat, index) => {
            const ref = React.useRef(null);
            const inView = useInView(ref, { once: true, amount: 0.4 });

            return (
              <motion.div
                ref={ref}
                key={index}
                className="flex flex-col items-center text-center space-y-3"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12, delay: index * 0.2 }}
                >
                  {stat.icon}
                </motion.div>
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
                <p className="text-gray-300">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left Card */}
        <div className="bg-[#12091c] border border-[#2A1454] rounded-2xl p-10 flex flex-col justify-between md:w-1/2">
          <div>
            <h2 className="md:text-4xl text-3xl font-extrabold leading-snug text-[#8750F7]">
              Achievements in my <br className="max-md:hidden"/> professional life.
            </h2>
            <p className="mt-6 text-gray-300 leading-relaxed">
              Since beginning my journey as a freelance designer nearly 2 years ago, 
              I've done remote work for agencies, consulted for startups, and collaborated 
              with talented people to create digital products for both business and consumer use.
            </p>
          </div>
          <a href="#contact">
          <button
            aria-label="Contact Me"
            className="mt-8 inline-flex items-center px-6 py-3 w-fit duration-500 lg:rotate-4 hover:rotate-0 rounded-full bg-[#8750F7] text-white font-semibold hover:bg-purple-700 transition-transform"
          >
            Contact Me <ArrowUpRight className="ml-2 w-5 h-5" />
          </button>
          </a>
        </div>

        {/* Right Card */}
        <div className="bg-[#12091c] border border-[#2A1454] rounded-2xl flex flex-col justify-between md:w-1/2">
          <div className="p-10">
            <h3 className="text-xl font-semibold text-white">Web Developer</h3>
            <p className="mt-4 text-gray-300 leading-relaxed">
              As a Web developer, I work closely with clients to understand their 
              needs and goals for their software or website.
            </p>
          </div>
          <div className="mt-6 flex justify-center px-6 pb-6">
            <img
              src={AboutImage}
              alt="UI Design Mockup"
              className="rounded-lg w-full max-w-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
