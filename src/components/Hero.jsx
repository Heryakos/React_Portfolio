import { motion } from "framer-motion"
import {styles} from '../styles'
import {ComputersCanvas} from './canvas'
import { resume } from "../assets"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 pointer-events-none z-10`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div className="pointer-events-auto">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Hiryakos Meles</span> 
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
            Software Developer specializing in enterprise web applications, ERP solutions (Frappe/ERPNext), Python, Angular, & .NET.
          </p>
          
          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <a
              href={resume}
              download="Hiryakos_Meles_Resume.pdf"
              className="bg-[#915eff] hover:bg-[#804bee] text-white font-bold py-3 px-6 rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 border border-[#915eff]"
            >
              <span>Download CV</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="bg-transparent hover:bg-white/10 text-white font-bold py-3 px-6 rounded-xl border border-secondary transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      
      {/* 3D Canvas or Mobile Fallback */}
      <div className="w-full h-full absolute inset-0 z-0 flex items-end justify-center md:items-stretch">
        <ComputersCanvas/>
      </div>

      {/* Scroll indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero