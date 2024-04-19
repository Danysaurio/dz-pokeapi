import { Category } from "@/app/page";
import { usePokeApiCategories } from "@/app/utils/usePokeApi";
import React from "react";

const Categories = ({
  types,
  currentType,
  handleClick,
}: {
  types?: any[] | null;
  currentType: Category | null;
  handleClick: (item: Category) => void;
}) => {
  const { data: types2, isLoading, isError } = usePokeApiCategories();

  if (isError) {
    console.log("🚀 ~ isError:", isError);
  }

  if (isLoading) {
    return "...Cargando";
  }

  console.log("🚀 ~ types2:", types2);

  return (
    <ul>
      {types2.map((item: any) => (
        <ul key={item.name}>
          <button
            className="btn btn-ghost capitalize"
            onClick={() => handleClick(item)}
          >
            {item.name}{" "}
            {currentType && currentType.name === item.name ? "selected" : ""}
          </button>
        </ul>
      ))}
    </ul>
  );
};

export default Categories;
