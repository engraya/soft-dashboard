import React from 'react'
type CardProps = {
    title: string;
    value: string;
    icon: string;
}

function DashbaordCard({ title, value, icon } : CardProps) {
  return (
    <div className='sm:w-[16rem] w-[16rem] shadow-lg active:border-selectedColor border border-gray-200 hover:active:border-2 transition-all cursor-pointer bg-[#f5f4f4bf] p-6  rounded-lg  m-2 flex flex-col items-center  '>
    <div className=" w-full flex justify-start">
        <div className="bg-white p-2 rounded-lg ">
            <img src={icon} alt="" />
        </div>
    </div>
    <div className="w-full py-3 space-y-3">
          <h4 className="text-lg text-md font-normal text-gray-500">{title}</h4>
          <h2 className="text-gray-900 font-extrabold text-3xl mt-1 "> ${value}</h2>
    </div>
</div>
  )
}

export default DashbaordCard
