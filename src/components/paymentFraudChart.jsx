import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

import Risk from "../assets/images/riskChart.png";

const PaymentFraudChart = () => {
  return (
    <Container>
      <ImageBackground src={Risk} alt="fraud & risk chart" />
    </Container>
  );
};

export default PaymentFraudChart;

const Container = styled.picture`
  width: 792px;
  height: 424px;
  border-radius: 10px;
  background-color: ${theme.color.white};
  box-shadow: 0 50px 100px -20px rgb(50 50 93 / 25%),
    0 30px 60px -30px rgb(0 0 0 / 30%), inset 0 -2px 6px 0 rgb(10 37 64 / 35%);
`;

const ImageBackground = styled.img`
  width: 100%;
  border-radius: 10px;
`;
