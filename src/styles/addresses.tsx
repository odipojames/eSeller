import styled from "styled-components";

export const AddressContainer = styled.div`
  width: 1200px;

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
  .address_items {
    background: ${(props) => props.theme.textColor};
    margin-right: 24px;
    padding: 20px;
    min-width: 68%;
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
    opacity: 0.2;
    margin: 20px 0;
  }

  .addresses_container {
    display: flex;
    flex-direction: row;
    width: 770px;
    height: 136px;
    border: 1px solid ${(props) => props.theme.hrColor};
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-left: 10px;
  }

  .user_address {
    width: 364px;
    height: 66px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    color: ${(props) => props.theme.blackText};
  }
  .default {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
    letter-spacing: 0.25px;
    text-transform: uppercase;
    color: ${(props) => props.theme.hrColor};
    margin-left: 300px;
  }
  .edit {
    margin-left: 300px;
  }

  .new_address {
    margin-top: 50px;
  }

  .user_details {
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.285714px;
    color: ${(props) => props.theme.blackText};
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
