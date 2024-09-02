import React from 'react'
import Lottie from 'lottie-react';
import animationData from '../../../public/animation2.json';

const LottieAnimation = () => {
  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{ height: 500, width: 500 }}
      />
    </div>
  )
}

export default LottieAnimation
