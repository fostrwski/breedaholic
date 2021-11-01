import { SearchIcon } from "@heroicons/react/solid";
import Form from "components/common/elements/Form";
import Input from "components/common/elements/Form/Input";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "redux/search";
import type { AppDispatch, RootState } from "redux/store";

const Heading: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { searchedTerm } = useSelector((state: RootState) => state.search);

  const handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };

  const handleInputChange = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    dispatch(update(event.currentTarget.value));
  };

  return (
    <section className="text-center">
      <div className={`${searchedTerm !== "" ? "invisible absolute" : ""}`}>
        <h1 className="mb-4 text-xl font-semibold">
          Search <span className="text-green-600">hundreds</span> of different
          dog breeds!
        </h1>
        <h2 className="text-gray-600 mb-6 sm:mb-8 text-sm">
          Breedaholic is a web application that lets you search for the dog
          breed you&apos;re looking for!
        </h2>
      </div>
      {/* Search breeds */}
      <Form onSubmit={handleSubmit}>
        <Input
          type="search"
          id="search"
          name="search"
          placeholder="Search for breed..."
          icon={<SearchIcon />}
          onChange={handleInputChange}
        />
      </Form>
    </section>
  );
};

export default Heading;
