import React from "react";

interface Props {
  icon?: React.ReactNode;
}

const Input: React.FC<Props & Record<string, any>> = ({ icon, ...props }) => {
  return (
    <div className="relative text-gray-600">
      <input
        {...props}
        className={`form-input w-full border-0 shadow-2xl p-4 rounded-xl focus:ring-2 focus:ring-green-600 focus:ring-opacity-80 ${
          icon ? "pl-12" : ""
        }`}
      />

      {icon && (
        <div className="h-5 w-5 absolute top-1/2 transform -translate-y-1/2 left-4">
          {icon}
        </div>
      )}
    </div>
  );
};

export default Input;
