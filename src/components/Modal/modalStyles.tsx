import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #1c2c38;
  }
  .input__field {
    border: none;
    padding: 20px 0 8px 0;
    width: 361px;
    border-bottom: 1px solid rgba(28, 44, 56, 0.3);
    color: #000000;

    font-size: 14px;
    outline: none;
  }
  form {
    padding: 10px;
  }
  .btn {
    height: 50px;
    border: 1px solid #006dbf;
    border-radius: 4px;
    background-color: #006dbf;
    margin-top: 1rem;
    margin-bottom: 1rem;

    span {
      color: #ffffff;
      font-size: 20px;
      font-weight: bold;
    }
    &:focus {
      outline: 0;
    }
  }
  .action__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    span {
      font-size: 16px !important;
    }
  }

  .create {
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(28, 44, 56, 0.2);
    min-height: 10vh;
    width: 98%;
    span {
      font-size: 16px !important;
      line-height: 24px;
      color: #1c2c38;
    }
  }
  .bottom__section {
    display: flex;
    justify-content: center;
    min-height: 5vh;
    span {
      font-size: 16px;
    }
    span:last-of-type {
      cursor: pointer;
      padding-left: 6px;
      text-decoration: underline;
    }
  }
  .error {
    padding-top: 10px;
    align-self: self-end;
  }
  .password__container {
    position: relative;
    i {
      position: absolute;
      right: 2%;
      top: 54%;
    }
    i:hover {
      color: #006dbf;
      cursor: pointer;
    }
  }
`;

const ModelContent = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export { ModelContent, LoginContainer };
