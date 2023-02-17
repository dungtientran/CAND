import React from 'react';
import homePage from '../asset/data';

const BannerRight = () => {
  return (
    <div className=' space-y-2'>
        {homePage.h1.contain3.map((item, index) => (
            <img key={index} src={item} alt="" />
        ))}
    </div>
  )
}

export default BannerRight