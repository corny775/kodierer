import React from 'react'
import { Navbar } from '../component/Navbar'
import { Canvas } from '../component/Canvas'


export default function page() {
  return (
    <div className='bg-white h-full w-full'>
      <Navbar />
      
      <div className='relative'>
        <Canvas />
      </div>
    </div>
  )
}
