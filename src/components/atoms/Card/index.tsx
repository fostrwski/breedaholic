import React from "react";

interface Props {
  title: string;
}

const Card: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default Card;
