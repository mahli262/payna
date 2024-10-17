import React from 'react';

function Hero() {
  return (
    <div className="lg:flex items-center mt-[100px] mx-[120px] max-w-full lg:space-x-[30px]">
      <div className="lg:w-5/12 space-y-6 max-w-full">
        <h1 className="text-5xl font-bold leading-tight">
          Manage Payroll <br /> Like an Expert
        </h1>
        <p className="text-lg text-gray-600">
          Payna is helping you to set up payroll without requiring any finance skills or knowledge before.
        </p>
        <button className="bg-blue-500 text-white px-8 py-3 rounded-lg hover:bg-blue-600">
          Get Started
        </button>
      </div>

      {/* Right Section: Image */}
      <div className="lg:w-7/12">
        <img src="../../assets/img/Hero.png" className="max-w-full max-lg:hidden" alt="Hero" />
      </div>
    </div>
  );
}

export default Hero;
