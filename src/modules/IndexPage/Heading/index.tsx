import Input from "components/atoms/Form/Input";
import Select from "components/atoms/Form/Select";
import Option from "components/atoms/Form/Select/Option";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "redux/search";
import type { AppDispatch, RootState } from "redux/store";

const Heading = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedTerm } = useSelector((state: RootState) => state.search);

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    dispatch(update(event.currentTarget.value));
  };

  return (
    <section className="text-center">
      <div className={`${searchedTerm !== "" ? "invisible absolute" : ""}`}>
        <h1 className="mb-4 text-2xl font-semibold">
          Search <span className="text-green-700">hundreds</span> of different
          dog breeds!
        </h1>
        <h2 className="text-gray-600 mb-6 sm:mb-8 font-semibold">
          Breedaholic is a web application that lets you search for the dog
          breed you&apos;re looking for!
        </h2>
      </div>
      {/* Search breeds */}
      <Input
        type="text"
        id="search"
        name="search"
        placeholder="Search for breed..."
        onChange={handleInputChange}
      />
      <Select>
        <Option>Name 🐾</Option>
        <Option>Temperament 🍃</Option>
      </Select>
    </section>
  );
};

export default Heading;
