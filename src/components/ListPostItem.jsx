import React from 'react'
import { Link } from 'react-router-dom'

const ListPostItem = ({post}) => {
  return (
    <div className='text-[14px] border-b-[1px] py-3 px-2'>
        <div>
           <Link title={post?.title} className='font-semibold text-hover text-[14.5px]'> {post?.title}</Link>
        </div>
        <div className='flex gap-4 py-2'>
            <Link title={post?.title} className='w-1/3'>
                <img src={post?.image} alt="" />
            </Link>
            <div className='w-2/3'>
                <small className='text-gray-400'>{post?.time}</small>
                <p className='line-clamp-3'>{post?.description}</p>
            </div>
        </div>
    </div>
  )
}

export default ListPostItem