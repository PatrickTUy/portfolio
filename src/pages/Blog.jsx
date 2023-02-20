import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const Blog = () => {
  return (
    <div className="bg-primary flex flex-col w-full pt-8">
      <div className="flex flex-col h-fit">
        <h1 className="font-bold text-yellow text-lg text-center my-2">
          {' '}
          LATEST NEWS
        </h1>
        <h1 className="font-bold text-white text-opacity-70 text-2xl text-center mb-2">
          My Latest Articles
        </h1>
        <p className="text-sm text-white text-center text-opacity-60 w-[70%] md:w-[60%] mx-auto mb-8">
          Aliquam in ex nisi. Suspendisse tincidunt quam sit amet tristique
          luctus. Curabitur rutrum id velit eget vulputate. Cras et ornare elit.
          Donec vel libero placerat, venenatis nibh eu, luctus neque. Nullam
          ultrices dignissim porta.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 mx-auto w-[90%] lg:w-fit gap-8">
        <div className="flex flex-col md:max-w-[600px] lg:max-w-[300px] lg:min-w-[280px] lg:max-h-[450px] max-w-[400px] lg:ml-8 h-full self-center">
          <div className="flex flex-col w-full h-[200px] md:h-[300px] lg:h-[200px]">
            <div className="bg-black text-yellow absolute text-xs font-bold px-4 py-2 z-10  w-fit">
              Jan 20,23
            </div>
            <img
              src="/image.png"
              alt=""
              className="w-full h-full object-fill"
            />
          </div>

          <div className="flex flex-col pt-4 px-6 pb-8 w-full bg-[#2c2a2a] h-[60%]">
            <h1 className="text-xl font-bold text-white text-opacity-70 w-full mb-4">
              The mystery of positive and negative...
            </h1>
            <h1 className="text-sm text-white text-opacity-60 w-full">
              Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
              tincidunt quam sit Suspendisse tincidunt ...
            </h1>
            <div className="flex flex-row gap-2 w-fit items-center mt-4">
              <h2 className="text-yellow font-semibold text-base">Read more</h2>
              <MdArrowForwardIos
                color="#DFDA53"
                size={12}
                className="mt-[3px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:max-w-[600px] lg:max-w-[300px] lg:min-w-[280px] lg:max-h-[450px] max-w-[400px] h-full self-center">
          <div className="flex flex-col w-full h-[200px] md:h-[300px] lg:h-[200px]">
            <div className="bg-black text-yellow absolute text-xs font-bold px-4 py-2 z-10  w-fit">
              Jan 20,23
            </div>
            <img
              src="/image.png"
              alt=""
              className="w-full h-full object-fill"
            />
          </div>

          <div className="flex flex-col pt-4 px-6 pb-8 w-full bg-[#2c2a2a] h-[60%]">
            <h1 className="text-xl font-bold text-white text-opacity-70 w-full mb-4">
              The mystery of positive and negative...
            </h1>
            <h1 className="text-sm text-white text-opacity-60 w-full">
              Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
              tincidunt quam sit Suspendisse tincidunt ...
            </h1>
            <div className="flex flex-row gap-2 w-fit items-center mt-4">
              <h2 className="text-yellow font-semibold text-base">Read more</h2>
              <MdArrowForwardIos
                color="#DFDA53"
                size={12}
                className="mt-[3px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:max-w-[600px] lg:max-w-[300px] lg:min-w-[280px] lg:max-h-[440px] lg:mr-8 max-w-[400px] h-full gap-[10px] self-center lg:self-start">
          <div className="w-full md:w-[600px] lg:w-full  h-[33%] xs:h-[120px] bg-[#2c2a2a] overflow-hidden">
            <div className=" float-left w-[130px] h-full overflow-hidden">
              <div className="flex flex-col w-full h-full overflow-hidden">
                <div className="bg-black text-yellow bg-opacity absolute text-[10px] font-bold px-1 py-1 sm:px-3 z-10 w-fit">
                  Jan 20,23
                </div>

                <img
                  src="image.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="flex flex-col w-fit py-2 px-2 h-full oveflow-hidden">
              <h1 className="text-sm font-bold text-white text-opacity-70 w-full  mb-2">
                The mystery of positive positive ...
              </h1>
              <h1 className="text-xs text-white text-opacity-60 w-full ">
                Aliquam in ex nisi Suspendisse tincidunt liquam nisi. Sus ...
              </h1>
            </div>
          </div>

          <hr className="bg-[#dadada]" color="#dadada" />

          <div className="w-full h-[33%] xs:h-[120px] bg-[#2c2a2a] overflow-hidden">
            <div className=" float-left w-[130px] h-full overflow-hidden">
              <div className="flex flex-col w-full h-full overflow-hidden">
                <div className="bg-black text-yellow bg-opacity absolute text-[10px] font-bold px-1 py-1 sm:px-3 z-10 w-fit">
                  Jan 20,23
                </div>

                <img
                  src="image.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="flex flex-col w-fit py-2 px-2 h-full oveflow-hidden">
              <h1 className="text-sm font-bold text-white text-opacity-70 w-full  mb-2">
                The mystery of positive positive ...
              </h1>
              <h1 className="text-xs text-white text-opacity-60 w-full ">
                Aliquam in ex nisi Suspendisse tincidunt liquam nisi. Sus ...
              </h1>
            </div>
          </div>

          <hr className="bg-[#dadada]" />

          <div className="w-full h-[33%] xs:h-[120px] bg-[#2c2a2a] overflow-hidden">
            <div className=" float-left w-[130px] h-full overflow-hidden">
              <div className="flex flex-col w-full h-full overflow-hidden">
                <div className="bg-black text-yellow bg-opacity absolute text-[10px] font-bold px-1 py-1 sm:px-3 z-10 w-fit">
                  Jan 20,23
                </div>

                <img
                  src="image.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
            </div>
            <div className="flex flex-col w-fit py-2 px-2 h-full oveflow-hidden">
              <h1 className="text-sm font-bold text-white text-opacity-70 w-full  mb-2">
                The mystery of positive positive ...
              </h1>
              <h1 className="text-xs text-white text-opacity-60 w-full ">
                Aliquam in ex nisi Suspendisse tincidunt liquam nisi. Sus ...
              </h1>
            </div>
          </div>
        </div>
      </div>
      <h1 className="w-[90%] mx-auto text-lg font-bold text-white text-opacity-70 mt-4 underline underline-offset-2 cursor-pointer hover:text-yellow transition ease-in-out delay-200">
        See my collection of articles
      </h1>
    </div>
  );
};

export default Blog;
