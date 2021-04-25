import styled from "styled-components";

const SignInSpan = styled.span`
  text-align: cenetr;
  Button {
    background: ${(props) => props.theme.logoBackground};
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 92px;
    outline: none;
    height: 32px;
    color: white;
    text-align: center;
    margin-left: 12px;
  }
`;
const SignInContainer = styled.div`
  width: 431px;
  height: 514px;
  left: 479px;
  top: 199px;
  text-align: center;
  .recover_password {
    margin-top: 10px;

    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: ${(props) => props.theme.blackText};
    .reset_password {
      text-decoration: underline;
    }
  }
  .sign_in_section {
    margin-top: 30px;
    hr {
      border-width: 1px solid ${(props) => props.theme.horizontalLineGrey};
      width: 420px;
      height: 1px;
      margin-top: 60px;
      margin-bottom: 5px;
    }
    span {
      position: relative;
      top: 20px;

      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 24px;
      text-align: center;
      color: ${(props) => props.theme.blackText};
    }
    .sign_in_span {
      text-decoration: underline;
      color: ${(props) => props.theme.buttonBackground};
      cursor: pointer;
    }
  }
  .form_section {
    form {
      Input,
      Input:focus {
        text-align: center;
        margin-bottom: 3px;
        background-color: ${(props) => props.theme.TextColor};
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.horizontalLineGrey};
        box-shadow: none;
        width: 361px;
      }
      Input::placeholder {
        text-align: center;
      }
    }
    margin-top: 50px;
  }
  div {
    .signin_btn {
      width: 150px;
      height: 40px;
      background: #0065b0;
      margin-top: 15px;
      font-style: normal;
      font-weight: bold;
      font-size: 19px;
      line-height: 26px;
    }
  }
`;

export { SignInSpan, SignInContainer };
