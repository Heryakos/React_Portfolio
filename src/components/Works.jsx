import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
      <Tilt
        options={{ max: 20, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full flex flex-col h-full shadow-card border border-[#915eff]/10"
      >
        <div className="relative w-full h-[210px] overflow-hidden rounded-2xl">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl transform transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <div className="absolute inset-0 flex justify-end m-3 gap-2 card-img_hover">
            {live_demo_link && (
              <div
                onClick={() => window.open(live_demo_link.startsWith('http') ? live_demo_link : `https://${live_demo_link}`, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:border hover:border-[#915eff]"
                title="View Live Demo"
              >
                <span className="text-[14px]">🔗</span>
              </div>
            )}

            <div
              onClick={() => window.open(source_code_link || "https://github.com/Heryakos", "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:border hover:border-[#915eff]"
              title="View Code on GitHub"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5 flex-1">
          <h3 className="text-white font-bold text-[20px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] leading-[22px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Case Studies & Solutions</p>
        <h2 className={`${styles.sectionHeadText}`}>Featured Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my real-world enterprise applications, ERPNext custom Frappe modules, interactive 3D platforms, and live deployed web applications.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
