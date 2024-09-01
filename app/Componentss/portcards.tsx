"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Zigzag Lines Component
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

export function CarouselSpacing() {
  const images = [
    "/Capture.PNG",
    "/Capture.PNG",
    "/Capture.PNG",
    "/Capture.PNG",
    "/Capture.PNG",
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

  return (
    <div className="relative flex justify-center items-center mb-10 px-5 mt-10">
      {/* Zigzag Lines in the Background */}
      <ZigzagLines />

      <Carousel className="relative w-full max-w-6xl z-10">
        <CarouselContent className="flex -ml-1">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/3 flex justify-center"
            >
              <motion.div
                className="p-1"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={revealVariant}
              >
                <Card className="overflow-hidden">
                  <CardContent className="flex aspect-square items-center justify-center p-0">
                    <img
                      src={image}
                      alt={`Carousel Item ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="" />
        <CarouselNext className="" />
      </Carousel>
    </div>
  );
}
