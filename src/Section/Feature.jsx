import React from 'react'
// import { FaRegPaperPlane } from "react-icons/fa";


function Feature({Icon, iconColor, feature, desc}) {
  return (
    <div className='flex justify-center'>
      <div className="text-white max-w-[60px] w-full max-h-[60px] h-full flex rounded-full items-center justify-center" style={{backgroundColor:iconColor}}>
        {/* <FaRegPaperPlane className='size-6' /> */}
        <Icon className="size-6" />
      </div>
      <div className='text-start  space-y-3 w-[228px] ml-6'>
        <h3 className="text-xl font-semibold">{feature}</h3>
        <p className="text-gray-600 text-base font-normal">{desc}</p>
      </div>
    </div>
  )
}

export default Feature
