import React from 'react'

function Brand() {
  return (
    <div className='lg:flex md:mx-[120px] lg:justify-between mt-[70px] place-items-center mx-[28px]'>
      <div>
        <p className='text-base font-semibold text-center lg:text-start mb-3 lg:mb-0'>Trusted by Global Companies</p>
      </div>
      {/* <div className='md:flex place-content-center md:gap-x-[50px] space-y-3  '> */}
      <div className='mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
        <img src="/assets/logo/google-2015 1.png" className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' alt="" />
        <img src="/assets/logo/Group 13.png" className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' alt="" />
        <img src="/assets/logo/apple-11 1.png" className='col-span-2 max-h-12 w-full object-contain lg:col-span-1' alt="" />
        <img src="/assets/logo/slack-2 1.png" className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-2' alt="" />
        <img src="/assets/logo/spotify-1 1.png" className='col-span-2 max-h-12 w-full object-contain lg:col-span-1 sm:col-start-auto' alt="" />
      </div>
    </div>
  )
}

export default Brand
