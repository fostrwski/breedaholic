import Card from "components/common/elements/Card";
import React from "react";
import { Breed } from "types";

interface Props {
  breed: Breed;
}

const BreedCard: React.FC<Props & Record<string, any>> = ({
  breed,
  ...props
}) => {
  return (
    <Card
      title={breed.name}
      subtitle={breed.temperament}
      image={{
        src: breed.image!.url,
        alt: `${breed.name} image`,
        width: breed.image!.width,
        height: breed.image!.height,
      }}
      className="mb-4 hover:brightness-[84%] active:brightness-[84%]"
      {...props}
    >
      <ul>
        <li>{breed.life_span}</li>
      </ul>
    </Card>
  );
};

export default BreedCard;
