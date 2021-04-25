import styles from "styled-components";

const ProductBannerContainer = styles.div`

.ant-carousel .slick-slide {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

display: flex;
width: 100%;
justify-content: space-between;
margin-top: 40px;

.carousel__container {
  width: 60%;
}

.static__banner {
  display: grid;
  grid-template-columns: 4fr 4fr;
  grid-gap: 20px;
  grid-template-rows: 4fr 4fr;
  img{
    width: 180px;
    height: 130px;
  }
}
`;

export { ProductBannerContainer };
