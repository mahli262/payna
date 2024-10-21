import React from 'react'
import Feature from '../Components/Feature'
import {FaRegPaperPlane } from "react-icons/fa";
import { FiBriefcase, FiGlobe } from "react-icons/fi";
import { RiWifiOffLine, RiGift2Line } from "react-icons/ri";
import { MdOutlineViewKanban } from "react-icons/md";




function Features() {
  return (
    <div className=''>
        <div className='flex flex-col items-center text-center mt-[80px] sm:mt-[130px] mb-[50px] sm:mb-[70px] mx-[21px]'>
          <p className='text-[#F75C4E] font-bold'>WORK BETTER</p>
          <h1 className='font-bold text-[28px] sm:text-4xl mt-[6px] mb-5'>For Your Business</h1>
          <p className='max-w-[385px]'>We did research what your company needs and here we are providing
          all of them just for you</p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:mx-[120px] gap-x-[80px] gap-y-[60px] mx-7 justify-items-stretch'>
         
          <Feature
            Icon={FiBriefcase}
            iconColor={"#1F7CFF"}
            feature="Share Inisght"
            desc="Working together with your
team to make decisions"
          />
          <Feature
            Icon={FaRegPaperPlane}
            iconColor={"#F75C4E"}
            feature="Track Leads"
            desc="See where your money goes
and comes in business"
          />
          <Feature
            Icon={RiWifiOffLine}
            iconColor={"#191046"}
            feature="Offline Mode"
            desc="Use the feature while off
from internet? sure can"
          />
          <Feature
            Icon={MdOutlineViewKanban}
            iconColor={"#FF1FB3"}
            feature="Kanban Mode"
            desc="Organize the report that
easy to be understand"
          />
          <Feature
            Icon={RiGift2Line}
            iconColor={"#5C4EF7"}
            feature="Reward System"
            desc="Motivate your team working
harder and receive a gift"
          />
          <Feature
            Icon={FiGlobe}
            iconColor={"#F7954E"}
            feature="189 Country"
            desc="Working together worldwide
people from anywhere"
          />


        </div>
    </div>
  )
}

export default Features
