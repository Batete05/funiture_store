"use client";

import React, { useState } from "react";
import { Chairs } from "./Chairs";
import { ChairCarousel } from "./ChairCoursel"; // Ensure correct import

export const ChairGallery = () => {
  const [selectedImages, setSelectedImages] = useState([]); // Ensure it's initialized as an array

  const handleSelectedImage = (src) => {
    setSelectedImages((prev) => {
      if (!prev) return []; // Prevent undefined state
      return prev.includes(src)
        ? prev.filter((img) => img !== src)
        : [...prev, src];
    });
  };

  return (
    <div className="p-4">
      {/* Prevent undefined length error */}
      {selectedImages?.length > 0 && (
        <ChairCarousel selectedImages={selectedImages} />
      )}

      <Chairs onSelectImage={handleSelectedImage} />
    </div>
  );
};
