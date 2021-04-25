import styled from "styled-components";

export const NavContainer = styled.div`
  position: absolute;
  background: ${(props) => props.theme.textColor};
  padding: 20px;
  width: 100%;
  height: 40px;
  left: 0px;
  top: 120px;
  ul {
    list-style-type: none;
  }

  li {
    display: inline;
    margin: 20px 0px 0px 35px;
    a {
      color: ${(props) => props.theme.blackText};
      font-weight: 500;
      font-size: 14px;
      line-height: 23px;
    }
  }
  a:active,
  a:focus,
  .nav a:visited {
    color: black;
    font-weight: bold;
    text-decoration: underline;
  }
`;
