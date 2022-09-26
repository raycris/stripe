import React from "react";

import styled from "styled-components";

import theme from "../lib/themes";

import Button from "./button";

import Photo from "../assets/images/stripeSessions.png";

const VirtualEvent = () => {
  return (
    <Container>
      <InfoContainer>
        <Subtitle>Virtual event</Subtitle>
        <Title>Watch Sessions on demand</Title>
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
  display: grid;
  padding: 128px 0;
  justify-content: center;
  grid-template-columns: 410px 1fr;
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
  width: 340px;
  font-size: 3.8rem;
`;

const Description = styled.div`
  color: ${theme.color.darkGray};
  height: 72px;
  padding: 0 14px;
  font-size: ${theme.fontSize.normal};
  text-align: justify;
`;

const ButtonContainer = styled.span`
  display: flex;
  margin-top: 40px;
  justify-content: flex-start;
`;
