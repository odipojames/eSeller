import styled from "styled-components";

const ModalContainer = styled.div`
  display: flex;
  .main_image {
    img {
      width: 398px;
      height: 351px;
    }
  }
  .smaller_image {
    width: 91px;
    height: 80px;
    top: 387px;
    left: 20px;
    margin: 0px 10px 20px 0px;
    cursor: pointer;

    img {
      width: 91px;
      height: 80px;
      border: 0.1px solid;
    }
  }

  .discount_button {
    background-color: ${(props) => props.theme.greenButtonColor};
    position: absolute;
    left: 4.66%;
    right: 88.01%;
    top: 7.97%;
    bottom: 88.73%;
    height: 19px;
    text-align: center;
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: ${(props) => props.theme.textColor};
  }
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: normal;
  margin: 0px 0px 10px 40px;
  font-style: normal;

  font-family: Roboto, sans-serif;

  .title {
    color: ${(props) => props.theme.reviewerTextColor};
    margin-right: 10px;
    font-weight: 400;
  }

  .review__container {
    display: flex;
    align-items: center;
    .title {
      margin-bottom: unset;
    }
  }

  div {
    margin-bottom: 20px;
  }
  .description {
    color: ${(props) => props.theme.productNameColor};
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.15px;
    margin-right: 5px;
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
    margin-right: 20px;
  }
  .salePrice {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    text-decoration-line: line-through;
    color: ${(props) => props.theme.reviewerTextColor};
  }
  .wishlist {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.whishlistColor};
  }
  .add-to-cat__button {
    width: 280px;
    height: 48px;
    border-radius: 6px;
    color: ${(props) => props.theme.textColor};
    background: ${(props) => props.theme.spectsBlueColor};
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

  .quantity-input {
    margin-right: 5px;
    height: 48px;
    .ant-input-number-input {
      border-radius: 6px;
      height: 48px;
    }
  }
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
  .description {
    cursor: pointer;
  }
`;

export {
  ModalContainer,
  ProductDescription,
  ImageContainer,
  SmallerImagesContainer,
  DetailLink,
  ModalButton,
};
