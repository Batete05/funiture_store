import NavBar from "../components/utils/NavBar";
import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa";
import ColorGrind from "../components/utils/ColorGrind";
import Button from "../components/utils/Buttons";
import WishList from "../components/utils/WishList";
import Account from "../components/utils/Account";
import { ChairGallery } from "../components/gallery/ChairGallery";
const Product = () => {
  return (
    <>
      <NavBar />
      <div className="flex text-[#17183B] px-[80px] py-[60px]">
        <div>
          <div className="grid space-y-6">
            <FiArrowLeft className="text-xl" />
            <span className="text-sm">
              {" "}
              <span>Chair /</span> Meryl Lounge Chair
            </span>
          </div>
          <div className="grid space-y-6 mt-12">
            <p className="text-4xl font-extrabold">Meryl Lounge Chair</p>
            <div className="flex text-center space-x-[150px] ">
              <span className="text-l font-bold">$149.99</span>
              <div className="flex text-center  ">
                <div className="text-[#FFC41F] text-sm flex space-x-1">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalf />
                </div>
                <span className="text-sm">
                  4.6 / 5.0<span className="text-[#A2A3B1]"> (556)</span>
                </span>
              </div>
            </div>
            <p >
              The gently curved lines accentuated by sewn details <br />
              are kind to your body and pleasant to look at. Also, <br />
              there's a tilt and height-adjusting mechanism that's <br />
              built to outlast years of ups and downs.
            </p>
            <ColorGrind />
            <div className="flex space-x-12">
                <Button />

                <button className="bg-[#3AA39F] border w-[150px] h-12 rounded-md text-white hover:bg-[#58737D]">Add to Card</button>
          </div>
          <p>Free 3-5 day shipping  •  Tool-free assembly  •  30- <br/> day trial</p>
          <div className="flex space-x-[100px]">
            <WishList />
            <Account />
          </div>
          </div>
        </div>
        <div className="ml-[250px]">
            {/* <div>
                <div>
                <img src="/Rectangle 1.svg"></img>
                <img src="/Meryl_Lounge_Chair_Teal_3 1.svg"></img>
                </div>
            </div> */}
            <ChairGallery />
        </div>
      </div>
    </>
  );
};
export default Product;
