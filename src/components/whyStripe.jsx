import React from "react";

import styled from "styled-components";

import theme from "../lib/themes";

import Image1 from "../assets/images/whyStripeIcon1.png";
import Image2 from "../assets/images/whyStripeIcon2.png";
import Image3 from "../assets/images/whyStripeIcon3.png";
import Image4 from "../assets/images/whyStripeIcon4.png";

const DescriptionLink = styled.a`
  color: ${theme.color.purpure};
  font-size: ${theme.fontSize.base};
  cursor: pointer;
`;

const array = [
  {
    id: 1,
    image: Image1,
    title: "Close to the metal",
    description: (
      <>
        From <DescriptionLink> direct integrations </DescriptionLink> with card
        networks and banks to checkout flows in the browser, we operate on and
        optimize at every level of the financial stack.
      </>
    ),
  },
  {
    id: 2,
    image: Image2,
    title: "Fastest-improving platform",
    description: (
      <>
        We release <DescriptionLink> hundreds of features </DescriptionLink>
        and improvements each year to help you stay ahead of industry shifts.
        (On average, we deploy our production API 16x per day.)
      </>
    ),
  },
  {
    id: 3,
    image: Image3,
    title: "Battle-tested reliability",
    description: (
      <>
        Our systems operate with <DescriptionLink> 99.99%+ </DescriptionLink>
        uptime and are highly scalable and redundant. Stripe is certified to the
        highest compliance standards.
      </>
    ),
  },
  {
    id: 4,
    image: Image4,
    title: "Intelligent optimizations",
    description: (
      <>
        Our machine learning models train on
        <DescriptionLink> billions </DescriptionLink> of data points and help
        increase revenue across conversion, fraud, revenue recovery, and more.
      </>
    ),
  },
];

const WhyStripe = () => {
  return (
    <Container>
      <Subtitle>Why Stripes</Subtitle>
      <Title>A technology-first approach to payments and finance</Title>
      <InfoContainer>
        {array.map((item) => (
          <CardContainer key={item.id}>
            <ImageContainer>
              <img src={item.image} alt={`${item.title} icon`} />
            </ImageContainer>
            <TitleContainer>
              <Line>
                <Label>{item.title}</Label>
              </Line>
            </TitleContainer>
            <Description>{item.description}</Description>
          </CardContainer>
        ))}
      </InfoContainer>
    </Container>
  );
};

export default WhyStripe;

const Container = styled.section`
  flex-direction: column;
  display: flex;
`;

const Line = styled.span`
  height: 14px;
  display: flex;
  border-left: 1px solid ${theme.color.purpure};
  align-items: center;
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

const Label = styled.h1`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
  padding-left: 14px;
`;

const InfoContainer = styled.div`
  gap: 18px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  color: ${theme.color.darkGray};
  height: 72px;
  padding: 0 14px;
  font-size: ${theme.fontSize.normal};
  text-align: justify;
  margin-top: 8px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageContainer = styled.picture`
  padding-left: 14px;
  margin-bottom: 8px;
`;
