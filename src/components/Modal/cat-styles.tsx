import styled from "styled-components";



const ModalItemContainer = styled.div`
  background: ${(props) => props.theme.textColor};
  left: 20px;
  top: 19px;


  .Icon {
    font-size: 25px;
    color: ${(props) => props.theme.greenIcon};
  }
  .Alert {
    width: 677px;
    height: 38px;
    left: 10.71%;
    right: 10.48%;
    top: 5.19%;
    bottom: 88.24%;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.12px;
    color: ${(props) => props.theme.blackText};
    margin-left: 20px;
  }
  .viewCat {
    width: 188px;
    height: 48px;
    margin-right: 20px;
  }

  .Con_shopping {
    width: 188px;
    height: 48px;
    color: ${(props) => props.theme.spectsBlueColor};
    border-color: ${(props) => props.theme.spectsBlueColor};

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
  }
  .relatedProducts {
    width: 310px;
    height: 19px;
    left: 3.49%;
    right: 60.42%;
    top: calc(50% - 19px / 2 - 59.5px);

    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.productNameColor};
    margin-bottom: 15px;
  }
`;
const ColumnDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin: 19px 0px 19px 0px;
`;
const RelatedProducts = styled.div`
  width: 798px;
  left: 36px;
  top: 254px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  align-items: center;
  .product_div {
    width: 252px;
    height: 284px;
    border: 1px solid ${(props) => props.theme.productDetailBgColor};
    display: block;
  }
  .image__section {
    width: 250px;
    height: 187px;
    text-align: center;
    cursor: pointer;
    img {
      width: 200px;
      height: 180px;
    }
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
    color: ${(props) => props.theme.blackText};
  }
  .price {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    color: ${(props) => props.theme.blackText};
  }

  .salePrice {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    text-decoration-line: line-through;
    color: ${(props) => props.theme.reviewerTextColor};
    margin-left: 15px;
  }
`;

const AddToCartButton = styled.div`
  .add-to-cart-button {
    width: 100%;
    height: 35px;
    border-radius: 6px;
    border: 1px solid ${(props) => props.theme.spectsBlueColor}!important;
    color: ${(props) => props.theme.spectsBlueColor};
    font-weight: 500;
  }

`


export { ModalItemContainer, ColumnDiv, RowDiv, RelatedProducts, AddToCartButton };
