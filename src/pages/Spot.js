import React from 'react'
import { useState, useEffect } from 'react';
import SpotDeskTop from '../components/Spots/SpotDesktop'
import SpotMobile from '../components/Spots/SpotMobile'

export default function Spot() {
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 760) {
        setShowComponent(true);
      } else {
        setShowComponent(false);
      }
    }


    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {showComponent ? <SpotDeskTop /> : <SpotMobile />}
    </div>
  );
}


