import React from 'react';
import Image from 'next/image';

const Landingpage = () => {
    return (
        <div id='landingpage' className="flex flex-col justify-between">
            <div className="relative bg-customBlue min-h-screen overflow-hidden">
                <div className="container mx-auto flex flex-col p-6 md:p-10
                 lg:flex-row items-center justify-between space-y-4 mt-6
                 lg:space-y-0 lg:space-x-4 lg:mt-28 nh:mt-4">
                    <div className="w-full lg:w-1/2 text-left lg:text-left">
                        <div className="mb-8 lg:hidden">
                            <Image
                                src="/images/kids.png"
                                alt="Children playing and communicating"
                                width={700}
                                height={400}
                                className="w-full h-auto im:w-[400px] im:mx-auto"
                            />
                        </div>
                        <h1 className="text-2xl im:text-[23px] nh:text-3xl md:text-4xl lg:text-4xl font-nunito font-bold text-navy-900 leading-snug mb-6">
                            Your child's Journey to confident communication starts here.
                        </h1>
                        
                        <p className="text-lg im:text-2xl nh:text-2xl md:text-2xl lg:text-[28px] font-nunito text-black mb-8">
                            Sawatok is an affordable device designed for kids between the age of 4-6 years to help children communicate fluently by providing real-time feedback and support for their speech development.
                        </p>
                        <button className="font-nunito im:text-bold im:px-20 im:py-5 sd:mb-20 font-semibold bg-customDarkBlue text-white py-4 md:py-3 lg:py-[15px] px-8 md:px-8 lg:px-[60px] text-sm md:text-md lg:text-lg rounded-[20px] mb-10 shadow-md">
                            Buy SawaTok
                        </button>
                    </div>
                    <div className="w-full nh:w-[520px] md:w-1/2 mt-6 md:mt-8 mb-[-20px] hidden lg:block"> 
                        <Image
                            src="/images/kids.png"
                            alt="Children playing and communicating"
                            width={600}
                            height={400}
                            className="w-full h-auto"
                            priority
                        />
                    </div>
                </div>
                <div className="absolute inset-x-0 bottom-0">
                    <Image
                        src="/images/cloud.png"
                        alt="Clouds"
                        layout="responsive"
                        width={1920}
                        height={500}
                        className="w-full h-auto"
                        priority
                    />
                </div>
            </div>

            <div className="relative bg-white py-10 lg:py-16 z-10">
                <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 py-6 lg:py-10 relative mt-[-90px] lg:mt-[-180px]">
                    <div className="w-full lg:w-1/3 text-center nh:mb-[-60px]">
                        <Image
                            src="/images/laughing.png"
                            alt="Fun & Entertainment"
                            width={414}
                            height={285}
                            className="mb-4 nh:mb-[0px] mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]"
                        />
                        <p className="text-[23px] nh:text-[22px] md:text-lg lg:text-[32px] font-nunito text-customDarkBlue font-semibold">
                            Fun & Entertainment
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center">
                        <Image
                            src="/images/learning.png"
                            alt="Play Learning"
                            width={236}
                            height={213}
                            className="mb-4 nh:w-[140px] sd:w-[170px] mx-auto max-w-[50%] md:max-w-[40%] lg:max-w-[70%]" 
                        />
                        <p className="text-[23px] md:text-lg nh:mb-[-130px] nh:text-[22px] lg:text-[32px] font-nunito text-customDarkBlue font-semibold mb-[-20px]">
                            Play while Learning
                        </p>
                    </div>

                    <div className="w-full lg:w-1/3 text-center">
                        <Image
                            src="/images/confidence.png"
                            alt="Confidence Boost"
                            width={446}
                            height={250}
                            className="mb-4 mx-auto max-w-[80%] md:max-w-[40%] lg:max-w-[70%]" 
                        />
                        <p className="text-[23px] nh:text-[22px] nh:mb-[-140px] md:text-lg lg:text-[32px] font-nunito text-customDarkBlue font-semibold">
                            Confidence Boost
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landingpage;