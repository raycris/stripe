import React from "react";
import styled from "styled-components";
import Phone from "./phone";

const HeroInfo = () => {
  return (
    <Container>
      <LabelContainer>
        <TitleContainer>
          <Title>Payments infrastructure for the internet</Title>
        </TitleContainer>
        <DescripContainer>
          <Description>
            Millions of companies of all sizes—from startups to Fortune 500s—use
            Stripe’s software and APIs to accept payments, send payouts, and
            manage their businesses online.
          </Description>
        </DescripContainer>
      </LabelContainer>
      <Phone />
    </Container>
  );
};

export default HeroInfo;

const Container = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Container2 = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  /* background-color: cadetblue; */
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
  position: absolute;
z-index: -1;
`;


const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 8rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 1.8rem;
  color: #fff;
`;

const TitleContainer = styled.div`
  width: 58%;
  background-color: blue;
  min-height: 200px;
`;
const DescripContainer = styled.div`
  width: 44%;
  background-color: green;
`;
