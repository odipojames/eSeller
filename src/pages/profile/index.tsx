import React, { useState, useEffect } from "react";
import { AccountsMenu } from "components/Menu/account-menu";
import { Container } from "styles/profile";
import { Button, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { getUser } from "store/actions/usersActions";
import Api from "services/lib";
import notification from "../../utils/toast";
import { getCookie } from "../../containers/cookies";
import GlobalContainer from "../../styles/globalContainer";



const Profile = (props: any) => {
  const [userProfile, setProfile] = useState(Object);
  const [profileCredentials, upDateProfile] = useState({
    gender: "",
  });
  const [userInfo, setUserInfo] = useState({
    first_name: "",
    last_name: "",
  });

  const dispatch = useDispatch();

  const getUserProfile = () => {
    const api = new Api();
    api
      .auth()
      .profile()
      ?.then((response: any) => {
        if (response.status === 200) {
          setProfile(response.data.results[0]);
          dispatch(getUser(response.data.results[0]));
        }
      })
      .catch((error: any) => {
        console.log(error.reponse);
      });
  };

  /*
     only fetch data from client side if server side failed;
  */
  useEffect(() => {
    if (!(props && props.data && props.data.results)) {
      getUserProfile();
    } else {
      setProfile(props?.data?.results[0]);
      dispatch(getUser(props?.data?.results[0]));
    }
  }, []);

  const form1Handler = (e: any) => {
    e.preventDefault();
    upDateProfile({ ...profileCredentials, [e.target.name]: e.target.value });
  };

  const userInfoHandler = (e: any) => {
    e.preventDefault;
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const editProfile = () => {
    //remove empty object attributs
    const userInfoData = JSON.parse(JSON.stringify(userInfo));
    Object.keys(userInfoData).forEach((key) =>
      userInfoData[key] === "" ? delete userInfoData[key] : {}
    );
    //add user object attributs
    Object.assign(profileCredentials, { account_info: userInfoData });
    const data = JSON.parse(JSON.stringify(profileCredentials));
    Object.keys(data).forEach((key) =>
      data[key] === "" ? delete data[key] : {}
    );
    Object.assign(data, { id: userProfile.id });

    //api call
    const api = new Api();
    api
      .auth()
      .updateProfile(data)
      ?.then((res: any) => {
        if (res.status === 200) {
          notification.success({
            message: "success",
            description: "profile edited",
          });
        }
      })
      .catch((error: any) => {
        console.log(error.response);
      });
  };

  const formHilighter = () => {
    const inputElements = document.querySelector("#pale");
    return (inputElements as HTMLInputElement).focus();
  };

  const formHandler = (e: any) => {
    e.preventDefault();
  };
  const changePassword = () => ({});

  return (
    <>
    <GlobalContainer>
      <AccountsMenu />
      <Container>
        <div className="header">
          <span className="heade">Profile</span>
        </div>
        <div className="container">
          <div className="profile-information">
            <div className="tittle">
              <span>Manage your profile information</span>
            </div>
            <div className="general">
              <span>General information</span>
            </div>

            <div className="general-info">
              <div className="info">
                <span>First Name</span>
                <span>Last Name</span>
                <span>Gender</span>
                <span className="dummy">Edit Profile</span>
              </div>
              <Form className="Form1" id="edit-profile-form">
                <div className="info">
                  <span>
                    <Form.Item name="first_name">
                      <Input
                        name="first_name"
                        id="pale"
                        placeholder={userProfile.account_info?.first_name}
                        onChange={userInfoHandler}
                      />
                    </Form.Item>
                  </span>
                  <span>
                    <Form.Item name="last_name">
                      <Input
                        name="last_name"
                        placeholder={userProfile.account_info?.last_name}
                        onChange={userInfoHandler}
                      />
                    </Form.Item>
                  </span>
                  <span>
                    <Form.Item name="gender">
                      <Input
                        name="gender"
                        placeholder={userProfile.gender}
                        onChange={form1Handler}
                      />
                    </Form.Item>
                  </span>
                  <span>
                    <Button
                      onClick={(e: any) => {
                        e.preventDefault();
                        formHilighter();
                        editProfile();
                      }}
                    >
                      Edit Profile
                    </Button>
                  </span>
                </div>
              </Form>
            </div>

            <div className="general">
              <span>Security</span>
            </div>

            <div className="security-info">
              <div className="info">
                <span>Email Address</span>
                <span>New Password</span>
                <span>Confirm New Password</span>
                <span className="dummy">Gender</span>
              </div>
              <Form onFinish={changePassword} className="Form2" id="form2">
                <div className="info">
                  <span className="address">
                    {userProfile.account_info?.email}
                  </span>
                  <span>
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
                        placeholder="********"
                        onChange={formHandler}
                      />
                    </Form.Item>
                  </span>
                  <span>
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
                        placeholder="********"
                      />
                    </Form.Item>
                  </span>
                  <span>
                    <Button onClick={changePassword} htmlType="submit">
                      Edit Security
                    </Button>
                  </span>
                </div>
              </Form>
            </div>
            <div className="warning">
              <span>You cannot change your email</span>
            </div>
          </div>

          <div className="offer_section">
            <img src="/offer.png" />
          </div>
        </div>
      </Container>
      </GlobalContainer>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const token = getCookie("token", context.req);
  const api = new Api(token);
  const response = await api.auth().profile();
  return {
    props: {
      data: response.data || {},
    },
  };
}

export default Profile;
