import React from 'react'

const ImagePost = () => {
    return (
        <div className='text-white'>
            <div className='px-3 py-1 bg-red-800 text-[14px]'>
                <p className='text-white uppercase'>Tin ảnh</p>
            </div>
            <div className='bg-gray-800 flex p-3'>
                <div className='w-1/3 px-3'>
                    <div className='w-full relative h-full'>
                        <img
                            src="https://img.cand.com.vn/resize/520x520/NewFiles/Images/2023/02/14/3000-1676346200539.jpg"
                            alt=""
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute bottom-3 left-2'>
                            <p className='hover:text-red-800 duration-700 font-bold text-[16px]'>Bão lớn khiến New Zealand ban bố tình trạng khẩn cấp chưa từng có tiền lệ</p>
                        </div>
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-4 w-2/3 px-3'>
                    <div className='flex gap-2'>
                        <div>
                            <img
                                src="https://img.cand.com.vn/resize/520x520/NewFiles/Images/2023/02/14/z4107609591880_7a252f8d91bba098-1676341507654.jpeg"
                                alt="" />
                        </div>                        
                        <p className='hover:text-red-800 duration-700'>Hiện trường vụ tai nạn thảm khốc làm 8 người thiệt mạng tại Quảng Nam</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <img
                                src="https://img.cand.com.vn/resize/520x520/NewFiles/Images/2023/02/14/z4107609591880_7a252f8d91bba098-1676341507654.jpeg"
                                alt="" />
                        </div>                        
                        <p className='hover:text-red-800 duration-700'>Hiện trường vụ tai nạn thảm khốc làm 8 người thiệt mạng tại Quảng Nam</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <img
                                src="https://img.cand.com.vn/resize/520x520/NewFiles/Images/2023/02/14/z4107609591880_7a252f8d91bba098-1676341507654.jpeg"
                                alt="" />
                        </div>                        
                        <p className='hover:text-red-800 duration-700'>Hiện trường vụ tai nạn thảm khốc làm 8 người thiệt mạng tại Quảng Nam</p>
                    </div>
                    <div className='flex gap-2'>
                        <div>
                            <img
                                src="https://img.cand.com.vn/resize/520x520/NewFiles/Images/2023/02/14/z4107609591880_7a252f8d91bba098-1676341507654.jpeg"
                                alt="" />
                        </div>                        
                        <p className='hover:text-red-800 duration-700'>Hiện trường vụ tai nạn thảm khốc làm 8 người thiệt mạng tại Quảng Nam</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ImagePost