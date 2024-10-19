import React from 'react';

const SawaTokInfo = () => {
  return (
    <div id='about' className="px-7 md:px-8 lg:px-32">
      <p className="text-[24px] md:text-[48px] lg:text-[54px] is:text-[26px] font-nunito font-bold text-customDarkBlue text-center drop-shadow-[3px_3px_6px_rgba(0,0,0,0.1)]">
        Why choose SawaTok <span className='text-custom-blue'>?</span>
      </p>

      <div className='flex flex-col lg:flex-row gap-8 lg:gap-28'>
      <div className='mt-8 lg:mt-16'>
  <img src="/images/parent.avif" alt="parents image" className='block lg:hidden w-full h-auto mb-8' />

  <h2 className='text-customDarkBlue text-[24px] md:text-[36px] lg:text-[40px] is:text-[26px] mb-2 nh:text-[26px] lg:mb-10 font-nunito antialiased font-bold drop-shadow-[3px_3px_6px_rgba(0,0,0,0.1)]'>
    An outstanding fluency journey
  </h2>
  <p className='text-[16px] md:text-[24px] lg:text-[28px] nh:text-[24px] font-nunito'>
    Sawatok has different modules that improve the communication abilities of kids. The modules contain images and text that the kids should say out loud.
    After that, the kids are awarded points according to the improvement they have made so far.
  </p>

  <img src="/images/parent.avif" alt="parents image" className='hidden lg:block w-[549px] l-[748px] lg:w-[427px] h-auto mt-16 lg:mt-20 lg:ml-14' /> {/* Added lg:ml-14 */}
</div>


        <div className='mt-10 lg:mt-10'>
          <img src="/images/child.png" alt="child" className='w-full lg:w-[427px] h-auto ml-0 lg:ml-14 md:float-start' />
          <div className='mt-6 lg:mt-[34rem]'>
            <h1 className='text-customGreen text-[24px] md:text-[36px] is:text-[26px] lg:text-[40px] nh:text-[26px] mb-2 lg:mb-10 font-nunito font-bold drop-shadow-[3px_3px_6px_rgba(0,0,0,0.1)]'>
              Unlock your child&apos;s full potential<span className='text-customDarkBlue'> in speaking fluently.</span>
            </h1>
            <p className='text-[16px] md:text-[24px] lg:text-[28px] nh:text-[24px] font-nunito'>
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
