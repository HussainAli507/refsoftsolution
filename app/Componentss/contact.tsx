import React, { FC } from "react";

const ContactSection: FC = () => {
  return (
    <div className="bg-white px-5 text-black py-16">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        {/* Left Side - Let's Connect Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg pr-20 mb-4">
            I'm currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-black text-2xl hover:text-gray-600">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-black text-2xl hover:text-gray-600">
              <i className="fab fa-angular"></i>
            </a>
            <a href="#" className="text-black text-2xl hover:text-gray-600">
              <i className="fab fa-upwork"></i>
            </a>
            <a href="#" className="text-black text-2xl hover:text-gray-600">
              <i className="fab fa-fiverr"></i>
            </a>
            <a href="#" className="text-black text-2xl hover:text-gray-600">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className="w-full md:w-1/2">
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="youremail@gmail.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Just saying hi"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600"
                placeholder="Let's talk about..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#3C1874] hover:bg-purple-700 rounded-lg text-white font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
