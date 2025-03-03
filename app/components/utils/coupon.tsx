"use state"
import { MdOutlineDiscount } from "react-icons/md";

export const Coupon=()=>{
    return(
        <>
        <div className="flex border border-gray-300 items-center p-3  h-[50px] w-[330px] border border-2">
            <p className="text-[#A2A3B1] ">Coupon Code</p>
            <MdOutlineDiscount className="text-[#17183B] ml-[180px]" />
            </div></>
    )
}