"use client";
import { motion } from "framer-motion";
import { Ball, Instagram, Star, X } from "../ui/Icons";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="border-t-[4px] border-black px-4 sm:px-[5%] py-6 flex flex-row justify-between items-center gap-4 text-center md:text-left"
    >
      {/* Logo */}
      <div className="flex items-center gap-2 sm:gap-3">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <Star width={40} height={40} />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold">
            Znis
          </span>
        </motion.div>
      </div>

      {/* Center Text */}
      <div className="text-base sm:text-lg md:text-xl font-semibold">
        Portfolio 2024
      </div>

      {/* Social Icons */}
      <div className="flex gap-4 sm:gap-6 items-center text-black">
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <Ball className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.3,
          }}
        >
          <Instagram className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
            delay: 0.6,
          }}
        >
          <X className="w-6 h-6 sm:w-8 sm:h-8" />
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;
