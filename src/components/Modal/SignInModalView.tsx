import React, { useState } from "react";
import { Button, Input, Form } from "antd";
import { SignInContainer } from "./signin";
import Link from "next/link";
import { useDispatch,useSelector } from "react-redux";
import notification from "utils/toast";
import { setAuth } from "store/actions/usersActions";
import Api from "services/lib";
import { setCookie } from "../../containers/cookies";
import { getUser } from "store/actions/usersActions";

const SignInModal = (props: any) => {
  const dispatch = useDispatch();
  const [loginCredentials, setLoginValues] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [isPending, setPending] = useState(false);


  const formHandler = (e: any) => {
    e.preventDefault();
    setLoginValues({ ...loginCredentials, [e.target.name]: e.target.value });
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
    

  const authenticateUser = () => {
    if(loginCredentials.email==="" || loginCredentials.password===""){
      return setError("email and password must be provided");
    }
    setPending(true);
    const api = new Api();
    api
      .auth()
      .login(loginCredentials)
      .then((response: any) => {
        setPending(false);
        if (response.status == 200 && response.data.access_token) {
          dispatch(setAuth(response.data));
          setCookie("token", response.data.access_token);
          getUserProfile();
          localStorage.setItem("username",loginCredentials.email);
          notification.success({
            message: "success",
            description: "welcome back to OE",
          });
          props.closeModal();
        } else if (response.data.error) {
          setError(response.data.error_description);
        } else {
          setError("Something went wrong try again later");
        }
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <SignInContainer>
      <div>
        <img src="/logo-black.png" />
      </div>
      {error && (
        <>
          <small style={{ color: "red" }}>{error}</small>
          <br />
        </>
      )}
      <br />
      <div className="form_section">
        <Form>
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
              name="email"
              onChange={formHandler}
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input
              placeholder="Password"
              type="password"
              name="password"
              onChange={formHandler}
            />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            loading={isPending}
            className="signin_btn"
            onClick={authenticateUser}
          >
            Sign in
          </Button>
        </Form>
      </div>
      <div className="recover_password">
        <span>Can’t remember your password?</span>
        <Link href="/">
          <a>
            <span className="reset_password"> Recover it.</span>
          </a>
        </Link>
      </div>

      {/* create account modal */}
      <div className="sign_in_section">
        <hr />
        <span>Don’t have an account?</span>
        <span
          id="sign up"
          onClick={props.handleModalChange}
          className="sign_in_span"
        >
          {" "}
          Create it.{" "}
        </span>
      </div>
    </SignInContainer>
  );
};
export default SignInModal;
