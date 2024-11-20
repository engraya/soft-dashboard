import { IoMdClose } from "react-icons/io";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function SideBadge() {
    const percentage = 86;

  return (
    <div className="p-3 rounded-lg shadow-xl bg-[#F8F9FB] sm:p-4">
    <div className="flex flex-col items-start justify-between gap-4 mb-6 lg:flex-row">
    <div style={{ width: 100, height: 100 }}>
      <CircularProgressbar
       value={percentage}
       text={`${percentage}%`}
       background={false}
       styles={buildStyles({
    
        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
        strokeLinecap: 'butt',
    
        // Text size
        textSize: '16px',
        pathTransitionDuration: 0.5,
        textColor: '#6C5DD3',
        backgroundColor: '#6C5DD3',
      })}
       />;
      </div>
      <IoMdClose />
    </div>
    <div className="mb-4">
      <span className="text-lg whitespace-nowrap font-bold text-gray-900">Subscription Plan</span>
      <p className="text-sm text-gray-400h">Your subscritpion will  expired soon please upgrade!</p>
    </div>
    <p className='text-sm font-bold text-[#6C5DD3]'>Upgrade</p>
  </div>

  )
}

export default SideBadge
