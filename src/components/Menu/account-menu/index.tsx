import React from "react";
import Link from "next/link";
import { NavContainer } from "./styles";

export const AccountsMenu = () => {
  return (
    <>
      <NavContainer>
        <div className="nav">
          <ul>
            <li>
              <Link href="/orders">
                <a>Orders</a>
              </Link>
            </li>
            <li>
              <Link href="/address">
                <a>Addresses</a>
              </Link>
            </li>
            <li>
              <Link href="/payments">
                <a>Payment</a>
              </Link>
            </li>
            <li>
              <Link href="/wallet">
                <a>Wallet</a>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <a>Profile</a>
              </Link>
            </li>
            <li>
              <Link href="/offers">
                <a>My Offers</a>
              </Link>
            </li>
          </ul>
        </div>
      </NavContainer>
    </>
  );
};
