import React from "react";

import Card from "components/atoms/Card";
import { Breed } from "types";

interface Props {
  breed: Breed;
}

const BreedCard: React.FC<Props> = ({ breed }) => {
  return (
    <Card
      title={breed.name}
      subtitle={breed.temperament}
      image={{
        src: breed.image.url,
        alt: `${breed.name} image`,
        width: breed.image.width,
        height: breed.image.height,
      }}
    >
      <ul>
        <li>{breed.life_span}</li>
      </ul>
    </Card>
  );
};

export default BreedCard;
