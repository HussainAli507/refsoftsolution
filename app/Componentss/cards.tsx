"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaBullhorn,
} from "react-icons/fa"; // Importing Font Awesome icons

// SVG Background Shape Component
const BackgroundShape = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
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

// Services data with icons
const services = [
  {
    title: "Web Development",
    description:
      "We can develop a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
    buttonText: "Learn More",
    icon: <FaLaptopCode size={40} className="mx-auto text-[#3C1874]" />, // Icon for Web Development
  },
  {
    title: "Mobile App Development",
    description:
      "We create mobile applications for both iOS and Android platforms, ensuring a seamless user experience.",
    buttonText: "Learn More",
    icon: <FaMobileAlt size={40} className="mx-auto text-[#3C1874]" />, // Icon for Mobile App Development
  },
  {
    title: "UI/UX Design",
    description:
      "Our designs are focused on creating intuitive and engaging user interfaces with a strong emphasis on user experience.",
    buttonText: "Learn More",
    icon: <FaPaintBrush size={40} className="mx-auto text-[#3C1874]" />, // Icon for UI/UX Design
  },
  {
    title: "Digital Marketing",
    description:
      "We offer comprehensive digital marketing services to help you reach your target audience and grow your business.",
    buttonText: "Learn More",
    icon: <FaBullhorn size={40} className="mx-auto text-[#3C1874]" />, // Icon for Digital Marketing
  },
  {
    title: "Graphic Design",
    description:
      "Our designs are focused on creating intuitive and engaging user interfaces with a strong emphasis on user experience.",
    buttonText: "Learn More",
    icon: <FaPaintBrush size={40} className="mx-auto text-[#3C1874]" />, // Icon for UI/UX Design
  },
  {
    title: "API Integrations",
    description:
      "Our designs are focused on creating intuitive and engaging user interfaces with a strong emphasis on user experience.",
    buttonText: "Learn More",
    icon: <FaLaptopCode size={40} className="mx-auto text-[#3C1874]" />, // Icon for Web Development
  },
  {
    title: "IOS App Development",
    description:
      "We create mobile applications for both iOS and Android platforms, ensuring a seamless user experience.",
    buttonText: "Learn More",
    icon: <FaMobileAlt size={40} className="mx-auto text-[#3C1874]" />, // Icon for Mobile App Development
  },
  {
    title: "Admin Panels",
    description:
      "We create mobile applications for both iOS and Android platforms, ensuring a seamless user experience.",
    buttonText: "Learn More",
    icon: <FaLaptopCode size={40} className="mx-auto text-[#3C1874]" />, // Icon for Mobile App Development
  },

  // Add more services as needed
];

function Topcard() {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      {/* Background Shape */}
      <BackgroundShape />

      <motion.div
        className="md:text-center m-5 my-20 md:m-20 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={textVariants}
      >
        <motion.h1 className="md:text-4xl text-[#3C1874]  text-2xl md:font-bold">
          Services We Provide
        </motion.h1>
        <motion.p className="md:px-10 py-5">
          Refsoft Solution provides software solutions and websites which are
          scalable, reliable, fast and secure. Our UI designs are latest and
          outstanding. Our developed websites and web-based softwares are
          compatible and scalable.
        </motion.p>
      </motion.div>

      <div className="md:grid md:grid-cols-4 md:m-20 md:gap-3 m-10 grid grid-cols-1 gap-5 sm:grid-cols-2 relative z-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="rounded-3xl bg-[#3C1874] p-3 m-2 flex items-center justify-center"
            whileHover={{ scale: 1.05 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={cardVariants}
          >
            <div className="w-full min-h-[300px] h-full rounded-3xl bg-white p-5 flex flex-col justify-between">
              <div className="flex-grow">
                <div className="flex justify-center items-center mb-4">
                  {service.icon} {/* Render the icon */}
                </div>
                <h1 className="mb-2 mt-2 text-lg font-bold text-center">
                  {service.title}
                </h1>
                <p className="mb-4 mt-8 text-center">{service.description}</p>
              </div>
              <button className="rounded-full text-white bg-[#3C1874] px-5 py-3 self-center">
                {service.buttonText}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mb-3 flex justify-center relative z-10">
        <button className="px-10 py-5 mb-4 bg-[#3C1874] text-white rounded-lg">
          View all Services
        </button>
      </div>
    </div>
  );
}

export default Topcard;
