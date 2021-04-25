import React from "react";
import Link from "next/link";
import { TopNavContainer } from "./topnavstyles";
import GlobalContainer from "../../../styles/globalContainer";


const TopNav = ({ currentCategory }: any) => {

  return (
    <TopNavContainer>
      <GlobalContainer>
        <ul className="top_nav">
          {currentCategory?.subcategories.map((sub: any) => (
            <li key={sub?.pk}>
              <Link href={`/categories/productList?categoryId=${sub?.pk}&parentCategoryName=${currentCategory?.name}&parentId=${currentCategory?.pk}`}>
                <a>
                  <span id={sub.pk}>
                    {" "}
                    {sub.name}{" "}
                  </span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </GlobalContainer>
    </TopNavContainer>
  );
};

export default TopNav;
