'use client'

import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './component/Cursor';
import Home from './Home/page';
import Game from './Game/page';
export default function page () {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className=' h-full w-full'>
      <Cursor />
      <Home/>
      <Game/>
    </div>
  )
}
