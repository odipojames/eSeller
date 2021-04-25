import styled from "styled-components";

export const OrderContainer = styled.div`
  width: 1200px;
  left: 120px;
  top: 220px;

  .brand {
    color: ${(props) => props.theme.typeFaceLightGrey};
  }
  .header {
    width: 112px;
    height: 28px;
    left: 120px;
    top: 220px;
    margin-top: 40px;
  }
  .order {
    height: 28px;
    left: 0%;
    right: 0%;
    top: calc(50% - 28px / 2);

    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 28px;
    color: ${(props) => props.theme.blackText};
  }
  .orders_continer {
    width: 1080px;
    left: 120px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    margin-top: 20px;
    padding: 20px;
  }
  .order_number {
    height: 16px;
    left: 2.5%;
    right: 79.58%;
    top: calc(50% - 16px / 2 - 144.5px);

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.blackText};
  }
  .products_header {
    height: 48px;
    background: ${(props) => props.theme.blueBackground};
    padding: 10px;
    color: ${(props) => props.theme.textColor};
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    span {
      display: block;
      margin-right: 50px;
    }
  }
  .product_action {
    display: block;
    margin: 0px 50px 0px 350px;
  }

  .product_details {
    display: flex;
    flex-direction: row;

    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: ${(props) => props.theme.blackText};
    padding: 10px;
    .Description {
      width: 341px;
      height: 44px;
    }
    .details {
      display: flex;
      flex-direction: column;
    }
    .confrimation {
      display: flex;
      flex-direction: column;
      margin: 15px;
    }
    .total {
      margin: 15px 0px 0px 60px;
      display:block;
      width:90px;
      
    }
    .status {
      margin: 15px;
    }
    Button {
      width: 101px;
      height: 32px;
      margin: 15px 0px 0px 50px;
      border-color: ${(props) => props.theme.blueBackground};
      color: ${(props) => props.theme.blueBackground};
    }
  }
  .image__section {
    width: 91px;
    height: 80px;
    margin-right: 8px;
    text-align: center;
    img {
      width: 80px;
      height: 70px;
      border: 1px solid #979797;
    }
  }

  hr {
    left: 2.46%;
    right: 2.44%;
    top: 68.34%;
    bottom: 31.4%;

    mix-blend-mode: normal;
    opacity: 0.25;
    border: 1px solid #979797;
  }

  .shopping_button {
    width: 188px;
    height: 48px;
    margin-top: 5px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.25px;
    border-color: ${(props) => props.theme.blueBackground};
    color: ${(props) => props.theme.blueBackground};
  }
`;
