"use client"
import { Frame_13 } from "../ui/Icons";
import { motion } from "framer-motion";

function CalltoAction() {
  return (
    <section className="relative my-16 px-4 overflow-hidden">
      {/* Shadow Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 0 }}
        whileInView={{ opacity: 0.3, scale: 1, rotate: 2 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 z-0 h-full max-w-screen-lg mx-auto bg-shadow rounded-xl"
      />

      {/* Content Box */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 max-w-screen-lg mx-auto text-center border-[5px] border-black bg-white rounded-xl px-4 sm:px-8 md:px-12 py-8 sm:py-10 flex flex-col gap-6 sm:gap-8"
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug sm:leading-tight"
        >
          Let’s start designing your project
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-base sm:text-xl md:text-2xl font-medium max-w-3xl mx-auto"
        >
          Want to see how to transform your brand into a unique style? Send us a message
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="relative inline-block mt-3 sm:mt-4"
        >
          <button className="border-[3px] border-black py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 text-base sm:text-lg md:text-2xl font-semibold rounded-[2rem] bg-[#BAE6FF] rotate-[1deg]">
            Send us message
          </button>
          <Frame_13 className="absolute -right-10 sm:-right-14 top-1/2 -translate-y-1/2 block" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default CalltoAction;
