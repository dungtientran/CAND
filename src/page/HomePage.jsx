
import React from "react";
import BannerRight from "../components/BannerRight";
import NavigateRight from "../components/NavigateRight";
import Navigation from "../components/Navigation";
import Post from "../components/Post";
import homePage from "../asset/data";
import PostComponent from "../components/PostComponent";
import ImagePost from "../components/ImagePost";

const HomePage = () => {

  const list = homePage.listPost.slice(0, 4)
  const listFooter = homePage.listPost.slice(4, 9)

  return (
    <div className="w-[1100px] m-auto text-[14px] border-[1px] bg-white">
      <div className="flex p-3">
        <div className="w-[785px]">
          <Post post={homePage.h1.contain1} postRight={homePage.h1.contain2} />
          <PostComponent post={homePage.h2} />
        </div>
        <div className="w-[315px] pl-4 pt-3">
          <BannerRight />
          <NavigateRight list={homePage.h1.contain4} />
        </div>
      </div>
      <div className="p-3">
        <ImagePost />
      </div>
      <div className="flex p-3">
        <div className="w-[785px] space-y-3">
          {list?.map((item, index) => (
            <PostComponent key={index} post={item} check={true} />
          ))}
        </div>
        <div className="w-[315px] pl-4 pt-3">
          <NavigateRight list={homePage.h3} />
        </div>
      </div>
      <div className="grid grid-cols-2">
        {listFooter?.map((item, index) => (
          <PostComponent key={index} post={item} check={true} />
        ))}
      </div>
     
    </div>
  );
};


export default HomePage