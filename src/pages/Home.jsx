import React from 'react';
import { FiChevronsDown } from 'react-icons/fi'

const Home = () => {
  return (
    <div className="h-full w-full bg-primary">
      <div className=" flex w-[100px] h-[100px] mt-16 md:mt-0 bg-light rounded-full mx-auto justify-center items-center text-[2.8rem]">
        👋
      </div>
      <div className="w-full flex justify-between mt-16">
        <div className="flex flex-col ">
          <div className="flex flex-col gap-2">
            <h1 className="font-inter font-bold text-2xl text-white mmd:text-3xl md:text-4xl">
              I am,
            </h1>

            <div className="flex flex-col gap-0 justify-start items-center xlg:flex-row mmd:gap-2 md:gap-4 ">
              <h1 className="w-full font-inter font-bold text-3xl text-white mmd:text-4xl md:text-5xl">
                TUYISHMIRE
              </h1>
              <h1 className="w-full font-inter font-bold text-3xl text-white mmd:text-4xl md:text-5xl">
                Y. Patrick
              </h1>
            </div>
            <h1 className="hidden gap-2 font-inter text-white text-xl mmd:flex mmd:text-xl md:text-3xl mt-8">
              Freelance{' '}
              <span className="font-bold font-inter text-yellow text-xl mmd:text-xl md:text-3xl">
                UI/UX DESIGNER.
              </span>
            </h1>
            <button className="min-w-[190px] max-w-[250px] mt-8 border border-yellow py-4 px-8 text-center font-inter text-yellow">
              CONTACT ME
            </button>
          </div>
        </div>
        <div className='w-[45%]'>
          <img src="./image.png" alt="" className='object-cover' />
        </div>
      </div>
      <h1 className="flex w-fit gap-2 font-inter text-white text-xl mmd:hidden mmd:text-xl md:text-3xl mt-16 mx-auto">
        Freelance{' '}
        <span className="font-bold font-inter text-yellow text-xl mmd:text-xl md:text-3xl">
          UI/UX DESIGNER.
        </span>
      </h1>

      <FiChevronsDown size={50} color='#DFDA53' className='mt-32 mx-auto '/>
    </div>
  );
};

export default Home;
