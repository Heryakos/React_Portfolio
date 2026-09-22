import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Default EmailJS send simulation / configuration
    setTimeout(() => {
      setLoading(false);
      alert("Thank you! I will get back to you as soon as possible.");
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl border border-[#915eff]/20 shadow-card"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        {/* Quick Contact Links */}
        <div className="mt-6 flex flex-col gap-3 bg-tertiary p-4 rounded-xl">
          <a
            href="mailto:heryakosmeles@gmail.com"
            className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors"
          >
            <span className="text-[20px]">📧</span>
            <span className="text-[15px] font-medium">heryakosmeles@gmail.com</span>
          </a>

          <a
            href="https://t.me/Hiryakos_Meles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors"
          >
            <span className="text-[20px]">✈️</span>
            <span className="text-[15px] font-medium">t.me/Hiryakos_Meles</span>
          </a>

          <a
            href="https://github.com/Heryakos/Hiryakos_PortFolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors"
          >
            <span className="text-[20px]">💻</span>
            <span className="text-[15px] font-medium">github.com</span>
          </a>

          <a
            href="https://www.linkedin.com/in/hiryakos-meles-874874257"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors"
          >
            <span className="text-[20px]">💼</span>
            <span className="text-[15px] font-medium">linkedin.com/in/hiryakos-meles</span>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01d887f4b877df25ac?referrer_url_path=%2Fnx%2Fsearch%2Ftalent%2Fdetails%2F~01d887f4b877df25ac%2Fprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white hover:text-[#915eff] transition-colors"
          >
            <span className="text-[20px]">🚀</span>
            <span className="text-[15px] font-medium">Upwork Profile</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-6"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eff] hover:bg-[#804bee] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl transition-all duration-300"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")