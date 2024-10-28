import React from 'react'

function CTA() {
  return (
    <div className='mt-[130px] mb-12 lg:flex md:mx-[120px] mx-7 items-center gap-10'>
      <div className='lg:w-7/12 mb-10 lg:mb-0'>
        <img src="../../assets/img/CTA.png" className="max-w-full" alt="CTA" />
      </div>
      <div className='text-center lg:text-start lg:w-5/12'>
        <p className='text-[#F75C4E] font-bold uppercase'>
            save more time
        </p>
        <h2 className='font-bold text-[28px] sm:text-[36px] mt-1 mb-5'>
            And Boost Productivity
        </h2>
        <p className='text-gray-600'>
            Your employees can bring any success into your business, so we need to take care of them
        </p>
      <div className="mt-6 sm:flex justify-center lg:justify-start">
              <label htmlFor="email-address" className="sr-only">
                Email Address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                placeholder="Email Address"
                autoComplete="email"
                className="mb-3 sm:mb-0 w-full sm:max-w-[320px]  min-w-0 flex-auto rounded-full border-0 bg-[#F5F6FB] px-3.5 py-3 ring-0 focus:outline-none sm:text-sm sm:leading-6"
              />
              <button
                type="submit"
                className="w-full sm:max-w-[180px] sm:-ml-12 flex-auto h-12 rounded-full bg-blue-500 py-3 text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Get Started
              </button>
            </div>
      </div>
    </div>
  )
}

export default CTA
