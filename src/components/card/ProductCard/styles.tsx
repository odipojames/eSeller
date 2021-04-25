import styled from "styled-components";

const ProductsContainer = styled.div`
  .featured_products_container {
  

    * {
      box-sizing: border-box;
    }
    

    .product_item {
      float: left;
      background: white;
      padding: 20px;
      flex-direction: column;
      width: 280px;
      margin-bottom: 60px;

      .image__container {
        display: flex;
        justify-content: center;
        text-align: center;
        img {
          height: 180px;
        }
      }
      i {
        margin-right: 20px !important;
      }

      .prices {
        margin-bottom: 4px;
      }

      .text__area {
        display: flex;
        flex-direction: column;

        .description {
          width: 220px;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .ant_star_icon {
      color: ${(props) => props.theme.antStarIcon};
    }
    .old_price {
      text-decoration: line-through;
      font-size: 14px;
      color: ${(props) => props.theme.greyText};
    }
  }

  .featured_products_container:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export { ProductsContainer };
