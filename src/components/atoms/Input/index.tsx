import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="w-full shadow-xl p-4 rounded-xl focus:ring-4 focus:ring-green-700 focus:ring-opacity-40"
    />
  );
};

export default Input;
