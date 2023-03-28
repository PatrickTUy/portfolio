import React, { useState } from 'react';
import { MdModeEdit } from 'react-icons/md';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { HiPlus } from 'react-icons/hi';
import Carousel from '../../components/Carousel';
import EditBlogText from '../../modals/dashboard/EditBlogText';
import EditArticle from '../../modals/dashboard/EditArticle';
import AddArticle from '../../modals/dashboard/AddArticle';

const Blog = () => {
  const [editBlogText, setEditBlogText] = useState(false);
  const [editArticle, setEditArticleText] = useState(false);
  const [addArticle, setAddArticle] = useState(false);
  const blogs = [1, 2, 3, 4, 5, 6, 7,8,9,10];
  return (
    <>
      <EditBlogText
        show={editBlogText}
        setShow={() => setEditBlogText(!editBlogText)}
      />
      <EditArticle
        show={editArticle}
        setShow={() => setEditArticleText(!editArticle)}
      />
      <AddArticle
        show={addArticle}
        setShow={() => setAddArticle(!addArticle)}
      />
      <div className="flex flex-col py-4 px-6 font-inter text-white bg-darker">
        <h1 className="font-bold text-yellow mb-8">BLOG</h1>
        <p className="text-center ">
          Aliquam in ex nisi. Suspendisse tincidunt quam sit amet tristique
          luctus. Curabitur rutrum id velit eget vulputate. Cras et ornare elit.
          Donec vel libero placerat, venenatis nibh eu, luctus neque. Nullam
          ultrices dignissim porta.
          <MdModeEdit className="m-auto cursor-pointer" color="#DFDA53" onClick={() => setEditBlogText(!editBlogText)}/>
        </p>
        <button className="bg-yellow px-4 py-2 rounded-lg w-fit mt-4"
        onClick={() => setAddArticle(!addArticle)}>
          <div className="flex flex-row items-center text-black gap-1">
            <h1 className="font-semibold"> Add Article</h1>

            <HiPlus className="m-auto" color="#000" />
          </div>
        </button>
        <div className="">
          <Carousel
            slidesToShow={3}
            slidesToScroll={3}
            style={'flex flex-row  w-full mt-12 items-center '}
          >
            {blogs.map((blog) => {
              return (
                <div key={blog} className="flex flex-col max-w-[250px] mb-4">
                  <div className="w-full flex flex-row justify-between">
                    <span></span>
                    <div className="flex flex-row gap-2 mb-2">
                      <MdModeEdit className="cursor-pointer" color="#DFDA53" 
                      onClick={() => setEditArticleText(!editArticle)}/>

                      <RiDeleteBin6Line
                        className="cursor-pointer"
                        color="#DFDA53"
                      />
                    </div>
                  </div>
                  <div className="w-full flex flex-col h-full self-center ">
                    <div className="flex flex-col max-w-[300px] h-[200px] md:h-[300px] lg:h-[200px]">
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
                        Aliquam in ex nisi. Suspendisse tincidunt quam sit
                        Aliquam in tincidunt quam sit Suspendisse tincidunt ...
                      </h1>
                      <div className="flex flex-row gap-2 w-fit items-center mt-4">
                        <h2 className="text-yellow font-semibold text-base">
                          Read more
                        </h2>
                      </div>
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

export default Blog;
