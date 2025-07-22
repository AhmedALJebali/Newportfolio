"use client";
import { motion } from "framer-motion";
import TestimonialCard from "../cards/TestimonialCard";
import { New } from "../ui/Icons";

function Testimonial() {
  const testimonialsData = [
    {
      testimonial: "Design is a bridge that connects everyone and everything",
      name: "Client First Name",
      title: "UX Designer",
      company: "Company Name",
      imageSrc: "/avatar1.jpg",
    },
    {
      testimonial: "Design is a bridge that connects everyone and everything",
      name: "Client Name",
      title: "UX Designer",
      company: "Company Name",
      imageSrc: "/avatar2.jpg",
    },
    {
      testimonial: "Design is a bridge that connects everyone and everything",
      name: "Client Name",
      title: "UX Designer",
      company: "Company Name",
      imageSrc: "/avatar3.jpg",
    },
    {
      testimonial: "Design is a bridge that connects everyone and everything",
      name: "Client Name",
      title: "UX Designer",
      company: "Company Name",
      imageSrc: "/avatar4.jpg",
    },
  ];

  return (
    <div className="w-[90%] mx-auto">
      {/* Header */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="w-full md:w-[50%] flex items-end mb-10"
      >
        <h1 className="text-3xl sm:text-5xl font-bold">
          Here’s what my clients are saying about my work
        </h1>
        <New className="scale-[1.9] ml-4" />
      </motion.div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
        {[0, 1].map((col) => (
          <div key={col} className="flex flex-col items-center">
            {testimonialsData
              .filter((_, i) => i % 2 === col)
              .map((testimonial, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className={`transition-all duration-300 ${
                    i === 0 ? "mt-0" : "-mt-2"
                  } z-[${10 - i}] hover:z-50`}
                  whileHover={{ scale: 1.05 }}
                >
                  <TestimonialCard {...testimonial} />
                </motion.div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
