import React from "react";
import { FaRegHeart } from "react-icons/fa";

const WishList = () => {
  return (
    <div className="flex text-center text-[#3AA39F] space-x-3 justify-center items-center p-2 rounded-md cursor-pointer hover:shadow-md hover:shadow-[#3AA39F] transition duration-300 ease-in-out">
      <FaRegHeart className="mt-0.5" />
      <span>Add to Wishlist</span>
    </div>
  );
};

export default WishList;
