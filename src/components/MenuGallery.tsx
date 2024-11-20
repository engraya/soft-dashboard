
import { bbq, chicken, dark, fried, shaking, surf } from "../assets/menu";


function MenuGallery() {
  return (
    <div className="container mx-auto px-4 py-8">
{/* Top Section with Two Images */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
  {/* First Image: Takes 1/3 of the width */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group md:col-span-2">
  <img
    src={surf}
    alt="SURF"
    className="w-full h-48 object-cover"
  />
  <div className="absolute inset-0 bg-black p-3 bg-opacity-10 transition-opacity duration-300">
    {/* Backdrop Container */}
    <div className="absolute bottom-4 left-4 right-4 border border-gray-200 backdrop-blur-sm bg-white/30 rounded-lg p-2">
      {/* Title and Price Section */}
      <div className="flex items-center justify-between">
        <h3 className="text-md whitespace-nowrap font-bold text-[#1E293B]">Surf & Turf Gift Brisket</h3>
        <span className="text-lg font-normal text-[#1E293B]">$89.24</span>
      </div>
      {/* Paragraph Section */}
      <p className="text-[#64748B] mt-2">456 Served</p>
    </div>
  </div>
</div>

  
  {/* Second Image: Takes 2/3 of the width */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group md:col-span-1">
  <img
    src={shaking}
    alt="shaking"
    className="w-full h-48 object-cover"
  />
  <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300">
    {/* Backdrop Container */}
    <div className="absolute bottom-4 left-4 right-4 border border-gray-200 backdrop-blur-sm bg-white/30 rounded-lg p-2">
      {/* Title Section */}
      <div className="flex items-center justify-between">
      <h3 className="text-md whitespace-nowrap font-bold text-[#1E293B]">Shaking Beef Tri-Tip</h3>
      <span className="text-lg font-normal text-[#1E293B]">$69.46</span>
      </div>
      {/* Paragraph Section */}
      <p className="text-[#64748B] mt-2">456 Served</p>
    </div>
  </div>
</div>

</div>


    {/* Bottom Section with Four Images */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
  {/* Card 1 */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <img
      src={bbq}
      alt="BBQ"
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300">
      {/* Backdrop Container */}
      <div className="absolute bottom-4 left-4 right-4 border border-gray-200 backdrop-blur-sm bg-white/30 rounded-lg p-2">
        {/* Title and Price */}
        <div className="flex items-center justify-between">
        <h3 className="text-md whitespace-nowrap font-bold text-[#1E293B]">BBQ Rib Dinner</h3>
        <span className="text-lg font-normal text-[#1E293B]">$69.21</span>
        </div>
        {/* Description */}
        <p className="text-[#64748B] mt-2">456 Served</p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <img
      src={chicken}
      alt="Chicken"
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300">
      {/* Backdrop Container */}
      <div className="absolute bottom-4 left-4 right-4 border border-gray-200 backdrop-blur-sm bg-white/30 rounded-lg p-2">
        {/* Title and Price */}
        <div className="flex items-center justify-between">
        <h3 className="text-md whitespace-nowrap font-bold text-[#1E293B]">Chicken & Ribs Combo</h3>
        <span className="text-lg font-normal text-[#1E293B]">$98.41</span>
        </div>
        {/* Description */}
        <p className="text-[#64748B] mt-2">456 Served</p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <img
      src={fried}
      alt="Fried"
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300">
      {/* Backdrop Container */}
      <div className="absolute bottom-4 left-4 right-4 border border-gray-200 backdrop-blur-sm bg-white/30 rounded-lg p-2">
        {/* Title and Price */}
        <div className="flex items-center justify-between">
        <h3 className="text-md whitespace-nowrap font-bold text-[#1E293B]">Fried Chicken Dinner</h3>
        <span className="text-lg font-normal text-[#1E293B]">$83.56</span>
        </div>
        {/* Description */}
        <p className="text-[#64748B] mt-2">456 Served</p>
      </div>
    </div>
  </div>

  {/* Card 4 */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <img
      src={dark}
      alt="Dark"
      className="w-full h-48 object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-10 transition-opacity duration-300">
      {/* Backdrop Container */}
      <div className="absolute bottom-4 left-4 right-4 border border-gray-200 backdrop-blur-sm bg-white/30 rounded-lg p-2">
        {/* Title and Price */}
        <div className="flex items-center justify-between">
        <h3 className="text-md whitespace-nowrap font-bold text-[#1E293B]">Dark & Stormy</h3>
        <span className="text-lg font-normal text-[#1E293B]">$90.58</span>
        </div>
        {/* Description */}
        <p className="text-[#64748B] mt-2">456 Served</p>
      </div>
    </div>
  </div>
</div>

  </div>
  
  )
}

export default MenuGallery
