import React, { useState } from 'react';
import EditAbout from '../../modals/dashboard/EditAbout';
import { IoMdCamera } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';

const About = () => {
  const [editAbout, setEditAbout] = useState(false);
  return (
    <>
      <EditAbout show={editAbout} setShow={()=> setEditAbout(!editAbout)}/>
      <div className="font-inter bg-darker flex flex-col px-6 py-4">
        <h1 className="font-bold text-yellow mb-8">ABOUT</h1>
        <div className="flex flex-col gap-8 mmd:flex-row mmd:gap-16 text-white w-fit justify-center items-center">
          <div className="h-[150px] w-full mmd:w-[200px] rounded-full">
            <img
              src="/Girl.png"
              alt=""
              className="h-[150px] w-full mmd:w-[200px]"
            />
          </div>
          <div className="flex flex-col w-full mmd:w-[60%] text-sm">
            <p className="mb-4">
              My goal is to homor huru vida ång. Lörem ipsum anates spede oska
              poly fiering. Prenera intra anates spede oska poly fiering.
              Prenera intra
            </p>
            <p className="">
              My goal is to homor huru vida ång. Lörem ipsum anates spede oska
              poly fiering. Prenera intra anates spede oska poly fiering.
              Prenera intra
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span></span>
          <button className="bg-yellow px-4 py-2 rounded-lg" onClick={()=> setEditAbout(!editAbout)}>
            <MdModeEdit className="m-auto" color="#000" />
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
