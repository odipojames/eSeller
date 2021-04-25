import React from "react";
import { AccountsMenu } from "components/Menu/account-menu";
import { OffersContainer } from "styles/offers";
import Link from "next/link";
import { BenefitsCard } from "components/card/BenefitCard/benefitsCard";
import { offers } from "./fixture";
import GlobalContainer from "../../styles/globalContainer";


const Offer = () => {
  return (
    <>
    <GlobalContainer>
      <AccountsMenu />
      <OffersContainer>
        <div className="header">
          <span className="heade">My Offers</span>
        </div>
        <div className="container">
          <div className="offer_items">
            <span className="addresses">Offers available for you</span>
            <span>
              <hr />
            </span>

            <div className="offer_container">
              <div className="details">
                <span className="balance">Coupons</span>
                <span className="amount">1</span>
              </div>
            </div>
            <div className="offer-details">
              <span className="offer_transactions">Offers</span>
              <span className="button">
                <span>
                  <Link href="#">{"  <"}</Link>
                </span>
                <span>
                  <Link href="#">{"  >"}</Link>
                </span>
              </span>
            </div>
            <hr />
            {offers.map((offer: any, index: number) => (
              <div className="offer-container" key={index.toString()}>
                <div className="offer-info">
                  <span className="offer">{offer.offer}</span>
                  <span>
                    <span className="date">{offer.date}</span>
                    <span className="status">status {offer.status}</span>
                  </span>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className="offer_section">
            <img src="/offer.png" />
          </div>
        </div>
      </OffersContainer>
      <BenefitsCard />
      </GlobalContainer>
    </>
  );
};

export default Offer;
