"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

export default function Hero() {
  return (
    <div className="mt-6 px-5">
<h1 className="text-5xl font-bold md:text-8xl md:w-[600px]">Laugh, shop & 
<div>
<TypeAnimation
  sequence={['Repeat..', 1000, 'Retell..', 1000, 'Reprise..', 1000]}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
</div>

</h1>
<p className="text-[10px] mt-3 md:text-[15px]">Dive into hilarious video and find awesome deals.</p>
<button className="bg-gray-900 text-white text-sm font-semibold px-3 py-1 mt-4">SHOP NOW</button>

    </div>
  )
}
