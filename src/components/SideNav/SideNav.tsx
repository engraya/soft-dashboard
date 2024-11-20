import React from "react";
import { Flowbite } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { bag, document, logo, users, chart, icon } from "../../assets";
import SideBadge from "../SideBadge";


const customTheme = {
  button: {
    color: {
      light:
        "flex justify-between relative !w-full text-[#6882B6] bg-transparent focus:!outline-none focus:!ring-0 !p-0 !m-0",
    },
  },
  dropdown: {
    arrowIcon: "absolute right-0 h-4 w-4",
  },
};

type Props = {
  showSideBar: boolean;
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
};


function SideNav({ showSideBar } : Props) {
  const [isOperationsSubMenusOpen, setIsOperationsSubMenusOpen] = useState(false);
  const [isCrmSubMenusOpen, setIsCrmSubMenusOpen] = useState(false);




  const toggleOperationsSubMenus = () => {
    setIsOperationsSubMenusOpen(!isOperationsSubMenusOpen);
  };


  const toggleCrmSubMenus = () => {
    setIsCrmSubMenusOpen(!isCrmSubMenusOpen);
  };





  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div
        className={`flex flex-col justify-between fixed top-0 left-0 z-50 w-[271px] h-full overflow-y-auto bg-white p-3 text-blue-11 transition-transform ${
          showSideBar ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="py-4 px-4">
          <Link to="/" className="flex justify-start w-[181px] h-[53px] ">
          <div className="flex justify-start w-[49px] rounded-tl-xl rounded-br-xl h-[49px] bg-[#6C5DD3] ">
            <div className="flex justify-center items-center w-full h-full">
              <img height={30} width={30} src={logo} alt="logo" />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full h-full">
            <h1 className="flex justify-start text-[#2D2D2D] text-lg font-bold">Chucky</h1>
            <span className="flex justify-start text-[#2D2D2D] text-sm font-medium">Admin Dashboard</span>
          </div>
          </Link>
            <ul className="space-y-2 mt-16">
              <li>
                <div className={`flex items-center w-full h-[56px] p-2 rounded-xl transition duration-75 group  dark:text-white text-lg font-medium dark:hover:bg-gray-700 bg-[#6C5DD3] text-white`}>
                  <img src={icon} alt="dashboard"/>
                <span className="flex-1 ml-3 text-left text-lg font-['Mulish'] font-semibold whitespace-nowrap">Dashboard</span>
                </div>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-lg font-medium text-[#6882B6] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleOperationsSubMenus} 
                >
                  <img src={bag} alt="orders" />
                  <span className="flex-1 ml-3 font-semibold text-left whitespace-nowrap">Orders</span>
                  <svg className="w-4 h-4 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7"/>
                </svg>

                </button>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-lg font-medium text-[#6882B6] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleOperationsSubMenus} 
                >
                  <img src={chart} alt="analytics" />
                  <span className="flex-1 ml-3 text-left font-semibold whitespace-nowrap">Analytics</span>
                </button>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-[#6882B6] text-lg font-medium rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleCrmSubMenus}
                >
                  <img src={users} alt="customer" />
                  <span className="flex-1 ml-3 font-semibold text-left whitespace-nowrap">Customer</span>
            
                </button>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-[#6882B6] text-lg font-medium rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleCrmSubMenus}
                >
                  <img src={document} alt="menu" />
                  <span className="flex-1 ml-3 font-semibold text-left whitespace-nowrap">Menu</span>
            
                </button>
              </li>
              </ul>
        </div>
        <SideBadge/>
      </div>
    </Flowbite>
  );
}

export default SideNav;