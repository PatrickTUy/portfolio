import React from 'react';
import { MdArrowForwardIos } from 'react-icons/md';

const BlogPage = () => {
  return (
    <div className="h-full w-full bg-primary">
      <div className="w-fit h-fit mx-auto shadow-white drop-shadow-[0_2px_2px_rgba(255,255,255,0.41)]">
        <div className="bg-dark flex flex-row rounded-md max-w-[500px] p-4">
          <div></div>
          <div className="flex flex-col">
            <h1 className="font-nunito font-semibold text-white mb-2">
              The mystery of positive and negative mysteri es of the unkown
              mysteries.
            </h1>
            <p className="font-nunito mb-2 text-white text-opacity-60">
              Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
              tincidunt quam sit am in ex nisi. Suspendisse tincidunt quam sit
              Aliquam in tincidunt quam quam sit am in ex nisi. Suspendisse tincidunt quam sit...
            </p>
            <div className="flex flex-row gap-2 w-fit items-center mt-4">
              <h2 className="text-yellow font-semibold text-base">Read more</h2>
              <MdArrowForwardIos
                color="#DFDA53"
                size={12}
                className="mt-[3px]"
              />
            </div>
            <p className="text-xs text-white "> Posted on Feb 20, 2023</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
