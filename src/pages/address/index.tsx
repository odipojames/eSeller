import React, { useState, useEffect } from "react";
import { AccountsMenu } from "components/Menu/account-menu";
import { AddressContainer } from "styles/addresses";
import { getAddress } from "store/actions/ordersActions";
import Api from "services/lib";
import { useDispatch } from "react-redux";
import { Pagination, Popconfirm } from "antd";
import NewAddressForm from "components/Forms/addressForm";
import EditAddressForm from "components/Forms/addressEdditForm";
import notification from "../../utils/toast";
import { getCookie } from "../../containers/cookies";
import GlobalContainer from "../../styles/globalContainer";


const Address = (props: any) => {
  const [addressList, setAddress] = useState(Array);
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(2);

  const dispatch = useDispatch();
  const api = new Api();

  const fetchAddress = () => {
    api
      .order()
      .addresses()
      .then((response: any) => {
        if (response.status == 200) {
          setAddress(response.data.results);
          dispatch(getAddress(response.data.results));
        }
      })
      .catch(() => ({}));
  };


  const removeAddress = (id: number) => {
    api
      .order()
      .deleteAddress(id)
      .then((res: any) => {
        if (res && res.status === 200) {
          notification.success({
            message: "Success",
            description: "Address removed successfully",
          });
        }
      })
      .catch((error: any) => {
        notification.success({
          message: "Success",
          description: error.response.data.message,
        });
      });
  };

  useEffect(() => {
    if (!(props && props.data.results)) {
      fetchAddress();
    } else {
      setAddress(props?.data?.results);
      dispatch(getAddress(props?.data?.results));
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
      <AccountsMenu />
      <GlobalContainer>
      <AddressContainer>
        <div className="header">
          <span className="heade">My Addresses</span>
        </div>

        <div className="container">
          <div className="address_items">
            <span className="addresses">
              You have {addressList.length} address saved in you account
            </span>
            <span>
              <hr />
            </span>

            {addressList.length > 0 && (
              <div>
                {addressList
                  .slice(minValue, maxValue)
                  .map((address: any, index: number) => (
                    <div className="addresses_container" key={index.toString()}>
                      <div className="details">
                        <span className="user_details">
                          {address.address_name}, {address.phone}
                        </span>
                        <span className="user_address">
                          {address.postal_code}{" "}
                          {address.city.replace(/[\[\]']+/g, "")},{" "}
                          {address.street.replace(/[\[\]']+/g, "")} street
                        </span>
                      </div>
                      <div className="details">
                        <span className="edit">
                          <EditAddressForm
                            name="Edit address"
                            address={address}
                          />
                        </span>
                        <span>
                          <Popconfirm
                            title="Are you sure？"
                            okText="Yes"
                            cancelText="No"
                            onConfirm={() => {
                              removeAddress(address.id);
                            }}
                          >
                            <a className="default">DELETE</a>
                          </Popconfirm>
                        </span>
                      </div>
                    </div>
                  ))}

                <Pagination
                  size="small"
                  defaultCurrent={1}
                  defaultPageSize={2}
                  onChange={handleChange}
                  hideOnSinglePage={true}
                  total={addressList.length}
                />
              </div>
            )}
            <span>
              <NewAddressForm setAddress={setAddress} name="Add new address" />
            </span>
          </div>

          <div className="offer_section">
            <img src="/offer.png" />
          </div>
        </div>
      </AddressContainer>
    </GlobalContainer>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const token = getCookie("token", context.req);
  const api = new Api(token);
  const res = await api.order().addresses();
  return {
    props: {
      data: res.data || {},
    },
  };
}

export default Address;
