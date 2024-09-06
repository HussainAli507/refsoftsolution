"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  {
    name: "HTML 5",
    src: "/path-to-html5-icon.png",
    borderColor: "border-orange-500",
  },
  {
    name: "CSS 3",
    src: "/path-to-css3-icon.png",
    borderColor: "border-blue-500",
  },
  {
    name: "JavaScript",
    src: "/path-to-js-icon.png",
    borderColor: "border-yellow-500",
  },
  {
    name: "TypeScript",
    src: "/path-to-ts-icon.png",
    borderColor: "border-blue-400",
  },
  {
    name: "React",
    src: "/path-to-react-icon.png",
    borderColor: "border-cyan-500",
  },
  {
    name: "Redux",
    src: "/path-to-redux-icon.png",
    borderColor: "border-purple-500",
  },
  {
    name: "HTML 5",
    src: "/path-to-html5-icon.png",
    borderColor: "border-orange-500",
  },
  {
    name: "CSS 3",
    src: "/path-to-css3-icon.png",
    borderColor: "border-blue-500",
  },
  {
    name: "JavaScript",
    src: "/path-to-js-icon.png",
    borderColor: "border-yellow-500",
  },
  {
    name: "TypeScript",
    src: "/path-to-ts-icon.png",
    borderColor: "border-blue-400",
  },
  {
    name: "React",
    src: "/path-to-react-icon.png",
    borderColor: "border-cyan-500",
  },
  {
    name: "Redux",
    src: "/path-to-redux-icon.png",
    borderColor: "border-purple-500",
  },
  {
    name: "HTML 5",
    src: "/path-to-html5-icon.png",
    borderColor: "border-orange-500",
  },
  {
    name: "CSS 3",
    src: "/path-to-css3-icon.png",
    borderColor: "border-blue-500",
  },
  {
    name: "JavaScript",
    src: "/path-to-js-icon.png",
    borderColor: "border-yellow-500",
  },
  {
    name: "TypeScript",
    src: "/path-to-ts-icon.png",
    borderColor: "border-blue-400",
  },
  {
    name: "React",
    src: "/path-to-react-icon.png",
    borderColor: "border-cyan-500",
  },
  {
    name: "Redux",
    src: "/path-to-redux-icon.png",
    borderColor: "border-purple-500",
  },
  // Add more icons as needed
];

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

export default function TechIcons() {
  return (
    <motion.div
      className="p-1"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={revealVariant}
    >
      <div className="flex flex-wrap justify-center items-center gap-4 p-4 mb-20">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className={`relative flex justify-center items-center w-28 h-28 rounded-xl border-4 ${tech.borderColor}`}
            whileHover={{ scale: 1.2 }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            variants={revealVariant}
          >
            <Image
              src={tech.src}
              alt={tech.name}
              width={50}
              height={50}
              className="object-contain"
            />
            <div className="absolute bottom-0 bg-black text-white text-xs p-1 rounded-md">
              {tech.name}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
