import styled from "styled-components";

const CategoryTypeContainer = styled.div`
  {
    background-color: #fff;

    .categories-title {
      padding-top: 5px;
      margin: 0px 0px 10px 0px;
    }
  }


  .products_grid_container {
    display: flex;
    gap: 20px;
    flex: 1 1 150px;
    flex-wrap: wrap;
    background-color: #fff;


    .category_item_img {
      background-color: ${(props) => props.theme.textColor};
      display: flex;
      justify-content: center;
      cursor: pointer;

      img {
        height: 150px;
        width: 150px;
        border: 1px solid ${(props) => props.theme.textColor};
      }
    }
    .category_item_name {
      cursor: pointer;
      font-size: 16px;
      margin-top: 6px;
      font-weight: 400;
      font-family: Roboto, sans-serif;
      letter-spacing: 0.15px;
      color: ${(props) => props.theme.blackText};
      width: 180px;
      text-align: center;
    }
  }
`;

export { CategoryTypeContainer };
