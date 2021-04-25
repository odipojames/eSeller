import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  img {
    width: 200px;
    height: 200px;
    left: 586px;
    top: 422px;
    margin-top: 90px;
    margin-bottom: 38px;
  }
  .msg {
    height: 73px;
    font-weight: 500;
    font-size: 32px;
    line-height: 26px;
    color: ${(props) => props.theme.blackText};
  }
  .msg1 {
    height: 14px;
    font-weight: 400;
    font-size: 24px;
    line-height: 14px;
    color: ${(props) => props.theme.mailColor};
    margin-bottom: 200px;
  }
`;
