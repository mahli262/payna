import React from 'react'

function Brand() {
  return (
    <div className='lg:flex mx-[120px] justify-between mt-[70px] items-center'>
      <div>
        <h2>Trusted by <br /> Global Companies</h2>
      </div>
      <div className='flex space-x-[50px]'>
        <img src="/assets/logo/apple-11 1.png" className='max-h-[30px]' alt="" />
        <img src="/assets/logo/google-2015 1.png" className='max-h-[30px]' alt="" />
        <img src="/assets/logo/Group 13.png" className='max-h-[30px]' alt="" />
        <img src="/assets/logo/slack-2 1.png" className='max-h-[30px]' alt="" />
        <img src="/assets/logo/spotify-1 1.png" className='max-h-[30px]' alt="" />
      </div>
    </div>
  )
}

export default Brand
