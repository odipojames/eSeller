import React from "react";
import Link from "next/link";
import { CategoryTypeContainer } from "./styles";
import GlobalContainer from "../../../styles/globalContainer";

export const CategoriesCard = (props: any) => {
  const { currentCategory }: any = props;

  return (
    <CategoryTypeContainer>
      <GlobalContainer>
        {props.currentCategory?.subcategories ? <div className="categories-title"><h2>Shop By Category</h2></div> : ""}
        <div className="products_grid_container">
          {currentCategory?.subcategories.map((subCategory: any, i: number) => (
            <div key={i.toString()}>
              <div className="category_item_img">
              <Link href={`/categories/productList?categoryId=${subCategory?.pk}&parentCategoryName=${currentCategory?.name}&parentId=${currentCategory?.pk}`}>
                <img src="/home_system.png" alt="image" />
              </Link>
              </div>
              <div className="category_item_name">
              <Link href={`/categories/productList?categoryId=${subCategory?.pk}&parentCategoryName=${currentCategory?.name}&parentId=${currentCategory?.pk}`}>
                <p>{subCategory?.name}</p>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </GlobalContainer>
    </CategoryTypeContainer>
  );
};
