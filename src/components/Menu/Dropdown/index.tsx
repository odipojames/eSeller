import React from "react";
import Link from "next/link";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { DropdownContainer } from "./styles";
import { useSelector } from "react-redux";
import GlobalContainer from "../../../styles/globalContainer";

const Category = ({text, categoryId}: any) => {
    return (
    <div
      className="category-item"
      >   
        <Link href={`/categories/subCategories?categoryId=${categoryId}`}>
            <img src="/fasion.png" alt="image" />
        </Link>
        <Link href={`/categories/subCategories?categoryId=${categoryId}`}><div className="category-name">{text}</div></Link>
        
    </div>
    );
        
  };


export const createCategories = (categories: any) => {

   return categories?.map(item => {
    const {pk, name} = item;
    
     return <Category text={name} key={pk} categoryId={pk}/>;
  });
}
  const Arrow = ({ img, className, alt }: any) => {
    return (
      <div
        className={className}
      ><img src={img} alt={alt}/></div>
    );
  };

  const ArrowLeft = Arrow({ img: "/left-arrow.svg", alt: "<", className: 'arrow-prev arrow' });
  const ArrowRight = Arrow({ img: "/right-arrow.svg", alt: ">", className: 'arrow-next arrow' });


export const Dropdown = () => {
    const categories = useSelector((state) => state.products.categories);
    const Categories: any = createCategories(categories)
    return (  
        <DropdownContainer>
            <div className="dropdown">
                <Link href="/categories">
                    <a className="dropbtn">
                        All Categories
                        <img className="dropdown-icon" src="/dropdown_icon.svg" alt="dropdown"/>
                    </a>
                </Link>
                <div className="dropdown-content">
                <ScrollMenu
                    data={Categories}
                    arrowLeft={ArrowLeft}
                    arrowRight={ArrowRight}
                />
                </div>
            </div>
        </DropdownContainer>
    )
    };
