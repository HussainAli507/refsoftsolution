"use client";
import React from "react";
import { motion } from "framer-motion";

export default function MobileApp() {
  const portfolioItems = [
    {
      image: "/mobileapp/app1.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/mobileapp/app2.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/mobileapp/app3.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/mobileapp/app4.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/mobileapp/app5.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/mobileapp/app6.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },
    {
      image: "/mobileapp/app7.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },

    {
      image: "/mobileapp/app8.jpeg",
      title: "Project One",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, odit quo. Porro, eveniet hic amet, vero ducimus ad illo quos alias possimus sapiente sed animi vel. Rerum reiciendis ipsa rem.",
    },

    {
      image: "/mobileapp/app9.jpeg",
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
    <div className="container mx-auto px-4 py-8">
      {/* Heading and Paragraph */}
      <div className="text-center mb-8">
        <h1 className="text-5xl font-bold mb-4 font-baskervville">
          Mobile Application
        </h1>
        <p className="text-lg text-gray-600 font-mingzat">
          Explore our portfolio of mobile applications, designed to deliver
          exceptional user experiences and cutting-edge technology solutions.
        </p>
      </div>

      {/* Portfolio Cards */}
      <div className="flex justify-center">
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
                <p className="text-gray-700 text-base font-mingzat  ">
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
