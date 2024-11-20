import React from 'react'
import DashbaordCard from '../DashbaordCard'
import {cardsData} from "../../../data/cards"
import CustomerList from '../CustomerList'
import CustomerMap from '../CustomerMap'
import Menu from '../Menu'
import Revenue from '../Revenue'
import Customers from '../Customers'

function Body() {
  return (
    <div className='pt-24 px-6 md:px-24 flex flex-col space-y-5 gap-3'>
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-3 sm:gap-5 not-prose">
        {cardsData.map((card, index) => (
            <DashbaordCard key={index} title={card.title} value={card.value} icon={card.icon}/>
        ))}
   </div>
   <div className='w-full flex flex-row justify-center items-center'>
   <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Large item */}
      <CustomerMap/>
      {/* Two small items */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg group">
        <CustomerList/>
      </div>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 mt-8 mb-8 gap-4">
  {/* Large item */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <Revenue />
  </div>
  {/* Small item */}
  <div className="relative overflow-hidden rounded-2xl shadow-lg group">
    <Customers />
  </div>
</div>

    <Menu/>
  </div>
   </div>
 </div>
  )
}

export default Body




