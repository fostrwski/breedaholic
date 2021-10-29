import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Select: React.FC<Props & Record<string, any>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <select
      className={`rounded-xl border-none shadow-2xl p-4 focus:ring-2 focus:ring-green-700 focus:ring-opacity-40 mt-4 w-full text-gray-600 ${className}`}
      {...props}
    >
      {children}
    </select>
  );
};

export default Select;
