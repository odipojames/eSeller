import React from "react";
import { ProductsContainer } from "./styles";
import { StarOutlined } from "@ant-design/icons";
import { CatModal } from "components/Modal/CatModal";
import ProductModal from "components/Modal/ProductModalView";

export const Products = (props) => {
  const {products}: any = props;
  return (
    <ProductsContainer>
      <div className="featured_products_container">
        {products?.map((product: any) => (
          <div className="product_item" key={product.id}>
            <div className="image__container">
              <ProductModal product={product} />
            </div>
            <div className="text__area">
              <span>{product.product.name}</span>
              <span className="description">{product.product.description}</span>
            </div>
            <div>
              {[1, 2, 3, 4, 5].map((i: any, index: number) => (
                <span key={index.toString()}>
                  <StarOutlined type="star" className="ant_star_icon" />
                </span>
              ))}
              <span>(10)</span>
            </div>

            <div className="prices">
              <span>KSh{product.base_price}</span>
              {"     "}
              <span className="old_price">KSh{product?.salePrice}</span>
            </div>
            <CatModal product={product} buttonClassName="add-to-cart-button" />
          </div>
        ))}
      </div>
    </ProductsContainer>
  );
};
