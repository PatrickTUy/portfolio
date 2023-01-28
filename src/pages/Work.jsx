import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Work = () => {
  return (
    <div className="flex flex-col p-4">
      <h1 className="font-inter font-bold text-3xl text-yellow pb-4 border-yellow border-b">
        PROJECTS
      </h1>
      <div className="flex flex-row gap-8 mt-8">
        <div className="flex flex-col bg-black bg-opacity-20 rounded-3xl  min-h-[300px] w-[300px] pt-6 px-6 pb-3">
          <div className="flex flex-col p-2 bg-[#423C3C] rounded-t-3xl">
            <h1 className="font-inter font-bold text-yellow text-xl text-center">
              Devpulse
            </h1>
            <h1 className="font-inter  text-base text-white text-center">
              Platform for managing trainees/students in ed-tech organizations.
            </h1>
          </div>

          <div className="flex flex-col bg-[#423C3C] mt-4 p-2">
            <h1 className="text-white text-base">ReactJS + TailWind CSS</h1>
            <h1 className="text-white text-base">NodeJS + GraphQL</h1>
          </div>

          <div className="flex justify-between items-center bg-[#423C3C] my-4 py-2 px-4 rounded-b-3xl">
            <h1 className="text-white text-base">EXPLORE</h1>
            <BsGithub color="#DFDA53" size={25}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
