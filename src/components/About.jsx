import React from 'react'
import { Tilt } from 'react-tilt'
import { motion, spring } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
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
        My name is Barry Allen. I am the fastest man alive.
Barry: When I was 11, my mother was murdered. I saw a ball of lightning. Inside the lightning there was a man. He killed my mom.
Barry's Dad: I swear to God I didn't do this.
Young Barry: Where's mom?
Barry (Narration): What happened that night was impossible. Then an accident made me the impossible.
Wells: You've been in a comma.
Barry: For how long?
Wells: Nine Months.
Frost: Your muscles should be atrophied, but instead they're in a state of cellular regeneration.
Barry: I wasn't the only one affected, was I?
Wells: We've been searching for other meta humans like yourself.
Barry: All my life I've wanted to do more. and the first chance I get to help someone, I screw up.
Oliver: The good you do must far outweigh the bad.
Barry: You're not going to be in here much longer. Whoever killed mom, I think I finally have a way to find them. 
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
    {services.map((service, index) => (<ServiceCard key={service.title}index={index}{...service}/>))}
    </div>
    </>
  )
}

export default SectionWrapper (About, "about")