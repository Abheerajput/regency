import React from 'react'
import Image from 'next/image'
import tick from "../../../public/assets/svg/Correct.svg"
const Plans:React.FC = () => {
  return (
    <div className='xs:px-[3%]  sm:px-[5%] md:px-[8%] lg:px-[8%] xl:px-[8%]  bg-gradient-to-r from-[#ffffff] to-[#E9F6F1]'>
        <div className='w-full py-10 '>
<h1 className='text-center text-[#191A15] font-inter font-bold xl:text-[50px] md:text-[40px] lg:text-[45px] sm:text-[35px] xs:text-[30px]'>Choose Plan <br />
That’s Right For You</h1>
<p className='font-inter text-center py-8 font-bold text-[#A6A6A6]'>Choose plan that works best for you, feel free to contact us</p>
<div className="flex w-full py-4 justify-center  rounded-lg">
    <div className=' flex gap-6 shadow-md bg-white py-2 rounded-lg  px-4'>
        <div>
        <button className="px-4 py-2 text-black bg-white font-inter font-medium border border-transparent rounded-md focus:outline-none">
    Bi Monthly
  </button>
        </div>
  
<div>
<button className="px-4 py-2 text-white bg-[#54BE96] font-inter font-medium rounded-md focus:outline-none">
    Bi Yearly
  </button>
</div>
 
    </div>
 
</div>
<div className="flex  bg-gradient-to-r from-green-50 to-green-100 px-6">
      <div className="flex  gap-6 w-full max-w-6xl">

        {/* Basic Plan */}
        <div className="bg-white  shadow-md rounded-lg p-8 flex-1 text-center">
          <h3 className="text-xl font-bold text-gray-800">Basic</h3>
          <p className="text-sm text-[#A6A6A6] mt-2">A simple solution for creating and storing your will securely.</p>
          <div className='relative'>
          <span className='absolute top-0'>£</span>
          <p className="text-[40px] justify-center font-bold text-gray-800 mt-6  ">99.99</p>
          </div>
         
          <ul className=" bg-[#F9FAFB] mt-6 p-4  flex  flex-col gap-4">
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Secure Wills</li>
            <li className="flex items-center  gap-4"><Image src={tick} alt="" />Legal Review</li>
            <li className="flex items-center  gap-4"><Image src={tick} alt="" /> Easy Updates</li>
            <li className="flex items-center  gap-4"><Image src={tick} alt="" /> Chat Support</li>
            <li className="flex items-center  gap-4"><Image src={tick} alt="" /> Digital Storage</li>
          </ul>
          <button className="mt-6 bg-white text-green-500  py-2 px-4 rounded-full ">
            Signup for basic
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white shadow-md rounded-lg p-8  flex-1 text-center">
          <h3 className="text-xl font-bold text-gray-800">Premium</h3>
          <p className="text-sm text-gray-500 mt-2">Includes all Basic features plus legal review and priority support.</p>
          <p className="text-4xl font-bold text-gray-800 mt-6">£199.99</p>
          <p className="text-green-600 text-sm">Save £50 a year</p>
          <ul className=" bg-[#F9FAFB] mt-6 p-4  flex  flex-col gap-4">
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Secure Wills</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Legal Review</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Easy Updates</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Chat Support</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Digital Storage</li>
          </ul>
          <button className="mt-6 bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700">
            Go to pro
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white shadow-md rounded-lg p-8  flex-1 text-center">
          <h3 className="text-xl font-bold text-gray-800">Pro</h3>
          <p className="text-sm text-gray-500 mt-2">All features, including advanced asset tracking and family management.</p>
          <p className="xl:text-[45px] lg:text-[40px] md:text-[35px] sm:text-[30px]  xs:text-[25px] font-bold text-gray-800 mt-6">£299.99</p>
          <div className=' p-4 bg-[#F9FAFB]'>
          <ul className="  mt-6  flex  flex-col gap-4">
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> All the features of pro plan</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Secure Wills</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Easy Updates</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Co-conception program</li>
            <li className="flex items-center gap-4"><Image src={tick} alt="" /> Digital Storage</li>
          </ul>
          <button className="mt-6 text-green-500 w-full shadow-lg font-inter py-3 px-4 rounded-2xl bg-white">
            Goto Business
          </button>
          </div>
         
        </div>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Plans


