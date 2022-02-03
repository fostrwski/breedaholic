import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customClasses?: string;
}

const Input: React.FC<InputProps> = ({ customClasses, ...props }) => {
  return <input className={customClasses} {...props} />;
};

export default Input;
