'use client'

import React from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Cursor from './component/Cursor';
import {Canvas} from './component/Canvas';
import Home from './Home/page';

export default function page () {
  const locomotiveScroll = new LocomotiveScroll();
  
  return (
    <div className='bg-white h-full w-full'>
      <Cursor />
      <Home/>
      <Canvas/>
    </div>
  )
}
