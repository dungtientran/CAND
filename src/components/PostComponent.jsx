import React from 'react'

const PostComponent = ({ post, check }) => {
    return (
        <div className='px-3'>
            <div className='flex justify-between header-box'>
                <div>
                    <p className='uppercase text-red-700 font-bold text-hover'>{post.title}</p>
                </div>
                <div className='flex space-x-2 '>
                    {post.subTitle.map((item, index) => (
                        <p key={index} className='text-hover text-[12px] font-semibold'>{item}</p>
                    ))}
                </div>
            </div>
            <div className='flex'>
                <div className={`space-y-2 p-3 ${!check ? 'w-[50%]' : 'w-[70%]'}`}>
                    <p className='text-hover font-bold text-base'>{post.contain1?.title}</p>
                    <div className={check && 'flex gap-2'}>
                        <img src={post.contain1?.image} alt="" className={check && 'w-[40%] object-contain'} />
                        <p className={`${check ? 'line-clamp-6 w-[60%]' : 'line-clamp-3'}`}>{post.contain1?.describe}</p>
                    </div>
                </div>
                <div className={`p-3 border-l-[1px] border-gray-200 ${!check ? 'w-[50%]' : 'w-[30%]'}`}>
                    <div className='flex gap-4'>
                        <div>
                            <img src={post.contain2?.image} alt="" />
                        </div>
                        <div className='text-hover font-semibold'>
                            <p>{post.contain2?.title}</p>
                        </div>
                    </div>
                    <div className='space-y-2 '>
                        {check ? (
                            <>
                                {post.contain2.map((item, index) => (
                                    <p key={index} className='text-hover font-semibold'>{item}</p>
                                ))}
                            </>
                        ) : (
                            <>
                                {post.contain2?.list?.map((item, index) => (
                                    <p key={index} className='text-hover font-semibold'>{item}</p>
                                ))}</>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostComponent