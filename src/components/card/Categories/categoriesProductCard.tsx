import React from "react";
import { CategoryProductCardContainer } from "./styles";

export const CategoryProductCard = ({ category }: any) => {
  return (
    <CategoryProductCardContainer>
      <span> {category.name}</span>
      <img src="" alt="" />
    </CategoryProductCardContainer>
  );
};
