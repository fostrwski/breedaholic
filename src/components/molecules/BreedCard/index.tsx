import React from "react";

import Card from "components/atoms/Card";

const BreedCard = ({ breed }) => {
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
