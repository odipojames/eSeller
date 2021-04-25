import styled from "styled-components";

export const PaymentContainer = styled.div`
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
  .payments {
    width: 792px;
    left: 120px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    margin-right: 24px;
    padding: 10px;
    padding: 40px;
  }
  .tittle {
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
  .order-number {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.whishlistColor};
  }
  .transactions-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 28px 104px 24px 0px;
  }
  .date,
  .method {
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.3125px;
    color: ${(props) => props.theme.stainColor};
    .name {
      color: ${(props) => props.theme.blackText};

      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 12px;
    }
  }
  .details {
    display: flex;
    flex-direction: row;
    .method {
      display: block;
      margin-left: 10px;
    }
  }
  .ammount {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    color: ${(props) => props.theme.blackText};
  }

  .th {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.blackishColor};
  }
  .payments-record {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-right: 104px;
    margin-left: 10px;
  }
  .transactions {
    display: flex;
    flex-direction: column;
  }

  hr {
    left: 0%;
    right: 0.07%;
    top: 0%;
    bottom: 98.11%;
    opacity: 0.25;
    border: 1px solid ${(props) => props.theme.hrColor};
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
