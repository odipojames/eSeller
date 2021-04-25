import styled from "styled-components";
import { device } from "../mediaScreens/mediaQueries";
import { size } from "../mediaScreens/devices";

export const Container = styled.div`
width: 100%;
.confirmation_container {
  width: 1200px;
  left: 120px;
  top: 220px;
}
.header {
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${(props) => props.theme.blackText};
  margin: 20px 0;
  display: inline-block;
}
.row {
  display: flex;
  flex-direction: row;
}
.shipping_info {
  left: 120px;
  background: #ffffff;
  padding: 30px;
}
.shipping {
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;
  color: ${(props) => props.theme.blackText};
}
hr {
  margin: 20px auto;
  mix-blend-mode: normal;
  opacity: 0.25;
}
.address_container {
  width: 732px;
  height: 136px;
  border: 1px solid ${(props) => props.theme.blueBackground};
  padding: 20px;
  div{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }
}
.address-contact {
  height: 19px;
  width: 300px;
  left: 7.38%;
  right: 61.75%;
  top: calc(50% - 19px / 2 - 38.5px);
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.285714px;
  color: ${(props) => props.theme.blackText};
  margin:10px;
}

.address {
  width: 350px;
  height:66px;
  color: ${(props) => props.theme.blackText};
}
.new-address {
  display: block;
  margin-top: 50px;
}
.col {
  display: flex;
  flex-direction: column;
}
.cost-info {
  padding: 50px;
  width: 384px;
  display: block;
  height: 380px;
  overflow: hidden;
  overflow: scroll;
  background: ${(props) => props.theme.textColor};
  margin-left: 20px;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.blackText};
}
.coupon-code {
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  height: 40px;
  border: 1px solid ${(props) => props.theme.greyBorder};
  margin-bottom: 20px;

  .coupon__text {
    width: 70%;
  }
  .apply{
    cursor: pointer;
  }

}
.vertical_line {
  border-left: 1px solid ${(props) => props.theme.greyBorder};
  height: 100%;
  width: 10%;
}
.cost-row {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.25px;
  color: ${(props) => props.theme.blackText};
  justify-content: space-between;
}
.total {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.285714px;
  color: ${(props) => props.theme.blackText};
}
.payment-button {
  width: 100%;
  height: 48px;
  background: ${(props) => props.theme.blueText};
  color: ${(props) => props.theme.textColor};
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  border-radius: 6px;
}
.shipping-methods {
  width: 792px;
  height: fit-content;
  background: ${(props) => props.theme.textColor};
  margin-top: 24px;
  padding: 20px;
}
.shipment-method,
.shipment-method1 {
  width: 346px;
  height: 156px;
  border: 1px solid ${(props) => props.theme.greyBorder};
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.shipment-method1 {
  margin-left: 22px;
}
.std-delivery {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.285714px;
  color: ${(props) => props.theme.blackText};
}
.date {
  width: 232px;
  height: 44px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: ${(props) => props.theme.blackText};
  margin-left: 25px;
}
.payment-methods {
  width: 792px;
  height: 733px;
  margin-top: 24px;
  background: ${(props) => props.theme.textColor};
  padding: 20px;
}
.card-container {
  width: 714px;
  height: 367px;
  border: 1px solid ${(props) => props.theme.greyBorder};
  margin-top: 24px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  color: ${(props) => props.theme.grayColor};
  padding: 20px;
  .description {
    width: 480px;
    height: 52px;
    margin-left: 20px;
  }
  .card {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    color: #1b2125;
  }
  .card-images {
    margin-left: 50px;
    .card-image {
      width: 106px;
      height: 22px;
    }
  }
}
.mpesa-section {
  width: 714px;
  height: 91px;
  border: 1px solid ${(props) => props.theme.greyBorder};
  margin-top: 20px;
  padding: 20px;
  img {
    float: right;
  }
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    color: ${(props) => props.theme.dackColor};
  }
}
.cash-on-delivery {
  width: 714px;
  height: 91px;
  border: 1px solid ${(props) => props.theme.greyBorder};
  margin-top: 20px;
  padding: 20px;
  span {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 19px;
    color: ${(props) => props.theme.dackColor};
  }
}
@media only screen and ${device.mobileS} and (max-device-width: ${
  size.laptopL
}) {
  width: 250px;
}
  }
`;
