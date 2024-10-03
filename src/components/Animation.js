import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import animationData from '../background.json'; 

const BackgroundAnimation = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <Player
        autoplay
        loop
        src={animationData}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default BackgroundAnimation;
