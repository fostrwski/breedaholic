import Button from "common/components/Button";
import { filterBreeds, selectFilters } from "common/redux/breeds";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

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

  const categories = ["All", "Herding", "Working", "Terrier", "Hound", "Toy"];

  return (
    <div className="flex flex-wrap gap-2 text-sm">
      {categories.map((category: string) => (
        <Button
          key={category}
          customClasses={`text-gray-800 bg-gray-100 !rounded-xl ${
            category === "All" && selectedCategories!.length === 0
              ? "bg-gray-200"
              : ""
          } ${
            category !== "all" && selectedCategories!.includes(category)
              ? "bg-gray-200"
              : ""
          }`}
          onClick={() => toggleCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default Category;
