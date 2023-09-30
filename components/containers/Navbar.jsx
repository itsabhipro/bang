"use client"
import Image from "next/image"
import Link from "next/link"
import { FaBars} from "react-icons/fa"
import Drawer from "./Drawer"
import { useState } from "react"
function Navbar() {
    const [state,setState] = useState(false);
  return (
    <div className="flex bg-lightGray lg:h-[73px] sm:h-[58.61px] w-full lg:border-white lg:border-l-[17px] border-0">
        <div className="flex">
            <button className="bg-green text-white px-[18px] lg:text-[27px] text-[21px]" onClick={()=>setState(pre=>!pre)}>
                <FaBars />
            </button>
            <div className="flex items-center justify-center px-[25px] bg-white w-[130px] lg:w-[168px]">
                <Image src="/logo.png" width={168} height={58} alt="logo"/>
            </div>
        </div>
        <div className="flex-1  ms-[25px] flex items-center">
            <p>By Alias</p>
        </div>
        <div className="flex items-center justify-center me-[28px] hidden lg:flex">
            <Link href="/start-free-trail" className="bg-primary text-white font-bold px-[14px] py-[6px]">Start a free trail</Link>
        </div>
        <div className="flex items-center justify-center bg-white rounded-bl-[50px]">
            <Link href="/login" className="flex lg:px-[33px] px-[16px] py-[16px]">
                <Image src="/login_btn.png" width={29} height={25.98} alt="login icon"/>
                <p className="font-bold text-black ms-[8px] hidden lg:block">Login</p>
            </Link>
        </div>
        <Drawer state={state} handleSMenu={()=>setState(pre=>!pre)}/>
    </div>
  )
}

export default Navbar