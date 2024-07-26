import React from "react";

const Color = ({ color }) => {
  return (
    <li
      style={{ backgroundColor: color }}
      className={`h-8 w-8 border flex items-center justify-center rounded-full cursor-pointer`}
    >
      {/* <span className="h-3 w-3 rounded-full bg-gray-200"></span> */}
    </li>
  );
};

export default Color;
