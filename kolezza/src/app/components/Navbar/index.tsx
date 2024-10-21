"use client";

import Image from 'next/image';
import { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#landingpage');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    console.log(`Trying to scroll to section: ${sectionId}`); 

    const element = document.getElementById(sectionId);
    if (element) {
      
    const headerOffset = 100; 
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
    setActiveSection(sectionId);
    setIsOpen(false); 
    } else {
      console.error(`Element with id "${sectionId}" not found`); 
    }
  };


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['landingpage', 'about', 'testimonials', 'faqs', 'contact'];
      let currentSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          currentSection = section;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-light-sky-blue shadow-lg sticky top-0 w-full z-40" style={{ fontFamily: 'Nunito, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
      
          <div className="flex-shrink-0">
            <Image src="/images/sawatokhorizontal.png" alt="Logo" width={170} height={150} />
          </div>

          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-black-500 hover:text-black-700 focus:outline-none focus:text-black-700"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <IoClose className="text-slate-900 text-2xl h-10 p-2 w-10 rounded-full" />
              ) : (
                <MdMenu className="text-slate-900 text-2xl h-10 p-2 w-10 rounded-full" />
              )}
            </button>
          </div>

          <div
            className={`sm:flex sm:flex-row sm:space-x-4 sm:items-center ${
              isOpen ? "flex flex-col fixed inset-x-0 top-16 bg-white shadow-lg text-left py-4 space-y-4 sm:relative sm:top-0 sm:shadow-none sm:py-0 sm:space-y-0" : "hidden sm:flex"
            }`}
          >
            <a
              href="#landingpage"
              onClick={(e) => handleScroll(e, 'landingpage')}
              className={`px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black cursor-pointer 
              ${activeSection === 'landingpage' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className={`px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black cursor-pointer 
              ${activeSection === 'about' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              About
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleScroll(e, 'testimonials')}
              className={`px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black cursor-pointer 
              ${activeSection === 'testimonials' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              Testimonials
            </a>
            <a
              href="#faqs"
              onClick={(e) => handleScroll(e, 'faqs')}
              className={`px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black cursor-pointer
               ${activeSection === 'faqs' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className={`px-4 py-2 text-xl text-black hover:font-bold hover:border-b-2 w-fit hover:border-black cursor-pointer 
              ${activeSection === 'contact' ? 'font-bold border-b-2 border-black' : ''}`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
