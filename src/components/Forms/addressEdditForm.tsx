import React, { useState } from "react";
import { Button, Input, Form, Modal } from "antd";
import { Container } from "./address-style";
import notification from "../../utils/toast";
import Api from "services/lib";
// @ts-ignore

const EdditAddressForm = (props: any) => {
  const [addressData, setData] = useState({
    email: "",
    phone: "",
    address_name: "",
    street: "",
    postal_code: "",
    city: "",
    company_name: "",
  });
  const [error, setError] = useState("");
  const [isPending, setPending] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const id: number = props.address?.id;

  const formHandler = (e: any) => {
    e.preventDefault();
    setData({ ...addressData, [e.target.name]: e.target.value });
  };

  const editAddress = () => {
    Object.assign(addressData, {id: id});
    const data = JSON.parse(JSON.stringify(addressData));
    Object.keys(data).forEach((key) =>
      data[key] === "" ? delete data[key] : {}
    );
    const api = new Api();
    api.order().updateAddress(data)?.then((response: any) => {
      setPending(false);
      if(response.status==202){
        notification.success({
          message:"success",
          description:"address edited"
        });
        handleCancel();
      }
      else{

        notification.warning({
          message:"Error",
          description:"Something went wrong try again later"
        });
      }
    }).catch((error:any)=>{
      console.log(error.response)
    })
  };

  return (
    <>
      <a onClick={showModal} style={{ cursor: "ponter" }}>
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
              <Form.Item label="address name">
                <Input
                  placeholder={props.address?.address_name}
                  name="address_name"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item label="postal code">
                <Input
                  placeholder={props.address?.postal_code}
                  name="postal_code"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item label="street" name="street">
                <Input
                  placeholder={props.address?.street}
                  name="street"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item label="city" name="city">
                <Input
                  placeholder={props.address?.city}
                  name="city"
                  onChange={formHandler}
                />
              </Form.Item>

              <Form.Item label="contact">
                <Input
                  placeholder={props.address?.phone}
                  name="phone"
                  onChange={formHandler}
                />
              </Form.Item>
              <Form.Item label="company name">
                <Input
                  placeholder="company name"
                  name={props.address?.company_name}
                  onChange={formHandler}
                />
              </Form.Item>
              <Form.Item
                label="email"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input
                  placeholder={props.address?.email}
                  onChange={formHandler}
                  name="email"
                />
              </Form.Item>

              <Button
                type="primary"
                htmlType="submit"
                onClick={editAddress}
                loading={isPending}
                className="add-address-btn"
              >
                edit address
              </Button>
            </Form>
          </div>
        </Container>
      </Modal>
    </>
  );
};

export default EdditAddressForm;
