import React from 'react'
import loadingAnimation from "../assets/loading-animation.gif"

function LoadingAnimation() {
  return (
    <div className='h-full w-full flex justify-center items-center'>
        <img autoPlay muted loop src={loadingAnimation} className='h-[10rem]'></img>
    </div>
  )
}

export default LoadingAnimation