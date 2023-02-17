import React from "react";


const Post = ({ post, postRight }) => {


  return (
    <div className="flex pt-3 h-[95vh] overflow-hidden">
      <div className="w-[75%] px-3"> 
        <div className="cursor-pointer">
          <img src={post.item1.image} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold pt-2 cursor-pointer hover:text-orange-800 duration-300">
            {post.item1.title}
          </h1>
        </div>
        <div className="space-x-2 text-gray-400">
          <small>{post.item1.time}</small>
          <small>{post.item1.date}</small>
        </div>
        <div>
          <p className="text-[14px]">{post.item1.describe}</p>
        </div>
        <div className="flex gap-4 justify-between py-3">
          {post.item2.map((item, index) => (
            <div key={index} className="w-[30%]">
              <div className="cursor-pointer">
                <img src={item.image} alt="" />
              </div>
              <div className="font-semibold pt-2 text-[14px] cursor-pointer hover:text-orange-800 duration-300">
                <p>{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-[25%] pl-4 border-l-[1px] border-gray-300 text-[14px] ">
        <div>
          <div>
            <img src={postRight.image} alt="" />
          </div>
        </div>
        <div className="space-y-2 mt-2 h-[70vh] overflow-scroll scroll-bar">
          {postRight.list.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-orange-800 duration-300"
            >
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
