import styled from "styled-components";
import { device } from "../../../mediaScreens/mediaQueries";
import { size } from "../../../mediaScreens/devices";

export const FlashCardContainer = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;

  .product__container {
    width: 296px;
    @media only screen and ${device.mobileS} and (max-device-width: ${size.laptopL}) {
      width: 250px;
    }
    border: 1px solid ${(props) => props.theme.borderGrey};
    padding: 20px;

    .image__container {
      display: flex;
      justify-content: center;
      .offer {
        width: fit-content;
        height: fit-content;
        color: ${(props) => props.theme.textColor};
        background: ${(props) => props.theme.lightRedBackground};
        border-radius: 12px;
      }
      img {
        width: 200px;
        height: 197px;
        cursor: pointer;
      }
    }
    .product__description {
      flex-direction: column;
      display: flex;
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

      .price__container {
        display: flex;
        @media only screen and ${device.mobileS} and (max-device-width: ${size.laptopL}) {
          flex-direction: column;
        }
        .price {
          font-size: 14px;
          font-weight: 400;
          margin-right: 10px;
          color: ${(props) => props.theme.blackText};
        }
        .sale__price {
          font-size: 14px;
          color: ${(props) => props.theme.reviewerTextColor};
        }
      }
    }
  }
`;
