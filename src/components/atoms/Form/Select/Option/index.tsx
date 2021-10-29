import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Option: React.FC<Props & Record<string, any>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <option className={className} {...props}>
      {children}
    </option>
  );
};

export default Option;
