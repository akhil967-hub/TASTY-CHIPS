import React, { useState, useEffect } from "react";
import bg from "../images/bg.png";
import image from "../images/image1.jpg";
import image1 from "../images/image.jpg";
import image2 from "../images/image2.jpg";
import image3 from "../images/image4.jpg";
import image4 from "../images/image5.jpg";
import image5 from "../images/image6.jpg";
import image6 from "../images/image7.jpg";
import image7 from "../images/image8.jpg";

const images = [image, image1, image2, image3, image4, image5, image6, image7];

export default function Home() {
  const [currentImages, setCurrentImages] = useState({
    img1: image,
    img2: image1,
    img3: image2,
    img4: image3,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prevImages) => ({
        img1: images[(images.indexOf(prevImages.img1) + 3) % images.length],
        img2: images[(images.indexOf(prevImages.img2) + 3) % images.length],
        img3: images[(images.indexOf(prevImages.img3) + 3) % images.length],
        img4: images[(images.indexOf(prevImages.img4) + 3) % images.length],
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-custom-bg bg-light-golden bg-cover bg-center min-h-screen flex flex-col items-center justify-start overflow-hidden">
      <div className="relative text-center rounded-full max-w-md w-full -m-7 mb-3">
        {/* Image */}
        <img
          src={bg}
          alt="Background"
          className="w-full h-auto relative text-center rounded-full max-w-md"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold italic text-white underline">
            TASTY
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl italic text-yellow-500">
            Kerala Chips
          </h2>
        </div>
      </div>

      <div className="flex justify-center items-center w-full max-w-4xl px-2 -mt-10 mx-auto">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <div className="flex justify-center items-center">
            <div className="w-80 h-80 overflow-hidden border-8 border-red-900 shadow-lg rounded-2xl">
              <img
                src={currentImages.img1}
                alt="Kerala Chips"
                className="w-full h-full object-cover  transition-transform duration-300 hover:scale-110 hover:border-blue-900"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-80 h-80 overflow-hidden border-8 border-red-900 shadow-lg rounded-2xl">
              <img
                src={currentImages.img2}
                alt="Kerala Chips"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:border-blue-900"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-80 h-80 overflow-hidden border-8 border-red-900 shadow-lg rounded-2xl">
              <img
                src={currentImages.img3}
                alt="Kerala Chips"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:border-blue-900"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="w-80 h-80 overflow-hidden border-8 border-red-900 shadow-lg rounded-2xl">
              <img
                src={currentImages.img4}
                alt="Kerala Chips"
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 hover:border-blue-900"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 max-w-md w-full">
        <div className="bg-white rounded-lg shadow-lg p-4">
          <ul className="list-disc list-inside space-y-2 text-black text-sm sm:text-lg font-bold italic">
            <li className="bg-red-200 uppercase p-2">Made with Natural Oils</li>
            <li className="bg-red-200 uppercase p-2">
              No Artificial Additives
            </li>
            <li className="bg-red-200 uppercase p-2">Low in Saturated Fats</li>
            <li className="bg-red-200 uppercase p-2">Freshly Made</li>
            <li className="bg-red-200 uppercase p-2">High-Quality Packing</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 mb-5 max-w-md w-full">
        <div className="bg-white rounded-full shadow-lg p-6 flex flex-col items-center text-center border-4 border-black">
          <div className="flex flex-col items-center font-bold text-xl sm:text-2xl md:text-3xl italic">
            <h3>Wholesale & Retail</h3>
          </div>
          <div className="border-t-2 border-gray-500 my-4 w-full"></div>
          <div className="flex flex-col items-center">
            <h1 className="text-lg sm:text-xl md:text-2xl italic text-violet-950 pb-2 font-bold">
              Order Now
            </h1>
            <h1 className="text-xl sm:text-2xl md:text-3xl italic text-violet-950 pb-2 font-bold">
            9442533967
            </h1>
            <a
              href="https://wa.me/+919442533967"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white bg-[#1d9e4c] rounded-md px-4 py-2 text-sm sm:text-base font-bold shadow-md hover:bg-[#050120] transition-colors duration-300 mt-2"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
