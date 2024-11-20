import { useState, useRef, useEffect } from 'react';
import { BsThreeDots } from "react-icons/bs";
import { FaEye, FaTrashAlt } from 'react-icons/fa'; // Icons for the options
import { PiUploadSimpleLight } from "react-icons/pi";
function Revenue() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility
  const modalRef = useRef(null); // Ref for the modal to detect outside clicks

  // Toggle modal function
  const toggleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  // Close the modal if clicked outside of it
  const handleOutsideClick = (e : any) => {
    // @ts-ignore
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  // Add event listener on mount and cleanup on unmount
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isModalOpen]);

  // Close the modal when any of the options is clicked
  const handleOptionClick = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="py-6 px-6 bg-white">
    {/* Title Section */}
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-extrabold text-gray-800">Revenue</h2>
      <BsThreeDots
        className="cursor-pointer"
        onClick={toggleModal} // Toggle modal on icon click
      />
    </div>
    
    {/* Modal for options */}
    {isModalOpen && (
      <div 
        className="absolute top-12 right-0 w-48 p-3 bg-white shadow-lg rounded-md"
        ref={modalRef} // Attach ref to detect outside clicks
      >
        <div className="flex flex-col space-y-2">
          <button 
            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900"
            onClick={handleOptionClick} // Close modal on option click
          >
            <FaEye /> <span>View</span>
          </button>
          <button 
            className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900"
            onClick={handleOptionClick} // Close modal on option click
          >
            <PiUploadSimpleLight /> <span>Export</span>
          </button>
          <button 
            className="flex items-center cursor-pointer space-x-2 text-sm text-[#FF754C] hover:text-gray-900"
            onClick={handleOptionClick} // Close modal on option click
          >
            <FaTrashAlt color='#FF754C' /> <span>Remove</span>
          </button>
        </div>
      </div>
    )}

    {/* Content Section */}
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6">
      {/* You can add additional text or content here */}
    </div>
    
    {/* Chart Section */}
    <div className="py-6">
      {/* <Chart /> */}
    </div>
  </div>
  );
}

export default Revenue;
