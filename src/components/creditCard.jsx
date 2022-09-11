import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Card1 from "../assets/images/cardImg.png";
import Card2 from "../assets/images/card2.png";
import Card3 from "../assets/images/card3.png";

const images = [Card1, Card2, Card3];

const CreditCard = () => {
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(
        images[Math.floor(Math.random() * images.length)]
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <ImageBackground src={currentImage} alt="credit card infomation" />
    </Container>
  );
};

export default CreditCard;

const Container = styled.picture`
  width: 380px;
  height: 236px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  justify-content: flex-end;
`;

const ImageBackground = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 16px;
`;
