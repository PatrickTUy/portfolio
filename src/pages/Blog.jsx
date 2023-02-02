import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const Blog = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col">
        <h1 className="text-yellow text-xl text-center"> LATEST NEWS</h1>
        <h1 className="text-white text-3xl text-center">My Latest Articles</h1>
        <p className="text-center text-2xl text-white text-opacity-60 w-[80%] ">
          Aliquam in ex nisi. Suspendisse tincidunt quam sit amet tristique
          luctus. Curabitur rutrum id velit eget vulputate. Cras et ornare elit.
          Donec vel libero placerat, venenatis nibh eu, luctus neque. Nullam
          ultrices dignissim porta.
        </p>
      </div>
      <div className="flex justify-evenly w-[80%] mx-auto">
        <div className="flex flex-col max-w-[320px] w-[26%]">
          <div className="flex flex-col w-full">
            <div className="bg-black text-yellow text-sm font-bold px-4 py-2 ] z-10 relative w-fit">
              Jan 20,23
            </div>
            <img src="/image.png" alt="" className="w-full top-0" />
          </div>

          <div className="flex flex-col pt-2 px-2 pb-8 w-full bg-[#423C3C] ">
            <h1 className="text-2xl font-bold text-white w-[90%] mb-4">
              The mystery of positive and negative...
            </h1>
            <h1 className="text-white text-opacity-60 w-[90%]">
              Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
              tincidunt quam sit ...
            </h1>
            <div className="flex flex-row gap-2 w-fit items-center mt-4">
              <h2 className="text-yellow font-semibold text-2xl">Read more</h2>
              <MdArrowForwardIos color="#DFDA53" />
            </div>
          </div>
        </div>
        <div className="flex flex-col max-w-[320px] w-[26%]">
          <div className="flex flex-col w-full">
            <div className="bg-black text-yellow text-sm font-bold px-4 py-2 ] z-10 relative w-fit">
              Jan 20,23
            </div>
            <img src="/image.png" alt="" className="w-full top-0" />
          </div>

          <div className="flex flex-col pt-2 px-2 pb-8 w-full bg-[#423C3C]">
            <h1 className="text-2xl font-bold text-white w-[90%] mb-4">
              The mystery of positive and negative...
            </h1>
            <h1 className="text-white text-opacity-60 w-[90%]">
              Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
              tincidunt quam sit ...
            </h1>
            <div className="flex flex-row gap-2 w-fit items-center mt-4">
              <h2 className="text-yellow font-semibold text-2xl">Read more</h2>
              <MdArrowForwardIos color="#DFDA53" />
            </div>
          </div>
        </div>
        <div className="flex flex-row w-[26%] max-w-[320px] h-[200px]">
          <div className="w-[40%] h-full">
            <div className="flex flex-col w-full h-full">
              <div className="bg-black text-yellow text-sm font-bold px-4 py-2 ] z-10 relative w-fit">
                Jan 20,23
              </div>
              <img src="/image.png" alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="flex flex-col bg-[#423C3C] w-[60%] p-2 h-full">
            <h1 className="text-base font-bold text-white w-[90%] mb-2">
              The mystery of positive and negative...
            </h1>
            <h1 className="text-white text-opacity-60 w-[90%] text-sm">
              Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
              tincidunt quam sit ...
            </h1>
            <div className="flex flex-row gap-2 w-fit items-center mt-2 ">
              <h2 className="text-yellow font-semibold text-sm">Read more</h2>
              <MdArrowForwardIos color="#DFDA53" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
