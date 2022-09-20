import React from "react";

import styled from "styled-components";

import theme from "../lib/themes";

import Button from "./button";

import Photo from "../assets/images/stripeSessions.png";

const VirtualEvent = () => {
  return (
    <Container>
      <InfoContainer>
        <Subtitle>Why Stripes</Subtitle>
        <Title>A technology-first approach to payments and finance</Title>
        <Description>
          Stripe Sessions—our annual conference—is now available to watch on
          demand. Learn more about the future of the internet economy and see
          new Stripe products in action.
        </Description>
        <ButtonContainer>
          <Button
            title="Watch now"
            opacity={false}
            hoverColor={theme.color.primary}
            backgroundColor={theme.color.purpure}
            colorLabel={theme.color.white}
          />
        </ButtonContainer>
      </InfoContainer>
      <picture>
        <img src={Photo} alt="Stripe sessions" />
      </picture>
    </Container>
  );
};

export default VirtualEvent;

const Container = styled.div`
  margin: 0 200px;
  display: flex;
  justify-content: center;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Subtitle = styled.h2`
  color: ${theme.color.purpure};
  font-size: ${theme.fontSize.base};
`;

const Title = styled.h1`
  color: ${theme.color.primary};
  width: 740px;
  font-size: 3.8rem;
`;

const Description = styled.div`
  color: ${theme.color.darkGray};
  height: 72px;
  padding: 0 14px;
  font-size: ${theme.fontSize.normal};
`;

const ButtonContainer = styled.span`
  display: flex;
  margin-bottom: 50px;
  justify-content: flex-start;
`;
