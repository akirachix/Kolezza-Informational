"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HowSawaToWorks = () => {
  return (
    <section className="py-14 px-10 md:px-4 lg:px-10 xl:px-8">
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-customDarkBlue font-bold text-center drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)] lg:mt-8 ">
        How SawaTok Works
      </h2>
      <div className="flex flex-col md:flex-row gap-0 md:gap-8 items-center justify-center md:mt-22 mx-4">
        <div className="flex-1 border-l-8 border-customDarkBlue pl-4 md:mb-0 md:mr-10 xl:ml-36 mb-24 mt-8 md:mt-32">
          <p className="text-[16px] sm:text-[16px] md:text-[24px] lg:text-[28px] mh:text-[18px] font-normal leading-relaxed">
            Your kids will now be able to interact with different modules after the speech therapist unlocks them and follow every adventure on speaking fluently.
          </p>
        </div>
        <div className="flex justify-center flex-1 mb-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }} 
          >
            <Image
              src="/images/Sawatok.png" 
              alt="Device for SawaTok"
              width={600}
              height={450}
              className="rounded-md shadow-md max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowSawaToWorks;