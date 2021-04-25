import React from "react";
import { BuyerBenefits } from "./styles";
import { buyerBenefits } from "./fixture";

export const BenefitsCard = () => {
  return (
    <>
      <BuyerBenefits>
        {buyerBenefits.map((benefit, index) => (
          <div key={index.toString()} className="benefit__container">
            <img src={benefit.icon} alt="icon" />
            <div className="description">
              <span> {benefit.name} </span>
              <span> {benefit.description}</span>
            </div>
          </div>
        ))}
      </BuyerBenefits>
    </>
  );
};
