import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  customClasses?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  customClasses,
  ...props
}) => {
  return (
    <button {...props} className={`px-4 py-2 font-bold ${customClasses}`}>
      {children}
    </button>
  );
};

export default Button;
