import React, { useState, useEffect } from "react";
import { AccountsMenu } from "components/Menu/account-menu";
import { OrderContainer } from "styles/orders";
import Link from "next/link";
import { Button,Pagination } from "antd";
import { myOrders } from "./fixture";
import { useDispatch } from "react-redux";
import Api from "services/lib";
import { getOrders } from "store/actions/ordersActions";
import { getCookie } from "../../containers/cookies";
import GlobalContainer from "../../styles/globalContainer";


const Orders = (props:any) => {
  const [orders, setOrders] = useState(Array);
  const dispatch = useDispatch();
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2);


  const getMyOrders = () => {
    const api = new Api();
    api
      .order()
      .orders()
      .then((response: any) => {
        if (response.status == 200 && response.data) {
          setOrders(response.data.results);
          dispatch(getOrders(response.data.results));
        }
      });
  };

  useEffect(() => {
  if(!(props?.data?.results)){
    getMyOrders();
  }
  else{
    setOrders(props?.data?.results);
    dispatch(getOrders(props?.data?.results));
  }
  }, [orders.length]);

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


  console.log('orders',orders);

  return (
    <>
      <AccountsMenu />
      <GlobalContainer>
      <OrderContainer>
        <div className="header">
          <span className="order">My Orders</span>
        </div>
        <div className="orders_continer">
          <span className="order_number">
            You have made {orders.length} order in the past.
          </span>
          <div className="products_header">
            <span>Product</span>
            <span className="product_action">Product Action</span>
            <span>Order Status</span>
            <span>Order Amount</span>
            <span>Order Action</span>
          </div>
          {orders.map((order: any, index: number) => (
            <div key={index.toString()}>
              <div className="product_details">
                <span className="image__section">
                  <img src='hotpoint_featured.png' />
                </span>
                <span className="details">
                  <span className="brand">Brand</span>
                  <span className="Description">{order.products[0].product.name}</span>
                  <span className="price"></span>
                </span>
                <span className="confrimation">
                  <span>Confirmation received</span>
                  <span>
                    <Link href="#">
                      <a>Open Dispute</a>
                    </Link>
                  </span>
                </span>
                <span className="status">{order.status}</span>
                <span className="total">KSH. {order.total_price}</span>
                <span>
                  <Button type="default">Re-order</Button>
                </span>
              </div>
              <span>
                <hr />
              </span>
            </div>
          ))}
          <Pagination
            size="small"
            defaultCurrent={1}
            defaultPageSize={2}
            onChange={handleChange}
            hideOnSinglePage={true}
            total={orders.length}
          />
          <div>
            <Link href="/">
              <Button type="default" className="shopping_button">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </OrderContainer>
    </GlobalContainer>
    </>
  );
};

export async function getServerSideProps(context:any){
  const token = getCookie("token",context.req);
  const api = new Api(token);
  const response =  await api.order().orders();
  return {
    props: {
      data: response.data || {},
    },
  };
}

export default Orders;
