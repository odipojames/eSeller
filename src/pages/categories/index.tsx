import React, { FunctionComponent, useEffect } from "react";
import { NextPage } from "next";
import { CategoriesContainer, CategoryFooter } from "styles/categoriesStyles";
import Link from "next/link";
import { useSelector } from "react-redux";
import Api from "../../services/lib";
import { shuffleArray } from "../../utils";
import GlobalContainer from "../../styles/globalContainer";


const Categories: NextPage<FunctionComponent> = (props: any) => {
  const api = new Api();

  const categories = useSelector((state: any) => state.products.categories);

  const sliceSubcategories = (subcategories: any) => {
      if (!subcategories || subcategories.length < 7) {
        
        return subcategories
      }

      return subcategories.slice(0, 7);

  }

  return (
    <><GlobalContainer>
      <CategoriesContainer>
        {categories?.map((category: any) => {
          let { subcategories }: any = category;
          subcategories = shuffleArray(subcategories);
          subcategories = sliceSubcategories(subcategories);
          
          return (<div key={category.pk} className="category__container">
            <div>
              <Link href={`/categories/subCategories?categoryId=${category.pk}`}>
                <a>
                  <div>
                    <img
                      src="/fasion.png"
                      alt="image"
                      id={category.pk}
                    />
                  </div>
                </a>
              </Link>
              <div>
                <Link href={`/categories/subCategories?categoryId=${category.pk}`}>
                  <a>
                    <span id={category.pk}>
                      {category.name}
                    </span>
                  </a>
                </Link>
                <br />
                <br />
              </div>
            </div>

            {subcategories?.map((sub: any, index: number) => (
              <div key={index.toString()}>
                <p>{sub.name}</p>
              </div>
            ))}
          </div>)
        })}
      
      </CategoriesContainer>
      </GlobalContainer>
      <GlobalContainer>
        <CategoryFooter>
          <div>
            <hr style={{ color: "black" }} />
          </div>
          <div className="footer_text">
            <ul>
              <li className="other_categories"> Other Categories</li>
              <li>Global Products</li>
              <li>|</li>
              <li>Buy Kenya</li>
              <li>|</li>
              <li>Fullfilled By OE</li>
              <li>|</li>
              <li>OE Basics</li>
            </ul>
          </div>
        </CategoryFooter>
      </GlobalContainer>
    </>
  );
};

export async function getServerSideProps() {
  const api = new Api();
  const response = await api.products().getCategories();
  return {
    props: {
      data: response.data || {},
    },
  };
}

export default Categories;
