import React from 'react'
import { bag } from '../assets'
function DashbaordCard() {
  return (
    <div className='sm:w-[16rem] w-[16rem]  hover:shadow-xl active:border-selectedColor hover:active:border-2 transition-all cursor-pointer bg-[#0C1A240A] p-6  rounded-lg  m-2 flex flex-col items-center  '>
    <div className=" w-full flex justify-start">
        <div className="bg-white p-2 rounded-lg ">
            <img src={bag} alt="" />
        </div>
    </div>
    <div className="w-full py-3 space-y-3">
          <h4 className="text-3xl text-md font-normal text-gray-500">Total Menu</h4>
          <h2 className="text-gray-900 font-extrabold text-2xl mt-1 "> $345</h2>
    </div>
</div>
  )
}

export default DashbaordCard
