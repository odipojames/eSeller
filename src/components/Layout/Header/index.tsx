import React, { useState, useEffect } from "react";
import Link from "next/link";

import SignupModal from "../../Modal/SignUpModalView";
import SignInModal from "../../Modal/SignInModalView";

import { Input, Select } from "antd";
import {
  UserOutlined,
  ShoppingCartOutlined,
  SearchOutlined,
  CaretDownOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import {
  Button,
  StyledHeader,
  PopContainer,
  Pop2Container,
  TopNav,
} from "./styles";
import { Dropdown } from "../../Menu/Dropdown";
import PopConfirm from "components/Pop";
import { Modal } from "../../Modal";
import { removeCookie } from "../../../containers/cookies";
import { useDispatch,useSelector } from "react-redux";
import { setCategories } from "store/actions/productAction";
import Api from "../../../services/lib";
import { getCookie } from "containers/cookies";
import { getUser } from "store/actions/usersActions";



const { Option } = Select;
const { Search } = Input;

const selectBefore = (
  <Select defaultValue="All" style={{ width: 90 }}>
    <Option value="All">All</Option>
    <Option value="Fashion"> Fashion </Option>
  </Select>
);

const useCustomModalChange = () => {
  const [isOpen, setOpenPop] = useState(false);
  const [modalState, setModalSate] = useState(false);
  const [loginModal, openModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);

  const handleModalChange = (e: any) => {
    const { id } = e.target;
    if (id === "sign in") {
      setSignUpModal(false);
      openModal(true);
    } else if (id === "sign up") {
      openModal(false);
      setSignUpModal(true);
    } else if (id == "undefined") {
      setOpenPop(false);
    }
  };

  return {
    isOpen,
    setOpenPop,
    loginModal,
    openModal,
    signUpModal,
    setSignUpModal,
    setModalSate,
    modalState,
    handleModalChange,
  };
};

const useCustomUserCheck = () => {
  if (typeof localStorage !== "undefined") {
    const user = localStorage.getItem("username") || "";
    const username = user;

    return {
      username,
    };
  } else {
    const username = "";

    return {
      username,
    };
  }
};

const cartCheck = () => {
  let len = 0;
  if (typeof localStorage !== "undefined") {
    const cartList = JSON.parse(localStorage.getItem("items") || "[]");
    len = cartList.length;
    return len;
  }
  return len;
};

export const Header = (props:any) => {
  const dispatch: any = useDispatch();
  const api: any = new Api();


  const fetchCategories = () => {
    api
      .products()
      .getCategories()
      .then((res: any) => {
        dispatch(setCategories(res.data.results));
      })
      .catch((error: any) => console.log(`my error`, error));
  };
  const getUserProfile = () => {
    const api = new Api();
    api
      .auth()
      .profile()
      ?.then((response: any) => {
        if (response.status === 200) {
          dispatch(getUser(response.data.results[0]));
        }
      })
      .catch((error: any) => {
        console.log(error.reponse);
      });
  };



  useEffect(() => {
    if (!(props && props.data && props.data.results && props.user.results)) {
      fetchCategories();
      getUserProfile();
    } else {
      dispatch(setCategories(props?.data?.results));
      dispatch(getUser(props?.user?.results[0]));
    }
  }, []);
  const cartChange = useSelector((state:any)=>state.cart.changeCart)

  const {
    modalState,
    setModalSate,
    isOpen,
    setOpenPop,
    loginModal,
    handleModalChange,
    openModal,
    setSignUpModal,
  } = useCustomModalChange();

  const { username } = useCustomUserCheck();
  const openPopConfirm = () => {
    setOpenPop(!isOpen);
  };

  const closePopConfirm = () => {
    setOpenPop(false);
  };

  const displaySignUpModal = () => {
    setModalSate(true);
    setOpenPop(false);
    setSignUpModal(true);
    openModal(false);
  };

  const displayLoginModal = () => {
    setModalSate(true);
    setOpenPop(false);
    openModal(true);
    setSignUpModal(false);
  };

  const closeModal = () => {
    setModalSate(false);
    setOpenPop(false);
    openModal(false);
    setSignUpModal(false);
  };

  const logOut = () => {
    localStorage.removeItem("username");
    removeCookie("token");
  };

  return (
    <>
      <Modal isOpen={modalState} close={closeModal}>
        {loginModal ? (
          <SignInModal
            handleModalChange={handleModalChange}
            closeModal={closeModal}
          />
        ) : (
          <SignupModal
            handleModalChange={handleModalChange}
            closeModal={closeModal}
          />
        )}
      </Modal>

      <StyledHeader>
        <div className="header">
          <img
            src="/omaar-logo.svg"
            alt="logo"
            style={{
              filter: "invert(0)",
              paddingBottom: 20,
              cursor: "pointer",
            }}
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/";
            }}
          />

          <ul>
            <li>
              <div style={{ marginBottom: 16, marginRight: 30 }}>
                <Search
                  addonBefore={selectBefore}
                  enterButton={<SearchOutlined />}
                  size="large"
                  defaultValue=""
                  style={{ width: 500, height: 40 }}
                  placeholder="Search"
                />
              </div>
            </li>
            <div className="pop__container">
              <li className="account" onClick={openPopConfirm}>
                {" "}
                <span className="icon"><UserOutlined /></span>
                {username ? (
                  <span className="header-text">
                    {username.slice(0,8)}
                    <CaretDownOutlined />
                  </span>
                ) : (
                  <span className="header-text">Account</span>
                )}
              </li>
              {username ? (
                <PopConfirm isLogined isOpen={isOpen} setOpenPop={setOpenPop}>
                  <Pop2Container>
                    <span onClick={closePopConfirm}>
                      <Link href="/orders">
                        <a>Orders</a>
                      </Link>
                    </span>
                    <span>
                      <hr />
                    </span>
                    <span onClick={closePopConfirm}>
                      <Link href="/address">
                        <a>Address</a>
                      </Link>
                    </span>
                    <span>
                      <hr />
                    </span>
                    <span onClick={closePopConfirm}>
                      <Link href="/payments">
                        <a>Payment</a>
                      </Link>
                    </span>
                    <span>
                      <hr />
                    </span>
                    <span onClick={closePopConfirm}>
                      <Link href="/wallet">
                        <a>Wallet</a>
                      </Link>
                    </span>
                    <span>
                      <hr />
                    </span>
                    <span onClick={closePopConfirm}>
                      <Link href="/profile">
                        <a>Profile</a>
                      </Link>
                    </span>
                    <span>
                      <hr />
                    </span>
                    <span
                      className="logout"
                      onClick={(e) => {
                        e.preventDefault();
                        logOut();
                        window.location.href = "/";
                      }}
                    >
                      Sign Out
                    </span>
                  </Pop2Container>
                </PopConfirm>
              ) : (
                <PopConfirm isOpen={isOpen} setOpenPop={setOpenPop}>
                  <PopContainer>
                    <span> Returning customer? </span>
                    <Button onClick={displayLoginModal}> Login </Button>
                    <span> Don't have an account? </span>
                    <span
                      className="signup_element"
                      onClick={displaySignUpModal}
                    >
                      {" "}
                      Sign Up{" "}
                    </span>
                  </PopContainer>
                </PopConfirm>
              )}
            </div>
            <div>
              {username? (
                <li className="wishlist">
                  <FileDoneOutlined className="wishlist-icon icon" />
                  <Link href="/wishlist">
                    <a>wishlist</a>
                  </Link>
                </li>
              ) : (
                ""
              )}
            </div>
            <div>
              <li>
                <Link href="/cart">
                  <a>
                    <span className="icon"><ShoppingCartOutlined /></span>
                    <span className="header-text">Cart</span>
                    {cartCheck() > 0 && (
                      <span className="message-count">{cartCheck()}</span>
                    )}
                  </a>
                </Link>
              </li>
            </div>
          </ul>
        </div>

        <div className="footer">
          <ul>
            <li>
              <Dropdown />

            </li>
            <li> Top Seller</li>
            <li> Today's Deals</li>
            <li> OE Fashion</li>
            <li>
              <Link href="/">
                <a>OE Market </a>
              </Link>
            </li>
            <li> Customer Service</li>
            <li> Global Shopping</li>
          </ul>

          <ul>
            {username ? (
              <li>
                {" "}
                <Link href="/new"> Start Selling </Link>{" "}
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </StyledHeader>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const token = getCookie("token", context.req);
  const api = new Api(token);
  const res = await api.products().getCategories();
  const user = await api.auth().profile();
  return {
    props: {
      data: res.data,user:user.data || {},
    },
  };
}


export const DashboardHeader = () => {
  const { username } = useCustomUserCheck();

  return (
    <StyledHeader>
      <div className="header">
        <img
          src="/omaar-logo.svg"
          alt="logo"
          style={{ filter: "invert(0)", paddingBottom: 20 }}
        />
        <ul>
          <li>
            <div style={{ marginBottom: 16, marginRight: 30 }} />
          </li>
          <li>
            {" "}
            <UserOutlined /> {username}{" "}
          </li>
        </ul>
      </div>

      <div className="footer">
        <ul>
          <li>
            {" "}
            <Link href="/new"> Help & FAQs </Link>{" "}
          </li>
          <li> View Shop</li>
        </ul>
      </div>
    </StyledHeader>
  );
};
