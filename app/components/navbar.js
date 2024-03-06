import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
export default function Navbar() {
  return (
   
<div className="flex justify-between p-6 border-b-2">
<div className="logo">
    <img className="w-[50px] bg-black rounded-full" src="/logo.png.png"/>
</div>

<div className="right-side rounded-xl bg-yellow-300 flex items-center justify-center gap-3  w-[120px]">
    <div className="text-3xl"> <FaShoppingBag/></div>
    <p className="font-bold">Shop</p>
</div>


</div>

  )
}
