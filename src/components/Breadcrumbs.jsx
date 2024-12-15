import React from "react";
import { ChevronRight } from "lucide-react";

export function Breadcrumbs() {
  const breadcrumbItems = [
    "Home",
    "Used cars in Gurgaon",
    "Mahindra Cars",
    "Used 2021 Mahindra Thar Cars",
  ];

  return (
    <div className="flex flex-wrap items-center  uppercase font-semibold text-[#2F044E] ml-5 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24">
      {breadcrumbItems.map((item, index) => (
        <React.Fragment key={index}>
          <span className="whitespace-nowrap hover:underline md:text-[12px] text-[8px]">
            {item}
          </span>
          {index < breadcrumbItems.length - 1 && (
            <ChevronRight className="w-3 h-3 mx-1 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}
