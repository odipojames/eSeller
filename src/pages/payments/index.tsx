import React from "react";
import { AccountsMenu } from "components/Menu/account-menu";
import { PaymentContainer } from "styles/payments";
import { orders } from "./fixture";
import GlobalContainer from "../../styles/globalContainer";


const Payment = () => {
  return (
    <>
    <GlobalContainer>
      <AccountsMenu />
      <PaymentContainer>
        <div className="header">
          <span className="heade">Payments</span>
        </div>
        <div className="container">
          <div className="payments">
            <span className="tittle">see all transactions</span>
            <div className="transactions-header">
              <span className="th">Payments completed</span>
              <span className="order-number">Order No.</span>
            </div>
            <hr />
            {orders.map((order: any, index: number) => (
              <div className="payments-container" key={index.toString()}>
                <div className="payments-record">
                  <span className="transactions">
                    <span className="ammount">{order.ammount}</span>
                    <span className="details">
                      {" "}
                      <span className="date">{order.date}</span>
                      <span className="method">
                        Method:
                        <span className="name">{order.payments_method}</span>
                      </span>
                    </span>
                  </span>
                  <span className="order-number">{order.order_number}</span>
                </div>
                <hr />
              </div>
            ))}
          </div>

          <div className="offer_section">
            <img src="/offer.png" />
          </div>
        </div>
      </PaymentContainer>
    </GlobalContainer>
    </>
  );
};

export default Payment;
