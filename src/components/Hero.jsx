import { motion } from "framer-motion"
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute flex-row items-start gap-5`}>
      <div className="flex flex-col justify-center items-centers mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
        <div className="w-1 sm:h-80 h-40 violet-gradient"/>
      </div>
      <div>
        <h1 className={`${styles.heroHeadText}text-white`}>
        Hi,I'm 
        <span className="text-[#915eff]">Harry</span> 
        </h1>
        <p className={`${styles.heroHeadText}mt-2 text-white-100`}>
          i am a front end and backend devloper and also i have done server configuration 
        </p>
      </div>
      </div>
    </section>
   )
}
 
export default Hero