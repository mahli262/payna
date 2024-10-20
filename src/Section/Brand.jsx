import React from 'react'

function Brand() {
  return (
    <div className='lg:flex md:mx-[120px] lg:justify-between mt-[70px] place-items-center mx-[28px]'>
      <div>
        <p className='text-base font-semibold text-center lg:text-start mb-3 lg:mb-0'>Trusted by Global Companies</p>
      </div>
      <div className='md:flex place-content-center md:gap-x-[50px] space-y-3  '>
        <img src="/assets/logo/apple-11 1.png" className='md:max-h-[30px] max-w-[200px] w-full mx-auto max-h-[56px] my-auto' alt="" />
        <img src="/assets/logo/google-2015 1.png" className='md:max-h-[30px] max-w-[200px] w-full mx-auto max-h-[56px]' alt="" />
        <img src="/assets/logo/Group 13.png" className='md:max-h-[30px] max-w-[200px] w-full mx-auto max-h-[56px]' alt="" />
        <img src="/assets/logo/slack-2 1.png" className='md:max-h-[30px] max-w-[200px] w-full mx-auto max-h-[56px]' alt="" />
        <img src="/assets/logo/spotify-1 1.png" className='md:max-h-[30px] max-w-[200px] w-full mx-auto max-h-[56px]' alt="" />
      </div>
    </div>
  )
}

export default Brand
