
const Tag=({
    tagName,
    tagValue
}:{
    tagName:string;
    tagValue:string
})=>{
    return(
        <div className="grid grid-cols-3 gap-5 pt-3  w-1/2">
            <p className="">{tagName}</p>
            <p className="w-[100px] font-semibold">{tagValue}</p>
        </div>
    )
}
export const OrderSummary=()=>{
    return(
        <>
        <div className="text-[#17183B] border-2 ml-[100px] ">
            <p className="font-bold text-2xl">Order summary</p>
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
            <div className="border-b w-[400px] h-2" ></div>
            <Tag
            tagName="TOTAL"
            tagValue="$34"
            />
            <Tag 
            tagName="Estimated Delivery by"
            tagValue="01 Feb, 2023"/>
            </div></>
    )
}