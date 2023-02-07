import React from 'react';
import { FiChevronsDown } from 'react-icons/fi';

const Home = () => {
  return (
    <div className="relative mx-auto bg-[#2c2a2a]  py-8 px-4 mmd:px-8 xlg:px-48   xlg:pt-12">
      <div className=" flex h-[60px] w-[60px] mmd:w-[100px] mmd:h-[100px] bg-light rounded-full mx-auto justify-center items-center text-[1.58rem] mmd:text-[2.8rem]">
        👋
      </div>
      <div className="w-full flex items-center mt-16 gap-4 mmd:gap-16">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-2">
            <h1 className="w-fit font-inter font-bold text-[1.25rem] text-white mmd:text-3xl md:text-4xl">
              I am,
            </h1>

            <div className="flex flex-col gap-0 justify-start items-center xlg:flex-row mmd:gap-2 md:gap-4 ">
              <h1 className="w-fit font-inter font-bold text-[4vw] text-white md:text-5xl">
                TUYISHIMIRE Y. Patrick
              </h1>
              {/* <h1 className="w-fit font-inter font-bold text-3xl text-white mmd:text-4xl md:text-5xl">
               
              </h1> */}
            </div>
            <h1 className="hidden gap-2 font-inter text-white text-xl mmd:flex mmd:text-xl md:text-3xl mt-8">
              Freelance{' '}
              <span className="font-bold font-inter text-yellow text-xl mmd:text-xl md:text-3xl">
                UI/UX DESIGNER.
              </span>
            </h1>
            <button className="min-w-[150px] max-w-[250px] mt-8 border border-yellow py-2 mmd:py-4 px-4 mmd:px-8 text-center font-inter text-yellow">
              CONTACT ME
            </button>
          </div>
        </div>
        <div className="w-[45%] min-w-[150px] max-w-[400px]">
          <img src="./image.png" alt="" className="object-fit w-full" />
        </div>
      </div>
      <h1 className="flex w-fit gap-2 font-inter text-white text-xl mmd:hidden mmd:text-xl md:text-3xl mt-16 mx-auto">
        Freelance{' '}
        <span className="font-bold font-inter text-yellow text-xl mmd:text-xl md:text-3xl">
          UI/UX DESIGNER.
        </span>
      </h1>

      <FiChevronsDown size={50} color="#DFDA53" className="mt-28 mx-auto " />
    </div>
  );
};

export default Home;
