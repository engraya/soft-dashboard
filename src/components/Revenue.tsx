import { useState, useRef, useEffect } from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { FaEye, FaTrashAlt } from 'react-icons/fa';
import { PiUploadSimpleLight } from 'react-icons/pi';
import Chart from './Chart';

function Revenue() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const [chartData, _setChartData] = useState({
    series: [
      {
        name: '',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 63, 25, 87], 
      },
    ],
    options: {
      chart: {
        id: 'basic-bar',
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
          'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
        ], 
      },
      title: {
        text: '$112,340',
        align: 'left',
        margin: 20,
        style: {
          fontSize: '40px',
          fontWeight: 'bold',
          color: '#333',
          textAlign: 'left',
          paddingLeft: '10px',
          paddingRight: '10px',
          paddingTop: '10px',
        },
      },
      colors: ['#E6E8F0'],
      plotOptions: {
        bar: {
          borderRadius: 4, // Rounded corners for bars
          columnWidth: '60%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'bottom',
      },
    },
  });
  


  // Toggle Modal Visibility
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Close modal on outside click
  const handleOutsideClick = (e : any) => {
    // @ts-ignore
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      setIsModalOpen(false);
    }
  };

  // Add/remove event listener for outside clicks
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isModalOpen]);

  // Close modal on option click
  const handleOptionClick = () => setIsModalOpen(false);

  return (
    <div className="py-6 min-h-full px-6 bg-white rounded-lg shadow-md relative">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-gray-800">Revenue</h2>
        <div className="flex items-center space-x-4">
          <BsThreeDots
            className="cursor-pointer"
            size={20}
            onClick={toggleModal}
          />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="absolute top-12 right-0 w-48 p-3 bg-white shadow-lg rounded-md z-10"
          ref={modalRef}
        >
          <div className="flex flex-col space-y-2">
            <button
              className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900"
              onClick={handleOptionClick}
            >
              <FaEye /> <span>View</span>
            </button>
            <button
              className="flex items-center space-x-2 text-sm text-gray-500 hover:text-gray-900"
              onClick={handleOptionClick}
            >
              <PiUploadSimpleLight /> <span>Export</span>
            </button>
            <button
              className="flex items-center space-x-2 text-sm text-[#FF754C] hover:text-gray-900"
              onClick={handleOptionClick}
            >
              <FaTrashAlt color="#FF754C" /> <span>Remove</span>
            </button>
          </div>
        </div>
      )}

      {/* Chart Section */}
      <div className="mt-6">
        <Chart type="bar" series={chartData.series} options={chartData.options} />
      </div>
    </div>
  );
}

export default Revenue;
