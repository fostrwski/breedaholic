import React from "react";

interface Props {
  children: React.ReactNode;
}

const Form: React.FC<Props & Record<string, any>> = ({
  children,
  ...props
}) => {
  return <form {...props}>{children}</form>;
};

export default Form;
