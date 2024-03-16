"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import heroani from "./heroani.json"
import Lottie from 'lottie-react'
import laugh from "./laugh.json"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import shopping from "./shopping.json"
import video from "./video.json";
import videoicon from "./videoicon.json";
import arrow from "./arrow.json";
export default function Hero() {

  return (
<div>

    <div className="mt-9 px-5 md:flex md:items-center md:justify-between">
    <div>
<h1 className="text-5xl font-bold md:text-8xl md:w-[600px]">Laugh, shop &
<div>
<TypeAnimation
  sequence={['Repeat..', 1000, 'Retell..', 1000, 'Reprise..', 1000]}
  style={{ fontSize: '1em' }}
  repeat={Infinity}
/>
< Lottie className="w-[100px] absolute top-[150px] left-[250px] md:absolute md:left-[200px] md:top-[250px]" animationData={shopping}/>
</div>
<div>
<Lottie className="absolute opacity-5 top-24 left-4" animationData={videoicon}/>
</div>

</h1>
<p className="text-[10px] mt-3 md:text-[15px]">Dive into hilarious video and find awesome deals.</p>

</div>
<div className="heroimage mt-6 ">
<Lottie className="md:w-[400px]" animationData={video}/>

</div>
</div>
<h1 className="font-bold text-center mt-7">OUR SOCIAL MEDIA</h1>
<div className="flex items-center justify-center mt-5 gap-4">

<a href="https://www.facebook.com/profile.php?id=61556820123494&mibextid=ZbWKwL" target="_black"><div className="text-4xl"><FaFacebook/></div></a>
<a href="https://www.instagram.com/crick.naag?igsh=MTg4bmpmbzJoaXUybA==" target="_black"><div className="text-4xl"><FaInstagramSquare/></div></a>
<a herf="https://www.instagram.com/crick.naag?igsh=MTg4bmpmbzJoaXUybA==" target="_black"><div className="text-4xl"><FaSquareXTwitter/></div></a>

</div>
<div className="relative left-[200px] top-[20px] md:relative md:left-[600px] md:text-3xl">
<Lottie className="w-[100px]" animationData={arrow}/>
</div>
</div>
)
}
