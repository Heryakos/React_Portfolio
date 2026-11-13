import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import { useGithubLive } from "../hooks/useGithubLive";

const StatCard = ({ label, value, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.15, 0.75)}
    className="bg-white dark:bg-tertiary/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-electric-blue/20 shadow-sm dark:shadow-card flex flex-col items-center justify-center text-center flex-1 min-w-[180px] hover:border-electric-blue/40 transition-all duration-300"
  >
    <h3 className="text-blue-600 dark:text-electric-blue text-[36px] md:text-[46px] font-extrabold leading-none mb-2">
      {value}
    </h3>
    <p className="text-slate-800 dark:text-white text-[13.5px] font-semibold tracking-wider uppercase">
      {label}
    </p>
  </motion.div>
);

const GithubStats = () => {
  const githubLive = useGithubLive();

  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-2 mb-1">
          <p className={`${styles.sectionSubText}`}>Open Source Activity</p>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-700 dark:text-emerald-400 text-[11px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            REAL-TIME SYNC
          </span>
        </div>
        <h2 className={`${styles.sectionHeadText}`}>GitHub Stats.</h2>
      </motion.div>

      <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-slate-600 dark:text-secondary text-[16px] sm:text-[17px] max-w-2xl leading-relaxed"
        >
          My live coding activity over the past year. I believe in continuous learning, open-source contribution, and writing clean, maintainable code every single day.
        </motion.p>

        {/* Live Push Signal Banner */}
        <motion.a
          variants={fadeIn("left", "spring", 0.2, 0.75)}
          href={`https://github.com/Heryakos/${githubLive.latestRepo}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-500/30 text-purple-900 dark:text-purple-200 hover:border-purple-400 text-xs font-mono transition-all self-start sm:self-center shadow-sm"
          title="Click to view most recently active repository on GitHub"
        >
          <span className="text-emerald-500 text-sm">⚡</span>
          <span>
            Latest push to <strong className="underline font-bold text-slate-900 dark:text-white">{githubLive.latestRepo}</strong> ({githubLive.latestPushRelative})
          </span>
          <span className="text-purple-500 dark:text-purple-400">↗</span>
        </motion.a>
      </div>

      <div className="flex flex-wrap gap-5 sm:gap-6 justify-center">
        <StatCard index={0} label="Public Repositories" value={githubLive.repos} />
        <StatCard index={1} label="Repository Stars" value={githubLive.stars} />
        <StatCard index={2} label="Profile Views" value={githubLive.profileViews} />
        <StatCard index={3} label="Code Contributions" value={githubLive.commits} />

        {/* Dynamic Top Languages Card */}
        <motion.div
          variants={fadeIn("up", "spring", 4 * 0.15, 0.75)}
          className="bg-white dark:bg-tertiary/40 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-card flex flex-col justify-center flex-1 min-w-[200px]"
        >
          <p className="text-slate-500 dark:text-secondary text-[13px] uppercase tracking-widest mb-3.5 text-center font-bold">
            Live Top Languages
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {githubLive.topLanguages.map((lang, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-slate-800 dark:text-white text-[12.5px] font-medium"
              >
                {lang}
              </span>
            ))}
          </div>
          <a
            href="https://github.com/Heryakos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 text-center text-xs font-mono font-bold text-electric-blue hover:underline flex items-center justify-center gap-1"
          >
            <span>Explore @Heryakos on GitHub</span>
            <span>↗</span>
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(GithubStats, "github-stats");
