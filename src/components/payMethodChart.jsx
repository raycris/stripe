import React, { useEffect, useState } from "react";

import styled from "styled-components";

import SlackChart from "../assets/images/slackChart.png";
import MedicalChart from "../assets/images/medicalChart.png";
import UdacityChart from "../assets/images/udacityChart.png";

const images = [SlackChart, MedicalChart, UdacityChart];

const PayMethodChart = () => {
  const [currentImage, setCurrentImage] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Container>
      <ImageBackground src={currentImage} alt="pay method" />
    </Container>
  );
};

export default PayMethodChart;

const Container = styled.picture`
  width: 502px;
  height: 362px;
  display: flex;
  border-radius: 10px;
`;

const ImageBackground = styled.img`
  width: 100%;
  border-radius: 10px;
`;
