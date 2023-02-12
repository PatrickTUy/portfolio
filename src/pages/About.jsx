import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const About = () => {
  return (
    <div className="bg-primary flex flex-col xlg:px-32 overflow-y-hidden">
      <div className="flex flex-col mmd:flex-row gap-4 w-full items-center mt-16">
        <div className="flex flex-col gap-4 w-full mmd:w-[48%] justify-start items-center">
          <h1 className="font-inter font-bold text-xl mmd:text-3xl text-yellow text-center">
            {' '}
            WHO IS PATRICK?
          </h1>
          <div className="">
            <img src="/image.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-full mmd:w-[48%]">
          <h1 className="font-inter text-white text-lg mmd:text-xl mb-4 px-4">
            Lörem ipsum anates spede oska polyfiering. Prenera intranas såväl
            som pneumavalens.
          </h1>

          <h1 className="font-inter text-white text-lg mmd:text-xl px-4">
            My goal is to homor huruvida ång. Lörem ipsum anates spede oska
            polyfiering. Prenera intranas såväl som pneumavalens. If you have a
            project that you want to get started or just saying hello, then{' '}
            <span className="font-inter text-yellow">get in touch.</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col mt-8 mmd:mt-32">
        <h1 className="font-inter font-bold text-2xl text-yellow text-center">
          MY DEVELOPMENT PROCESS
        </h1>
        <div className="flex self-center mt-16">
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <h1 className="font-inter text-xl md:text-3xl text-white font-bold">1</h1>
              <h2 className="font-rowdies text-sm md:text-xl text-white">CONCEPT</h2>
            </div>
            <MdArrowForwardIos color="#DFDA53" className='h-[33px] w-[33px] md:h-[50px] md:w-[50px]' />
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <h1 className="font-inter text-xl md:text-3xl text-white font-bold">2</h1>
              <h2 className="font-rowdies text-sm md:text-xl text-white">DESIGN</h2>
            </div>
            <MdArrowForwardIos color="#DFDA53" className='h-[33px] w-[33px] md:h-[50px] md:w-[50px]' />
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full  w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <h1 className="font-inter text-xl md:text-3xl text-white font-bold">3</h1>
              <h2 className="font-rowdies text-sm md:text-xl text-white">CODING</h2>
            </div>
            <MdArrowForwardIos color="#DFDA53" className='h-[33px] w-[33px] md:h-[50px] md:w-[50px]' />
          </div>
          <div className="flex gap-2 md:gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px]">
              <h1 className="font-inter text-xl md:text-3xl text-white font-bold">4</h1>
              <h2 className="font-rowdies text-sm md:text-xl text-white">LAUNCH</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[60%] flex justify-between mt-32 mx-auto">
        <div className="flex flex-col w-[40%]">
          <h1 className="font-inter text-yellow font-bold text-3xl mb-8">
            SKILLS
          </h1>
          <div className="flex flex-col mt-2">
            <label
              for="react"
              className="font-inter font-bold text-white text-xl mb-2"
            >
              ReactJS & Redux
            </label>
            <progress id="react" max="100" value="80">
              70%
            </progress>
          </div>

          <div className="flex flex-col mt-2">
            <label
              for="react"
              className="font-inter font-bold text-white text-xl mb-2"
            >
              Web Design
            </label>
            <progress id="react" max="100" value="80">
              70%
            </progress>
          </div>
          <div className="flex flex-col mt-2">
            <label
              for="react"
              className="font-inter font-bold text-white text-xl mb-2"
            >
              NodeJS,Express & GraphQl
            </label>
            <progress id="react" max="100" value="80">
              70%
            </progress>
          </div>
          <div className="flex flex-col mt-2">
            <label
              for="react"
              className="font-inter font-bold text-white text-xl mb-2"
            >
              Mongo DB & PostgreSQL
            </label>
            <progress id="react" max="100" value="80">
              70%
            </progress>
          </div>
          <div className="flex flex-col mt-2">
            <label
              for="react"
              className="font-inter font-bold text-white text-xl mb-2"
            >
              Mocha & Chai
            </label>
            <progress id="react" max="100" value="80">
              70%
            </progress>
          </div>
        </div>

        <div className="flex flex-col w-fit">
          <h1 className="font-inter text-yellow font-bold text-3xl mb-8">
            SERVICES
          </h1>
          <ul className='text-white'>
            <li className="font-inter font-bold text-white text-xl mb-2">
              Project concept
            </li>
            <li className="font-inter font-bold text-white text-xl mb-2">
              Web design
            </li>
            <li className="font-inter font-bold text-white text-xl mb-2">
              Web development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
