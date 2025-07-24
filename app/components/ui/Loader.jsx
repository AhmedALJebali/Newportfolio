"use client";
import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1, scale: 1 }}
      animate={{ opacity: 0, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-16 w-16 border-8 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-xl font-semibold text-primary">Loading...</p>
      </motion.div>
    </motion.div>
  );
}
