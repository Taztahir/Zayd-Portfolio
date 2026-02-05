import React, { useEffect, useState } from "react";
import { Trophy, Briefcase, Grid, Crown } from "lucide-react";
import { motion, useInView } from "framer-motion";

const statsData = [
  { icon: <Trophy size={40} className="text-[#8750F7]" />, value: 100, suffix: "%", label: "Job achievements" },
  { icon: <Briefcase size={40} className="text-[#8750F7]" />, value: 2, suffix: "+", label: "Years of Experience" },
  { icon: <Grid size={40} className="text-[#8750F7]" />, value: 50, suffix: "+", label: "Happy Clients" },
  { icon: <Crown size={40} className="text-[#8750F7]" />, value: 50, suffix: "+", label: "Project Completed" },
];

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

const StatsSection = () => {
  return (
    <section className="bg-[#0f0715] sora text-white py-16 px-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto bg-[#12091c] border border-[#2A1454] rounded-2xl p-10">
        {statsData.map((stat, index) => {
          // hook for visibility
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
    </section>
  );
};

export default StatsSection;
