import React from 'react'
import BanerImg from '../../public/banner.png'
const Banner = () => {
  return (
    <div className='h-screen  w-full bg-center bg-cover flex'>
        <div className='relative w-full'>
            <img className='w-full h-screen' src={BanerImg} alt="" />
        </div>
        <div className='absolute inset-0 bg-black/40 flex flex-col items-center justify-center'>

        <h1 className='md:text-4xl text-3xl px-3 font-bold text-white  '>Welcome to Our Tour Mate</h1> <br />
        <p className='text-lg text-center px-7 text-gray-200 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, quisquam.</p>
        <button className='bg-green-600 px-4 py-2 rounded shadow text-white cursor-pointer'>Get Started</button>
        </div>
    </div>
  )
}

export default Banner