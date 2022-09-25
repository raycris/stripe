import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

import Icon1 from "../assets/images/sale-icon.png";
import Icon2 from "../assets/images/sale-icon2.png";
import Button from "./button";

const information = [
  {
    id: 1,
    image: Icon1,
    title: "Always know what you pay",
    description: "Integrated per-transaction pricing with no hidden fees.",
    buttonLabel: "Pricing details",
  },
  {
    id: 2,
    image: Icon2,
    title: "Start your integration",
    description: "Get up and running with Stripe in as little as 10 minutes.",
    buttonLabel: "API reference",
  },
];

const ReadyToStarted = () => {
 
  return (
    <Container>
      <InfoContainer>
        <Title>Ready to get started?</Title>
        <CardContainer>
          <Description>
            Explore <DescriptionLink>Stripe Payments</DescriptionLink>, or
            create an account instantly and start accepting payments. You can
            also contact us to design a custom package for your business.
          </Description>
          <ButtonContainer>
            <Button
              backgroundColor={theme.color.purpure}
              colorLabel={theme.color.white}
              hoverColor={theme.color.primary}
              opacity={false}
              title="Start now"
            />
            <Button
              hoverLabelColor
              backgroundColor={theme.color.white}
              colorLabel={theme.color.purpure}
              opacity={false}
              title="Contact sales"
            />
          </ButtonContainer>
        </CardContainer>
      </InfoContainer>
      {information.map((item) => (
        <InfoContainer key={item.id}>
          <CardContainer>
            <ImageContainer>
              <img src={item.image} alt={item.title} />
            </ImageContainer>
            <TitleContainer>
              <Line>
                <Label>{item.title}</Label>
              </Line>
            </TitleContainer>
            <CardDescription>{item.description}</CardDescription>
            <ButtonContainer>
              <Button
                hoverLabelColor
                backgroundColor={theme.color.white}
                colorLabel={theme.color.purpure}
                opacity={false}
                title={item.buttonLabel}
              />
            </ButtonContainer>
          </CardContainer>
        </InfoContainer>
      ))}
    </Container>
  );
};

export default ReadyToStarted;

const Container = styled.section`
  display: flex;
  padding: 128px 0 318px;
  align-items: center;
  justify-content: center;
`;

const Line = styled.span`
  height: 14px;
  display: flex;
  border-left: 1px solid ${theme.color.purpure};
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${theme.color.primary};
  font-size: 2.4rem;
`;

const Label = styled.h1`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.small};
  font-weight: bold;
  padding-left: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardContainer = styled.section`
  display: flex;
  margin-right: 20px;
  flex-direction: column;
  justify-content: space-between;
`;

const Description = styled.div`
  color: ${theme.color.darkGray};
  width: 60%;
  height: 72px;
  font-size: ${theme.fontSize.normal};
  margin-top: 8px;
  margin-bottom: 20px;
`;
const CardDescription = styled.div`
  color: ${theme.color.darkGray};
  height: 72px;
  font-size: ${theme.fontSize.normal};
  margin-top: 12px;
`;

const DescriptionLink = styled.a`
  color: ${theme.color.purpure};
  cursor: pointer;
  font-size: ${theme.fontSize.base};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.picture`
  padding-left: 14px;
  margin-bottom: 8px;
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 18px;
  align-items: center;
`;


