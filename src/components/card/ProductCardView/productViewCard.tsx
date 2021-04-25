import React from "react";
import { ProductContainer } from "./productview";
import { CloseOutlined } from "@ant-design/icons/lib";
import { Button, InputNumber } from "antd";

const ProductView: React.FC = () => {
  return (
    <ProductContainer>
      <CloseOutlined />
      <div className="image__section">images</div>

      <div className="brand__section">
        <div className="brand"> brand </div>
        <div className="stars">stars</div>
        <div className="sales"> sales</div>
        <div className="color"> color </div>
        <div className="price"> price </div>
        <div className="cart__section">
          <InputNumber size="large" min={1} max={100000} defaultValue={1} />
          <Button type="primary"> Add to cart </Button>
        </div>
        <Button type="danger"> Express Checkout </Button>
      </div>
    </ProductContainer>
  );
};

export default ProductView;
