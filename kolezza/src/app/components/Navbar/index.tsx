
"use client";
import Link from "next/link";
import Image from 'next/image';
import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-light-sky-blue shadow-lg sticky top-0 w-full z-40" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/images/navbarlogo.png" alt="Logo" width={150} height={150} />
          </div>

          {/* Hamburger Menu Button (only for small screens) */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black-500 hover:text-black-700 focus:outline-none focus:text-black-700"
              title="menu"
            >
              {isOpen ? (
                <IoClose className="text-slate-900 text-2xl h-10 p-2 w-10 rounded-full" />
              ) : (
                <MdMenu className="text-slate-900 text-2xl h-10 p-2 w-10 rounded-full" />
              )}
            </button>        
          </div>

          {/* Menu Links */}
          <div
            className={`sm:flex sm:flex-row sm:space-x-4 sm:items-center ${
              isOpen ? "flex flex-col fixed inset-x-0 top-16 bg-white shadow-lg text-left py-4 space-y-4 sm:relative sm:top-0 sm:shadow-none sm:py-0 sm:space-y-0" : "hidden sm:flex"
            }`}
          >
            <Link
              href="#home"
              className="px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black"
            >
              Home
            </Link>
            <Link
              href="#about"
              className="px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black"
            >
              About
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black"
            >
              Testimonials
            </Link>
            <Link
              href="#faqs"
              className="px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black"
            >
              FAQs
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


