"use client";
import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className=" p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-black text-2xl font-bold">
          <a href="/">MyLogo</a>
        </div>

        {/* Navigation Menu */}
        <NavigationMenu className="hidden md:flex space-x-6">
          <NavigationMenuList className="flex space-x-4">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black hover:text-gray-300">
                Home
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  href="/"
                  className="block p-2 hover:bg-gray-700 text-white"
                >
                  Go to Home
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black hover:text-gray-300">
                About
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  href="/about"
                  className="block p-2 hover:bg-gray-700 text-white"
                >
                  Learn More About Us
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black hover:text-gray-300">
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  href="/services/web-development"
                  className="block p-2 hover:bg-gray-700 text-white"
                >
                  Web Development
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/services/mobile-development"
                  className="block p-2 hover:bg-gray-700 text-white"
                >
                  Mobile Development
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="/services/ui-ux"
                  className="block p-2 hover:bg-gray-700 text-white"
                >
                  UI/UX Design
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-black hover:text-gray-300">
                Contact
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink
                  href="/contact"
                  className="block p-2 hover:bg-gray-700 text-white"
                >
                  Get in Touch
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Hidden by default, toggled by the button above */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <NavigationMenu className="flex flex-col space-y-2 mt-2">
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/"
                className="block text-black hover:bg-gray-700 p-2"
              >
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/about"
                className="block text-black hover:bg-gray-700 p-2"
              >
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/services"
                className="block text-black hover:bg-gray-700 p-2"
              >
                Services
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="/contact"
                className="block text-black hover:bg-gray-700 p-2"
              >
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
