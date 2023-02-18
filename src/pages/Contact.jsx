import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { IoRocketSharp } from 'react-icons/io5';
import { BiSend } from 'react-icons/bi';

const Contact = () => {
  return (
    <div className="flex flex-col bg-[#2c2a2a] xlg:px-32">
      <h1 className="text-white font-medium mx-auto text-3xl w-fit mt-8 mb-12">
        Get in <span className="text-yellow text-3xl">touch</span>
      </h1>
      <div className="flex flex-col mmd:flex-row gap-4 justify-between w-fit md:w-[85%] lg:w-[70%] mx-auto mb-16 md:mb-32">
        <div className="flex items-center">
          <div className="bg-[#353131] flex h-[60px] w-[60px] rounded-full items-center justify-center m-2">
            <MdOutlineEmail color="#DFDA53" className="h-[30px] w-[30px]" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl text-white w-fit">Email</h1>
            <h1 className="text-sm md:text-base text-white w-fit">
              yangeney@gmail.com
            </h1>
          </div>
        </div>
        <div className="flex items-center">
          <div className="bg-[#353131] flex h-[60px] w-[60px] rounded-full items-center justify-center m-2">
            <GoLocation color="#DFDA53" className="h-[30px] w-[30px]" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl text-white w-fit">Adress</h1>
            <h1 className="text-sm md:text-base text-white w-fit">KG 123 ST</h1>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="bg-[#353131] flex h-[60px] w-[60px] rounded-full items-center justify-center m-2">
            <FaPhoneAlt color="#DFDA53" className="h-[30px] w-[30px]" />
          </div>
          <div>
            <h1 className="text-lg md:text-xl text-white w-fit">Phone</h1>
            <h1 className="text-sm md:text-base text-white w-fit">
              +(250) 789 810 670
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center px-4 w-full md:w-[80%] mx-auto">
        <div className="flex flex-col gap-4 md:gap-8 w-fit mmd:w-[500px] md:w-[60%]">
          <h1 className="text-yellow text-3xl md:text-5xl font-bold">
            Let's chat.
          </h1>
          <h1 className="text-white text-opacity-80 text-2xl md:text-5xl font-semibold  md:font-bold">
            Tell me about your project.
          </h1>
          <h1 className="text-white text-opacity-80 text-lg md:text-2xl font-semibold  md:font-bold">
            Let's build something together!
          </h1>
        </div>
        <div className="flex flex-col gap-4 mt-16 md:mt-0 w-[90%] max-w-[500px] md:w-[40%]">
          <h1 className="flex items-center gap-2 text-base md:text-xl text-white text-opacity-80">
            Send me a quick message!
            <IoRocketSharp
              color="#DFDA53"
              className="h-[30px] w-[30px] md:[40px] md:[40px]"
            />
          </h1>
          <input
            type="text"
            placeholder="Names"
            className="bg-[#2c2a2a] border text-white text-opacity-80 pl-2 border-white border-opacity-80 h-[40px] rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-[#2c2a2a] border text-white text-opacity-80 pl-2 border-white border-opacity-80 h-[40px] rounded-md"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="bg-[#2c2a2a] border text-white text-opacity-80 pl-2 border-white border-opacity-80 min-h-[100px] max-h-[250px] rounded-md"
          />

          <button className="bg-[#2c2a2a] border border-yellow text-yellow font-bold py-2">
            <span className="flex justify-center gap-1 items-center">
              <h1>SEND</h1> <BiSend color="#DFDA53" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
