import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { blogPosts } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const BlogCard = ({ index, title, date, readTime, excerpt, link, tags }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)} className="flex-1 min-w-[300px]">
      <Tilt
        options={{ max: 15, scale: 1, speed: 450 }}
        className="bg-tertiary/40 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-card hover:border-electric-blue/50 transition-all duration-300 h-full flex flex-col justify-between"
      >
        <div>
          <div className="flex justify-between items-center mb-4">
            <span className="text-electric-blue text-[13px] font-bold tracking-widest uppercase">{date}</span>
            <span className="text-secondary text-[12px] bg-white/5 px-2 py-1 rounded-full">{readTime}</span>
          </div>
          
          <h3 className="text-white font-bold text-[22px] leading-tight mb-4">{title}</h3>
          <p className="text-secondary text-[15px] leading-relaxed mb-6">{excerpt}</p>
        </div>

        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag, idx) => (
              <span key={idx} className="text-[11px] font-medium text-white/70">
                #{tag}
              </span>
            ))}
          </div>

          <a 
            href={link} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold hover:text-electric-blue transition-colors group"
          >
            Read Full Article 
            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Blog = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Technical Writing</p>
        <h2 className={`${styles.sectionHeadText}`}>Recent Articles.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          I regularly write about software architecture, scaling enterprise applications, and modern web development. Here are some of my recent technical articles.
        </motion.p>
      </div>

      <div className="mt-12 flex flex-wrap gap-7">
        {blogPosts.map((post, index) => (
          <BlogCard key={`post-${index}`} index={index} {...post} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Blog, "blog");
