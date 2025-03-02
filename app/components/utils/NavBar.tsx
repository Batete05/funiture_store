import React from "react";
import { RiMenu5Fill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="border-b border-gray-300">
      <div className="flex items-center justify-between p-4 text-[#17183B]">
        {/* Logo */}
        <div className="ml-4">
          <img src="/Cozy®.svg" alt="Cozy Logo" className="h-6" />
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex">
          <ul className="text-sm flex space-x-6">
            <li>SHOP</li>
            <li>COLLECTIVE</li>
            <li>DESIGNERS</li>
            <li>ABOUT US</li>
            <li>CONTACT</li>
          </ul>
        </nav>

        <div className="flex mr-4 items-center space-x-6">
          {/* Icons */}
          <div className="flex items-center space-x-6 ">
            <RiMenu5Fill className="text-xl" />
            <CiSearch className="text-xl" />
          </div>
          <div className="border border-gray-300 h-[30px]" />
          <div>
            <a href="/cart">
            <LuShoppingCart className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
