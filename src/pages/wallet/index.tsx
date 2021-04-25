import React from "react";
import { AccountsMenu } from "components/Menu/account-menu";
import { WalletContainer } from "styles/wallet";
import Link from "next/link";
import GlobalContainer from "../../styles/globalContainer";

const Wallet = () => {
  return (
    <GlobalContainer>
      <AccountsMenu />
      <WalletContainer>
        <div className="header">
          <span className="header">My Wallet</span>
        </div>
        <div className="container">
          <div className="wallet_items">
            <span className="addresses">
              Top up your wallet and enjoy the cashless experience!
            </span>
            <span>
              <hr />
            </span>

            <div className="wallet_container">
              <div className="details">
                <span className="balance">Wallet balance</span>
                <span className="amount">KES 200</span>
              </div>
            </div>
            <div className="transaction-details">
              <span className="wallet_transactions">Wallet transactions</span>
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
            <div className="transaction-container">
              <div className="transactions-info">
                <span className="transaction">Spent KES 50 to buy an item</span>
                <span className="date">18 Sep 2019 00:10</span>
              </div>
              <hr />
            </div>
          </div>

          <div className="offer_section">
            <img src="/offer.png" />
          </div>
        </div>
      </WalletContainer>
    </GlobalContainer>
  );
};

export default Wallet;
