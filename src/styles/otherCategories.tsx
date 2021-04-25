import styled from "styled-components";

const paginationStyle = {
  marginLeft: "600px",
};

const OtherCategoriesHeader = styled.div`
  .category_title {
    padding: 15px 0px;
    .parent-category {
      font-weight: normal;
      font-size: 15px;
      line-height: 14px;
      color: ${(props) => props.theme.greyWhite};
      cursor: pointer;
    }

    .sign {
      color: ${(props) => props.theme.greyWhite};
      padding: 0px 4px;
    }

    .sub-category {
      font-weight: 400px;
      font-size: 15px;
      color: #212121;
      letter-spacing: 0.214286px;
    }
  }
  .result {
    margin: 35px 0px;
    .product-count {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme.blackText};
    }

    
    .category_name {
      font-weight: bold;
      font-size: 18px;
      color: ${(props) => props.theme.blackText};
    }
  }
`;

export { OtherCategoriesHeader, paginationStyle };
