import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homePage from '../asset/data';

const NavigateRight = ({ list }) => {

    const [listStory, setListStory] = useState(list?.muchPost?.list)
    const checkList = list?.image

    return (
        <div className={`${checkList ? 'text-[#6C2C2D] mt-6 bg-pink-50' : ''} px-3`}>
            {checkList ? (
                <div className='p-2 border-b-[4px] border-[#6C2C2D] inline-block'>
                    <p className='font-semibold text-base cursor-pointer '>{list?.title}</p>
                </div>
            ) : (
                <div className='flex justify-between header-box'>
                    <p
                        className='w-1/2 pr-1 border-r-[1px] border-gray-300 uppercase font-semibold text-[16px] text-hover text-green-900 text-center'
                        onClick={() => setListStory(list?.newPost?.list)}
                    >
                        {list.newPost.title}
                    </p>
                    <p
                        className='w-1/2 pl-1 uppercase font-semibold text-[16px] text-hover text-red-600 text-center'
                        onClick={() => setListStory(list?.muchPost?.list)}
                    >
                        {list?.muchPost?.title}</p>
                </div>
            )}
            {checkList && (
                <>
                    <div className='flex justify-between gap-2 pt-3'>
                        <Link
                            title={list?.subtitle}
                            className='font-semibold cursor-pointer'
                        >
                            {list?.subtitle}
                        </Link>
                        <Link
                            title={list?.subtitle}
                        >
                            <img src={list?.image} alt="" />
                        </Link>
                    </div>
                    <div className='mb-4 pt-2'>
                        <p className='text-black'>{list?.describe}</p>
                    </div></>
            )}

            {checkList ? (
                <div className='space-y-2'>
                    {list?.list?.map((item, index) => (
                        <div key={index} className='cursor-pointer'>
                            <Link
                                title={item}
                            >
                                {item}
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <div className='space-y-2 py-3'>
                    {listStory?.map((item, index) => (
                        <div key={index} className='flex items-center relative'>
                            <div>
                                <p className='text-6xl font-bold text-gray-300 absolute -top-2 left-0 -z-10'>{index + 1}</p>
                            </div>
                            <div className='pl-6 text-gray-700'>
                                <Link title={item?.title} className='text-hover font-semibold'>{item?.title}</Link>
                                <p className='text-gray-400'>{item?.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default NavigateRight