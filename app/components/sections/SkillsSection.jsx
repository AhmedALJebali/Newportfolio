"use client";
import { motion } from "framer-motion";

function SkillsSection() {
  const tools = [
    "Figma",
    "Framer",
    "Webflow",
    "Notion",
    "Lottie",
    "Adobe XD",
    "Tailwind CSS",
    "Next.js",
    "Slack",
    "Zeplin",
    "Illustrator",
    "React",
  ];

  const repeatedTools = [...tools];

  return (
    <div className="w-full bg-black py-8 overflow-hidden mb-12">
      <motion.div
        className="flex gap-[10%] text-white text-lg md:text-3xl px-4"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration:5,
          ease: "linear",
        }}
        style={{ whiteSpace: "nowrap" }}
      >
        {repeatedTools.map((tool, index) => (
          <span key={index} className="min-w-max">
            {tool}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default SkillsSection;
