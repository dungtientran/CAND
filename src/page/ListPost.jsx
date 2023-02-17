import React, { useEffect, useState } from 'react';
import homePage from '../asset/data';
import NavigateRight from '../components/NavigateRight';
import list from '../asset/listPost/list';
import { useSelector } from 'react-redux';
import { ListPostItem } from '../components';
import { Link } from 'react-router-dom';
import BoxPostItem from '../components/BoxPostItem';

const ListPost = () => {
    const [listPost, setListPost] = useState()
    const { id } = useSelector(state => state.listPost);

    useEffect(() => {
        const listFilter = list.find(item => item.id === id)
        setListPost(listFilter)
    }, [id])
    console.log(listPost);

    return (
        <div className="flex px-3 w-[1100px] m-auto text-[14px] border-[1px]" >
            <div className="w-[785px] flex ">
                <div className={listPost?.other && 'w-[75%] pr-3'}>
                    <div className='text-[#2d7061] font-semibold text-[16px] border-b-[1px] py-4 hover:text-red-800 duration-500 cursor-pointer'>
                        {listPost?.title?.map((item, index) => (
                            <p key={index}>{item}</p>
                        ))}
                    </div>
                    <div className='pt-4'>
                        <div className='flex gap-2'>
                            <Link title={listPost?.newPost?.title} className='w-1/2'>
                                <img src={listPost?.newPost?.image} alt="" />
                            </Link>
                            <div className='w-1/2 flex flex-col gap-1 px-2 pt-1'>
                                <Link title={listPost?.newPost?.title} className='text-xl font-semibold text-hover'>{listPost?.newPost?.title}</Link>
                                <p className='text-[13px] text-gray-400'>{listPost?.newPost?.time}</p>
                                <p className='line-clamp-4'>{listPost?.newPost?.description}</p>
                            </div>
                        </div>
                        <div className='flex justify-between py-4'>
                            {listPost?.listNewPost?.map((item, index) => (
                                <div key={index} className='w-[30%] flex flex-col gap-2'>
                                    <Link title={item?.title}>
                                        <img src={item?.image} alt="" className='w-full object-cover' />
                                    </Link>
                                    <Link title={item?.title} className='font-semibold text-hover'>
                                        {item?.title}
                                    </Link>
                                </div>
                            ))}
                        </div>
                        <div >
                            {listPost?.listPost?.map((item, index) => (
                                <ListPostItem key={index} post={item} />
                            ))}
                        </div>
                    </div>
                </div>
                <div className='w-[25%]'>
                    {listPost?.other?.map((item, index) => (
                        <BoxPostItem key={index} post={item} />

                    ))}
                </div>
            </div>
            <div className="w-[315px] pl-4 pt-4">
                <NavigateRight list={homePage.h3} />
            </div>
        </div>
    )
}

export default ListPost