import styled from "styled-components";

export const OffersContainer = styled.div`
  width: 1200px;
  left: 120px;
  top: 220px;
  .header {
    height: 28px;
    left: 120px;
    top: 220px;
    margin: 40px 0px 10px 0px;
  }
  .heade {
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
  .container {
    display: flex;
    flex-direction: row;
  }
  .offer_items {
    width: 780px;
    height: 481px;
    left: 120px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    margin-right: 24px;
    padding: 10px;
  }
  .addresses {
    height: 16px;
    left: 3.79%;
    right: 63.89%;
    top: calc(50% - 16px / 2 - 110.5px);

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.whishlistColor};
  }

  hr {
    left: 3.73%;
    right: 3.79%;
    top: 24.17%;
    bottom: 75.83%;
    mix-blend-mode: normal;
    opacity: 0.25;
    border: 1px solid ${(props) => props.theme.hrColor};
  }

  .offer_container {
    display: flex;
    flex-direction: row;
    width: 732px;
    height: 61px;
    border: 1px solid ${(props) => props.theme.hrColor};
    padding: 20px;
  }
  .details {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-left: 10px;
  }

  .balance {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.blackishColor};
    margin-right: 40px;
  }
  .amount {
    height: 21px;
    left: 26.64%;
    right: 63.93%;
    top: calc(50% - 21px / 2);

    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: ${(props) => props.theme.blackishColor};
  }
  .button {
    margin-left: 400px;
  }

  .offer {
    width: 187px;
    height: 16px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.4375px;
    color: ${(props) => props.theme.blackishColor};
  }
  .offer-container {
    margin-top: 10px;
  }
  .offer-details {
    display: flex;
    flex-direction: row;
    padding: 20px;
  }
  .offer-info {
    display: flex;
    flex-direction: column;
  }
  .status {
    margin-left: 20px;
  }

  .date {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.3125px;
    color: ${(props) => props.theme.hrColor};
  }

  .offer_transactions {
    height: 14px;
    left: 3.79%;
    right: 79.67%;
    top: calc(50% - 14px / 2 - 53.5px);

    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.blackishColor};
  }
  .offer_section {
    width: 384px;
    height: 320px;
    left: 936px;
    top: 268px;
    img {
      width: 384px;
      height: 320px;
    }
  }
`;
