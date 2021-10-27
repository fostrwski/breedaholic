import React from "react";

const Input = ({ ...props }) => {
  return (
    <input
      {...props}
      className="form-input w-full border-0 shadow-2xl p-4 rounded-xl focus:ring-4 focus:ring-green-700 focus:ring-opacity-40"
    />
  );
};

export default Input;
