import React from 'react';

function Hero() {
  return (
    <div className="lg:flex items-center mt-[100px] md:mx-[120px] mx-[28px] lg:space-x-[30px]">
      <div className="lg:w-5/12 space-y-6 max-w-full text-start sm:text-center lg:text-start">
        <h1 className="text-[38px] font-bold leading-tight sm:text-5xl text-center lg:text-start">
          Manage Payroll Like an Expert
        </h1>
        <p className="text-lg text-gray-600 text-justify sm:text-center lg:text-start">
          Payna is helping you to set up payroll without requiring any finance skills or knowledge before.
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600">
          Get Started
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="hidden lg:w-7/12 lg:block">
        <img src="../../assets/img/Hero.png" className="max-w-full" alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
