import React, { useEffect, useRef  } from "react";
import { useLocation } from "react-router-dom";
import { Flowbite } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { airtime, airtimeCash, dashboard, data, tv, electric, dash, history, help, mtn, ninemobile, airtel } from "../../assets";
import { IoIosArrowForward } from "react-icons/io";

import logo from "../../assets/logo.png"
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


function Sidenav({ showSideBar } : Props) {
  const [isOperationsSubMenusOpen, setIsOperationsSubMenusOpen] = useState(false);
  const [isCrmSubMenusOpen, setIsCrmSubMenusOpen] = useState(false);
  const [isRequestSubMenusOpen, setIsRequestSubMenusOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleRequestSubMenus = () => {
    setIsRequestSubMenusOpen(!isRequestSubMenusOpen);
  };


  const handleClickOutside = (event : any) => {
    if (dropdownRef.current && !dropdownRef.current?.contains(event.target)) {
      setIsOpen(false);
      setIsRequestSubMenusOpen(!isRequestSubMenusOpen);WWWW
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  const location = useLocation();
 
  const isActiveLink = (path : string) => {
    return location.pathname === path;
  };


  const toggleOperationsSubMenus = () => {
    setIsOperationsSubMenusOpen(!isOperationsSubMenusOpen);
  };


  const toggleCrmSubMenus = () => {
    setIsCrmSubMenusOpen(!isCrmSubMenusOpen);
  };







  return (
    <Flowbite theme={{ theme: customTheme }}>
      <div
        className={`flex flex-col justify-between fixed top-0 left-0 z-50 w-[304px] h-full overflow-y-auto bg-[#EFF3FB] p-3 text-blue-11 transition-transform ${
          showSideBar ? "translate-x-0 " : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="py-6 px-6">
          <Link to="/">
          <div className="flex justify-start items-center py-2 ">
            <img src={logo} alt="logo" />
          </div>
          </Link>
            <ul className="space-y-2 my-8">
              <li>
              <Link to="/dashboard">
                <div className={`flex items-center p-2 w-full rounded-lg transition duration-75 group  dark:text-white text-lg font-medium dark:hover:bg-gray-700 ${isActiveLink("/dashboard") ? "bg-[#4169E1] text-white" : " text-[#6882B6]"}`}>
                  <img src={dash} alt="dashboard"/>
                <span className="flex-1 ml-3 text-left text-lg font-medium whitespace-nowrap">Dashboard</span>
                </div>
              </Link>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-lg font-medium text-[#6882B6] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleOperationsSubMenus} 
                >
                  <img src={airtime} alt="airtime" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Buy Airtime</span>
                  <svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>

                </button>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-base text-lg font-medium text-[#6882B6] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleOperationsSubMenus} 
                >
                  <img src={data} alt="data" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Buy Data</span>
                  <svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>

                </button>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-base text-[#6882B6] text-lg font-medium rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleCrmSubMenus}
                >
                  <img src={tv} alt="" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">TV Subscription</span>
                  <svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li>
                <button 
                type="button" 
                className="flex items-center p-2 w-full text-[#6882B6] text-base text-lg font-medium rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleCrmSubMenus}
                >
                  <img src={electric} alt="electric" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Pay Electirc Bill</span>
                  <svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>
              </li>
              <li>
                <Link to="/dashboard/cash-airtime">
                <button 
                type="button" 
                className={`flex items-center p-2 w-full text-base text-lg font-medium text-[#6882B6] rounded-lg transition duration-75 group  dark:text-white dark:hover:bg-gray-700 ${isActiveLink("/dashboard/cash-airtime") ? "bg-[#4169E1] text-white" : " text-[#6882B6]"}`}  
                onClick={toggleRequestSubMenus}
                >
                  <img src={airtimeCash} alt="airtime" className={`${isActiveLink("/dashboard/cash-airtime") ?  "text-white" : "text-[#6882B6]"}`}/>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Airtime to Cash</span>
                </button>
                </Link>
                <ul id="dropdown-authentication" 
                 className={`${
                  isRequestSubMenusOpen ? "block" : "hidden"
                } py-2 space-y-2 ml-8`}
                >
                  <div className="flex justify-center items-center gap-4">
                    <div className="flex cursor-pointer">
                    <img src={mtn} alt="logo" />
                    </div>
                    <div className="flex cursor-pointer">
                    <img src={airtel} alt="logo" />
                    </div>
                    <div className="flex cursor-pointer">
                    <img src={ninemobile} alt="logo" />
                    </div>
                    <div className="flex gap-1 justify-center items-center cursor-pointer">
                      <span className="text-[#4169E1]">More</span>
                      <IoIosArrowForward color="#4169E1"/>
                    </div>
                  </div>
                </ul>
              </li>
              <li>  
              <Link to="/dashboard/transaction-history">
                <div className={`flex items-center p-2 w-full text-base text-lg font-medium rounded-lg transition duration-75 group dark dark:hover:bg-gray-700:text-white ${isActiveLink("/dashboard/transaction-history") ? "bg-[#4169E1]  text-white" : "text-[#6882B6]"}`}>
                  <img src={history} alt="history" className={`${isActiveLink("/dashboard/transaction-history") ?  "text-white" : "text-[#6882B6]"}`}/>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Transactions History</span>
                </div>
              </Link>
              </li>
              <li>  
              <Link to="/dashboard/support">
                <div className={`flex items-center p-2 w-full text-base text-lg font-medium rounded-lg transition duration-75 group dark:text-white dark:hover:bg-gray-700 ${isActiveLink("/dashboard/support") ? "bg-[#4169E1] text-white" : " text-[#6882B6]"}`}>
                  <img src={help} alt="help" className={`${isActiveLink("/dashboard/support") ?  "text-white" : "text-[#6882B6]"}`}/>
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Help & Support</span>
                </div>
              </Link>
              </li>
              </ul>
        </div>
        <div className="">
          <li>
            <Link to="/auth/login">
            <button 
                type="button" 
                className="flex items-center p-6 w-full text-base text-lg font-medium text-[#6882B6] rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" 
                onClick={toggleCrmSubMenus}
                >
                  <svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
                </svg>
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Logout</span>
                  <svg className="w-6 h-6 text-blue-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" />
                  </svg>
                </button>
            </Link>
              </li>
          </div>
      </div>
    </Flowbite>
  );
}

export default Sidenav;