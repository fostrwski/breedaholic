import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  customClasses,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`rounded-full bg-green-800 px-4 py-2 font-bold text-white ${customClasses}`}
    >
      {children}
    </button>
  );
};

export default Button;
