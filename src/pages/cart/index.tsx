import React, { useState, useEffect } from "react";
import { Container } from "styles/cart";
import { Button, Input, Pagination } from "antd";
import Router from "next/router";
import notification from "../../utils/toast";
import GlobalContainer from "../../styles/globalContainer";

export const getCartTotal = (cartList: any) => {
  let total = 0;
  for (let i = 0; i < cartList.length; i++) {
    total += parseFloat(cartList[i].salePrice) * cartList[i].quantity;
  }
  return total;
};

const ShoppingCat = () => {
  const [cartItems, setItems] = useState(Array);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2);

  const increment = (product: any) => {
    const q = (product.quantity += 1);
    const key = product.id;
    setItems(
      cartItems.map((item: any) => {
        if (item.id !== key) return item;
        return { ...item, quantity: q };
      })
    );
    localStorage.setItem("items", JSON.stringify(cartItems));
  };

  const decrement = (product: any) => {
    if (product.quantity > 1) {
      const q = (product.quantity -= 1);
      const key = product.id;
      setItems(
        cartItems.map((x: any) => {
          if (x.id !== key) return x;
          return { ...x, quantity: q };
        })
      );
      localStorage.setItem("items", JSON.stringify(cartItems));
    }
  };

  const removeItem = (product: any) => {
     const id = product.id;
     const newArray = cartItems ;
     const index = newArray.indexOf(product);
     if(index !== -1){
        newArray.splice(index, 1);
     }
     setItems(cartItems.filter((item: any) => item.id !== id));
     localStorage.setItem("items", JSON.stringify(newArray));

   };



  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    if (items) {
      setItems(items);
    }
  }, []);

  //Pagination
  const handleChange = (value: any) => {
    if (value <= 1) {
      setMinValue(0);
      setMaxValue(2);
    } else {
      setMinValue(maxValue);
      setMaxValue(value * 2);
    }
  };

  return (
    <>
      <Container>
        <GlobalContainer>
        <div className="cat_container">
          <div className="header__section">
            <span className="header">Shopping cart</span>
          </div>
          <div className="row_div">
            <div className="cat_items">
              <span className="items_number">
                Products({cartItems.length} Item)
              </span>
              <div>
                <hr />{" "}
              </div>
              {cartItems
                .slice(minValue, maxValue)
                .map((product: any, index: number) => (
                  <div key={index.toString()}>
                    <div className="row_div">
                      <div className="image__section">
                        <img src={product?.imagePath} />
                      </div>

                      <div>
                        <div className="col_div">
                          <span>Brand</span>
                          <span className="Description">
                            {product?.description}
                          </span>
                          <span className="price">{product?.salePrice}</span>
                        </div>
                      </div>

                      <div className="col_div" id="quantity_section">
                        <span>
                          <div className="quantity">
                            <img
                              src="/preset.png"
                              onClick={() => {
                                decrement(product);
                              }}
                            />
                            <Input value={product?.quantity} />
                            <img
                              src="/set.png"
                              onClick={() => {
                                increment(product);
                              }}
                            />
                          </div>
                        </span>
                        <span>
                          {" "}
                          <a
                            className="remove_link"
                            onClick={() => {
                              removeItem(product);
                            }}
                          >
                            Remove
                          </a>
                        </span>
                      </div>
                    </div>
                    <div>
                      <hr />{" "}
                    </div>
                  </div>
                ))}
              <Pagination
                size="small"
                defaultCurrent={1}
                defaultPageSize={2}
                onChange={handleChange}
                hideOnSinglePage={true}
                total={cartItems.length}
              />
            </div>

            <div className="pricing_section">
              <div className="price_content">
                <div id="price_figures">
                  {cartItems.map((product: any) => (
                    <div className="Subtotal_row" key={product.id}>
                      <span>Item {cartItems.indexOf(product)+1}</span>
                      <span className="Subtotal">
                        KSH. {product.quantity * parseFloat(product.salePrice)}
                      </span>
                    </div>
                  ))}

                  <div className="total_row">
                    <span className="total">Total</span>
                    <span className="total">KSH. {getCartTotal(cartItems)}</span>
                  </div>
                </div>

                <span>
                  {" "}
                  <hr />
                </span>

                <div>
                  <Button
                    type="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      if(cartItems.length===0){
                        notification.warning({
                          message:"your cart is empty",
                          description:"add item to cart first!"
                        })
                      }
                      else{
                        Router.push('/order-confirmation'
                            )
                      }
                    }}
                  >
                    Continue to checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="payment_section">
            <div className="payment_div">
              <div className="payment_methods">
                <span>Payment Methods</span>
                <div className="">
                  <div className="row_div">
                    <div className="col_div">
                      <div className="row_div">
                        <span>
                          <img src="/payPal.png" />
                        </span>
                        <span>
                          <img src="/Mastercard.png" />
                        </span>
                      </div>
                      <div>
                        <span>
                          <img src="/Visa.png" />
                        </span>
                      </div>
                    </div>

                    <div className="bit-map">
                      <span>
                        <img src="/Bitmap.png" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="vertical_line" />
              <div className="buyer">
                <span className="buyer_protection">Buyer Protection</span>
                <br />
                <span className="refund_details">
                  Get full refund if the item is not as described
                </span>
                <br />{" "}
                <span className="refund_detail">or if is not delivered.</span>
              </div>
            </div>
          </div>
        </div>
        </GlobalContainer>
      </Container>
    </>
  );
};

export default ShoppingCat;
