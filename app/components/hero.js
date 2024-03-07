"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroani from "./heroani.json"
import Lottie from 'lottie-react'
import laugh from "./laugh.json"
import shopping from "./shopping.json"
export default function Hero() {
  return (
<div>

    <div className="mt-6 px-5 md:flex md:items-center md:justify-between">
    <div>
<h1 className="text-5xl font-bold md:text-8xl md:w-[600px]">Laugh, shop &
<div>
<TypeAnimation
  sequence={['Repeat..', 1000, 'Retell..', 1000, 'Reprise..', 1000]}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
< Lottie className="w-[100px] absolute top-[150px] left-[250px] md:absolute md:left-[200px] md:top-[230px]" animationData={shopping}/>
</div>

</h1>
<p className="text-[10px] mt-3 md:text-[15px]">Dive into hilarious video and find awesome deals.</p>
<a href="https://www.amazon.in/"><button className="bg-gray-900 text-white text-sm font-semibold px-3 py-1 mt-4 hover:bg-yellow-200 hover:text-black">SHOP NOW</button></a> 

</div>
<div className="heroimage mt-6 ">
<Lottie className="md:w-[400px]" animationData={heroani}/>

</div>
</div>




</div>
)
}
