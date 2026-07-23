import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, description, icon }) => {
  return (
    <Tilt className="xs:w-[270px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.3 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 25,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-6 px-6 min-h-[300px] flex justify-between items-center flex-col text-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain mb-2" />
          <h3 className="text-white text-[20px] font-bold">
            {title}
          </h3>
          <p className="text-secondary text-[14px] mt-2 leading-[20px]">
            {description}
          </p>
        </div>
      </motion.div>
    </Tilt>
  );
};

const Services = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I Can Do For You</p>
        <h2 className={styles.sectionHeadText}>Services.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Specialized enterprise solutions designed to transform complex business requirements into high-performing, automated, and secure software applications.
      </motion.p>

      <div className="mt-12 flex flex-wrap gap-7 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Services, "services");
