import React, { useState } from "react";
import { Button, Input, Form } from "antd";
import { SignUpContainer } from "./signup";
import Link from "next/link";
import Router from "next/router";
import notification from "../../utils/toast";
import Api from "services/lib";

// @ts-ignore

const SignupModal = (props: any) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    last_name:"",
    password: "",
  });
  const [error, setError] = useState("");
  const [isPending, setPending] = useState(false);

  const formHandler = (e: any) => {
    e.preventDefault();
    if(e.target.name==="fullName"){
      //process first and last names from fullName field
      userCredentials.first_name = e.target.value.split(" ")[0];
      userCredentials.last_name = e.target.value.split(" ")[1];
    }
    setCredentials({ ...userCredentials, [e.target.name]: e.target.value });
  };

  const register = () => {
    if (userCredentials.password.length < 6) {
      return setError("password must be at least 6 characters");
    }
    if (userCredentials.password.length > 41) {
      return setError("password must be at most 40 characters");
    }
    setPending(true);
    const api = new Api();
    api
      .auth()
      .register(userCredentials)
      ?.then((response: any) => {
        console.log("registration", response);
        setPending(false);
        if (response.status == 200) {
          notification.success({
            message: "Success",
            description: "Account created successfully ",
          });

          props.closeModal();
          Router.push("/");
        } else if (response.status == 400) {
          setError("email already exists");
        } else {
          setError("Something went wrong. Please try again later.");
        }
      })
      .catch((error: any) => {
        console.log(error.response);
        if (error.response.status == 400) {
          setError("email already exists");
        }
        setPending(false);
      });
  };

  return (
    <>
      <SignUpContainer>
        <div>
          <img src="/logo-black.png" />
        </div>
        <div className="form_section">
          <Form autoComplete="off">
            {error && (
              <>
                <small style={{ color: "red" }}>{error}</small>
                <br />
              </>
            )}
            <br />
            <Form.Item name="phone_number"
             rules={[
               {
                 required:true,
                 message:"provide phone number"
               }
             ]}
              >
              <Input
                placeholder="phone number"
                name="phone_number"
                onChange={formHandler}
              />
            </Form.Item>
            <Form.Item
              name="fullName"
              rules={[
                {
                  required: true,
                  message: "provide your full name",
                },
              ]}
            >
              <Input
                placeholder="fullName"
                name="fullName"
                onChange={formHandler}
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your email!",
                },
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
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please enter your password!",
                },
              ]}
              hasFeedback
            >
              <Input
                name="password"
                type="password"
                placeholder="password"
                onChange={formHandler}
              />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match!"
                    );
                  },
                }),
              ]}
            >
              <Input
                name="confirmPassword"
                type="password"
                className="password"
                placeholder="confirm password"
              />
            </Form.Item>

            <Button
              type="primary"
              htmlType="submit"
              loading={isPending}
              onClick={register}
              className="signup_btn"
            >
              Creat an account
            </Button>
          </Form>
        </div>

        <div className="terms_privacy">
          <p>
            By creating an account, you agree and accept
            <br />
            <Link href="/">
              <a>
                {" "}
                <span> our Terms</span>
              </a>
            </Link>{" "}
            and
            <Link href="/">
              <a>
                {" "}
                <span>Privacy Policy</span>
              </a>
            </Link>
          </p>
        </div>

        <div className="have_account">
          <hr />
          <span>Already have an account?</span>
          <span id="sign in" onClick={props.handleModalChange}>
            {" "}
            Sign in{" "}
          </span>
        </div>
      </SignUpContainer>
    </>
  );
};

export default SignupModal;
