import React from "react";

export default function Footer() {
  const aboutLinks = [
    { name: "Home", href: "#" },
    { name: "Portfolio", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Get a Quote", href: "#" },
  ];

  const serviceLinks = [
    { name: "Contact us", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Blogs", href: "#" },
  ];

  const contactDetails = [
    {
      type: "email",
      icon: "📧",
      value: "hello@refsoft.com",
      href: "mailto:hello@refsoft.com",
    },
    {
      type: "phone",
      icon: "📞",
      value: "+92 30541953",
      href: "tel:+923175682252",
    },
  ];

  const socialLinks = [
    { iconClass: "fab fa-facebook", href: "#" },
    { iconClass: "fab fa-linkedin", href: "#" },
    { iconClass: "fab fa-instagram", href: "#" },
    { iconClass: "fab fa-whatsapp", href: "#" },
  ];

  return (
    <footer className="bg-[#3C1874] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between text-center">
          {/* Logo and Description */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center">
            <img src="/path/to/logo.png" alt="Refsoft" className="mb-4" />
            <p className="text-sm">
              Refsoft is a software company dedicated to providing cutting-edge
              solutions for businesses across various industries. With a focus
              on innovation and client satisfaction, we strive to deliver
              high-quality software products and services.
            </p>
          </div>

          {/* About Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center">
            <h5 className="font-bold mb-4">About Refsoft</h5>
            <ul>
              {aboutLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center">
            <h5 className="font-bold mb-4">Services</h5>
            <ul>
              {serviceLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a href={link.href} className="hover:underline">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="w-full sm:w-1/2 lg:w-1/4 mb-6 sm:mb-0 flex flex-col items-center">
            <h5 className="font-bold mb-4">Contact Us</h5>
            <ul>
              {contactDetails.map((contact, index) => (
                <li
                  key={index}
                  className="mb-2 flex items-center justify-center"
                >
                  <span className="mr-2">{contact.icon}</span>
                  <a href={contact.href} className="hover:underline">
                    {contact.value}
                  </a>
                </li>
              ))}
              <li className="flex space-x-4 mt-4 justify-center">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="hover:text-gray-400"
                  >
                    <i className={social.iconClass}></i>
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <div className="flex justify-between items-center flex-wrap">
            <p className="text-sm w-full lg:w-auto">
              © 2024 Refsoft, All rights reserved.
            </p>
            <p className="text-sm w-full lg:w-auto">
              Powered by{" "}
              <a href="#" className="hover:underline">
                Refsoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
