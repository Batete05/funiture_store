"use client";

import React from "react";
import NavBar from "../components/utils/NavBar";
import Button from "../components/utils/Buttons";
import { Discount } from "./discount";
import { OrderSummary } from "../components/utils/OrderSummary";

const Cart = ({
  image,
  title,
  subtitle,
  action,
  price,
}: {
  image: string;
  title: string;
  subtitle: string;
  button: string;
  action: "Remove";
  price: string;
}) => {
  return (
    <div className="text-[#17183B] ">
      <div className="flex items-center">
        <img src={image} alt={title} className="w-[200px] h-[200px]" />
        <div className="grid grid-cols-3 gap-12 ">
          <div className="">
            <h3 className="font-bold text-xl">{title}</h3>
            <p className="text-[#A2A3B1] text-s font-semibold pt-3">
              Color <span className="text-[#17183B] text-m">{subtitle}</span>
            </p>
            <div className="grid grid-cols-2 gap-5 items-center justify-center text-center pt-3">
              {/* <div className="flex justify-center items-center text-center"> */}
              <Button />
              <p className="text-[#E14B4B] ml-20">{action}</p>
            </div>
          </div>
          <div>
            <p className="font-bold text-xl">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export const CartCard = () => {
  return (
    <>
      <NavBar />
      <div className="flex">
        <div className="w-1/2">
          <div>
          <div className="mt-[30px]">
            <p className="font-bold text-[#17183B] text-3xl ml-[70px]">Cart</p>
            {/* <h2>Thsi i the cart page</h2> */}
            <Cart
              image="/photo/Meryl_Lounge_Chair_Teal_3 2.svg"
              title="Osmond Armchair"
              subtitle="Gunnared biege"
              button="button"
              action="Remove"
              price="$567890987"
            />
            <div className="border-b border-gray-300 w-[750px] ml-[30px]" />
            <Cart
              image="/photo/Meryl_Lounge_Chair_Teal_3 2.svg"
              title="Osmond Armchair"
              subtitle="Gunnared biege"
              button="button"
              action="Remove"
              price="$567890987"
            />
          </div>
          <Discount />
        </div>
        </div>
        <div className="w-[800px]">
        <OrderSummary />
        </div>
      </div>
    </>
  );
};
export default Cart;
