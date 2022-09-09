import React from "react";
import styled from "styled-components";

import PhoneImage from "../assets/images/phone.png";

const Phone = () => {
  return (
    <Container>
      <ImageBackground src={PhoneImage} alt="User information" />
    </Container>
  );
};

export default Phone;

const Container = styled.picture`
  width: 264px;
  height: 533px;
  padding: 8px;
  /* position: relative; */
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
  border-radius: 36px;
  background-color: #f6f9fc;
`;

const ImageBackground = styled.img`
  border-radius: 36px;
`;

const ChartContainer = styled.div`
  width: 930px;
  height: 930px;
  background: linear-gradient(
    hsla(0, 0%, 100%, 0.4),
    hsla(0, 0%, 100%, 0.3) 25%,
    rgba(246, 249, 252, 0.3) 50%,
    #f6f9fc 60%
  );
  box-shadow: inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%),
    0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%);
  border-radius: 8px;

  line-height: 14px;
  /* position: absolute;
z-index: -1; */
`;
