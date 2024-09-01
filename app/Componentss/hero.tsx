"use client";
import React from "react";
import { motion } from "framer-motion";

// Sentence and letter animation variants
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

// Bouncing Rings Component
const BouncingCircles = () => {
  const circles = [
    { top: "20%", left: "10%", size: "100px", delay: 0.2, borderWidth: "10px" },
    { top: "60%", left: "30%", size: "150px", delay: 0.4, borderWidth: "15px" },
    { top: "8%", left: "50%", size: "100px", delay: 0.6, borderWidth: "8px" },
  ];

  return (
    <>
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            top: circle.top,
            left: circle.left,
            width: circle.size,
            height: circle.size,
            backgroundColor: "transparent",
            border: `${circle.borderWidth} solid rgba(59, 130, 246, 0.5)`, // Ring-like border
          }}
          initial={{ y: 0 }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            delay: circle.delay,
          }}
        ></motion.div>
      ))}
    </>
  );
};

// Zigzag Lines Component (reuse this)
const ZigzagLines = () => {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          d="M0,128L60,160C120,192,240,256,360,256C480,256,600,192,720,160C840,128,960,128,1080,160C1200,192,1320,256,1380,288L1440,320"
          fill="none"
          stroke="#3C1874"
          strokeWidth="2"
        />
      </svg>
      <svg
        className="absolute bottom-0 right-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          d="M0,160L60,192C120,224,240,288,360,288C480,288,600,224,720,192C840,160,960,160,1080,192C1200,224,1320,288,1380,320L1440,352"
          fill="none"
          stroke="#3C1874"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
};

// Wavy Lines Component
const WavyLines = () => {
  return (
    <div className="absolute inset-0 z-0">
      <svg
        viewBox="0 0 1440 320"
        className="absolute w-full h-full"
        preserveAspectRatio="none"
      >
        <path
          fill="#3C1874"
          fillOpacity="0.1"
          d="M0,224L48,218.7C96,213,192,203,288,202.7C384,203,480,213,576,208C672,203,768,181,864,176C960,171,1056,181,1152,197.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

const Hero = () => {
  const text = "Welcome to Our Website";

  return (
    <section className="relative text-black py-20 overflow-hidden">
      {/* Zigzag Lines */}
      <ZigzagLines />

      {/* Wavy Lines */}
      <WavyLines />

      {/* Bouncing Rings */}
      <BouncingCircles />

      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <motion.h1
            className="text-4xl text-[#3C1874] md:pl-20 md:text-5xl font-bold leading-tight mb-4"
            variants={sentence}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }} // Enable repeating animation on scroll
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl md:pl-20 mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Refsoft brings your digital aspirations to life. As a premier
            software company, we offer a diverse array of software solutions
            crafted to enhance your online impact. Whether you’re a startup
            building your brand or an established business seeking digital
            transformation, Refsoft is your reliable partner in driving success.
          </motion.p>
          <motion.a
            href="#"
            className="md:ml-20 bg-[#3C1874] hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Get Started
          </motion.a>
        </div>
        {/* Image */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <img src="/7629678.webp" alt="Hero Image" className="w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
