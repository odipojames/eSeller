import React from "react";
import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import {
  CampaignContainer,
  CategoriesContainer,
  HomePageContainer,
} from "styles/homePage";
import GlobalContainer from "../styles/globalContainer";
import { ProductBannerContainer } from "styles/product";
import { Carousel } from "antd";

import { Campaign } from "./index/Campaings";
import Link from "next/link";
import { BenefitsCard } from "components/card/BenefitCard/benefitsCard";
import { GET_HOME_PAGE } from "../gql/queries";
import { landingImages, catImages } from "./product-details/fixture";
import { getCookie } from "../containers/cookies";

const HomePage: NextPage<any> = () => {
  const { data, loading, error } = useQuery(GET_HOME_PAGE, {
    variables: { name: "Home" },
  });

  return (
    <GlobalContainer>
      <HomePageContainer>
        <ProductBannerContainer>
          <div className="carousel__container">
            <Carousel autoplay>
              <div>
                <div className="carousel__content" />
              </div>

              <div>
                <div className="carousel__content" />
              </div>

              <div>
                <div className="carousel__content" />
              </div>
            </Carousel>
          </div>
          <div className="static__banner">
            {landingImages.map((image: any, index: number) => (
              <img key={index.toString()} src={image.image1} alt="image" />
            ))}
          </div>
        </ProductBannerContainer>

        <BenefitsCard />

        <CampaignContainer>
          <div className="header__section">
            <span> Flash Sale </span>
            <Link href="">{" VIEW MORE >"}</Link>
          </div>
          <Campaign />
        </CampaignContainer>

        <CategoriesContainer>
          <div className="header__section categories__header">
            <span> Browse Categories </span>
            <Link href="/categories">{" EXPLORE ALL  CATEGORIES >"}</Link>
          </div>

          <div className="categories__body">
            <div className="carousel">
              <Carousel autoplay>
                <div>
                  <div className="carousel__content">
                    <span className="title">Mobile Phone</span>
                    <span className="description"> Scream with Speed </span>
                  </div>
                </div>

                <div>
                  <div className="carousel__content">
                    <span className="title">Mobile Phone</span>
                    <span className="description"> Scream with Speed </span>
                  </div>
                </div>
              </Carousel>
            </div>

            <div className="categories">
              {catImages.map((cat: any, index: number) => (
                <div key={index.toString()}>
                  <span>{cat.name}</span>
                  <img src={cat.image1} />
                </div>
              ))}
            </div>
          </div>
        </CategoriesContainer>
      </HomePageContainer>
    </GlobalContainer>
  );
};

export async function getServerSideProps(context: any) {
  const token = getCookie("token", context.req);
  return {
    props: {}, // will be passed to the page component as props
  };
}

// @ts-ignore
export default HomePage;
