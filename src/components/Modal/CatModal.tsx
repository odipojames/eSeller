import React, { useState, useEffect } from "react";
import { Modal, Button } from "antd";
import { CheckCircleOutlined, PlusOutlined } from "@ant-design/icons";
import {
  ModalItemContainer,
  ColumnDiv,
  RowDiv,
  RelatedProducts,
  AddToCartButton
} from "./cat-styles";
import { relatedProducts } from "./fixture";
import ProductModal from "./ProductModalView";
import Link from "next/link";
import { updateCart } from "store/actions/cartChangeAction";
import {useDispatch} from "react-redux";




export const CatModal = ({ product, buttonClassName }: any) => {
  const [visible, setVisible] = useState(false);
  const [items, setItems] = useState([] as Array<any>);
  const dispatch = useDispatch();

  const addToCart = (data: any) => {
    const id = data.id;
    //add only non existing items
    const existentItem = items.find((item: any) => item.id === id);
    if (!existentItem) {
      setItems([...items, data]);
    }
    //check if product already in cart and update its quantity
    if (existentItem) {
      setItems(
        items.map((item: any) => {
          if (item.id !== id) return item;
          return { ...item, quantity: item.quantity + 1 };
        })
      );
    }
    dispatch(updateCart(id));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    if (items) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));

  }, [items]);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <>
      <AddToCartButton>
        <Button
          type="default"
          onClick={() => {
            addToCart(product);
            showModal();
          }}
          className={buttonClassName}
        >
          <PlusOutlined />
          add to cart
        </Button>
        </AddToCartButton>
      <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={859}
      >
        <ModalItemContainer>
          <div className="alert-div">
            <RowDiv>
              <span className="Icon">
                <CheckCircleOutlined />
              </span>
              {items ? (
                <span className="Alert">
                  A new item has been added to your Shopping Cart. You now have{" "}
                  {items.length}&nbsp; items in your Shopping Cart.
                </span>
              ) : (
                ""
              )}
            </RowDiv>
          </div>
          <div>
            <RowDiv>
              <Link href="/cart">
                <Button type="primary" className="viewCat">
                  View Shopping cart
                </Button>
              </Link>
              <Link href="/">
                <Button
                  type="default"
                  className="Con_shopping"
                  onClick={handleCancel}
                >
                  Continue Shopping
                </Button>
              </Link>
            </RowDiv>
          </div>
          <div>
            <span className="relatedProducts">
              People who bought this item also bought:
            </span>
          </div>
          <RelatedProducts>
            {relatedProducts.map((product: any, index: number) => (
              <div className="product_div" key={index.toString()}>
                <div className="image__section">
                  <span onClick={handleCancel}>
                    <ProductModal product={product} />
                  </span>
                </div>
                <ColumnDiv>
                  <span className="description">{product?.description}</span>
                  <span>
                    <span className="price">{product?.price}</span>
                    <span className="salePrice">{product?.salePrice}</span>
                  </span>
                </ColumnDiv>
              </div>
            ))}
          </RelatedProducts>
        </ModalItemContainer>
      </Modal>
    </>
  );
};
