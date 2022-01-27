import Input from "common/components/Input";
import { SearchContext } from "common/context/Search";
import React, { useContext } from "react";

const Heading: React.FC = () => {
  const { setSearchedTerm } = useContext(SearchContext);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedTerm(e.target.value);
  };

  return (
    <div className="text-center">
      <h1 className="text-xl font-semibold mb-6">
        Search through<span className="text-green-700">hundreds</span> of
        different dog breeds!
      </h1>

      <Input
        id="search"
        type="text"
        placeholder="Szukaj rasy"
        customClasses="text-lg placeholder:text-lg"
        onChange={handleChange}
      />
    </div>
  );
};

export default Heading;
