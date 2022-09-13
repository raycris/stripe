import React from "react";
import styled from "styled-components";

import PayObj from "../assets/images/paymentObj.png";

const PaymentObject = () => {
  return (
    <Container>
      <ImageBackground src={PayObj} alt="buy with card" />
    </Container>
  );
};

export default PaymentObject;

const Container = styled.div`
  /* height: 662px; */
  padding: 5px;
  width: 256px;
  height: 490px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #18324b;
  box-shadow: 0 2px 6px 1px #0a2540, inset 0 -5px 2px 1px #0a2540,
    inset 0 2px 3px 1px #adbccb;
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 36px;
`;
