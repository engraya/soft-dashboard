
function CustomerMap() {
  return (
    <div className="md:col-span-2 md:row-span-3 bg-white relative overflow-hidden rounded-2xl shadow-lg group">
    <div className="py-6 px-6">
    <h2 className="text-2xl font-extrabold text-gray-800">Customer Map</h2>
    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mt-6">

    </div>
    <div className='py-6'>
    <div className="rounded-lg overflow-hidden">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11672.945750644447!2d-122.42107853750231!3d37.7730507907087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858070cc2fbd55%3A0xa71491d736f62d5c!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1619524992238!5m2!1sen!2sus" width="100%" height={400} style={{border: 0}} allowFullScreen loading="lazy" />
    </div>
    </div>
  </div>
    </div>
  )
}

export default CustomerMap
