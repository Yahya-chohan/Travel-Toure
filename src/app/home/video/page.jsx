import React from 'react'
import Imgsec from './imgsec/page'

export default function () {
  return (
  <>
<div className="flex w-full  items-stretch overflow-hidden">

  {/* Left Text Section */}
  <div className="w-1/2 p-10 bg-blue-900 text-white flex flex-col justify-center">
    <h1 className="text-4xl font-bold mb-4">
      Welcome to Our Website
    </h1>
    <p className="text-gray-300">
      This is left side text section.  
      Yahan aap apna content likh sakte ho.
    </p>
  </div>

  {/* Right Image / Video Section */}
  <div className="w-1/2 flex justify-center items-center">
    <Imgsec />
  </div>

</div>
  
  </>
  )
}


