import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const About = () => {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 w-full items-center">
        <div className="flex flex-col gap-4 w-[48%] justify-start items-center">
          <h1 className="font-inter font-bold text-3xl text-yellow text-center">
            {' '}
            WHO IS PATRICK?
          </h1>
          <div className="">
            <img src="/image.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-[48%]">
          <h1 className="font-inter text-white text-2xl mb-4">
            Lörem ipsum anates spede oska polyfiering. Prenera intranas såväl
            som pneumavalens.
          </h1>

          <h1 className="font-inter text-white text-2xl">
            My goal is to homor huruvida ång. Lörem ipsum anates spede oska
            polyfiering. Prenera intranas såväl som pneumavalens. If you have a
            project that you want to get started or just saying hello, then{' '}
            <span className="font-inter text-yellow">get in touch.</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col">
        <h1 className="font-inter font-bold text-3xl text-yellow text-center">
          MY DEVELOPMENT PROCESS
        </h1>
        <div className="flex self-center">
          <div className="flex gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[150px] h-[150px]">
              <h1 className="font-inter text-3xl text-white font-bold">1</h1>
              <h2 className="font-rowdies text-xl text-white">CONCEPT</h2>
            </div>
            <MdArrowForwardIos color="#DFDA53" size={50} />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[150px] h-[150px]">
              <h1 className="font-inter text-3xl text-white font-bold">2</h1>
              <h2 className="font-rowdies text-xl text-white">DESIGN</h2>
            </div>
            <MdArrowForwardIos color="#DFDA53" size={50} />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[150px] h-[150px]">
              <h1 className="font-inter text-3xl text-white font-bold">3</h1>
              <h2 className="font-rowdies text-xl text-white">CODING</h2>
            </div>
            <MdArrowForwardIos color="#DFDA53" size={50} />
          </div>
          <div className="flex gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[150px] h-[150px]">
              <h1 className="font-inter text-3xl text-white font-bold">4</h1>
              <h2 className="font-rowdies text-xl text-white">LAUNCH</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
