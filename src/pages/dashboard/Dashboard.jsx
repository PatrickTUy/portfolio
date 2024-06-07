import React from 'react';
import Home from './Home';
import About from './About';
import Work from './Work';
import Blog from './Blog';
import { RiDeleteBin6Line } from 'react-icons/ri';

const messages = [
  {
    name: 'Arnold Schnitzel',
    profile: '',
    email: 'schwarzennegger@gmail.com',
    message:
      "Hey Patrick, I've liked your website and would really like to work with you. I see a lot of potential in your work and motives, reach out to me and let's get into business, Hasta la vista! ",
    time: {
      date: '23/March/2023',
      hour: '20:15',
    },
  },
  {
    name: 'Arnold Schnitzel',
    profile: '',
    email: 'schwarzennegger@gmail.com',
    message:
      "Hey Patrick, I've liked your website and would really like to work with you. I see a lot of potential in your work and motives, reach out to me and let's get into business, Hasta la vista! ",
    time: {
      date: '23/March/2023',
      hour: '20:15',
    },
  },
  {
    name: 'Arnold Schnitzel',
    profile: '',
    email: 'schwarzennegger@gmail.com',
    message:
      "Hey Patrick, I've liked your website and would really like to work with you. I see a lot of potential in your work and motives, reach out to me and let's get into business, Hasta la vista! ",
    time: {
      date: '23/March/2023',
      hour: '20:15',
    },
  },
];
const Dashboard = () => {
  return (
    <div className="bg-primary flex flex-col-reverse lg:flex-row justify-between px-4 ">
      <div className="flex flex-col bg-dark rounded-md lg:w-[65%] my-4 py-4">
        <Home />
        <About />
        <Work />
        <Blog />
      </div>
      <div className="bg-dark rounded-md lg:w-[33%] flex flex-col my-4 py-4">
        <h1 className="text-yellow pl-4 font-bold text-xl mb-2">
          Messages ({messages.length})
        </h1>
        <hr className="bg-yellow" />
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className="flex flex-row gap-4 p-2 border-b border-white/60 "
            >
              <div className="h-[80px] lg:w-[80px] ">
                <img
                  src="/Elon.png"
                  alt=""
                  className="h-[65px] w-[65px] rounded-full  object-cover"
                />
              </div>
              <div className="flex flex-col w-[80%] ">
                <div className="flex flex-row justify-between items-start ">
                  <div className="flex flex-col">
                    <h1 className="font-bold text-white">{message.name}</h1>
                  </div>
                  <RiDeleteBin6Line
                    color="#DFDA53"
                    className="cursor-pointer mt-1 min-h-[15px] min-w-[15px]"
                    size={15}
                  />
                </div>
                <h2 className=" font-bold text-yellow text-sm break-words">
                  {message.email}
                </h2>
                <div className="flex flex-col mt-6">
                  <p className="text-white text-sm">{message.message}</p>
                  <div className="flex flex-row justify-end text-white">
                    <div className="flex self-end gap-2 mt-4">
                      <h1 className="">{message.time.date}</h1>

                      <h1 className="">{` at ${message.time.hour}`}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard;
