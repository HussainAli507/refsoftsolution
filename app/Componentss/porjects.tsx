"use client";
import React from "react";
import { motion } from "framer-motion";

// Hexagon Shape Component
const HexagonShape = () => {
  const hexagonVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 0.2,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 50 }).map((_, index) => (
        <motion.div
          key={index}
          className="hexagon absolute bg-[#3C1874]"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() + 0.5}) rotate(${
              Math.random() * 360
            }deg)`,
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={hexagonVariants}
        ></motion.div>
      ))}
      <style jsx>{`
        .hexagon {
          clip-path: polygon(
            25% 5%,
            75% 5%,
            100% 50%,
            75% 95%,
            25% 95%,
            0% 50%
          );
        }
      `}</style>
    </div>
  );
};

export default function MobileApp() {
  const portfolioItems = [
    {
      image: "/Capture.PNG",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/web.png",
      title: "Project Two",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/bingo.PNG",
      title: "Project Three",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/agentify.PNG",
      title: "Project Four",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wordpress.PNG",
      title: "Project Five",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wordpress2.PNG",
      title: "Project Six",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wqa.PNG",
      title: "Project Seven",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wqaa.PNG",
      title: "Project Eight",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wqaaa.PNG",
      title: "Project Nine",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
  ];

  // Variants for scroll reveal animation on the cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="relative container mx-auto px-4 py-8 mt-10">
      {/* Hexagon Shapes in the Background */}
      <HexagonShape />

      {/* Heading and Paragraph */}
      <div className="text-center mb-8 relative z-10">
        <h1 className="text-4xl font-bold mb-4 font-baskervville">Websites</h1>
        <p className="text-lg text-gray-600 font-mingzat">
          Explore our portfolio of Website applications, designed to deliver
          exceptional user experiences and cutting-edge technology solutions.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className="flex justify-center relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="max-w-sm h-96 rounded-xl overflow-hidden shadow-lg bg-white"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }} // Trigger animation when 20% of the component is visible
              whileHover={{ scale: 1.05 }} // Hover effect
            >
              <img
                className="w-full h-48 object-cover"
                src={item.image}
                alt={item.title}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 font-baskervville">
                  {item.title}
                </div>
                <p className="text-gray-700 text-base font-mingzat">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
