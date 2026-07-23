import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { whyChooseMe, currentWork } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const WhyChooseMe = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10">
      {/* Why Choose Me Box */}
      <motion.div
        variants={fadeIn("right", "between", 0.2, 0.75)}
        className="flex-1 bg-tertiary p-8 rounded-2xl border border-[#915eff]/20 shadow-card"
      >
        <p className={styles.sectionSubText}>Value & Strengths</p>
        <h2 className={`${styles.sectionHeadText} mb-6`}>Why Choose Me.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {whyChooseMe.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#915eff]/20 flex justify-center items-center text-[#915eff] font-bold text-[14px]">
                ✓
              </div>
              <p className="text-white-100 text-[15px] font-medium">{item}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Currently Working On Box */}
      <motion.div
        variants={fadeIn("left", "between", 0.4, 0.75)}
        className="flex-1 bg-tertiary p-8 rounded-2xl border border-[#915eff]/20 shadow-card flex flex-col justify-between"
      >
        <div>
          <p className={styles.sectionSubText}>Active Focus</p>
          <h2 className={`${styles.sectionHeadText} mb-4`}>Currently Working On.</h2>
          {currentWork.map((work, idx) => (
            <div key={idx} className="mt-2">
              <h3 className="text-white text-[20px] font-bold">{work.organization}</h3>
              <p className="text-[#915eff] text-[15px] font-medium">{work.role}</p>
              <ul className="mt-4 list-disc ml-5 space-y-2">
                {work.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="text-secondary text-[14px] leading-[22px]">
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(WhyChooseMe, "why-me");
