import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";
import Button from "./button";


import Phone from "./phone";
import PhoneImage from "../assets/images/phone.png";


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
        <ButtonContainer>
          <Button
            opacity
            backgroundColor={theme.color.primary}
            colorLabel={theme.color.white}
            hoverColor={theme.color.primary}
            title="Start now"
          />
          <Button
            opacity
            backgroundColor={theme.color.transparent}
            colorLabel={theme.color.primary}
            hoverColor={theme.color.white}
            title="Contact sales"
          />
        </ButtonContainer>
      </LabelContainer>
      <Phone img={PhoneImage} />
    </Container>
  );
};

export default HeroInfo;

const Container = styled.div`
  display: flex;
  padding: 116px 0 128px;
  align-items: center;
  justify-content: center;
  
`;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h1`
  color: ${theme.color.primary};
  font-size: 8rem;
  margin-bottom: 0;
`;

const Description = styled.p`
  color: ${theme.color.primary};
  font-size: 1.8rem;
`;

const TitleContainer = styled.div`
  width: 75%;
  min-height: 200px;
`;
const DescripContainer = styled.div`
  width: 44%;
`;

const ButtonContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
