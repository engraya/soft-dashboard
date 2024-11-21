import { BsThreeDots } from 'react-icons/bs';
import RadialChart from "./RadialChart";

function Customers() {
  return (
    <div className="md:col-span-2 md:row-span- bg-white relative overflow-hidden rounded-2xl shadow-lg group">
      <div className="py-6 px-6">
      <div className="flex flex-col items-start space-y-1">
      {/* Title and Description */}
      <div className="flex items-center justify-between w-full">
        <h2 className="text-2xl font-extrabold text-gray-800">Customers</h2>
        <div className="flex items-center space-x-4">
          <BsThreeDots className="cursor-pointer" size={20} />
        </div>
      </div>
      
      {/* Description below the title */}
      <p className="text-sm font-normal text-[#9d99b6]">
        Customers that buy our products
      </p>
      </div>

        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6"></div>
        
        {/* Main Container with Flexbox Layout */}
        <div className="flex space-x-1">
          {/* Right side with the larger chart */}
          <div className="flex-shrink-0">
          <RadialChart percentage={82.3} color="#6C5DD31A" width={300} height={300} />
          </div>

          {/* Left column with 2 smaller charts */}
          <div className="flex flex-col space-y-2">
            {/* First smaller chart */}
            <div className="relative">
            <RadialChart percentage={18} label="" color="#6E81FE" width={200} height={200} />
              <div className="absolute right-0 bottom-2 text-lg text-gray-700">+18%</div> 
              <p className='absolute right-0 text-sm font-normal text-[#9d99b6]'>Weekly Customers</p>
            </div>

            {/* Second smaller chart */}
            <div className="relative">
            <RadialChart percentage={14} label="" color="#9EC600" width={200} height={200} />
              <div className="absolute right-0 bottom-2 text-lg text-gray-700">+14%</div> 
              <p className='absolute right-0 text-sm font-normal text-[#9d99b6]'>Daily Customers</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center space-x-6 mt-6">
        {/* Indicator for Current Customers */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#9b23b9]"></div>
          <span className="text-xs whitespace-nowrap text-gray-700">Current Customers</span>
  
        </div>
        
        {/* Indicator for New Customers */}
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#A3CB31]"></div>
          <span className="text-xs whitespace-nowrap text-gray-700">New Customers</span>
        </div>
      </div>

      </div>
    </div>
  );
}

export default Customers;
