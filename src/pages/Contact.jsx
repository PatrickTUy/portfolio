import React from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { IoRocketSharp } from 'react-icons/io5';
import { BiSend } from 'react-icons/bi';

const Contact = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-white mx-auto text-3xl w-fit mt-4 mb-12">
        Get in <span className="text-yellow text-3xl">touch</span>
      </h1>
      <div className="flex justify-between w-[70%] mx-auto mb-32">
        <div className="flex gap-2 items-center">
          <div className="bg-light flex h-[80px] w-[80px] rounded-full items-center justify-center">
            <MdOutlineEmail size={40} color="#DFDA53" className="" />
          </div>
          <div>
            <h1 className="text-2xl text-white w-fit">Email</h1>
            <h1 className="text-2xl text-white w-fit">yangeney@gmail.com</h1>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-light flex h-[80px] w-[80px] rounded-full items-center justify-center">
            <GoLocation size={40} color="#DFDA53" className="" />
          </div>
          <div>
            <h1 className="text-2xl text-white w-fit">Adress</h1>
            <h1 className="text-2xl text-white w-fit">KG 123 ST</h1>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="bg-light flex h-[80px] w-[80px] rounded-full items-center justify-center">
            <FaPhoneAlt size={40} color="#DFDA53" className="" />
          </div>
          <div>
            <h1 className="text-2xl text-white w-fit">Phone</h1>
            <h1 className="text-2xl text-white w-fit">+(250) 789 810 670</h1>
          </div>
        </div>
      </div>

      <div className="flex justify-between w-[80%] mx-auto">
        <div className="flex flex-col gap-8">
          <h1 className="text-yellow text-5xl font-bold">Let's chat.</h1>
          <h1 className="text-white text-opacity-80 text-5xl font-bold">
            Tell me about your project.
          </h1>
          <h1 className="text-white text-opacity-80 text-2xl font-bold">
            Let's build something together!
          </h1>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="flex items-center gap-2 text-2xl text-white text-opacity-80">
            Send me a quick message!
            <IoRocketSharp size={40} color="#DFDA53" />
          </h1>
          <input
            type="text"
            placeholder="Names"
            className="bg-primary border text-white text-opacity-80 pl-2 border-white border-opacity-80 h-[40px] rounded-md"
          />
          <input
            type="text"
            placeholder="Email"
            className="bg-primary border text-white text-opacity-80 pl-2 border-white border-opacity-80 h-[40px] rounded-md"
          />
          <textarea
            type="text"
            placeholder="Message"
            className="bg-primary border text-white text-opacity-80 pl-2 border-white border-opacity-80 min-h-[100px] max-h-[300px] rounded-md"
          />

          <button className="bg-primary border border-yellow text-yellow font-bold py-2">
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
