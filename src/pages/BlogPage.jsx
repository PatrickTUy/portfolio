import React, { useState } from 'react';
import { RxDotFilled } from 'react-icons/rx';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';
import { GoReply } from 'react-icons/go';

const BlogPage = () => {
  const [viewReplies, setViewReplies] = useState(false);
  const [reply, setReply] = useState(false);
  return (
    <div className="h-full w-full bg-primary overflow-y-auto">
      <div className="bg-dark flex flex-col rounded-md w-full mmd:w-[90%] md:w-[55%] h-fit pb-12 px-6 mmd:px-12  mx-auto mb-12">
        <h1 className="font-nunito font-bold text-white mb-4 text-lg">
          The mystery of positive and negative mysteries of the unknown
          mysteries.
        </h1>
        <div className="w-full h-[200px] mmd:h-[300px] bg-black mb-8">
          <img
            src="/Girl.png"
            alt=""
            className="w-full h-[200px] mmd:h-[300px] object-cover"
          />
        </div>
        <div className="w-fit h-full flex flex-col justify-between">
          <p className="font-nunito mb-2 text-white text-sm">
            Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
            tincidunt quam sit am in ex nisi. Suspendisse tincidunt quam sit
            Aliquam in tincidunt quam quam sit am in ex nisi. Suspendisse
            tincidunt quam sit Aliquam in ex nisi. Suspendisse tincidunt quam
            sit Aliquam in tincidunt quam sit am in ex nisi. Suspendisse
            tincidunt quam sit Aliquam in tincidunt quam quam sit am in ex nisi.
            Suspendisse tincidunt quam sit Aliquam in ex nisi. Suspendisse
            tincidunt quam sit Aliquam in tincidunt quam sit am in ex nisi.
            Suspendisse tincidunt quam sit Aliquam in tincidunt quam quam sit am
            in ex nisi. Suspendisse tincidunt quam sit Aliquam in ex nisi.
            Suspendisse tincidunt quam sit Aliquam in tincidunt quam sit am in
            ex nisi. Suspendisse tincidunt quam sit Aliquam in tincidunt quam
            quam sit am in ex nisi. Suspendisse tincidunt quam sit Aliquam in ex
            nisi. Suspendisse tincidunt quam sit Aliquam in
          </p>
          <p className="font-nunito my-2 text-white text-sm">
            tincidunt quam sit am in ex nisi. Suspendisse tincidunt quam sit
            Aliquam in tincidunt quam quam sit am in ex nisi. Suspendisse
            tincidunt quam sit Aliquam in ex nisi. Suspendisse tincidunt quam
            sit Aliquam in Aliquam in tincidunt quam quam sit am in ex nisi.
            Suspendisse tincidunt quam sit Aliquam in ex nisi. Suspendisse
            tincidunt quam sit Aliquam in tincidunt quam sit am in ex nisi.
            Suspendisse tincidunt quam sit Aliquam in tincidunt quam quam sit am
            in ex nisi. Suspendisse tincidunt quam sit...
          </p>
          <p className="font-nunito my-2 text-white text-sm">
            tincidunt quam sit am in ex nisi. Suspendisse tincidunt quam sit
            Aliquam in tincidunt quam quam sit am in ex nisi. Suspendisse
            tincidunt quam sit Aliquam in ex nisi. Suspendisse tincidunt quam
            sit Aliquam in Aliquam in tincidunt quam quam sit am in ex nisi.
            Suspendisse tincidunt quam sit Aliquam in ex nisi. Suspendisse
            tincidunt quam sit Aliquam.
          </p>

          <p className="text-xs text-yellow "> Posted on Feb 20, 2023</p>
        </div>
      </div>

      <div className="flex flex-col w-full mmd:w-[90%] md:w-[55%] h-fit   mx-auto">
        <h1 className="font-bold text-white text-lg ">Comments</h1>
        <div className="bg-dark flex flex-col rounded-md w-full pb-12 px-6 mmd:px-8 pt-4">
          <div className="flex flex-col mb-2">
            <div className="flex flex-row gap-2">
              <img
                src="/Elon.png"
                alt=""
                className="h-[60px] w-[60px] object-cover rounded-full"
              />{' '}
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-2 items-center">
                  <h1 className="text-white font-bold text-base">Elon Musk</h1>
                  <RxDotFilled color="#CCFFFFFF" size={25} />
                  <h1 className="text-white font-bold text-base">
                    Feb 21, 2023
                  </h1>
                </div>
                <h1 className="text-white text-sm">
                  {' '}
                  tincidunt quam sit am in ex nisi. Suspendisse tincidunt quam
                  sit Aliquam in tincidunt quam.
                </h1>
                <div className="flex flex-row w-full justify-between">
                  <span></span>
                  <div className="flex flex-row gap-2">
                    <button
                      className="h-fit border border-yellow py-2 px-4"
                      onClick={() => {
                        setViewReplies(!viewReplies);
                      }}
                    >
                      <div className="flex gap-2">
                        {viewReplies ? (
                          <IoEyeOffOutline
                            color="#DFDA53"
                            className="inline-block"
                          />
                        ) : (
                          <IoEyeOutline
                            color="#DFDA53"
                            className="inline-block"
                          />
                        )}

                        <p className="text-yellow text-xs">
                          {viewReplies ? 'Hide' : 'View'} Replies
                        </p>
                      </div>
                    </button>

                    <button className="h-fit border border-yellow py-2 px-4"
                    onClick={()=>{
                      setReply(!reply)
                    }}>
                      <div className="flex gap-2">
                        <p className="text-yellow text-xs">Reply</p>
                        <GoReply color="#DFDA53" className="inline-block" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {viewReplies ? (
              <div className="border-l border-yellow ml-12 mt-4 pl-4">
                <div className="flex flex-row gap-2 mb-4">
                  <img
                    src="/Elon.png"
                    alt=""
                    className="h-[60px] w-[60px] object-cover rounded-full"
                  />{' '}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2 items-center">
                      <h1 className="text-white font-bold text-sm">
                        Elon Musk
                      </h1>
                      <RxDotFilled color="#CCFFFFFF" size={20} />
                      <h1 className="text-white font-bold text-sm">
                        Feb 21, 2023
                      </h1>
                    </div>
                    <h1 className="text-white text-xs">
                      {' '}
                      tincidunt quam sit am in ex nisi. Suspendisse tincidunt
                      quam sit Aliquam in tincidunt quam.
                    </h1>
                  </div>
                </div>

                <div className="flex flex-row gap-2">
                  <img
                    src="/Elon.png"
                    alt=""
                    className="h-[60px] w-[60px] object-cover rounded-full"
                  />{' '}
                  <div className="flex flex-col gap-1">
                    <div className="flex flex-row gap-2 items-center">
                      <h1 className="text-white font-bold text-sm">
                        Elon Musk
                      </h1>
                      <RxDotFilled color="#CCFFFFFF" size={20} />
                      <h1 className="text-white font-bold text-sm">
                        Feb 21, 2023
                      </h1>
                    </div>
                    <h1 className="text-white text-xs">
                      {' '}
                      tincidunt quam sit am in ex nisi. Suspendisse tincidunt
                      quam sit Aliquam in tincidunt quam.
                    </h1>
                  </div>
                </div>
              </div>
            ) : (
              ''
            )}
            {reply ? (
              <div className="flex flex-row items-center mt-4">
                <textarea
                  type="text"
                  placeholder="...reply"
                  className="bg-[#272727] text-white text-opacity-80 pl-2 w-full  h-[40px] focus:outline-none"
                />
                <h1 className="text-[#C6C38A] hover:text-yellow font-bold w-fit px-4 cursor-pointer">
                  Post
                </h1>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
