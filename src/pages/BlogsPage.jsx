import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

const BlogsPage = () => {
  const blogs = [1, 2, 3, 4, 5, 6];
  return (
    <div className="relative h-full w-full bg-primary overflow-y-auto">
       <div className='fixed w-[100vw] top-0 h-[60px] bg-black z-20'>
      
      </div>
      <div className="absolute top-[60px] w-fit h-fit px-8 md:px-0 mx-auto ">
        {blogs.map((blog) => {
          return (
            <div className="bg-dark flex flex-col md:flex-row rounded-md w-[90%] md:w-[750px] h-fit md:h-[200px] p-4 shadow-white hover:drop-shadow-[0_1px_2px_rgba(255,255,255,0.41)] transform hover:scale-[1.02] transition ease-in mx-auto gap-4 mb-4">
              <div className="w-full md:w-[300px] h-[200px] md:h-full bg-black">
                <img
                  src="/Girl.png"
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>
              <div className="w-fit h-full flex flex-col justify-between">
                <h1 className="font-nunito font-semibold text-white mb-2 text-base">
                  The mystery of positive and negative mysteries of the unknown
                  mysteries.
                </h1>
                <p className="font-nunito mb-2 text-white text-sm">
                  Aliquam in ex nisi. Suspendisse tincidunt quam sit Aliquam in
                  tincidunt quam sit am in ex nisi. Suspendisse tincidunt quam
                  sit Aliquam in tincidunt quam quam sit am in ex nisi.
                  Suspendisse tincidunt quam sit...
                  <Link
                    to="/single"
                    className="flex flex-row gap-2 w-fit items-center mt-1"
                  >
                    <h2 className="text-yellow font-semibold text-base">
                      Read more
                    </h2>
                    <MdArrowForwardIos
                      color="#DFDA53"
                      size={12}
                      className="mt-[3px]"
                    />
                  </Link>
                </p>

                <p className="text-xs text-white "> Posted on Feb 20, 2023</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogsPage;
