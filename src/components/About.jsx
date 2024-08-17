import React from 'react'
import { Tilt } from 'react-tilt'
import { motion, spring } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
const ServiceCard = ({index, title, icon}) => {
  return(
 <Tilt className='xs:w-[250px] w-full'>
  <motion.div
  variants={fadeIn("right", "spring", 0.5 * index, 0.75)}  
  className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
    <div options={{
      max:10,
      scale:1,
      speed:450
    }}
    className='bg-tertiary rounded-[20px]
    py-5 px-12 min-h-[280] flex 
    justify-evenly items-center flex-col 
    '
    >
      <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
      <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
    </div>
  </motion.div>
 </Tilt>
)
}
const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>
    <motion.p 
    variants ={fadeIn("", "", 0.1, 1)}
    className
    >
        I am harry i crate a robot called robot cop and other 
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) => (<ServiceCard key={service.title}index={index}{...service}/>))}
    </div>
    </>
  )
}

export default About