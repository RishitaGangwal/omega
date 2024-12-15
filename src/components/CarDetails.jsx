import React from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import { Carousel } from "./Carousel";
import { CarDetailsCard } from "./CarDetailsCard";

import CarOverview from "./CarOverview";
import PriceCalculator from "./PriceCalculator";

export default function CarDetails() {
  const images = [
    "https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/13.jpg",
    "https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/37.jpg",
    "https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/46.jpg",
    "https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/20.jpg",
    "https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/28.jpg",
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <Breadcrumbs />
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <div className="max-w-7xl w-full rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-90 p-4">
              <Carousel images={images} />
            </div>
            <div className="md:w-1/2">
              <CarDetailsCard />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-14 mt-8">
            <CarOverview />
            <PriceCalculator />
          </div>
        </div>
      </div>
    </div>
  );
}
