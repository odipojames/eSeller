import styled from "styled-components";

const BgColor = styled.div`
  background: ${(props) => props.theme.productDetailBgColor};
  .header__div {
    width: 384px;
    height: 16px;
    left: 120px;
    top: 210px;
    .cat_text {
      height: 14px;
      left: 0%;
      right: 83.85%;
      top: calc(50% - 14px / 2);

      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.214286px;
      color: ${(props) => props.theme.grayText};
    }
    .product_name {
      height: 14px;
      left: 52.6%;
      right: 0%;
      top: calc(50% - 14px / 2);

      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.214286px;
      color: ${(props) => props.theme.boldText};
    }
  }
`;
const Container = styled.div`
  width: 1200px;
  height: 750px;
  left: 120px;
  top: 256px;
  background: ${(props) => props.theme.textColor};
  .Warrant-line {
    left: 3.75%;
    right: 3.75%;
    top: 82.67%;
    bottom: 17.2%;

    background: ${(props) => props.theme.footerBackground};
    mix-blend-mode: normal;
    opacity: 0.5;
    margin-left: 20px;
    margin-right: 20px;
  }
  .Warrant {
    position: absolute;
    width: 817px;
    height: 39px;
    margin-left: 45px;
    div {
      margin: 15px;
      display: flex;
      flex-direction: row;
    }
    span {
      width: 198px;
    }
    .icon {
      width: 40px;
      height: 36px;
      margin-right: 15px;
    }
    .div-col {
      display: flex;
      flex-direction: column;
    }

    .warranty_bold {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 19px;
      letter-spacing: 0.12px;
      color: ${(props) => props.theme.typeFaceGrey};
    }
    .warranty_fade {
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      letter-spacing: 0.4375px;
      color: ${(props) => props.theme.typeFaceLightGrey};
    }
  }
`;
const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;

  background: ${(props) => props.theme.textColor};

  .main_image {
    width: 398px;
    height: 351px;
    top: 26px;
    left: 20px;
    img {
      width: 398px;
      height: 351px;
      border: 0.1px solid ${(props) => props.theme.productDetailBgColor};
      margin-top: 20px;
    }
  }
  .smaller_image {
    width: 91px;
    height: 80px;
    top: 387px;
    left: 20px;
    margin: 30px 10px 20px 0px;

    img {
      width: 91px;
      height: 80px;
      border: 0.1px solid ${(props) => props.theme.productDetailBgColor};
    }
  }
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin: 20px 0px 0px 100px;
  font-style: normal;

  font-family: roboto, sans-serif;

  div {
    margin-bottom: 10px;
  }
  .description {
    color: ${(props) => props.theme.productNameColor};
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15px;
    margin-right: 5px;
    cursor: pointer;
  }
  .description_div {
    width: 441px;
    height: 46px;
    margin-bottom: 40px;
  }
  .Star {
    color: ${(props) => props.theme.starIconColor};
    left: 0%;
    right: 91.74%;
    top: 0%;
    bottom: 0%;
  }
  .vertical_line {
    border-left: 1.5px solid;
    height: 20px;
    margin: 5px;
  }
  .Reviewers,
  .ReviewerLink {
    color: ${(props) => props.theme.reviewerTextColor};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
  }
  .ReviewerLink {
    text-decoration: underline;
  }
  .Soldby {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.footerBackground};
    text-decoration: underline;
  }
  .colors-button {
    Button {
      color: ${(props) => props.theme.blackText};
      margin: 5px;
    }
  }

  .price {
    font-weight: bold;
    font-size: 20px;
    color: ${(props) => props.theme.blackText};
    margin-right: 5px;
  }
  .salePrice {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    text-decoration-line: line-through;
    color: ${(props) => props.theme.reviewerTextColor};
  }
  .discount_button {
    background-color: ${(props) => props.theme.greenButtonColor};
    height: 19px;
    text-align: center;
    font-family: roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.textColor};
  }
  .Delivery {
    width: 440px;
    height: 142px;
    background: ${(props) => props.theme.productDetailBgColor};
    div {
      margin: 10px;
    }

    .Deliver_to {
      margin: 15px 0px 0px 5px;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: ${(props) => props.theme.dackText};
    }
    .ChangeLocation {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 14px;
      color: ${(props) => props.theme.dackText};
      margin: 10px 10px 0px 0px;
      text-decoration: underline;
      float: right;
    }
    .del_line {
      left: 0%;
      right: 0%;
      top: 23.94%;
      bottom: 75.35%;
      background: ${(props) => props.theme.footerBackground};
      mix-blend-mode: normal;
      opacity: 0.2;
    }
    .delivery_text {
      font-style: normal;
      font-size: 14px;
      line-height: 18px;
      color: ${(props) => props.theme.dackText};
    }
    .Free {
      font-weight: bold;
    }

    .blueText {
      color: ${(props) => props.theme.blueshText};
      font-weight: bold;
    }
    .Badge {
      float: right;

      img {
        margin: 0px 5px 30px 0px;
      }
    }
  }
  .wishlist {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.whishlistColor};
  }
  .add-to-wishlist {
    cursor: pointer;
  }
  .addToCatButton {
    width: 270px;
    height: 40px;
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.spectsBlueColor};
  }

  .qauntity-input {
    margin-right: 5px;
    height: 40px;
  }
  .express_button {
    width: 377px;
    height: 48px;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.expressButtonColor};
    border-color: ${(props) => props.theme.expressButtonColor};
  }
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallerImagesContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const DetailLink = styled.div`
  text-align: center;
  .ProductLink {
    width: 175px;
    height: 30px;
    text-align: center;
    font-size: 18px;
    text-decoration: underline;
  }
`;

const ModalButton = styled.div`
  .modal-button {
    cursor: pointer;
  }
`;

const Description = styled.div`
  width: 1200px;

  left: 120px;
  top: 1030px;
  background: ${(props) => props.theme.textColor};
  margin: 20px 0px 0px 0px;
  .spects {
    height: 14px;
    left: 12.04%;
    right: 82.99%;
    top: calc(50% - 14px / 2 - 11px);

    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 14px;
    color: ${(props) => props.theme.spectsBlueColor};
    margin-left: 20px;
    text-decoration: underline;
  }
`;

const Spects = styled.div`
  width: 1105px;
  height: 264px;
  left: 165px;
  top: 1094px;
  background: ${(props) => props.theme.textColor};
  div {
    margin: 20px;
  }
  .description_section {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  .quality {
    height: 14px;
    left: 28.33%;
    right: 68.51%;
    top: calc(50% - 14px / 2 - 43px);

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 14px;
    color: ${(props) => props.theme.productNameColor};
  }
  .description {
    height: 14px;
    left: 0%;
    right: 95.38%;
    top: calc(50% - 14px / 2 - 43px);

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 14px;
    color: ${(props) => props.theme.productNameColor};
  }
  hr {
    left: 0%;
    right: 0%;
    top: 94.44%;
    bottom: 0%;
    background: ${(props) => props.theme.deviderColor};
    opacity: 0.2;
  }
`;

const ReviewContainer = styled.div`
  width: 1200px;
  background: ${(props) => props.theme.textColor};
  margin: 20px 0px 0px 0px;
  .review_icon {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: inline-block;
    background: ${(props) => props.theme.iconTheme};
    margin-right: 20px;
  }

  .review_icon2 {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    display: inline-block;
    background: ${(props) => props.theme.icon2Theme};
    margin-right: 20px;
  }
  .reviewButton {
    float: right;
    margin: 20px;
    color: ${(props) => props.theme.blueText};
    border-color: ${(props) => props.theme.blueText};
    width: 110px;
    height: 33px;
  }

  .btn {
    background: ${(props) => props.theme.textColor};
    margin: 20px;
    border: None;
    width: 110px;
    height: 33px;
  }

  .Star {
    color: ${(props) => props.theme.starIconColor};

    .StarIcon {
      left: 10.17%;
      right: 88.71%;
      top: 74.73%;
      bottom: 12.33%;
    }
  }
`;

const ReviewersContainer = styled.div`
  width: 1103px;
  height: 619px;
  display: block;

  div {
    display: block;
    margin: 40px;
  }
`;

const RelatedProductsContainer = styled.div`
  width: 1200px;
  height: 450px;
  left: 120px;
  top: 2144px;
  margin: 19px 128px 42px 20px;
  .header__section {
    width: 1192px;
    height: 28px;
    left: 120px;
    top: 2144px;
    margin-bottom: 20px;

    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.theme.blackText};
    .Link {
      float: right;
      margin-right: 5px;
    }
  }
  .product_section {
    width: 282px;
    height: 380px;
    background: ${(props) => props.theme.textColor};
    margin: 5px;
  }
  .image__section {
    width: 282px;
    height: 210px;
    background: ${(props) => props.theme.textColor};
    text-align: center;
    cursor: pointer;
    img {
      width: 282px;
      height: 210px;
    }
  }
  .description_section {
    display: flex;
    flex-direction: column;
    margin: 5px;
  }
  .description {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
    height: 45px;
    margin-bottom: 20px;
    color: ${(props) => props.theme.typeFaceGrey};
  }
  .Star {
    color: ${(props) => props.theme.starIconColor};
  }
  .price {
    height: 16px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.blackText};
    margin-right: 10px;
  }
  .old_price {
    height: 16px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-decoration-line: line-through;
    color: ${(props) => props.theme.reviewerTextColor};
  }
  .addToCatButton {
    width: 252px;
    height: 33px;
    margin: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.blueButtonTextColor};
    border-color: ${(props) => props.theme.blueButtonTextColor};
  }
`;

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  align-items: center;
  background: ${(props) => props.theme.productDetailBgColor};
`;

export {
  BgColor,
  ProductContainer,
  ProductDescription,
  ImageContainer,
  SmallerImagesContainer,
  DetailLink,
  ModalButton,
  Container,
  Description,
  Spects,
  ReviewContainer,
  ReviewersContainer,
  RelatedProductsContainer,
  ProductGrid,
};
