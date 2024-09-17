"use client";
import React from "react";
import Image from "next/image";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const Testimonials = () => {
  return (
    <>
      <header className="text-center mt-8">
        <h1 className="font-sans text-customDarkBlue is:text-[26px] font-extrabold lg:text-[54px] text-[26px] md:text-[40px] im:text-[40px] nh:text-[54px] drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
          Testimonials
        </h1>
      </header>
     


<section className="pt-20 bg-customGreen pb-16 md:pt-32 md:pb-32 text-white flex flex-col px-8">

  <div className="flex flex-col md:flex-row items-center justify-between w-full -mt-10 nh:ml-6">

 
    <div className="flex items-center justify-center w-full mb-8 md:mb-0 lg:mr-38">
      <Image
        src="/images/woman.png"
        alt="Woman"
        width={242}
        height={258}
        className="w-[120px] h-[130px] md:w-[352px] md:h-[352px] nh:w-[200px] nh:h-[200px] md:rounded-full max-w-full im:w-[250px] im:h-[240px]"
      />
    </div>

    
    <div className="text-center md:text-left nh:text-[24px] flex flex-col justify-center w-full px-4 md:px-8 lg:px-16">

     
      <RiDoubleQuotesL className="text-customDarkBlue text-[50px] font-nunito  is:text-[50px] md:text-4xl lg:text-8xl mb-4 -ml-2" />
      <div className="w-full lg:w-[400px]">
        <h2 className="font-extrabold mb-2 font-sans im:text-[24px] text-[24px] md:text-[24px] is:text-[24px] nh:text-[30px] text-left lg:text-[32px] sm-text[24px]">
          AMAZING CUSTOMER EXPERIENCE
        </h2>
      </div>
      <p className="w-full leading-[1.2] text-[18px] font-sans  md:w-96 is:text-[18px] lg:w-[600px] nh:text-[30px] sm:text-[18px] im:text-[24px] md:text-[18px] text-left mt-4 lg:text-[32px]">
        SawaTok is really the best option.
        After doc prescribed it to me, my
        child&apos;s fluency has been improving alot!
      </p>

   
      <RiDoubleQuotesR className="text-customDarkBlue text-[50px] md:text-4xl lg:text-8xl mt-4 ml-4 md:ml-8 lg:ml-16" />
    </div>

  </div>
</section>








    </>
  );
};
export default Testimonials;