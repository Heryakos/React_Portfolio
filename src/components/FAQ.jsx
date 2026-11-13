import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { faqs } from "../constants";
import { textVariant, fadeIn } from "../utils/motion";

const FAQItem = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.1, 0.75)}
      className="border border-white/10 rounded-2xl bg-tertiary/40 backdrop-blur-md overflow-hidden shadow-card"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none"
      >
        <span className="text-white font-bold text-[18px]">{question}</span>
        <span className={`text-electric-blue text-2xl transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ↓
        </span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 text-secondary text-[15px] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Common Questions</p>
        <h2 className={`${styles.sectionHeadText}`}>(04) FAQS.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <FAQItem key={`faq-${index}`} index={index} {...faq} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(FAQ, "faq");
