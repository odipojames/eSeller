import React, { FunctionComponent, useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { Products } from "components/card/ProductCard/productsCard";
import { CategoriesCard } from "components/card/CategoriesCard/ProductCategoriesCard";
import { OtherCategoriesHeader, paginationStyle } from "styles/otherCategories";
import { Pagination } from "antd";
import { useRouter } from 'next/router'
import TopNav from "components/Layout/topNav";
import Api from "../../../services/lib";
import GlobalContainer from '../../../styles/globalContainer';



const ProductList: NextPage<FunctionComponent> = () => {

  const router: any = useRouter()
  const { categoryId, parentId, parentCategoryName }: any = router.query
  const api: any = new Api();
  const [products, setProducts]: any = useState([])
  const [currentCategory, setCategory]: any = useState(null)

  const fetchProducts: any = () => {
    api
      .products()
      .getProducts(categoryId)
      .then((res: any) => {
        setProducts(res.data.results);
      })
      .catch((error: any) => console.log(`products error`, error));
  };

  const areSubcategoriesPresent = () => {
    const subcategories: any = currentCategory?.subcategories;
    if (!subcategories) {
      return false;
    } else {
      return !!subcategories.length;
    }
  }

  const fetchCategory = () => {
    api
      .products()
      .getSubCategory(categoryId)
      .then((res: any) => {
        (setCategory(res.data));
      })
      .catch((error: any) => console.log(`category error`, error));
  };

  useEffect(() => {
    fetchCategory();
    fetchProducts();
  }, [categoryId]);

  return (

    <OtherCategoriesHeader>
      {areSubcategoriesPresent() && <TopNav currentCategory={currentCategory}/>}
      <GlobalContainer>
        <div className="category_title">
        <Link href={`/categories/subCategories?categoryId=${parentId}`}>
          <span className="parent-category">{parentCategoryName}</span>
        </Link>
          <span className="sign">{">"}</span>
          <span className="sub-category">{currentCategory?.name}</span>
        </div>
      </GlobalContainer>
      {areSubcategoriesPresent() && <CategoriesCard currentCategory={currentCategory} />}
      <GlobalContainer>
        <div className="result">
          <span className="product-count">{products.length} results found for </span>
          <span className="category_name">{currentCategory?.name}</span>
        </div>
        <Products products={products}/>
        <div className="footter_pagination">
          {" "}
          <Pagination defaultCurrent={1} total={223} style={paginationStyle} />
        </div>
      </GlobalContainer>
    </OtherCategoriesHeader>
  );
};

export default ProductList;
