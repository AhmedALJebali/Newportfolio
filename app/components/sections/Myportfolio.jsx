"use client";
import { motion } from "framer-motion";
import PortfolioCard from "../cards/PortfolioCard";
import { Starr } from "../ui/Icons";

function Myportfolio() {
  return (
    <div className="w-[90%] mx-auto flex justify-center items-center mb-20 flex-col">
      {/* Header */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-center mb-12 text-left"
      >
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold flex items-end gap-3">
          My
          <span className="relative inline-block">
            Portfolio
            <div className="absolute left-0 -bottom-2 w-full h-[6px] sm:h-[10px] md:h-[12px] lg:h-[15px]">
              <svg
                viewBox="0 0 358 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M355.698 8.90703C285.182 1.05767 213.473 5.39925 142.78 3.98596C96.0339 3.04038 49.2843 0.762796 2.57201 0.000228063C1.17151 -0.0201071 0.0196797 1.32197 0.000228214 3.00979C-0.0183775 4.69761 1.10303 6.08044 2.50269 6.10077C49.2099 6.86334 95.9544 9.14092 142.695 10.0865C213.262 11.4998 284.835 7.14802 355.224 14.9872C356.619 15.1397 357.854 13.9095 357.989 12.2318C358.116 10.5542 357.085 9.06971 355.698 8.90703Z"
                  fill="black"
                />
              </svg>
            </div>
          </span>
        </h1>

        {/* Decorative star */}
        <div className="relative scale-[0.7] sm:scale-[0.8] mt-0">
          <div className="absolute top-4 left-0 w-[100px] h-[110px] sm:w-[140px] sm:h-[150px] bg-black/10 z-10 rotate-[65deg]" />
          <div className="w-[100px] h-[110px] sm:w-[140px] sm:h-[150px] bg-sky-200 rotate-[65deg] z-20 relative flex items-center justify-center">
            <Starr className="scale-[1.1] sm:scale-[1.3] rotate-[260deg]" />
          </div>
        </div>
      </motion.div>

      {/* Cards Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-14">
        {[...Array(4)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <PortfolioCard />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Myportfolio;
