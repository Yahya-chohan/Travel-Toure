import React from 'react'


export default function page() {
  return (
    <div>
         <video
      className="w-200px"
      autoPlay
      muted
      loop
      controls
    >
      <source src="/v2.mp4" type="video/mp4" />
    </video>
    </div>
  )
}
