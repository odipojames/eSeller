import styled from "styled-components";

const SignUpSpan = styled.span`
  color: ${(props) => props.theme.blueText} !important;
  cursor: pointer;
  text-align: center;
  font-size: 17px;
`;
const Container = styled.div`
  width: 431px;
  left: 505px;
  top: 200px;
  text-align: center;

  .sign_in_section {
    color: ${(props) => props.theme.horizontalLineGrey};
    hr {
      background: ${(props) => props.theme.typeFaceLightGrey};
      width: 100%;
    }
    span {
      position: relative;
      top: 0px;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-align: center;
      color: ${(props) => props.theme.blackText};
    }
    .sign_in_span {
      text-decoration: underline;
      color: #1890ff;
    }
  }
  .form_section {
    Form {
      Input,
      .ppassword,
      Input:focus {
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.horizontalLineGrey};
        box-shadow: none;
        width: 300px;
        content: unset;
        text-align: center;
        background: ${(props) => props.theme.textColor};
      }
      Input::placeholder {
        text-align: center;
      }
      label {
        width: 100px;
      }
    }
    margin-top: 0px;
  }
  div {
    .add-address-btn {
      width: 200px;
      height: 40px;
      background: ${(props) => props.theme.blueText};
      margin-top: 0px;
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 26px;
    }
  }
  .have_account {
    height: 33px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
    margin-bottom: 10px;
    span:nth-child(3) {
      text-decoration-line: underline;
      color: ${(props) => props.theme.blueText};
      cursor: pointer;
    }
    hr {
      border-width: 1px solid ${(props) => props.theme.horizontalLineGrey};
      width: 425px;
      height: 1px;
      margin-top: 0px;
      margin-bottom: 5px;
    }
  }
`;

export { SignUpSpan, Container };
