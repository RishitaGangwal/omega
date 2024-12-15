import React from "react";
import React360Viewer from "react-360-view";

const Car360View = ({
  amount = 72,
  imagePath = "https://imgd.aeplcdn.com/1280x720/cw/360/mahindra/1260/closed-door/65686f/",
  fileName = "{index}.jpg",
  spinReverse = true,
}) => {
  return (
    <div className="three-sixty-container">
      <React360Viewer

        amount={amount}
        imagePath={imagePath}
        fileName={fileName}
        spinReverse={spinReverse}
      />
    </div>
  );
};

export default Car360View;

