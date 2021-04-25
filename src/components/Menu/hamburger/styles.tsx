import styled, { css } from "styled-components";

const HamburgerContainer = styled.div<any>`
  display: flex;
  flex-direction: column;

  svg path {
    fill: #006dbf;
  }

  svg:not(:root) {
    width: 48px;
  }
  .top__section {
    height: 80px;
    display: flex;
    align-items: center;
    .toggle__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
      padding: 20px;
      border-radius: 4px;
      background: #f7f8f8;
      ${(props) =>
        props.isMenuOpen &&
        css<any>`
          background: unset;
        `}
      width: 98%;
      margin: 0 auto;
      .brand__section {
        display: flex;
        width: 78%;
        align-items: center;
        justify-content: space-evenly;
        span {
          font-weight: 900;
          font-size: 20px;
          @media only screen and (max-width: 320px) {
            font-size: 16px;
          }
        }
      }
      .anticon {
        font-size: 30px;
        ${(props) =>
          props.isMenuOpen &&
          css<any>`
            background: unset;
          `}
      }
    }
  }
  .menu__items--section {
    width: 86%;
    margin: 0 auto;
    color: #fff;
    font-weight: 700;
    height: 70%;
    flex-direction: column;
    justify-content: space-between;
    display: flex;
    padding-top: 20px;
    font-size: 1.5625em;
  }
`;

export { HamburgerContainer };
