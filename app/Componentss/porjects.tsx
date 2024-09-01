"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectCards() {
  const portfolioItems = [
    {
      image: "/Capture.PNG",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/web.png",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/bingo.PNG",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/agentify.PNG",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wordpress.PNG",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/wordpress2.PNG",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    // Add more projects here if needed
  ];

  // Variants for scroll reveal animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="container mx-auto px-4 py-8 flex justify-center">
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
              <div className="font-bold text-xl mb-2">{item.title}</div>
              <p className="text-gray-700 text-base">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
