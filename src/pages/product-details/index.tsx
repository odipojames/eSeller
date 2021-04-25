import React, { FunctionComponent } from "react";
import { NextPage } from "next";
import {
  BgColor,
  ProductContainer,
  ImageContainer,
  SmallerImagesContainer,
  ProductDescription,
  Container,
  Description,
  Spects,
  ReviewContainer,
  ReviewersContainer,
  RelatedProductsContainer,
  ProductGrid,
} from "styles/product-detail";
import { Button, InputNumber } from "antd";
import Link from "next/link";
import { relatedProducts, allProducts } from "./fixture";
import { useRouter } from "next/router";
import ProductModal from "components/Modal/ProductModalView";
import { CatModal } from "components/Modal/CatModal";
import { StarOutlined, RightOutlined } from "@ant-design/icons";
import GlobalContainer from "../../styles/globalContainer";


const ProductDetail: NextPage<FunctionComponent> = () => {
  const router = useRouter();
  const id: any = router.query.id;
  const int_id: number = parseInt(id, 10);
  const product: any = allProducts.find(function (e) {
    return e.id === int_id;
  });
  return (
    <GlobalContainer>
    <BgColor>
      <div className="header__div">
        <span className="cat_text">
          {" "}
          Category <RightOutlined /> sub-category <RightOutlined />{" "}
        </span>
        <span className="product_name">Product</span>
      </div>
      <Container>
        <ProductContainer>
          <ImageContainer>
            <div className="main_image">
              <img src={product?.imagePath} alt="image" />
            </div>
            <SmallerImagesContainer>
              <div className="smaller_image">
                <img src={product?.imagePath} alt="image" />
              </div>
              <div className="smaller_image">
                <img src={product?.imagePath} alt="image" />
              </div>
              <div className="smaller_image">
                <img src={product?.imagePath} alt="image" />
              </div>
            </SmallerImagesContainer>
          </ImageContainer>
          <ProductDescription>
            <div>
              <div>
                <span>Brand</span>
              </div>
              <div className="description_div">
                <span className="description">{product?.description}</span>
              </div>

              <div>
                {[1, 2, 3, 4, 5].map((i: any, index: number) => (
                  <>
                    <span key={index.toString()}>
                      <StarOutlined className="Star" />
                    </span>
                  </>
                ))}
                <span className="Reviewers">3</span>
                <span className="vertical_line" />
                <span>
                  <Link href="">
                    <a className="ReviewerLink">Write a review</a>
                  </Link>
                </span>
              </div>

              <div>
                <span>Sold by</span>{" "}
                <span>
                  <Link href="">
                    <a className="Soldby">Bourbon Express</a>
                  </Link>
                </span>{" "}
                <span>and</span>{" "}
                <span>
                  <Link href="">
                    <a className="Soldby">Fulfiled by OE</a>
                  </Link>
                </span>
              </div>
              <div className="colors-button">
                <span>Color</span>
                <Button type="default">Black</Button>
                <Button type="default">Wood</Button>
                <Button type="default">Silver</Button>
              </div>
              <div>
                <span className="price">KSH. {product?.price}</span>
                <span className="salePrice">KSH {product?.salePrice}</span>
              </div>
              <div>
                {product?.offer ? (
                  <Button className="discount_button">{product.offer}</Button>
                ) : (
                  ""
                )}
              </div>
              <div className="Delivery">
                <div>
                  <span className="Deliver_to">Deliver to Nairobi</span>{" "}
                  <span>
                    <Link href="">
                      <a className="ChangeLocation">Change location</a>
                    </Link>
                  </span>
                </div>
                <div>
                  <hr className="del_line" />
                </div>
                <div>
                  <span className="delivery_text">
                    <span className="Free">FREE</span> delivery by{" "}
                    <span className="blueText">SAT,Sep 21 </span>
                    <br /> when you order in 8 hrs 27 mins
                  </span>{" "}
                  <span className="Badge">
                    <img src="/oe-express-badge.png" />
                    <img src="/question-icon.png" />
                  </span>
                </div>

                <div>
                  <span className="delivery_text">
                    <span className="blueText">Get it Today</span> if you order
                    within 20 mins and <br />
                    choose OE Now shipping at checkout.
                  </span>{" "}
                  <span className="Badge">
                    <img src="/oe-express-badge1.png" />
                    <img src="/question-icon.png" />
                  </span>
                </div>
              </div>
              <div>
                <SmallerImagesContainer>
                  <div>
                    {" "}
                    <InputNumber
                      min={1}
                      defaultValue={1}
                      className="qauntity-input"
                      autoFocus
                    />
                  </div>
                  <div>
                    {" "}
                    <CatModal product={product} />
                  </div>
                  <div>
                    <img
                      src="/icon-wishlist.png"
                      alt="image"
                      className="add-to-wishlist"
                    />{" "}
                  </div>
                </SmallerImagesContainer>
              </div>
            </div>
          </ProductDescription>
        </ProductContainer>
        <div>
          <hr className="Warrant-line" />
        </div>
        <div className="Warrant">
          <SmallerImagesContainer>
            <div>
              <img src="/icon-shipping.svg" className="icon" />
              <span className="div-col">
                <span className="warranty_bold">Warranty Guaranteed</span>
                <span className="warranty_fade">
                  1 year warranty with this offer
                </span>
              </span>
            </div>
            <div>
              <img src="/icon-package.svg" className="icon" />
              <span className="div-col">
                <span className="warranty_bold">Hassle free returns</span>
                <span className="warranty_fade">If goods have problem</span>
              </span>
            </div>
            <div>
              <img src="/icon-safe.svg" className="icon" />
              <span className="div-col">
                <span className="warranty_bold">Secure Payment</span>
                <span className="warranty_fade">
                  your data is always protected
                </span>
              </span>
            </div>
          </SmallerImagesContainer>
        </div>
      </Container>

      <Description>
        <Spects>
          <div>
            <span className="description">Description</span>{" "}
            <span className="spects">Spects</span>
            <hr />
          </div>
          <div>
            <span className="description_section">
              <span className="description">Weight</span>{" "}
              <span className="quality">25kg</span>
            </span>
            <hr />
          </div>
          <div>
            <span className="description_section">
              {" "}
              <span className="description">Brand</span>{" "}
              <span className="quality">LG</span>
            </span>
            <hr />
          </div>
          <div>
            <span className="description_section">
              {" "}
              <span className="description">Model No.</span>
              <span className="quality">KL45KL</span>
            </span>
            <hr />
          </div>
          <div>
            <span className="description_section">
              {" "}
              <span className="description">Connectivity</span>
              <span className="quality">Bluetooth, USB</span>
            </span>
            <hr />
          </div>
        </Spects>
      </Description>
      <ReviewContainer>
        <ReviewersContainer>
          <div className="button-div">
            <Button type="default" className="btn" disabled />
            <Button type="default" className="reviewButton">
              Add review
            </Button>
          </div>
          <div>
            <span className="review_icon" />
            {[1, 2, 3, 4, 5].map((i: any, index: number) => (
              <>
                <span key={index.toString()} className="Star">
                  <StarOutlined className="StarIcon" />
                </span>
              </>
            ))}
          </div>
          <div>
            <span className="review_icon2" />
            {[1, 2, 3, 4, 5].map((i: any, index: number) => (
              <>
                <span key={index.toString()} className="Star">
                  <StarOutlined className="StarIcon" />
                </span>
              </>
            ))}
          </div>
          <div>
            <span className="review_icon" />
            {[1, 2, 3, 4, 5].map((i: any, index: number) => (
              <>
                <span key={index.toString()} className="Star">
                  <StarOutlined className="StarIcon" />
                </span>
              </>
            ))}
          </div>
          <div>
            <span className="review_icon2" />
            {[1, 2, 3, 4, 5].map((i: any, index: number) => (
              <>
                <span key={index.toString()} className="Star">
                  <StarOutlined className="StarIcon" />
                </span>
              </>
            ))}
          </div>
        </ReviewersContainer>
      </ReviewContainer>
      <RelatedProductsContainer>
        <div className="header__section">
          <span> Related Products </span>
          <span className="Link">
            <Link href="">{"  >"}</Link>
          </span>
        </div>
        <ProductGrid>
          {relatedProducts
            .sort(() => Math.random() - Math.random())
            .slice(0, 4)
            .map((product: any, index: number) => (
              <div className="product_section" key={index.toString()}>
                <div className="image__section">
                  <ProductModal product={product} />
                </div>
                <div className="description_section">
                  <span className="description">{product?.description}</span>
                  <span>
                    {[1, 2, 3, 4, 5].map((i: any, index: number) => (
                      <>
                        <span key={index.toString()} className="Star">
                          <StarOutlined className="StarIcon" />
                        </span>
                      </>
                    ))}{" "}
                    (3)
                  </span>
                  <span>
                    <span className="price">{product?.price}</span>
                    <span className="old_price">{product?.salePrice}</span>
                  </span>
                </div>
                <div>
                  <CatModal />
                </div>
              </div>
            ))}
        </ProductGrid>
      </RelatedProductsContainer>
    </BgColor>
  </GlobalContainer>
  );
};

export default ProductDetail;
