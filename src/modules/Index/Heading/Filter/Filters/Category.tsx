import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

// @ts-ignore
import FilterButton from "./FilterButton";

const Category: React.FC = () => {
  const dispatch = useDispatch();
  const breedsFilters = useSelector(selectFilters());

  const selectedCategories = breedsFilters.categories!;

  const toggleCategory = (category: string) => {
    if (selectedCategories!.includes(category)) {
      const newCategories = selectedCategories.filter(
        (selectedCategory) => selectedCategory !== category
      );
      dispatch(filterBreeds({ categories: newCategories }));
    } else if (category === "All") {
      dispatch(filterBreeds({ categories: [] }));
    } else {
      dispatch(filterBreeds({ categories: [...selectedCategories, category] }));
    }
  };

  const categories = [
    "All",
    "Herding",
    "Working",
    "Sporting",
    "Non-Sporting",
    "Terrier",
    "Hound",
    "Toy",
  ];

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {categories.map((category: string) => (
        <FilterButton
          key={category}
          onClick={() => toggleCategory(category)}
          filter={category}
          selectedFilters={selectedCategories}
        >
          {category}
        </FilterButton>
      ))}
    </div>
  );
};

export default Category;
