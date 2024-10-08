import React from 'react';
import Image from 'next/image';

const SawaTokInfo = () => {
  return (
    <div id="about" className="px-7 md:px-8 lg:px-32">
      <p className="text-[24px] md:text-[48px] lg:text-[62px] font-nunito font-bold text-customDarkBlue text-center drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
        Why choose SawaTok <span className='text-customRed'>?</span>
      </p>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
        <div className="mt-8 lg:mt-16">
          <Image src="/images/parent.avif" alt="parents image" className='block lg:hidden mb-8' width={549} height={549} />

          <h2 className="text-customDarkBlue text-[24px] md:text-[36px] lg:text-[44px] nh:text-[26px] lg:mb-10 font-nunito antialiased font-bold drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
            An outstanding fluency journey
          </h2>
          <p className="text-[16px] md:text-[24px] lg:text-[28px] nh:text-[24px] font-nunito">
            Sawatok has different modules that improve the communication abilities of kids. The modules contain images and text that the kids should say out loud.
            After that, the kids are awarded points according to the improvement they have made so far.
          </p>
          <Image src="/images/parent.avif" alt="parents image" className='hidden lg:block lg:w-[427px] h-auto mt-16 lg:mt-20' width={549} height={549} />
        </div>

        <div className="mt-10 lg:mt-10">
          <Image 
            src="/images/child.jpeg" 
            alt="child" 
            className="w-full h-auto ml-0 lg:ml-14 md:float-start" 
            width={540}  
            height={540} 
          />
          <div className="mt-6 lg:mt-[3rem]">
            <h1 className="text-customGreen text-[24px] md:text-[36px] lg:text-[44px] nh:text-[26px] lg:mb-10 font-nunito font-bold drop-shadow-[3px_3px_6px_rgba(0,0,0,0.5)]">
              Unlock your child&apos;s full potential<span className="text-customDarkBlue"> in speaking fluently.</span>
            </h1>
            <p className="text-[16px] md:text-[24px] lg:text-[28px] nh:text-[24px] font-nunito">
              Your kids will now be able to interact with different modules after the speech therapist unlocks them and follows every adventure on speaking fluently.
              In addition to learning how to speak fluently, the parent can monitor their children&apos;s progress through the report issued by the speech therapist.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SawaTokInfo;
