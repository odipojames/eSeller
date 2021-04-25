import React from "react";
import { FlashCardContainer } from "./styles";
import ProductModal from "../../Modal/ProductModalView";
export const FlashProductCard = ({ products = [] }: any) => {
  return (
    <FlashCardContainer>
      {products.map((product: any, index: number) => (
        <div className="product__container" key={index.toString()}>
          <div className="image__container">
            {product.offer ? <div className="offer">{product?.offer}</div> : ""}
            <ProductModal product={product} />
          </div>

          <div className="product__description">
            <span className="description"> {product?.description} </span>

            <div className="price__container">
              <span className="price"> {product?.price}</span>
              <span className="sale__price">
                <s> Ksh {product?.salePrice} </s>
              </span>
            </div>
          </div>
        </div>
      ))}
    </FlashCardContainer>
  );
};
