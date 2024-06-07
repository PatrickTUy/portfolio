import React, { useState } from 'react';
import AddProject from '../../modals/dashboard/AddProject';
import EditProject from '../../modals/dashboard/EditProject';
import Carousel from '../../components/Carousel';
import { HiPlus } from 'react-icons/hi';
import { BsGithub } from 'react-icons/bs';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
const Work = () => {
  const [editProject, setEditProject] = useState(false);
  const [addProject, setAddProject] = useState(false);
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <AddProject
        show={addProject}
        setShow={() => setAddProject(!addProject)}
      />
      <EditProject
        show={editProject}
        setShow={() => setEditProject(!editProject)}
      />
      <div className="flex flex-col py-4 px-6 font-inter text-white ">
        <h1 className="font-bold text-yellow mb-8">PROJECTS</h1>
        <button
          className="bg-yellow px-4 py-2 rounded-lg w-fit "
          onClick={() => setAddProject(!addProject)}
        >
          <div className="flex flex-row items-center text-black gap-1">
            <h1 className="font-semibold"> Add Project</h1>
            <HiPlus className="m-auto" color="#000" />
          </div>
        </button>
        <div className="px-4">
          <Carousel
            slidesToShow={3}
            slidesToScroll={3}
            style={'flex flex-row gap-2 w-full mt-12'}
          >
            {blogs.map((blog) => {
              return (
                <div
                  key={blog}
                  className="flex flex-col h-[300px] max-w-[250px]"
                >
                  <div className="flex flex-row justify-between">
                    <span></span>
                    <div className="flex flex-row gap-4 mb-2 mr-2">
                      <MdModeEdit color="#DFDA53" className="cursor-pointer" 
                      onClick={() => setEditProject(!editProject)}/>
                      <RiDeleteBin6Line
                        color="#DFDA53"
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col bg-black bg-opacity-20 rounded-3xl  w-full pt-4 px-4 pb-1 ">
                    <div className="flex flex-col p-2 bg-[#423C3C] rounded-t-3xl">
                      <h1 className="font-inter font-bold text-yellow text-base text-center">
                        Devpulse
                      </h1>
                      <h1 className="font-inter  text-xs text-white text-center">
                        Platform for managing trainees/students in ed-tech
                        organizations.
                      </h1>
                    </div>

                    <div className="flex flex-col bg-[#423C3C] mt-2 p-2">
                      <h1 className="text-white text-[10px]">
                        ReactJS + TailWind CSS
                      </h1>
                      <h1 className="text-white text-[10px]">
                        NodeJS + GraphQL
                      </h1>
                    </div>

                    <div className="flex justify-between items-center bg-[#423C3C] my-2 py-2 px-4 rounded-b-3xl">
                      <h1 className="text-white text-sm">EXPLORE</h1>
                      <BsGithub color="#DFDA53" size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Work;
