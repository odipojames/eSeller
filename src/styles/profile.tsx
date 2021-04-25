import styled from "styled-components";

export const Container = styled.div`
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
  .tittle {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => props.theme.stainText};
    margin-bottom: 28px;
  }
  .general {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.blackishColor};
    margin-bottom: 16px;
  }

  .container {
    display: flex;
    flex-direction: row;
  }
  .profile-information {
    width: 792px;
    height: 481px;
    left: 120px;
    top: 268px;
    background: ${(props) => props.theme.textColor};
    margin-right: 24px;
    padding: 10px;
    padding: 40px;
  }
  .general-info {
    width: 732px;
    height: 87px;
    left: 30px;
    top: 119px;
    border: 0.5px solid ${(props) => props.theme.hrColor};
    padding: 20px;
    margin-bottom: 25px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.blackishColor};
    
  }
  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 10px;
    Button {
      height: 16px;
      width: 81px;
      border: none;
      box-shadow: none;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: 0.25px;
      background: ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.blueText};
    }
  }
  .dummy {
    color: ${(props) => props.theme.textColor};
  }
  .security-info {
    width: 732px;
    left: 30px;
    top: 269px;
    border: 0.5px solid ${(props) => props.theme.hrColor};
    padding: 20px;
    margin-bottom: 25px;

    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: 0.5px;
    color: ${(props) => props.theme.blackishColor};
  }

  .Form2 {
    Input,
    Input:focus {
      border: none;
      box-shadow: none;
      width: 120px;
      margin-left: 20px;
    }
  }

    .Form1 {
      Input,
      Input::placeholder {
        border: none;
        box-shadow: none;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.theme.blackishColor};
      }
      Input:focus {
        background-color: ${(props) => props.theme.paleColor};
      }
    }

    Button {
      height: 16px;
      width: 71px;
      border: none;
      box-shadow: none;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 16px;
      text-align: right;
      letter-spacing: 0.25px;
      background: ${(props) => props.theme.textColor};
      color: ${(props) => props.theme.blueText};
      margin-right:15px;
    }
  }
  .warning {
    height: 12px;
    left: 3.79%;
    right: 78.16%;
    top: calc(50% - 12px / 2 + 138.5px);

    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    letter-spacing: 0.3125px;
    color: ${(props) => props.theme.stainColor};
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
