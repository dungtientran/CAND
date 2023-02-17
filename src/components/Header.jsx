import React from "react";
import homePage from "../asset/data";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        {homePage?.banner?.map((item, index) => (
          <div key={index} className='w-full h-[85px]'>
            <img src={item} alt="" className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
