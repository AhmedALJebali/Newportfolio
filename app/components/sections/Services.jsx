"use client";
import { motion } from "framer-motion";
import { Face, Service1, Service2, Service3, Service4 } from "../ui/Icons";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

function Services() {
  return (
    <>
      {/* Title section */}
      <motion.div
        className="w-[90%] mx-auto flex flex-col md:flex-row items-start gap-6 mb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-6xl font-bold w-full md:w-[55%]">
          Services we’re providing that derive 99% result
        </h1>
        <motion.div
          className="rotate-[330deg] w-20 md:w-auto"
          initial={{ rotate: 0, opacity: 0, scale: 0.5 }}
          whileInView={{ rotate: 330, opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Face />
        </motion.div>
        
      </motion.div>

      {/* Services Grid */}
      <motion.div
        className="md:ml-[10%] w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 border-y-5 border-black text-black font-sans mb-20 border-x-5 md:border-x-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {/* Info Column */}
        <motion.div
          className="flex flex-col border-b-5 md:border-b-0 md:border-r-5 border-black"
          variants={fadeUp}
        >
          <div className="h-40 flex items-center px-6">
            <div>
              <p className="text-6xl font-semibold mb-3">39</p>
              <p className="text-2xl tracking-wider">Projects</p>
            </div>
          </div>
          <div className="h-40 flex items-center px-6 border-t-5 border-black">
            <div>
              <p className="text-6xl font-semibold mb-3">100K+</p>
              <p className="text-2xl tracking-wider">generated</p>
            </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div
          className="flex flex-col border-b-5 md:border-b-0 md:border-r-5 border-black"
          variants={fadeUp}
          custom={0.2}
        >
          <div className="p-8 flex flex-col justify-between">
            <div>
              <motion.div
                className="w-15 h-15 border-black border-4 rounded-full bg-yellow-300 flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Service2 />
              </motion.div>
              <h3 className="font-bold text-4xl mb-3">User Research</h3>
              <p className="text-2xl tracking-wide">
                Services we’re providing that derive 99% result
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center text-2xl font-semibold h-16 border-y-5 border-black hover:underline cursor-pointer">
            Learn more
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <motion.div
                className="w-15 h-15 border-black border-4 rounded-full bg-purple-300 flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Service4 />
              </motion.div>
              <h3 className="font-bold text-4xl mb-3">Wireframing</h3>
              <p className="text-2xl tracking-wide">
                Services we’re providing that derive 99% result
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center text-2xl font-semibold h-16 border-t-5 border-black hover:underline cursor-pointer">
            Learn more
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div
          className="flex flex-col border-black"
          variants={fadeUp}
          custom={0.4}
        >
          <div className="p-8 flex flex-col justify-between">
            <div>
              <motion.div
                className="w-15 h-15 border-black border-4 rounded-full bg-red-500 flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1 }}
              >
                <Service1 />
              </motion.div>
              <h3 className="font-bold text-4xl mb-3">UI Designing</h3>
              <p className="text-2xl tracking-wide">
                Services we’re providing that derive 99% result
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center text-2xl font-semibold h-16 border-y-5 border-black hover:underline cursor-pointer">
            Learn more
          </div>

          <div className="p-8 flex flex-col justify-between">
            <div>
              <motion.div
                className="w-15 h-15 border-black border-4 rounded-full bg-sky-300 flex items-center justify-center mb-3"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Service3 />
              </motion.div>
              <h3 className="font-bold text-4xl mb-3">Prototyping</h3>
              <p className="text-2xl tracking-wide">
                Services we’re providing that derive 99% result
              </p>
            </div>
          </div>

          <div className="p-8 flex items-center text-2xl font-semibold h-16 border-t-5 border-black hover:underline cursor-pointer">
            Learn more
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Services;
