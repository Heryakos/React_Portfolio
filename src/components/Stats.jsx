import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { statistics } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Stats = () => {
  return (
    <div className="w-full flex flex-wrap justify-around items-center gap-6 bg-tertiary p-8 rounded-2xl shadow-card">
      {statistics.map((stat, index) => (
        <motion.div
          key={stat.label}
          variants={fadeIn("up", "spring", index * 0.2, 0.75)}
          className="flex flex-col items-center justify-center text-center p-4 min-w-[160px]"
        >
          <h3 className="text-[#915eff] text-[40px] font-extrabold">{stat.count}</h3>
          <p className="text-secondary text-[15px] font-medium mt-1">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default SectionWrapper(Stats, "stats");
