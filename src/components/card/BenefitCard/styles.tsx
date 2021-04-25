import styled from "styled-components";

const BuyerBenefits = styled.div`
  display: flex;
  justify-content: space-around;
  height: 110px;
  margin-top: 40px;
  background: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderGrey};
  border-radius: 4px;

  .benefit__container {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 26px;
      margin-right: 20px;
    }

    .description {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      span:first-of-type {
        font-size: 20px;
        color: ${(props) => props.theme.typeFaceGrey};
      }
      span:last-of-type {
        color: ${(props) => props.theme.typeFaceLightGrey};
        font-size: 16px;
      }
    }
  }
`;

export { BuyerBenefits };
