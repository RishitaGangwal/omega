import React, { useState } from "react";
import { MdOutlineBarChart } from "react-icons/md";
import { FaIndianRupeeSign } from "react-icons/fa6";

const PriceCalculator = () => {
  const [invites, setInvites] = useState(500);
  const [duration, setDuration] = useState(12);
  const [price, setPrice] = useState(22581);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const calculatePrice = (invites, duration) => {
    const baseRate = 2000;
    const calculatedPrice = (invites / 1000) * duration * baseRate;
    return Math.round(calculatedPrice);
  };

  const handleInputChange = (key, value) => {
    if (key === "invites") setInvites(value);
    if (key === "duration") setDuration(value);

    const updatedPrice = calculatePrice(
      key === "invites" ? value : invites,
      key === "duration" ? value : duration
    );
    setPrice(updatedPrice);
  };

  const handleCheckEligibility = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-lg border-2 rounded-lg font-sans">
      <h2 className="text-xl font-bold mb-4 text-purple-900 text-left">
        Check Eligibility
      </h2>
      <hr className="my-6 border-t-2 border-gray-200 mt-2" />
      <div className="mb-6">
        <h2 className="text-md font-bold mb-4 text-purple-900 mr-[11rem]">
          Price Calculator
        </h2>
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-purple-900">
            Number of Invites
          </label>
          <p className="text-purple-900 font-semibold mt-1 text-xs">
            {invites.toLocaleString()} Invites
          </p>
        </div>
        <input
          type="range"
          min="100"
          max="5000"
          value={invites}
          onChange={(e) =>
            handleInputChange("invites", parseInt(e.target.value))
          }
          className="w-full h-1 bg-gray-300 rounded-lg appearance-none accent-purple-600"
          style={{
            background: `linear-gradient(to right, #6B46C1 ${
              ((invites - 100) / (5000 - 100)) * 100
            }%, #e0e0e0 0%)`,
          }}
        />
        <div className="flex text-xs justify-between text-gray-400 mt-1">
          <span>100</span>
          <span>5,000</span>
        </div>
      </div>
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-purple-900">
            Duration of Event
          </label>
          <p className="text-purple-900 font-semibold text-xs mt-1">
            {duration} <span className="text-xs">Months</span>
          </p>
        </div>
        <input
          type="range"
          min="12"
          max="84"
          step="1"
          value={duration}
          onChange={(e) =>
            handleInputChange("duration", parseInt(e.target.value))
          }
          className="w-full h-1 bg-gray-300 rounded-lg appearance-none accent-purple-600"
          style={{
            background: `linear-gradient(to right, #6B46C1 ${
              ((duration - 12) / (84 - 12)) * 100
            }%, #e0e0e0 0%)`,
          }}
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>12 Months</span>
          <span>84 Months</span>
        </div>
      </div>
      <hr className="my-6 border-t-2 border-gray-200" />
      <div className="text-center">
        <p className="text-2xl font-bold text-teal-500 relative mr-[7rem]">
          <span
            className="absolute top-0 left-0 text-base"
            style={{ fontSize: "1rem", marginTop: "0.2rem" }}
          >
            ₹
          </span>
          <span className="mr-2">{price.toLocaleString()}</span>
          <span className="text-sm font-semibold -ml-1">per event</span>
        </p>
      </div>
      <div className="flex items-center justify-center mt-2">
        <button className="mr-2 text-purple-900">
          <MdOutlineBarChart />
        </button>
        <button className="text-sm mr-[9rem]  text-purple-900 underline hover:text-purple-600">
          View Loan Breakup
        </button>
      </div>
      <button
        className="w-full mt-4 bg-purple-900 hover:bg-purple-700 text-white py-3 rounded-lg flex items-center justify-center"
        onClick={handleCheckEligibility}
      >
        <FaIndianRupeeSign className="text-lg text-white bg-yellow-500 rounded-full p-1 mr-2" />
        <span className="text-sm"> Check eligibility</span>
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center">
        **Processing fees and other charges are not included.
      </p>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
            <h2 className="text-xl font-bold">Eligibility Status</h2>
            <p className="mt-4">
              Based on the provided data, you are eligible for the loan.
            </p>
            <button
              className="mt-4 text-white bg-purple-900 hover:bg-purple-700 px-4 py-2 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceCalculator;
