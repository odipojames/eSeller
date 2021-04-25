import Styled, { css } from "styled-components";

const PopContainer = Styled.div<any>`
  height: 200px;
  width: 200px;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,0.1);
  z-index: 999;
  position: absolute;
  right: -36%;
  ${(props) =>
    props.isLogined &&
    css`
      right: 0;
      height: unset;
    `}
  top: 70%;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 4px;
  .ant-popover-arrow {
    left: 50%;
    transform: translateX(-50%) rotate(45deg);
    position: absolute;
    display: block;
    width: 12px;
    height: 12px;
    background: ${(props) => props.theme.textColor};
    border-style: solid;
    border-width: 4.24264069px;
    top: -6px;
    border-top-color: ${(props) => props.theme.textColor};
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: ${(props) => props.theme.textColor};
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }
`;

export default PopContainer;
