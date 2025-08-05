"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageItem {
  src: string;
  heading: string;
}

interface AnimatedGridProps {
  imageData: ImageItem[];
}

const AnimatedGrid: React.FC<AnimatedGridProps> = ({ imageData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  const nextImage = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageData.length);

  const prevImage = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + imageData.length) % imageData.length
    );

  return (
    <div className="mt-10 mb-10 md:mb-20 md:mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16 items-center">
      {imageData.map((item, index) => (
        <div
          key={index}
          className="col-span-1 flex flex-col justify-center items-center cursor-pointer"
          onClick={() => openModal(index)}
        >
          <div className="relative w-full">
            <Image
              src={item.src}
              alt={item.heading}
              width={500}
              height={300}
              className="rounded-md"
            />
          </div>
          {/* <span className="text-center font-semibold text-xl sm:text-2xl mt-3">
            {item.heading}
          </span> */}
        </div>
      ))}

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={closeModal}
          >
            ✕
          </button>
          <button
            className="absolute left-5 text-white text-3xl"
            onClick={prevImage}
          >
            ‹
          </button>
          <div className="max-w-3xl">
            <Image
              src={imageData[currentIndex].src}
              alt={imageData[currentIndex].heading}
              width={800}
              height={500}
              className="rounded-md"
            />
            <p className="text-white text-center mt-4 text-xl">
              {imageData[currentIndex].heading}
            </p>
          </div>
          <button
            className="absolute right-5 text-white text-3xl"
            onClick={nextImage}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default AnimatedGrid;
