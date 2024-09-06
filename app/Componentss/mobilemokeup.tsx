"use client";
import Image from "next/image";
import React from "react";
import {
  FaCheckCircle,
  FaGooglePlay,
  FaApple,
  FaAndroid,
  FaAppleAlt,
} from "react-icons/fa";

export default function MobileAppFeature() {
  return (
    <section className="relative bg-white py-16 px-6 lg:px-24">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full lg:pr-12 mt-10 lg:mt-0">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
            FlowHCM EMPLOYEE SELF-SERVICE (ESS) MOBILE APP
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Empower your employees with the FlowHCM ESS Mobile Application.
            Downloaded by over <span className="font-bold">90,000</span> users
            worldwide, this application supports voice functions such as sign-in
            and sign-out. Here are some of the application features.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Review attendance and leave summaries on the home dashboard.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-orange-600 mr-2" />
              Access HR policies at your fingertips.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-red-600 mr-2" />
              Get essential notifications to ensure a seamless process.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Easily apply for leaves from any time, anywhere.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-teal-600 mr-2" />
              Share important news with push notifications to everyone.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-green-600 mr-2" />
              Access essential reports for the users and their subordinates.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-yellow-600 mr-2" />
              Access your payslips in real-time.
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-blue-600 mr-2" />
              Approve employee requests with one touch quickly.
            </li>
          </ul>
          <div className="flex space-x-4 mt-8">
            <a
              href="#"
              className="flex items-center bg-black text-white py-2 px-4 rounded-md"
            >
              <FaGooglePlay className="mr-2" /> Available on Google Play
            </a>
            <a
              href="#"
              className="flex items-center bg-black text-white py-2 px-4 rounded-md"
            >
              <FaApple className="mr-2" /> Available on App Store
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end relative">
          <div className="relative">
            <div className="absolute -left-10 top-20 transform scale-125">
              <FaAndroid size={120} className="text-green-500" />
            </div>
            <div className="absolute right-0 top-20 transform scale-125">
              <FaAppleAlt size={120} className="text-black" />
            </div>
            <Image
              src="/mobileapp/mobile.png" // Replace with the correct image path
              alt="Mobile App Image"
              width={300}
              height={600}
              className="relative z-10"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
