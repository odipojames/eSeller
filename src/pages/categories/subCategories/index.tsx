import React, { FunctionComponent, useEffect } from "react";
import { NextPage } from "next";
import {
  CategoryBannerContainer,
  ProductsContainer,
  ProductsFeatured,
  TopBrands,
} from "styles/productsCategory";
import { topBrands } from ".../../fixtures";
import { Carousel } from "antd";
import Link from "next/link";
import { Products } from "components/card/ProductCard/productsCard";
import { CategoriesCard } from "components/card/CategoriesCard/ProductCategoriesCard";
import TopNav from "components/Layout/topNav";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentCategory } from "store/actions/productAction";
import { useRouter } from 'next/router'
import Api from "../../../services/lib";
import GlobalContainer from "../../../styles/globalContainer";


const SubCategoryList: NextPage<FunctionComponent> = (props) => {

  const router = useRouter()
  const { categoryId } = router.query
  const dispatch = useDispatch();
  const api = new Api();

  const currentCategory: any = useSelector(
    (state: any) => state.products.currentCategory
  );

  const fetchCategory = () => {
    api
      .products()
      .getSubCategory(categoryId)
      .then((res: any) => {
        dispatch(setCurrentCategory(res.data));
      })
      .catch((error: any) => console.log(`my error`, error));
  };
  useEffect(() => {
    fetchCategory();
  }, [categoryId]);


  return (
    <ProductsContainer>
      {/* call Top Nav component */}
      <TopNav currentCategory={currentCategory} />
      <GlobalContainer>
        <CategoryBannerContainer>
          <Carousel autoplay>
            <div>
              <img src="/electronics_banner.png" />
            </div>

            <div>
              <img src="/electronics_banner.png" />
            </div>

            <div>
              <img src="/electronics_banner.png" />
            </div>
          </Carousel>
        </CategoryBannerContainer>
      </GlobalContainer>
      {/* call subcategories card  */}
      <CategoriesCard currentCategory={currentCategory} />
      <GlobalContainer>
        <TopBrands>
          <h1>Explore Top Brands</h1>

          <div className="brands_grid_container">
            {topBrands.map((brand, index) => (
              <div key={index.toString()}>
                <img src={brand.image} alt="image" />
              </div>
            ))}
          </div>
        </TopBrands>
      </GlobalContainer>
      <GlobalContainer>
      <ProductsFeatured>
        <div className="ft_grid">
          <div>
            <h1 className="ft_products">Featured Products</h1>
          </div>
          <div>
            <Link href="/">{" SHOP ALL >"}</Link>
          </div>
        </div>

        <Products />

        <div className="ft2_flex">
          <div>
            <img src="/brands.png" />
          </div>
        </div>

        <hr style={{ color: "black" }} />

        <div className="delivery_flex">
          <div>
            <img src="/deliveries_image.png" />
          </div>

          <div>
            <img src="/deliveries_image2.png" />
          </div>
        </div>

        <div className="ft_grid">
          <div>
            <h1 className="ft_products">Top Discounts</h1>
          </div>
          <div>
            <Link href="/">{">"}</Link>
          </div>
        </div>

        <Products />
      </ProductsFeatured>
    </GlobalContainer>
    </ProductsContainer>
  );
};

export default SubCategoryList;
