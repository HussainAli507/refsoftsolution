"use client";
import { motion } from "framer-motion";
import React from "react";
import {
  FaProjectDiagram,
  FaCode,
  FaPaintBrush,
  FaCheckCircle,
} from "react-icons/fa";

const revealVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Timeline = () => {
  return (
    <motion.div
      className="p-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={revealVariant}
    >
      <div className="container mx-auto my-10 mt-8 mb-8 px-2">
        <div className="relative">
          {/* Line connecting the icons */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>

          {/* First Item */}
          <div className="flex items-center mb-10 relative">
            <div className="flex justify-center items-center w-full md:w-1/2 order-1">
              <div className="w-20 h-20 bg-red-400 flex items-center justify-center rounded-full">
                <FaProjectDiagram size={40} color="white" />
              </div>
            </div>
            <div className="order-2 w-full md:w-1/2 text-left pl-10 md:pl-20">
              <h3 className="text-blue-700 text-lg font-semibold">
                Project Planning
              </h3>
              <p className="text-gray-600">
                We collaborate closely with our clients to understand their
                requirements, goals, and objectives, ensuring a comprehensive
                plan is in place before starting development.
              </p>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-300 rotate-45"></div>
          </div>

          {/* Second Item */}
          <div className="flex items-center mb-10 relative flex-row-reverse">
            <div className="flex justify-center items-center w-full md:w-1/2 order-1">
              <div className="w-20 h-20 bg-red-400 flex items-center justify-center rounded-full">
                <FaCode size={40} color="white" />
              </div>
            </div>
            <div className="order-2 w-full md:w-1/2 text-right pr-10 md:pr-20">
              <h3 className="text-blue-700 text-lg font-semibold">
                Development
              </h3>
              <p className="text-gray-600">
                Our skilled developers bring the designs to life, writing clean
                and efficient code while following industry standards and best
                practices.
              </p>
            </div>
            <div className="absolute top-0 right-1/2 transform translate-x-1/2 w-5 h-5 bg-gray-300 rotate-45"></div>
          </div>

          {/* Third Item */}
          <div className="flex items-center mb-10 relative">
            <div className="flex justify-center items-center w-full md:w-1/2 order-1">
              <div className="w-20 h-20 bg-blue-700 flex items-center justify-center rounded-full">
                <FaPaintBrush size={40} color="white" />
              </div>
            </div>
            <div className="order-2 w-full md:w-1/2 text-left pl-10 md:pl-20">
              <h3 className="text-blue-700 text-lg font-semibold">Designing</h3>
              <p className="text-gray-600">
                Our experienced team of designers creates intuitive and
                user-friendly interfaces, ensuring a seamless user experience
                while adhering to the client's brand guidelines.
              </p>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-5 h-5 bg-gray-300 rotate-45"></div>
          </div>

          {/* Fourth Item */}
          <div className="flex items-center relative flex-row-reverse">
            <div className="flex justify-center items-center w-full md:w-1/2 order-1">
              <div className="w-20 h-20 bg-blue-700 flex items-center justify-center rounded-full">
                <FaCheckCircle size={40} color="white" />
              </div>
            </div>
            <div className="order-2 w-full md:w-1/2 text-right pr-10 md:pr-20">
              <h3 className="text-blue-700 text-lg font-semibold">
                Testing and Deployment
              </h3>
              <p className="text-gray-600">
                We rigorously test and deploy the developed software, ensuring
                it meets the highest quality standards and is ready to be used
                by our clients and their end-users.
              </p>
            </div>
            <div className="absolute top-0 right-1/2 transform translate-x-1/2 w-5 h-5 bg-gray-300 rotate-45"></div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timeline;
