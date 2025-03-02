"use client";

import React, { useState } from "react";

const images = [
  "photo/Meryl_Lounge_Chair_Teal_3 2.svg",
  "photo/Rectangle 5.svg",
  "photo/Rectangle 4.svg",
  "photo/Rectangle 6.svg",
  "photo/Rectangle 7.svg",
];

export const Chairs = ({ onSelectImage }) => {
  const [visitedChairs, setVisitedChairs] = useState(new Set());

  const handleImageClick = (src, index) => {
    setVisitedChairs((prev) => {
      const newSet = new Set(prev);
      newSet.has(index) ? newSet.delete(index) : newSet.add(index);
      return newSet;
    });
    onSelectImage(src);
  };

  return (
    <div className="grid grid-cols-5 gap-4 p-4">
      {images.map((src, index) => {
        const isVisited = visitedChairs.has(index);

        return (
          <div
            key={index}
            className={`p-2 border-2 rounded-lg cursor-pointer transition ${
              isVisited ? "border-[#3AA39F]" : "border-gray-200"
            }`}
            onClick={() => handleImageClick(src, index)}
          >
            <img
              src={src}
              alt={`Chair ${index + 1}`}
              className="w-[60px] h-[60px] object-cover rounded-md"
            />
          </div>
        );
      })}
    </div>
  );
};
