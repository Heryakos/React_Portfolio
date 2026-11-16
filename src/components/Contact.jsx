import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailjs from '@emailjs/browser'
import { styles } from "../styles"
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { fadeIn } from "../utils/motion"

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 800);
  };

  return (
    <div className="mt-8 lg:mt-12 flex flex-col lg:flex-row gap-8 lg:gap-10 items-stretch overflow-hidden">
      <motion.div
        variants={fadeIn('right', "tween", 0.2, 0.8)}
        className="flex-1 lg:flex-[0.95] bg-white dark:bg-black-100/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card"
      >
        <p className={styles.sectionSubText}>Get in Touch</p>
        <h3 className={styles.sectionHeadText}>(04) CONTACT.</h3>

        {/* Quick Contact Links */}
        <div className="mt-6 flex flex-col gap-3 bg-slate-50 dark:bg-tertiary/40 border border-slate-200 dark:border-white/10 p-4 rounded-xl">
          <div className="flex items-center justify-between gap-3 text-slate-800 dark:text-white">
            <a
              href="mailto:heryakosmeles@gmail.com?subject=Enterprise%20Inquiry"
              className="flex items-center gap-3 hover:text-electric-blue transition-colors truncate"
            >
              <span className="text-[20px]">📧</span>
              <span className="text-[15px] font-medium truncate">heryakosmeles@gmail.com</span>
            </a>
            <button
              type="button"
              onClick={() => {
                navigator.clipboard.writeText("heryakosmeles@gmail.com");
                setCopiedEmail(true);
                setTimeout(() => setCopiedEmail(false), 2000);
              }}
              className="px-2.5 py-1 text-xs font-mono rounded bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-700 dark:text-slate-200 transition-colors shrink-0"
              title="Copy email to clipboard"
            >
              {copiedEmail ? "✓ Copied" : "Copy"}
            </button>
          </div>

          <a
            href="https://t.me/Hiryakos_Meles"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-800 dark:text-white hover:text-electric-blue transition-colors"
          >
            <span className="text-[20px]">✈️</span>
            <span className="text-[15px] font-medium">t.me/Hiryakos_Meles</span>
          </a>

          <a
            href="https://github.com/Heryakos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-800 dark:text-white hover:text-electric-blue transition-colors"
          >
            <span className="text-[20px]">💻</span>
            <span className="text-[15px] font-medium">github.com/Heryakos</span>
          </a>

          <a
            href="https://linkedin.com/in/heryakos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-800 dark:text-white hover:text-electric-blue transition-colors"
          >
            <span className="text-[20px]">💼</span>
            <span className="text-[15px] font-medium">linkedin.com/in/heryakos</span>
          </a>

          <a
            href="https://www.upwork.com/freelancers/~01d887f4b877df25ac"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-slate-800 dark:text-white hover:text-electric-blue transition-colors"
          >
            <span className="text-[20px]">🚀</span>
            <span className="text-[15px] font-medium">upwork.com/freelancers/~01d887f4b877df25ac</span>
          </a>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-8"
        >
          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white font-medium mb-2">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What is your name?"
              className="bg-slate-50 dark:bg-tertiary/40 py-4 px-6 placeholder:text-slate-400 text-slate-900 dark:text-white rounded-lg outline-none border border-slate-300 dark:border-white/10 focus:border-electric-blue font-medium transition-colors"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white font-medium mb-2">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What is your email address?"
              className="bg-slate-50 dark:bg-tertiary/40 py-4 px-6 placeholder:text-slate-400 text-slate-900 dark:text-white rounded-lg outline-none border border-slate-300 dark:border-white/10 focus:border-electric-blue font-medium transition-colors"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white font-medium mb-2">Your Message</span>
            <textarea
              rows="5"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="How can I help you?"
              className="bg-slate-50 dark:bg-tertiary/40 py-4 px-6 placeholder:text-slate-400 text-slate-900 dark:text-white rounded-lg outline-none border border-slate-300 dark:border-white/10 focus:border-electric-blue font-medium transition-colors"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-electric-blue hover:bg-blue-600 py-3.5 px-8 outline-none w-fit text-white font-bold shadow-glow rounded-xl transition-all duration-300 active:scale-95"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={fadeIn('left', "tween", 0.2, 0.8)}
        className="flex-1 lg:flex-[1.05] w-full min-h-[340px] sm:min-h-[420px] lg:min-h-[500px] h-[340px] sm:h-[420px] lg:h-auto flex items-center justify-center relative"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")