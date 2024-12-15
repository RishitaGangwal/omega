import React from "react";

const CarOverview = () => {
  const carOverviewData = [
    {
      label: "Model",
      value: "2021 Mahindra Thar LX 4 STR Hard Top Diesel MT 4WD",
    },
    {
      label: "Year",
      value: "2021 (Make Year: Aug 2021; Registration Year: Dec 2021)",
    },
    { label: "Mileage", value: "12-13 kmpl" },
    { label: "Km driven", value: "13,000 km" },

    { label: "Price", value: "₹13.26 Lakh (Fixed on-road price)" },
  ];

  return (
    <div className="bg-white text-left">
      <h2 className="text-2xl font-semibold mb-6 text-purple-900">
        Car Overview
      </h2>
      <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-y-7 gap-x-14 border-2 rounded-lg p-8 ">
        {carOverviewData.map((item, index) => (
          <div key={index} className="flex flex-col w-full max-w-56 ">
            <p className="text-[14px] font-normal text-[#929392] mb-2">
              {item.label}
            </p>
            <p className="text-[16px] font-normal text-[#2F044E] ">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarOverview;
