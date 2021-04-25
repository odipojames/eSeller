import styled from "styled-components";

const StyledHeader = styled.header`
  grid-area: header;
  background: ${(props) => props.theme.linearBackground};
  padding: 20px 100px 5px 100px;
  color: ${(props) => props.theme.textColor};
  a {
    color: ${(props) => props.theme.textColor};
  }
  li {
    line-height: 25px;
    font-weight: 400;
    font-size: 16px;
    padding-right: 30px;
  }
  li:nth-child(3) {
    padding-right: unset;
  }
  .pop__container {
    position: relative;
  }
  .header {
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      list-style: none;
    }
  }
  .logo {
    font-size: 3em;
    color: ${(props) => props.theme.textColor};
  }
  .footer {
    display: flex;
    justify-content: space-between;
    .active {
      border: 1px solid rgba(255, 255, 255, 0.35);
      border-radius: 4px;
      color: ${(props) => props.theme.textColor};
      padding: 5px;
    }
    ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    ul:last-of-type {
      li {
        padding-right: unset;
      }
    }
  }
  .account {
    cursor: pointer;
  }
  .wishlist {
    .wishlist-icon {
      width: 20px;
      height: 20px;
      color: White;
    }
  }

  .icon {
    width:30px;
    height:30px;
    position: relative;
}
  .message-count {
    background-color:#F68B1E;
   font-size:10px;
   position: absolute;
   padding:5px;
   bottom:15px;
   right:6px;
   border-radius: 55px;
   position: relative;
}

.icon {
  margin-right: 5px;
}

`;

const Button = styled.button`
  background: ${(props) => props.theme.logoBackground};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 92px;
  outline: none;
  height: 32px;
`;

const PopContainer = styled.div`
  .cdzdso {
    position: absolute;
    right: 0px;
    top: 0px;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: fill-available;
  padding: 20px;
  span {
    color: ${(props) => props.theme.stainText};
  }
  .signup_element {
    color: ${(props) => props.theme.blueText};
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
    text-decoration-line: ;
    height: 19px;
    cursor: pointer;
  }
`;

const TopNav = styled.div`
  padding: 20px 100px;
  background: ${(props) => props.theme.textColor};
  height: 60px;
  display: flex;
  flex-wrap: wrap;
  .top_nav {
    display: flex;
    font-size: 16px;
    line-height: 26px;
    width: 46%;
    justify-content: space-between;
    flex-wrap: wrap;
    a {
      color: ${(props) => props.theme.lightBlackTextColor};
      font-family: Roboto, sans-serif;
      font-weight: 400;
    }
    a:hover {
      color: ${(props) => props.theme.logoBackground};
    }
  }
`;

const SignUpSpan = styled.span<any>`
  a {
    color: ${(props) => props.logoBackground} !important;
  }
  cursor: pointer;
`;

const Pop2Container = styled.div`
  width: 134px;
  display: flex;
  flex-direction: column;
  height: fill-available;
  padding: 20px 0 20px 0;
  span {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    padding: 5px;
    height: 17px;
  }
  .logout {
    text-decoration: underline;
    text-align: center;
    color: ${(props) => props.theme.stainText};
    cursor: pointer;
  }
  a {
    color: ${(props) => props.theme.stainText};
    margin-left: 20px;
  }
  hr {
    border-width: 1px solid ${(props) => props.theme.blackText};
    width: 133px;
    opacity: 0.1;
    padding: 0px;
  }
`;

export {
  StyledHeader,
  Button,
  PopContainer,
  TopNav,
  SignUpSpan,
  Pop2Container,
};
