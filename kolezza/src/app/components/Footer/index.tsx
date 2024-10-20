"use client";
import { useState } from 'react';
import Image from 'next/image';
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  const [showNumber, setShowNumber] = useState(false);

  const handlePhoneClick = () => {
    setShowNumber(!showNumber);
  };

  return (
    <footer id="contact" className="mt-30">
      <div className="flex justify-center items-center">
        <Image
          src="/images/playfulkids.png"
          alt="kids image"
          width={900}
          height={500}
        />
      </div>

      <div className="bg-light-sky-blue flex flex-col lg:flex-row">
        <div className="mt-6 lg:mt-10 mx-auto lg:ml-30">
          <Image
            src="/images/sawatokvertical.png"
            alt="logo"
            width={180}
            height={180}
            className=" mt-10 max-w-[200px] lg:max-w-[250px] is:w-[100px]"
          />
        </div>

        <div className="mx-auto lg:ml-[10rem] xl:ml-[8rem] mt-10 lg:mt-20 text-center lg:text-left">
          <div className="font-semibold text-lg lg:text-xl">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              <div className="relative">
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 justify-center lg:justify-start">
                  <span className="hover:underline cursor-pointer">Privacy Policy</span>
                  <span className="hover:underline cursor-pointer">Terms and Conditions</span>
                  <span className="hover:underline cursor-pointer">Help</span>
                </div>
                <div className="absolute left-0 right-0 bottom-0 h-0.5 bg-black"></div>
              </div>
            </div>
            <div className="mt-4 lg:mt-6">
              <p>
                <span style={{ fontSize: '2rem', verticalAlign: 'middle' }}>&copy;</span> 2024 All Rights Reserved
              </p>
            </div>
          </div>

          <div className="flex gap-8 lg:gap-12 justify-center lg:justify-start mt-6 mb-10 lg:mb-20">
            <a 
            href="https://www.linkedin.com/in/christine-akinyi-5689a9235/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            >
            <CiLinkedin className="text-6xl text-white bg-custom-blue rounded-full flex items-center justify-center p-2" />
            </a>
          
            <div className="relative cursor-pointer" onClick={handlePhoneClick}>
              <LuPhoneCall className="text-white text-6xl bg-custom-blue rounded-full flex items-center justify-center p-2" />
             
              {showNumber && (
                <div className="absolute flex gap-1 left-1/2 -translate-x-1/2 top-full mt-3 items-center whitespace-nowrap">
                  <span className="text-black text-lg">Call:</span>
                  <span className="text-black text-lg">+254 757016976</span> 
                </div>
              )}
            </div>
            <a href="mailto:kolezzasawatok@gmail.com" aria-label="Send Email">
              <MdOutlineMailOutline className="text-6xl text-white bg-custom-blue rounded-full flex items-center justify-center p-2" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

