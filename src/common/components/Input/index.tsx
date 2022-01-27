import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  customClasses?: string;
  label?: string;
}

const Input: React.FC<InputProps> = ({
  customClasses,
  label,
  id,
  ...props
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}</label>}
      <input id={id} className={customClasses} {...props} />
    </div>
  );
};

export default Input;
