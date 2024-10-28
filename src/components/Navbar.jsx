import React from 'react'

function Navbar() {
  return (
    <div className='hidden justify-between mx-[120px] max-w-full mt-[40px] max-h-[48px] items-center lg:flex' >
        <button href="">
        <img src="../../assets/logo/logo.png" className='max-w-[150px]' alt="" />
        </button>
        <ul className='flex space-x-[60px]'>
          <li className='hover:underline'>Home</li>
          <li className='hover:underline'>Features</li>
          <li className='hover:underline'>Showcase</li>
          <li className='hover:underline'>Pricing</li>
        </ul>
      <div>
      <button className='rounded-full bg-[#F5F6FB] px-[48px] py-[12px] hover:bg-sky-200'>Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
