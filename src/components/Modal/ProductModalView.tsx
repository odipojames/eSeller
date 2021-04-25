import React, { useState } from "react";
import { Modal, Button, InputNumber } from "antd";
import { StarOutlined } from "@ant-design/icons";
import {
  ModalContainer,
  ImageContainer,
  SmallerImagesContainer,
  ProductDescription,
  DetailLink,
} from "./styles";
import Link from "next/link";
import { CatModal } from "./CatModal";
import {addToWishList} from "pages/wishlist";

const ProductModal = ({ product }: any) => {
  const [visible, setVisible] = useState(false);
  const [imagePath, setImage] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <img
        src={"/hotpoint_featured.png"}
        alt=""
        onClick={showModal}
        style={{ cursor: "ponter" }}
      />
      <Modal
        visible={visible}
        onCancel={handleCancel}
        footer={null}
        width={898}
      >
        <ModalContainer>
          <ImageContainer>
            <div className="main_image">
              {product.offer ? (
                <Button className="discount_button">{product.offer}</Button>
              ) : (
                ""
              )}
              {imagePath ? (
                <img src={imagePath} alt="image" />
              ) : (
                <img src={product.imagePath} alt="image" />
              )}
            </div>
            <SmallerImagesContainer>
              <div className="smaller_image">
                <img
                  src={product.imagePath}
                  alt="image"
                  onClick={(e: any) => {
                    setImage(e.target.getAttribute("src"));
                  }}
                />
              </div>
              <div className="smaller_image">
                <img
                  src="/mask.png"
                  alt="image"
                  onClick={(e: any) => {
                    setImage(e.target.getAttribute("src"));
                  }}
                />
              </div>
              <div className="smaller_image">
                <img
                  src={product.imagePath}
                  alt="image"
                  onClick={(e: any) => {
                    setImage(e.target.getAttribute("src"));
                  }}
                />
              </div>
            </SmallerImagesContainer>
          </ImageContainer>
          <ProductDescription>
            <div>
              <div>
                <span className="title">Brand</span>
              </div>
              <div>
                <span className="description">{product?.description}</span>
              </div>

              <div className="review__container">
                <div className="title">
                  {[1, 2, 3, 4, 5].map((i: any, index: number) => (
                    <span key={index.toString()}>
                      <StarOutlined className="Star" />
                    </span>
                  ))}
                </div>
                <span className="Reviewers ">3</span>
                <span className="vertical_line" />
                <span>
                  <Link href="">
                    <a className="ReviewerLink">Write a review</a>
                  </Link>
                </span>
              </div>

              <div>
                <span className="title">Sold by</span>
                <span>
                  <Link href="">
                    <a className="Soldby">Bourbon Express</a>
                  </Link>
                </span>
                {"  "}
                <span className="title">and</span>
                <span>
                  <Link href="">
                    <a className="Soldby">Fulfiled by OE</a>
                  </Link>
                </span>
              </div>
              <div className="colors-button">
                <span className="title">Color</span>
                <Button type="default">Black</Button>
                <Button type="default">Wood</Button>
                <Button type="default">Silver</Button>
              </div>
              <div>
                <span className="price">{product?.price}</span>
                <span className="salePrice">Ksh{product?.salePrice}</span>
              </div>

              <div>
                <span>
                    <a className="wishlist title" onClick={()=>{addToWishList(product)}}>Add to wishlist</a>
                </span>
                <img src="/icon-wishlist.png" alt="image" onClick={()=>{addToWishList(product)}} style={{cursor: "pointer"}}/>
              </div>

              <div>
                <SmallerImagesContainer>
                  <div>
                    <InputNumber
                      min={1}
                      defaultValue={1}
                      className="quantity-input"
                    />
                  </div>
                  <div onClick={handleCancel}>
                    <CatModal product={product} buttonClassName="add-to-cat__button"/>
                  </div>
                </SmallerImagesContainer>
              </div>
            </div>
          </ProductDescription>
        </ModalContainer>
        <DetailLink>
          <Link href={`/product-details?id=${product.id}`}>
            <a className="ProductLink" onClick={handleCancel}>
              View full product details
            </a>
          </Link>
        </DetailLink>
      </Modal>
    </>
  );
};

export default ProductModal;
