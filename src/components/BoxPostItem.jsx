import React from 'react'
import { Link } from 'react-router-dom'

const BoxPostItem = ({ post }) => {
    return (
        <div className=' pt-4 pl-4 border-l-[1px]'>
            <div className='header-box '>
                <p className='uppercase text-hover text-red-800 text-[12px] font-semibold '>{post?.titleHead}</p>
            </div>
            <div className='py-3 flex flex-col gap-2'>
                <Link title={post?.content?.title}>
                    <img src={post?.content?.image} alt=""/>
                </Link>
                <div>
                    <Link
                        title={post?.content?.title}
                        className='line-clamp-3 font-semibold text-[14.5px] text-hover'
                    >
                        {post?.content?.title}
                    </Link>
                </div>
            </div>
            <div>
                <p className='line-clamp-4'>{post?.content?.description}</p>
                <div className='space-y-3 pt-3'>
                    {post?.other?.map((item, index) => (
                        <div key={index} className=' border-t-[2px] text-hover py-2'>
                            <span className='w-1 h-1 inline-block rounded-full bg-black mx-1'></span>
                            <Link
                                title={item}
                                key={index}
                                className='relative pl-4l'
                            >
                                {item}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoxPostItem