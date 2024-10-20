import React from 'react'
import Feature from '../Components/Feature'

function Features() {
  return (
    <div className=''>
        <div className='flex flex-col items-center text-center mt-[80px] sm:mt-[130px] mb-[50px] sm:mb-[70px] mx-[21px]'>
          <p className='text-[#F75C4E] font-bold'>WORK BETTER</p>
          <h1 className='font-bold text-[28px] sm:text-4xl mt-[6px] mb-5'>For Your Business</h1>
          <p className='max-w-[385px]'>We did research what your company needs and here we are providing
          all of them just for you</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-[60px] gap-x-20 mx-7 md:mx-[120px]'>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
          <Feature/>
        </div>
    </div>
  )
}

export default Features
