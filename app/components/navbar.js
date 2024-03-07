import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
export default function Navbar() {
  return (
   
<div className="flex justify-between py-2  border-b-2 items-center px-6">
<div className="logo">
    <img className="w-[50px] bg-black rounded-full" src="/logo.png.png"/>
</div>

<div className="right-side rounded-sm border  flex items-center justify-center gap-3 h-[35px]  w-[100px] hover:cursor-pointer hover:bg-yellow-200">
    <div className="text-xl"> <FaShoppingBag/></div>
    <p className="font-semibold">Shop</p>
</div>


</div>

  )
}
