import React, { useState } from "react";
import { Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "antd/dist/reset.css";
import Car360View from "./Car360View";

export function Carousel({ images }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  return (
    <div>
      <div className="relative">
        <div className="aspect-ratio w-full h-56 sm:h-64 md:h-80 lg:h-96 bg-gray-200 rounded-lg overflow-hidden">
          <img
            src={images[currentImage]}
            alt={`Car view ${currentImage + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev === 0 ? images.length - 1 : prev - 1
            )
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() =>
            setCurrentImage((prev) =>
              prev === images.length - 1 ? 0 : prev + 1
            )
          }
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <button
          onClick={openModal}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-md shadow-lg text-xs sm:text-sm hover:bg-black opacity-85"
        >
          <span className="text-xs sm:text-sm ">
            Click to view <span className="font-bold">360°</span>
          </span>
        </button>
      </div>
      <div className="flex gap-3 p-3 overflow-auto 0px]">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`flex-shrink-0 w-20 h-20 md:w-40 md:h-25 rounded-md  transition-all duration-300 ${
              currentImage === index
                ? "ring-2 ring-gray-500 scale-105 shadow-lg"
                : "ring-1 ring-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover rounded-md"
            />
          </button>
        ))}
      </div>
      <Modal
        open={isModalVisible}
        onCancel={closeModal}
        closeIcon={<CloseOutlined />}
        footer={null}
        width={1000}
        centered
      >
        <div className="text-center font-semibold">
          <p className="text-md">Click and drag to rotate the car</p>
        </div>
        <Car360View />
      </Modal>
    </div>
  );
}
