import React, { useState } from "react";
import { Button, Input, Form, Modal } from "antd";
import { Container } from "./address-style";
import notification from "../../utils/toast";
import Api from "services/lib";
import { addressPayload } from "../../pages/address/helpers/constants";
// @ts-ignore

const NewAddressForm = (props: any) => {
  const [addressData, setData] = useState(addressPayload);
  const [error, setError] = useState("");
  const [isPending, setPending] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const formHandler = (e: any) => {
    e.preventDefault();
    setData({ ...addressData, [e.target.name]: e.target.value });
  };

  const addAddress = () => {
    if (addressData.city == "" && addressData.street == "") {
      return setPending(false);
    }
    setPending(true);
    const api = new Api();
    api
      .order()
      .createAddress(addressData)
      .then(async (response: any) => {
        setPending(false);
        if (response.status == 202) {
          notification.success({
            message: "success",
            description: "New address has been added successfully",
          });
          const addressList = await api.order().addresses();
          props?.setAddress(addressList?.data?.results || []);
          handleCancel();
        } else {
          notification.warning({
            message: "Error",
            description: "Something went wrong try again later",
          });
        }
      })
      .catch((error: any) => {
        setPending(false);
        notification.warning({
          message: "Error",
          description: error?.response?.data?.message,
        });
      });
  };

  return (
    <>
      <a
        className="new_address"
        onClick={showModal}
        style={{ cursor: "pointer" }}
      >
        {props.name}{" "}
      </a>
      <Modal visible={visible} onCancel={handleCancel} footer={null}>
        <Container>
          <div className="form_section">
            <Form autoComplete="off">
              {error && (
                <>
                  <small style={{ color: "red" }}>{error}</small>
                  <br />
                </>
              )}
              <br />
              <Form.Item>
                <Input
                  placeholder="Address name"
                  name="address_name"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item>
                <Input
                  placeholder="Postal code"
                  name="postal_code"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item
                name="street"
                rules={[
                  {
                    required: true,
                    message: "provide street name",
                  },
                ]}
              >
                <Input
                  placeholder="Street"
                  name="street"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item
                name="city"
                rules={[
                  {
                    required: true,
                    message: "provide city name",
                  },
                ]}
              >
                <Input placeholder="City" name="city" onChange={formHandler} />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "provide contact number",
                  },
                ]}
              >
                <Input
                  placeholder="phone number"
                  name="phone"
                  onChange={formHandler}
                />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder="E-mail address"
                  onChange={formHandler}
                  name="email"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                onClick={addAddress}
                loading={isPending}
                className="add-address-btn"
              >
                add address
              </Button>
            </Form>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default NewAddressForm;
