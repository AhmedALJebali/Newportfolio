"use client";
import { motion } from "framer-motion";
import { Baseet, Face, Frame_13, Lamp, Starr } from "../ui/Icons";

function Hero() {
  return (
    <div className="flex flex-col md:flex-row items-center py-20 relative overflow-hidden">
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Baseet
          width={130}
          height={190}
          className="hidden md:block absolute bottom-[-60px] left-[-55px]"
        />
      </motion.div>

      <div className="scale-[0.95] flex flex-col md:flex-row w-[95%] md:w-[80%] mx-auto gap-10">
      
        <motion.div
          className="w-full md:w-[50%] flex flex-col gap-10 items-center md:items-start text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          
          <motion.div
            className="relative z-40"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <div className="absolute top-4 right-1 w-[180px] h-[180px] bg-shadow opacity-30 z-10 rotate-65 blur-xl" />
            <div className="w-[180px] h-[180px] bg-[#F3ABCB] rotate-65 z-50 relative flex items-end justify-center shadow-xl shadow-pink-300/60">
              <Starr className="scale-[1.5] rotate-[260deg]" />
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-7xl font-bold leading-normal tracking-wider mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            I design ✍️ top notch websites
          </motion.h1>

          <motion.button
            className="border-3 border-black py-5 px-7 w-fit text-xl md:text-2xl font-semibold rounded-4xl bg-[#BAE6FF] relative shadow-md hover:shadow-xl transition-all"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.4 }}
          >
            See Portfolio
            <Frame_13 className="absolute right-[-55px] top-8 hidden md:block" />
          </motion.button>
        </motion.div>

       
        <motion.div
          className="w-full md:w-[50%] flex justify-center md:justify-end h-[400px] md:h-[550px] relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="absolute bottom-[-20px] right-0 z-10"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Baseet width={180} height={190} color="#FF6258" />
          </motion.div>

          <motion.div
            className="absolute top-[30px] left-0 z-10"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Lamp width={120} height={120} color="#FF6258" />
          </motion.div>

        
          <motion.div
            className="w-full sm:w-[90%] h-full my-auto bg-white flex flex-col px-6 md:px-20 border-5 border-black relative shadow-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
          >
            <div className="flex h-17 items-center justify-center gap-5 md:gap-20 ">
              <div className="w-[20px] h-[20px] bg-black rounded-full" />
              <div className="w-[20px] h-[20px] bg-black rounded-full" />
            </div>

            <div className="w-full h-[75%] md:h-[80%] relative border-4 border-black flex items-center justify-center">
              <div className="absolute inset-0 bg-shadow opacity-30 z-0" />
              <div className="z-10 relative">
                <Face />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
