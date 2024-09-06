"use client";
import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

// Pentagon Shape Component
const PentagonShape = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className={`pentagon absolute bg-[#3C1874]`}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() + 0.5}) rotate(${
              Math.random() * 360
            }deg)`,
            width: `${Math.random() * 50 + 50}px`,
            height: `${Math.random() * 50 + 50}px`,
            opacity: 0.1,
          }}
        ></div>
      ))}
      <style jsx>{`
        .pentagon {
          clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
        }
      `}</style>
    </div>
  );
};

export default function WhyChooseUs() {
  return (
    <section className="relative bg-white py-16 px-12 ">
      {/* Pentagon Shapes in the Background */}
      <PentagonShape />

      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center relative z-10">
        {/* Text Section */}
        <div className="lg:w-1/2 w-full lg:pr-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6">
            Why Choose{" "}
            <span className="text-[#0056b3] font-baskervville">
              Refsoft Solution
            </span>
          </h2>
          <p className="text-lg text-gray-700 font-mingzat mb-8">
            Refsoft stands out due to its comprehensive HRMS features designed
            to streamline human resource management. It offers robust
            functionalities for managing employee data, payroll processing, and
            performance evaluations, all within a user-friendly interface. With
            its emphasis on scalability and efficiency, Refsoft empowers
            organizations to optimize their HR processes and enhance overall
            productivity seamlessly.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Fastest Growing HR Software
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Single Click Payroll
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Customized User Role
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Automated Alerts & Notifications
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                On-Cloud & On-premises
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Mobile Application
              </li>
            </ul>
            <ul>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Dynamic Workflow & Approvals
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Employee Self Service
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Dynamic & Customizable Reports
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Analytical & Dynamic HR Dashboards
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                AI Based Voice Drive HCMS/HRMS
              </li>
              <li className="flex items-center mb-4">
                <FaCheckCircle className="text-blue-600 mr-2" />
                Geo Fencing Capabilities
              </li>
            </ul>
          </div>
        </div>
        {/* Image Section */}
        <div className="lg:w-1/2 w-full lg:pl-12 flex justify-center mb-8 lg:mb-0">
          <div className="relative">
            <div className=" p-4 lg:p-8 absolute -right-8 -top-8 lg:-right-12 lg:-top-12">
              <Image
                src="/why-chose-us.PNG"
                alt="FlowHCM"
                width={500}
                height={500}
                className="rounded-full"
              />
            </div>
            <div className="relative z-10">
              <img
                src="/06_08_gif.gif"
                alt="FlowHCM on Laptop"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
