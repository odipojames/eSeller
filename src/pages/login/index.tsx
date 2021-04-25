import React, { useState, useEffect } from "react";
import Link from "next/link";

import SignupModal from "components/Modal/SignUpModalView";
import SignInModal from "components/Modal/SignInModalView";
import { Modal } from "components/Modal";



const Login = ()=>{

  const [modalState, setModalSate] = useState(true);
  const [loginModal, openModal] = useState(true);
  const [signUpModal, setSignUpModal] = useState(false);

  const displaySignUpModal = () => {
    setModalSate(true);
    setSignUpModal(true);
    openModal(false);
  };

  const displayLoginModal = () => {
    setModalSate(true);
    openModal(true);
    setSignUpModal(false);
  };

  const closeModal = () => {
    setModalSate(false);
    openModal(false);
    setSignUpModal(false);
  };

  const handleModalChange = (e: any) => {
    const { id } = e.target;
    if (id === "sign in") {
      setSignUpModal(false);
      openModal(true);
    } else if (id === "sign up") {
      openModal(false);
      setSignUpModal(true);
    } else if (id == "undefined") {

    }
  };

return(
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
    </>
)

}

export default Login;
