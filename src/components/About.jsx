import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px]"
      >
        I am a Full Stack Developer with over 3 years of experience developing enterprise web applications and ERP solutions using Frappe Framework, ERPNext, Python, JavaScript, Angular, and .NET. Experienced in workflow automation, REST API development, database management, and Linux server deployment. Passionate about building scalable software solutions that improve business operations.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-8">
        {/* Education */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 0.75)}
          className="bg-tertiary p-6 rounded-2xl flex-1 min-w-[280px] border border-[#915eff]/20 shadow-card"
        >
          <h3 className="text-white text-[20px] font-bold mb-4 flex items-center gap-2">
            <span>🎓</span> Education
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold text-[16px]">BSc in Computer Science</h4>
              <p className="text-[#915eff] text-[14px]">St. Mary's University College</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-[16px]">Master of Project Management (MPM)</h4>
              <p className="text-[#915eff] text-[14px]">Alpha University</p>
            </div>
          </div>
        </motion.div>

        {/* Languages */}
        <motion.div
          variants={fadeIn("left", "spring", 0.3, 0.75)}
          className="bg-tertiary p-6 rounded-2xl flex-1 min-w-[280px] border border-[#915eff]/20 shadow-card"
        >
          <h3 className="text-white text-[20px] font-bold mb-4 flex items-center gap-2">
            <span>🌐</span> Languages
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-white font-semibold text-[16px]">Amharic</h4>
              <p className="text-secondary text-[14px]">Native</p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-[16px]">English</h4>
              <p className="text-secondary text-[14px]">Professional Working Proficiency</p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
