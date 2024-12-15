import React from "react";
import {
  MapPin,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { MdCheckCircle } from "react-icons/md";

export function CarDetailsCard() {
  return (
    <div className="max-w-lg text-left mx-auto bg-white p-6 rounded-lg border-2 mt-4">
      <h1 className="text-2xl font-bold text-gray-800">
        2021 Mahindra Thar LX 4 STR Hard
      </h1>
      <p className="text-xl font-bold text-gray-800 mt-1 mb-2">
        Top Diesel MT 4WD
      </p>
      <p className="text-gray-600 mb-1">13K km · Diesel · Manual</p>
      <div className="flex items-center mt-2">
        <MapPin className="h-4 w-4 text-gray-600 mr-1" />
        <span className="text-sm text-gray-500 hover:underline">
          Car Hub, Trillium Avenue, Gurgaon
        </span>
        <button>
          <ChevronRight className="h-4 w-4 text-purple-600" />
        </button>
      </div>
      <div className="mt-2 flex items-center border border-gray-200 rounded-full w-fit">
        <div className="bg-purple-200 text-purple-800 font-semibold rounded-full text-xs px-4 py-2 mr-2 flex items-center gap-2">
          <span>Assured</span>
          <span>
            <MdCheckCircle />
          </span>
        </div>
        <span className="text-sm text-gray-500 pr-3">
          Latest cars, <span className="text-gray-500">3 year warranty</span>
        </span>
      </div>
      <hr className="my-4 border-gray-200" />
      <div>
        <p className="text-3xl font-semibold text-gray-800 mb-2">₹13.26 Lakh</p>
        <div className="flex justify-between">
          <p className="text-sm text-gray-600">Fixed on road price</p>
          <p className="text-purple-600 text-xs flex items-center hover:underline font-bold">
            View benefits
            <ChevronRight className="h-4 w-4" />
          </p>
        </div>
      </div>
      <div className="mt-4 bg-purple-50 p-4">
        <span className="text-gray-600 text-sm justify-center">
          This inventory is no longer available with us. View{" "}
          <span>similar cars.</span>
        </span>
      </div>
      <button className="w-full mt-4 bg-[#6300A3] text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
        VIEW SIMILAR CARS
      </button>
      <div className="mt-6 flex flex-col sm:flex-row justify-between sm:justify-center gap-4">
        <p className="text-gray-600 font-bold mt-1">Share with a friend :</p>
        <div className="flex gap-4">
          <Facebook className="w-6 h-6 text-gray-600 cursor-pointer hover:text-purple-600" />
          <Twitter className="w-6 h-6 text-gray-600 cursor-pointer hover:text-purple-600" />
          <Instagram className="w-6 h-6 text-gray-600 cursor-pointer hover:text-purple-600" />
        </div>
      </div>
    </div>
  );
}
