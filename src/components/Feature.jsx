import React from 'react'
import { FaRegPaperPlane } from "react-icons/fa";


function Feature() {
  return (
    <div className='mx-5 flex items-start space-x-6 justify-center'>
      <div className="bg-blue-500 text-white max-w-[60px] w-full max-h-[60px] h-full flex rounded-full items-center justify-center">
        <FaRegPaperPlane className='size-6' />
      </div>
      <div className='text-start  space-y-3 max-w-[226px]'>
        <h3 className="text-xl font-semibold">Feature</h3>
        <p className="text-gray-600 text-base font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Feature
