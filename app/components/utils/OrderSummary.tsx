import { CheckOut } from "./checkOut";
import { Coupon } from "./coupon";

const Tag=({
    tagName,
    tagValue
}:{
    tagName:string;
    tagValue:string
})=>{
    return(
        <div className="grid grid-cols-3 gap-5  ml-[30px] pt-6">
            <p className="w-[500px]">{tagName}</p>
            <p className="w-[100px] font-semibold ml-[90px]">{tagValue}</p>
        </div>
    )
}
export const OrderSummary=()=>{
    return(
        <>
        <div className="text-[#17183B] border border-gray-300 border-2 ml-[100px] w-[400px] h-[550px] pt-[20px]">
            <p className="font-bold text-2xl ml-[30px]">Order summary</p>
            <Tag 
            tagName="Price"
            tagValue="$567890987"
            />
            <Tag 
            tagName="Discount"
            tagValue="$567"
            />
            <Tag 
            tagName="Shipping"
            tagValue="Free"
            />
            <Tag 
            tagName="Coupon Applied"
            tagValue="$5678"
            />
            <div className="border-gray-300 border-b w-[300px] h-2 pt-6 ml-[20px]" ></div>
            <Tag
            tagName="TOTAL"
            tagValue="$34"
            />
            <Tag 
            tagName="Estimated Delivery by"
            tagValue="01 Feb, 2023"/>
            
            <div className="ml-[30px] pt-6">
                <Coupon />
            </div>
            <div className="ml-[30px] pt-6">
                <CheckOut />
            </div>
            </div></>
    )
}