import styled from "styled-components";

export const TopNavContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.textColor};
  .top_nav {
    display: flex;
    justify-content: space-between;
    width: 100%;
    background-color: #fff!important;
    padding: 10px 0px;
    margin: 0;
  }
  ul {
    padding-inline-start: unset;
    li {
      list-style-type: none;
      padding-right 25px;

      a {
        color: ${(props) => props.theme.lightBlackTextColor};
        font-family: Roboto, sans-serif;
        font-weight: 400;
        font-style: normal;
        font-size: 16px;
      }
      a:hover {
        color: ${(props) => props.theme.logoBackground};
      }
    }
  }
`;

// `;
