import styled from "styled-components";

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 20px;
  margin: 20px 10px 20px 30px;
  align-items: center;
  background-color: ${(props) => props.theme.greyColor};
  .Product {
    background-color: ${(props) => props.theme.textColor};
    display: block;
    align-items: center;
    justify-content: center;
  }
  Button {
    width: 180px;
    height: 30px;
    border-color: blue;
  }
  .ProductMedia {
    width: 180px;
  }
  .OldPrice {
    text-decoration: line-through;
  }
  .ProductTitle {
    color: ${(props) => props.theme.blackText};
    font-size: 16px;
    font-weight: 500px;
  }

  .anticon-star {
    color: ${(props) => props.theme.startIconColor};
    width: 10px;
    height: 10px;
  }
`;
const StarIcons = styled.div`
  color: ${(props) => props.theme.yellowColor};
`;
const ProductsHeader = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.blackText};
  font-weight: 900px;
`;
export { ProductsContainer, StarIcons, ProductsHeader };
