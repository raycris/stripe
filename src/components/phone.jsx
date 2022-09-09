import React from "react";
import styled from "styled-components";

import PhoneImage from "../assets/images/phone.png";
import HeaderChart from "./headerChart";

const Phone = () => {
  return (
    <>
      <Container>
        <ImageBackground src={PhoneImage} alt="User information" />
      </Container>
      <HeaderChart />
    </>
  );
};

export default Phone;

const Container = styled.picture`
  width: 264px;
  height: 533px;
  padding: 8px;
  margin-right:36px;
  position: relative;
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
  border-radius: 36px;
  background-color: #f6f9fc;
`;

const ImageBackground = styled.img`
  border-radius: 36px;
`;
