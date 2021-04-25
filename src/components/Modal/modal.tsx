import React from "react";
import styled from "styled-components";
import Overlay from "./overlay";
import { CloseOutlined } from "@ant-design/icons";

const ModalComponent = styled.div`
  div:first-of-type {
    i {
      padding: 20px;
      text-align: end;
    }
  }
  width: 431px;
  z-index: 999;
  visibility: visible;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  background-color: #ffffff;
  border-radius: 4px;

  span {
    font-weight: normal !important;
  }
`;

const Modal = ({ isOpen, children, close, styles }: any) => {
  return isOpen ? (
    <Overlay>
      <ModalComponent style={{ ...styles }}>
        <div
          style={{
            textAlign: "end",
            padding: "20px",
          }}
        >
          <CloseOutlined onClick={close} />
        </div>
        {children}
      </ModalComponent>
    </Overlay>
  ) : (
    <></>
  );
};

export default Modal;
