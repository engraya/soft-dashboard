import React from "react";
import { intersect } from "../../assets";

type Props = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
};

export default function Header({ setShowSideBar, showSideBar }: Props) {
  return (
    <nav className="w-full lg:w-[calc(100%-15.5rem)] fixed top-0 z-40 p-4 bg-white border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between">
        {/* Logo and Greeting */}
        <div className="flex flex-col ml-16">
          <h1 className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hi Taylor!
          </h1>
          <p className="text-sm font-normal text-gray-500">
            Let’s check your store today
          </p>
        </div>

        {/* Search and Icons */}
        <div className="flex items-center gap-4">
          {/* Sidebar Toggle for Mobile */}
          <button
            type="button"
            onClick={() => setShowSideBar(!showSideBar)}
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button>

          {/* Search Input */}
          <div className="relative hidden md:block">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center gap-4">
            {/* Message Icon */}
          <button type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"/>
              </svg>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900"></div>
          </button>


            {/* Notification Icon */}
            <button type="button" className="relative inline-flex items-center text-sm font-medium text-center text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5.365V3m0 2.365a5.338 5.338 0 0 1 5.133 5.368v1.8c0 2.386 1.867 2.982 1.867 4.175 0 .593 0 1.292-.538 1.292H5.538C5 18 5 17.301 5 16.708c0-1.193 1.867-1.789 1.867-4.175v-1.8A5.338 5.338 0 0 1 12 5.365ZM8.733 18c.094.852.306 1.54.944 2.112a3.48 3.48 0 0 0 4.646 0c.638-.572 1.236-1.26 1.33-2.112h-6.92Z"/>
            </svg>
            <div className="absolute inline-flex items-center justify-center w-4 h-4 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-1 -end-1 dark:border-gray-900"></div>
          </button>


             {/* Vertical Separator */}
             <div className="h-8 w-px bg-[#EEEFF2]"></div>

            {/* Avatar */}
            <div className="flex w-[49px] h-[49px] items-center border-l border-gray-200 justify-center rounded-full bg-[#FFD023]">
            <img
                src={intersect}
                alt="avatar"
                className="w-8 h-10 buttom-0 mt-2"
              />
    
            </div>
            <div className="flex w-[110px] h-[24px] items-center">
                <h1 className="text-xl font-bold text-[#111827] whitespace-nowrap dark:text-white">
                  Tynisha Obey
                </h1>
              </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
