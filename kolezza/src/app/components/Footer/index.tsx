
import Image from 'next/image';
import { RiFacebookLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";



const Footer = () => {

    return (
        <footer id='contact' className="mt-40">
           <div className="flex justify-center items-center">
            <Image 
             src="/images/playfulkids.png" 
             alt="kids image" 
             width={900} 
             height={500} 
          />
        </div>

        <div className="bg-light-sky-blue flex flex-col lg:flex-row">
          {/* logo image */}
          <div className="mt-10 lg:mt-20 mx-auto lg:ml-30">
            <Image src="/images/navbarlogo.png" alt="logo" width={300} height={300} className="w-auto h-auto max-w-[200px] lg:max-w-[250px]" />
          </div>

          {/* Footer Text */}
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
            <FaInstagram className="text-6xl text-white bg-custom-blue rounded-full flex items-center justify-center p-2" />
            <RiFacebookLine className="text-6xl text-white bg-custom-blue rounded-full flex items-center justify-center p-2" />
            <MdOutlineMailOutline className="text-6xl text-white bg-custom-blue rounded-full flex items-center justify-center p-2" />
            </div>
          </div>
        </div>
        </footer>

        
    );
};

export default Footer;




