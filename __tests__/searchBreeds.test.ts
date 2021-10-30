import { Breeds } from "types";

import { searchByName, searchByTemperament } from "../src/utils/searchBreeds";

const breeds: Breeds = [
  {
    bred_for: "Sheep herder",
    breed_group: "Herding",
    height: {
      imperial: "18 - 22",
      metric: "46 - 56",
    },
    id: 50,
    life_span: "12 - 16 years",
    name: "Border Collie",
    temperament: "Tenacious, Keen, Energetic, Responsive, Alert, Intelligent",
    weight: {
      imperial: "30 - 45",
      metric: "14 - 20",
    },
  },
  {
    bred_for: "Herding, Guard dog",
    breed_group: "Herding",
    height: {
      imperial: "22 - 26",
      metric: "56 - 66",
    },
    id: 115,
    life_span: "10 - 13 years",
    name: "German Shepherd Dog",
    temperament:
      "Alert, Loyal, Obedient, Curious, Confident, Intelligent, Watchful, Courageous",
    weight: {
      imperial: "50 - 90",
      metric: "23 - 41",
    },
  },
  {
    bred_for: "Cattle droving",
    breed_group: "Herding",
    height: {
      imperial: "10.5 - 12.5",
      metric: "27 - 32",
    },
    id: 68,
    life_span: "12 - 14 years",
    name: "Cardigan Welsh Corgi",
    temperament:
      "Affectionate, Devoted, Alert, Companionable, Intelligent, Active",
    weight: {
      imperial: "25 - 38",
      metric: "11 - 17",
    },
  },
];

describe("searchBreeds test", () => {
  it("checks if searchByName returns what's expected", () => {
    expect(searchByName(breeds, "golden retriever")).toStrictEqual([]);
    expect(searchByName(breeds, "border")).toStrictEqual([breeds[0]]);
  });
  it("checks if searchByTemperament returns what's expected", () => {
    expect(searchByTemperament(breeds, "intelligent")).toStrictEqual(breeds);
    expect(searchByTemperament(breeds, "DEVOTED")).toStrictEqual([breeds[2]]);
    expect(searchByTemperament(breeds, "Happy")).toStrictEqual([]);
  });
});
