import React from "react";
// import { userIcon, bellIcon } from "../../assets";
import { Link } from "react-router-dom";


type Props = {
  setShowSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showSideBar: boolean;
  pageDescription: string;
};

export default function Header({ setShowSideBar, showSideBar, pageDescription } : Props) {
  return (
    <div className="w-full lg:w-[calc(100%-15.5rem)] fixed top-0 z-40 p-4 bg-white">
      <div className="w-full flex justify-between items-center">
        
      <div className="lg:hidden flex">
          {/* <img src={bellIcon} alt="logo" /> */}
          <button
            type="button"
            onClick={() => setShowSideBar(!showSideBar)}
            className="xl:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        </div>
        <h2 className="text-[#2B3B5A] whitespace-nowrap font-bold ml-10">{pageDescription}</h2>

        <div className="w-[50%] flex justify-end gap-2 items-center">
          <h2 className="text-[#4169E1] hidden md:flex font-medium whitespace-nowrap cursor-pointer">Upgrade to merchant</h2>
          <Link to="/dashboard/profile">
            <img src="" alt="user" />
          </Link>
          <Link to="#">
            <img src="" alt="user" />
          </Link>
        </div>
      </div>
    </div>
  );
}