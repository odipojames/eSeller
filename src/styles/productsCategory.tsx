import styled from "styled-components";

const ProductsContainer = styled.div`
  .electronics_banner {
    border-radius: 50px 20px;

    img {
      height: 350px;
      width: 400px;
    }
  }
`;

const TopBrands = styled.div`
  margin-bottom: 60px;

  .brands_grid_container {
    div {
      img {
        padding-bottom: 18px;
        height: 150px;
        width: 150px;
      }
    }
    display: flex;
    justify-content: space-between;

    h1 {
      font-size: 16px;
      font-weight: 400px;
      font-family: Roboto, sans-serif;
      letter-spacing: 0.15px;
      color: ${(props) => props.theme.blackText};
      width: 180px;
      height: 19px;
    }
  }
`;

const ProductsFeatured = styled.div`
  .ft2_flex {
    text-align: center;
    margin-bottom: 60px;
  }
  h2 {
    color: ${(props) => props.theme.blackText};
    text-align: center;
    margin-left: 20px;
    margin-top: 30px;
    text-decoration: underline;
  }
  .delivery_flex {
    margin: 60px 0 60px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    img {
      width: 600px;
      height: 400px;
      border-radius: 10px;
      margin: 17px;
    }
  }
  .ft_grid {
    justify-content: space-between;
    display: flex;
    margin-bottom: 30px;

    h1 {
      font-family: Roboto, sans-serif;
      font-size: 24px;
      font-weight: bold 700px;
      color: ${(props) => props.theme.blackText};
      width: 200px;
      height: 28px;
    }
  }
`;

const CategoryBannerContainer = styled.div`
  margin-bottom: 60px;
  margin-top: 40px;

  .ant-carousel .slick-slide {
    height: 430px !important;
    background: #364d79;
  }

  img {
    width: 100%;
  }
`;

export {
  ProductsContainer,
  TopBrands,
  ProductsFeatured,
  CategoryBannerContainer,
};
