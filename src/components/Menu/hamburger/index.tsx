/* eslint react/prop-types: 0 */
import React, { useEffect, useState } from "react";
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons/lib";

import { HamburgerContainer } from "./styles";

interface Menu {
  path: string;
  name: string;
}

export const Hamburger = ({ menuItems }: any) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  //prevent scrolls when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  const toggleMenus = (e: any) => {
    e.preventDefault();
    toggleMenu(!isMenuOpen);
  };

  const handleMenuNavigation = () => {
    toggleMenu(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "unset";
    }
  };

  // render menu items
  const renderMenuItems = () => (
    <>
      {menuItems.map(({ name }: Menu) => (
        <div key={name} onClick={handleMenuNavigation}>
          <span>{name}</span>
        </div>
      ))}
    </>
  );

  return (
    <HamburgerContainer {...{ isMenuOpen }}>
      <div className={"top__section"}>
        <div className="toggle__container">
          <div className="brand__section">
            <img src="/omaar-logo.svg" alt="" />
            <span> Ommar Marketplace</span>
          </div>
          {isMenuOpen ? (
            <CloseOutlined onClick={toggleMenus} />
          ) : (
            <MenuUnfoldOutlined onClick={toggleMenus} />
          )}
        </div>
      </div>

      {isMenuOpen ? (
        <div className="menu__items--section">{renderMenuItems()}</div>
      ) : (
        ""
      )}
    </HamburgerContainer>
  );
};
