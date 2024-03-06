import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
export default function Navbar() {
  return (
   
<div className="flex justify-between py-2 px-9 border-b-2">
<div className="logo">
    <img className="w-[50px] bg-black rounded-full" src="/logo.png.png"/>
</div>

<div className="right-side rounded-sm bg-black text-white flex items-center justify-center gap-3 h-[50px]  w-[100px]">
    <div className="text-xl"> <FaShoppingBag/></div>
    <p className="font-semibold">Shop</p>
</div>


</div>

  )
}
