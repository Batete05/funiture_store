"use client";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Button = () => {
  const [value, setValue] = useState(1); // Initialize with a number

  const handleIncrement = () => {
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) { // Prevent negative values
      setValue(value - 1);
    }
  };

  return (
    <div className="flex border space-x-5 w-[150px] h-12 border-[#A2A3B1] justify-center items-center rounded-md">
      <button onClick={handleDecrement}>
        <FaMinus />
      </button>
      <span>{value}</span> {/* Dynamic value */}
      <button onClick={handleIncrement}>
        <FaPlus />
      </button>
    </div>
  );
};

export default Button;
