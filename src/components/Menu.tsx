import React from 'react'
import MenuGallery from './MenuGallery'
function Menu() {
  return (
    <div className="md:col-span-2 md:row-span-3 bg-white relative overflow-hidden rounded-2xl shadow-lg group">
    <div className="py-6 px-6">
    <h2 className="text-2xl font-extrabold text-gray-800">Menu</h2>
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
    <ul className="flex justify-end flex-wrap -mb-px">
        <li className="me-2">
        <div className="inline-block p-4 cursor-pointer text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">All Category</div>
        </li>
        <li className="me-2">
        <div  className="inline-block p-4 cursor-pointer border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Breakfast</div>
        </li>
        <li className="me-2">
        <div  className="inline-block p-4 cursor-pointer border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Lunch</div>
        </li>
        <li className="me-2">
        <div  className="inline-block p-4 cursor-pointer border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Dinner</div>
        </li>
    </ul>
    </div>
<MenuGallery/>
  </div>
    </div>
  )
}

export default Menu
