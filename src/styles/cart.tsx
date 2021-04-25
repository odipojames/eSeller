import styled from "styled-components";
import { device } from "../mediaScreens/mediaQueries";
const Container = styled.div`
  .cat_container {
    width: 1200px;
    left: 120px;
    top: 220px;
  }
  .header__section {
    padding: 10px;
  }
  @media only screen and ${device.mobileS} and (max-device-width: 768px) {
    width: 100%;
  }
  .header {
    height: 28px;
    left: 0%;
    right: -0.66%;
    top: calc(50% - 28px / 2);
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    color: ${(props) => props.theme.blackText};
  }
  .row_div {
    display: flex;
    flex-direction: row;
    div {
      margin-right: 20px;
    }
  }
  .col_div {
    display: flex;
    flex-direction: column;
  }
  .cat_items {
    width: 792px;
    left: 120px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    padding: 20px;

  }
  .total_row,
  .Subtotal_row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .pricing_section {
    width: 384px;
    height: 289px;
    left: 936px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    justify-content: center;
  }
  Input {
    width: 45px;
    height: 34px;
    border: 1px solid ${(props) => props.theme.hrColor};
  }
  .quantity {
    img {
      border-style: inset;
      border-width: 0.1px;
      width: 34px;
      height: 34px;
      cursor: pointer;
    }
    display: flex;
    flex-direction: row;
  }
  .total {
    height: 19px;
    left: 7.81%;
    right: 70.57%;
    top: calc(50% - 19px / 2 + 6px);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.blackText};
  }
  .items_number {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    margin: 20px 0 20px 0;
    display: inline-block;
    color: ${(props) => props.theme.blackText};
  }
  .price_content {
    position: relative;
    top: 20%;
    margin: auto 20px;
    hr {
      opacity: 0.25;
    }
    Button {
      position: relative;
      width: 260px;
      margin: auto 36px;
      background-color: #0065b0;
      height: 40px;
      border-radius: 4px;
    }
  }
  #quantity_section {
    span {
      display: block;
      margin: 0px 0px 50px 50px;
    }
  }
  .remove_link {
    margin-left: 50px;
  }
  .image__section {
    width: 91px;
    height: 80px;
    opacity: 0.25;
    border: 1px solid ${(props) => props.theme.hrColor};
    text-align: center;
    img {
      width: 70px;
      height: 70px;
    }
  }
  .price {
    height: 19px;
    left: 15.71%;
    right: 69.26%;
    top: calc(50% - 19px / 2 + 39px);
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.blackText};
  }
  .Description {
    display: -webkit-box;
    font-weight: 500;
    font-size: 16px;
    overflow: hidden;
    margin-bottom: 20px;
    color: ${(props) => props.theme.blackText};
    width: 341px;
    height: 50px;
  }
  .payment_section {
    width: 773px;
    height: 222px;
    background: ${(props) => props.theme.textColor};
    margin-top: 24px;
    padding: 10px;
  }
  .vertical_line {
    border-left: 1px solid ${(props) => props.theme.hrColor};
    left: 45%;
    height: 150px;
  }
  .payment_div {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    div {
      padding: 5px;
    }
  }
  .payment_methods {
    width: 40%;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: ${(props) => props.theme.blackText};
  }
  .buyer {
    text-align: center;
  }
  .buyer_protection {
    height: 21px;
    left: 65.34%;
    right: 17.49%;
    top: calc(50% - 21px / 2 - 60.5px);
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: ${(props) => props.theme.blackText};
    margin-left: 80px;
  }
  .refund_detail {
    margin-left: 80px;
  }
  .refund_details {
    height: 36px;
    left: 56.06%;
    right: 8.08%;
    top: calc(50% - 36px / 2 - 15px);
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: ${(props) => props.theme.blackText};
    margin-left: 45px;
  }
  .cards {
    width: 101px;
    height: 81px;
    left: 104px;
    top: 86px;
    img {
      width: 47px;
      height: 33px;
      border: 1px solid ${(props) => props.theme.hrColor};
      margin: 2px;
      cursor: pointer;
    }
  }
  .bit-map {
    img {
      width: 120px;
      height: 60px;
      left: 28.54%;
      right: 56.31%;
      top: 43.24%;
      bottom: 29.73%;
    }
  }
`;
export { Container };
