import React from "react";
import styled from "styled-components";

import Chart1 from "../assets/images/chart1.png";
import Chart2 from "../assets/images/chart2.png";
import Search from "../assets/images/search.png";

const HeaderChart = () => {
  return (
    <Container>
      <HeaderContainer>
        <ImageBackground src={Search} />
      </HeaderContainer>
      <picture>
        <ImageBackground src={Chart1} />
        <ImageBackground src={Chart2} />
      </picture>
    </Container>
  );
};

export default HeaderChart;

const Container = styled.div`
  top: 0;
  right: -20px;
  width: 500px;
  height: 550px;
  z-index: -1;
  display: flex;
  position: absolute;
  align-items: center;
  line-height: 14px;
  border-radius: 8px;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(
    hsla(0, 0%, 100%, 0.4),
    hsla(0, 0%, 100%, 0.3) 25%,
    rgba(246, 249, 252, 0.3) 50%,
    #f6f9fc 60%
  );
  box-shadow: inset 0 1px 1px 0 hsl(0deg 0% 100% / 10%),
    0 50px 100px -20px rgb(50 50 93 / 25%), 0 30px 60px -30px rgb(0 0 0 / 30%);
`;

const ImageBackground = styled.img`
  width: 100%;
  margin-left: 10px;
  border-radius: 8px;
  margin-bottom: 6px;
`;

const HeaderContainer = styled.span`
  display: flex;
  justify-content: flex-start;
`;

const Label = styled.p`
  font-size: 1.8rem;
  font-weight: bolder;
`;
const BallIcon = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background-color: #ffffff;
`;
