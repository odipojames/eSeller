import React from "react";
import styled from "styled-components";
import { BenefitsCard } from "../../card/BenefitCard/benefitsCard";
import { useRouter } from "next/router";

const StyledFooter = styled.footer`
  background: #203341;
  padding: 20px 100px;
  grid-area: footer;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  .container {
    display: flex;
    color: ${(props) => props.theme.textColor};
    width: 100%;
    margin: auto;
  }
  .about {
    justify-content: space-between;
    margin-top: 80px;
  }

  .terms {
    justify-content: space-between;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    border-top: 2px solid #64696e;
    height: 20vh;

    .privacy {
      display: flex;
      width: 15%;
      justify-content: space-between;
    }
  }
  .details {
    margin-top: 20px;
  }
`;

const FooterContainer = styled.div`
  .styles__BuyerBenefits-zq07ie-0 {
    margin-top: unset;
  }
`;

const BackTop = styled.div`
  background-color: ${(props) => props.theme.footerBackgroundDark};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.5px;
  color: white;
  width: 100%;
  height: 60px;
  p {
    transition: all ease;
    margin-bottom: unset;
  }

  p:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const Span = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const topCategories = [
  "Electronics",
  "Category 1",
  "Category 1",
  "Category 1",
  "Category 1",
];
const earnUs = [
  "Sell on OE",
  "Fulfilled by OE",
  "Selling Terms & Policies",
  "FAQs",
];
const company = ["About", "Other Businesses", "Terms & Policies", "Careers"];
const help = ["FAQs", "Return Policy", "Shipping & Delivery", "Payments"];
const account = ["Sign In", "Order Status", "My Wishlist"];

const Footer = () => {
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <FooterContainer>
      {router?.pathname !== "/" ? <BenefitsCard /> : ""}
      <BackTop>
        <p onClick={scrollToTop}>Back to top</p>
      </BackTop>
      <StyledFooter>
        <div className="container about">
          <div>
            <Span> Top Categories </Span>
            <div className="details">
              {topCategories.map((category, i) => (
                <p key={i.toString()}>{category}</p>
              ))}
            </div>
          </div>
          <div>
            <Span> Earn with Us </Span>
            <div className="details">
              {earnUs.map((earn, i) => (
                <p key={i.toString()}>{earn}</p>
              ))}
            </div>
          </div>
          <div>
            <Span> My Account </Span>
            <div className="details">
              {account.map((account, i) => (
                <p key={i.toString()}>{account}</p>
              ))}
            </div>
          </div>
          <div>
            <Span>Help </Span>
            <div className="details">
              {help.map((help, i) => (
                <p key={i.toString()}>{help}</p>
              ))}
            </div>
          </div>
          <div>
            <Span> Company </Span>
            <div className="details">
              {company.map((company, i) => (
                <p key={i.toString()}>{company}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="container terms">
          <div className="privacy">
            <span> Terms of Use </span>
            <span> Privacy Notice </span>
          </div>
          <img
            src="/omaar-logo.svg"
            alt="logo"
            style={{ filter: "invert(0)", paddingBottom: 20 }}
          />
          <p>
            ©{new Date().getFullYear()} Omaar Marketplace. All Rights Reserved.{" "}
          </p>
        </div>
      </StyledFooter>
    </FooterContainer>
  );
};

export default Footer;
