import styled from "styled-components";

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;

  .ant-carousel .slick-slide {
    height: 430px !important;
  }

  .carousel__content {
    background-image: url(slider.png);
    background-size: cover;
    background-repeat: no-repeat;
    height: 430px;
  }

  .header__section {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme.blackText} !important;

    span {
      font-size: 24px;
      font-weight: 700;
    }
    a {
      font-size: 14px;
      font-weight: 500;
    }
  }
`;

const CampaignContainer = styled.div`
  height: 512px;
  display: flex;
  flex-direction: column;
  padding: 40px 60px;
  margin-top: 40px;
  background: ${(props) => props.theme.textColor};
  border-radius: 4px;
`;

const BuyerBenefits = styled.div`
  display: flex;
  justify-content: space-around;
  height: 110px;
  margin-top: 40px;
  background: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.borderGrey};
  border-radius: 4px;

  .benefit__container {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      height: 26px;
      margin-right: 20px;
    }

    .description {
      display: flex;
      flex-direction: column;
      font-weight: 400;
      span:first-of-type {
        font-size: 20px;
        color: ${(props) => props.theme.typeFaceGrey};
      }
      span:last-of-type {
        color: ${(props) => props.theme.typeFaceLightGrey};
        font-size: 16px;
      }
    }
  }
`;

const CategoriesContainer = styled.div`
    margin-top: 60px;
    .categories__body {
      display:flex;
      justify-content: space-between;
      .carousel {
        width: 384px;
        height: 430px;
      }
      .carousel__content {
        width:384px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url(categories.png);
        color: ${(props) => props.theme.textColor} !important;

        .title {
          display: block;
          margin-top: 40px;
          font-size: 28px;
          font-weight: 700;

        }
        .description {
          font-weight: 300;
          font-size: 28px;
        }
      }
    }

    .categories__header {
      margin-bottom: 60px;
    }

    .categories {
      display: grid;
      grid-template-columns: 4fr 4fr 4fr 4fr;
      grid-gap: 20px;
      div {
        width: 180px;
        height: 130px;
        color: ${(props) => props.theme.blackText};
        font-size:12px;
        background: ${(props) => props.theme.textColor};
        padding:10px;
        img{
          width: 70px;
          height: 60px;
          margin:20px 0px 0px 50px ;

        }
      }
    }

   }
`;

export {
  HomePageContainer,
  CampaignContainer,
  BuyerBenefits,
  CategoriesContainer,
};
