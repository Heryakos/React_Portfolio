import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css'; 
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
  contentStyle={{background:'rgba(var(--bg-tertiary), 0.9)', color:'rgb(var(--text-primary))', border: '1px solid rgba(var(--text-primary), 0.1)', backdropFilter: 'blur(10px)', boxShadow: '0 20px 40px -15px rgba(0,0,0,0.1)'}}
  contentArrowStyle={{borderRight:'7px solid rgba(var(--bg-tertiary), 0.9)'}}
  date={experience.date}
  iconStyle={{background: experience.iconBg}}
  icon= {
    <div className="flex justify-center items-center w-full h-full">
      <img
      src={experience.icon}
      alt={experience.company_name}
      className="w-[60%] h-[60%] object-contain"
      />
    </div>
  } 
  >
    <div>
      <h3 className="text-slate-900 dark:text-white text-[22px] sm:text-[24px] font-bold tracking-tight">
        {experience.title}
      </h3>
      <p className="text-electric-blue font-semibold text-[15px]" style={{margin:0}}>
        {experience.company_name}
      </p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
    {experience.points.map((point,index)=>(
      <li
      key={`experience-point-${index}`}
      className="text-slate-700 dark:text-slate-300 text-[13.5px] sm:text-[14px] pl-1 tracking-normal leading-relaxed"
      >
        {point}
      </li>
    ))}
    </ul>

    {experience.certificate && (
      <div className="mt-4">
        <a
          href={experience.certificate}
          download="Hiryakos_XOKA_Experience_Certificate.pdf"
          className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-500 text-white text-[13px] font-bold py-2 px-4 rounded-full transition-all duration-300 shadow-glow border border-electric-blue"
        >
          <span>📄 Download Experience Letter</span>
        </a>
      </div>
    )}
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>
          My Career Journey
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          (02) EXPERIENCE.
        </h2>
      </motion.div>
      <div className="mt-12 flex flex-col">
        <VerticalTimeline>
        {experiences.map((experience, index) => (
           <ExperienceCard
           key={`experience-${index}`}
           experience={experience}
         />
        ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper (Experience, "experience")