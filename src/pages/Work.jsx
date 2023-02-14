import React from 'react';
import { BsGithub } from 'react-icons/bs';

const Work = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col  bg-[#2c2a2a] xlg:px-32">
      <h1 className="font-inter font-bold text-3xl text-yellow pb-4 border-yellow border-b w-[80%] mx-auto">
        PROJECTS
      </h1>
      <div className="flex flex-row flex-wrap w-[80%] mx-auto gap-[30px] mt-8 ">
        {blogs.map((blog) => {
          return (
            <div key={blog} className="flex flex-col bg-black bg-opacity-20 rounded-3xl min-h-[250px] w-[300px] mmd:w-[200px] md:w-[230px] pt-6 px-6 pb-3">
              <div className="flex flex-col p-2 bg-[#423C3C] rounded-t-3xl">
                <h1 className="font-inter font-bold text-yellow text-base text-center">
                  Devpulse
                </h1>
                <h1 className="font-inter  text-xs text-white text-center">
                  Platform for managing trainees/students in ed-tech
                  organizations.
                </h1>
              </div>

              <div className="flex flex-col bg-[#423C3C] mt-4 p-2">
                <h1 className="text-white text-[10px]">ReactJS + TailWind CSS</h1>
                <h1 className="text-white text-[10px]">NodeJS + GraphQL</h1>
              </div>

              <div className="flex justify-between items-center bg-[#423C3C] my-4 py-2 px-4 rounded-b-3xl">
                <h1 className="text-white text-sm">EXPLORE</h1>
                <BsGithub color="#DFDA53" size={20} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
