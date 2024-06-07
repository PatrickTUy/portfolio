import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const About = () => {
  return (
    <div className="bg-primary flex flex-col xlg:px-32 overflow-y-hidden">
      <div className="flex flex-col mmd:flex-row gap-4 w-full items-center mt-16">
        <div className="flex flex-col gap-4 w-full mmd:w-[48%] justify-start items-center">
          <h1 className="font-inter font-bold text-xl mmd:text-2xl text-yellow text-center">
            {' '}
            WHO IS PATRICK?
          </h1>
          <div className="">
            <img src="/image.png" alt="" />
          </div>
        </div>
        <div className="flex flex-col w-full mmd:w-[48%]">
          <h1 className="font-inter text-white text-sm mmd:text-base mb-4 px-4">
            Lörem ipsum anates spede oska polyfiering. Prenera intranas såväl
            som pneumavalens.
          </h1>

          <h1 className="font-inter text-white text-sm mmd:text-base px-4">
            My goal is to homor huruvida ång. Lörem ipsum anates spede oska
            polyfiering. Prenera intranas såväl som pneumavalens. If you have a
            project that you want to get started or just saying hello, then{' '}
            <span className="font-inter text-yellow">get in touch.</span>
          </h1>
        </div>
      </div>

      <div className="flex flex-col mt-8 mmd:mt-16">
        <h1 className="font-inter font-bold text-xl md:text-2xl text-yellow text-center">
          MY DEVELOPMENT PROCESS
        </h1>
        <div className="flex flex-col sm:flex-row self-center mt-8 md:mt-16">
          <div className="flex flex-col sm:flex-row gap-1 mmd:gap-2 md:gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[100px] h-[100px] sm:w-[65px] sm:h-[65px] mmd:w-[100px] mmd:h-[100px] md:w-[130px] md:h-[130px]">
              <h1 className="font-inter text-xl sm:text-[10px] mmd:text-xl md:text-2xl leading-none text-white font-bold">
                1
              </h1>
              <h2 className="font-rowdies text-sm sm:text-[10px] mmd:text-sm md:text-xl text-white">
                CONCEPT
              </h2>
            </div>
            <MdArrowForwardIos
              color="#DFDA53"
              className="h-[20px] w-[20px] rotate-90 sm:rotate-0 mmd:h-[33px] mmd:w-[33px] md:h-[40px] md:w-[40px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-1 mmd:gap-2 md:gap-4 items-center ">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full w-[100px] h-[100px] sm:w-[65px] sm:h-[65px] mmd:w-[100px] mmd:h-[100px] md:w-[130px] md:h-[130px]">
              <h1 className="font-inter text-xl sm:text-[10px] mmd:text-xl md:text-2xl leading-none text-white font-bold">
                2
              </h1>
              <h2 className="font-rowdies text-sm sm:text-[10px] mmd:text-sm md:text-xl text-white">
                DESIGN
              </h2>
            </div>
            <MdArrowForwardIos
              color="#DFDA53"
              className="h-[20px] w-[20px] rotate-90 sm:rotate-0 mmd:h-[33px] mmd:w-[33px] md:h-[40px] md:w-[40px]"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-1 mmd:gap-2 md:gap-4 items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full  w-[100px] h-[100px] sm:w-[65px] sm:h-[65px] mmd:w-[100px] mmd:h-[100px] md:w-[130px] md:h-[130px]">
              <h1 className="font-inter text-xl sm:text-[10px] mmd:text-xl md:text-2xl leading-none text-white font-bold">
                3
              </h1>
              <h2 className="font-rowdies text-sm sm:text-[10px] mmd:text-sm md:text-xl text-white">
                CODING
              </h2>
            </div>
            <MdArrowForwardIos
              color="#DFDA53"
              className="h-[20px] w-[20px] rotate-90 sm:rotate-0 mmd:h-[33px] mmd:w-[33px] md:h-[40px] md:w-[40px]"
            />
          </div>
          <div className="flex items-center">
            <div className="flex flex-col bg-light justify-center items-center p-4 rounded-full  w-[100px] h-[100px] sm:w-[65px] sm:h-[65px] mmd:w-[100px] mmd:h-[100px] md:w-[130px] md:h-[130px]">
              <h1 className="font-inter text-xl sm:text-[10px] mmd:text-xl md:text-2xl leading-none text-white font-bold">
                4
              </h1>
              <h2 className="font-rowdies text-sm sm:text-[10px] mmd:text-sm md:text-xl text-white">
                LAUNCH
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[90%] md:w-[60%] flex flex-col gap-16 mmd:flex-row justify-between mb-8 sm:mt-8 md:mt-32 mx-auto">
        <div className="flex flex-col w-full md:w-[40%]">
          <h1 className="font-inter text-yellow font-bold text-xl md:text-2xl mb-4 md:mb-8">
            SKILLS
          </h1>
          <div className="flex flex-col mt-2">
            <label
              for="react"
              className="font-inter font-bold text-white sm:text-sm md:text-base mb-2"
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
              className="font-inter font-bold text-white sm:text-sm md:text-base mb-2"
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
              className="font-inter font-bold text-white sm:text-sm md:text-base mb-2"
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
              className="font-inter font-bold text-white sm:text-sm md:text-base mb-2"
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
              className="font-inter font-bold text-white sm:text-sm md:text-base mb-2"
            >
              Mocha & Chai
            </label>
            <progress id="react" max="100" value="80">
              70%
            </progress>
          </div>
        </div>

        <div className="flex flex-col w-fit">
          <h1 className="font-inter text-yellow font-bold text-xl md:text-2xl mb-4 md:mb-8">
            SERVICES
          </h1>
          <ul className="text-white">
            <li className="font-inter font-bold text-white text-base mb-2">
              Project concept
            </li>
            <li className="font-inter font-bold text-white text-base mb-2">
              Web design
            </li>
            <li className="font-inter font-bold text-white text-base mb-2">
              Web development
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
