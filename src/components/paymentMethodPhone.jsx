import React, { useEffect, useState } from "react";

import styled from "styled-components";

import payment1 from "../assets/images/paymentPhone1.png";
import payment2 from "../assets/images/paymentPhone2.png";
import payment3 from "../assets/images/paymentPhone3.png";
import payment4 from "../assets/images/paymentPhone4.png";

const images = [payment1, payment2, payment3, payment4];

const PaymentMethodPhone = () => {
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    
    <Container>
      <ImageBackground src={currentImage} alt="User payment information" />
    </Container>
  );
};

export default PaymentMethodPhone;

const Container = styled.picture`
  width: 270px;
  height: 573px;
  padding: 8px;
  position: relative;
  margin-right: 36px;
  border-radius: 36px;
  background-color: #f6f9fc;
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
`;

const ImageBackground = styled.img`
  border-radius: 36px;
`;
