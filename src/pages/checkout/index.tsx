import React from "react";

import { Container } from "styles/checkout";
import GlobalContainer from "../../styles/globalContainer";


const CheckOut = () => {
  return (
    <>
      <GlobalContainer>
      <Container>
        <img src="/Glyph.png" alt="" />
        <div className="msg">Order completed Successfully</div>
        <div className="msg1">Please check your email for order receipt.</div>
      </Container>
    </GlobalContainer>
    </>
  );
};

export default CheckOut;
