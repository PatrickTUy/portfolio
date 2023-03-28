import React, { useState } from 'react';
import EditHome from '../../modals/dashboard/EditHome';
import { IoMdCamera } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';

const Home = () => {
  const [editHome, setEditHome] = useState(false);
  return (
    <>
      <EditHome show={editHome} setShow={() => setEditHome(!editHome)} />
      <div className="flex flex-col py-4 px-6 font-inter text-white">
        <h1 className="font-bold text-yellow mb-8">HOME</h1>
        <div className="flex flex-col gap-8 mmd:flex-row mmd:gap-16 mx-auto">
          <div className="h-[150px] w-[150px] rounded-full">
            <img
              src="/Girl.png"
              alt=""
              className="h-[150px] w-[150px] rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col w-fit">
            <h1 className=" font-bold text-base mb-4">
              TUYISHIMIRE Y. Patrick
            </h1>
            <h3 className="text-sm">Array of expertise</h3>
            <ul className="text-sm">
              <li>ui/ux designer</li>
              <li>Fullstack developer</li>
              <li>Content creator</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row justify-between">
          <span></span>
          <button className="bg-yellow px-4 py-2 rounded-lg" onClick={() => setEditHome(!editHome)}>
            <MdModeEdit className="m-auto" color="#000" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
