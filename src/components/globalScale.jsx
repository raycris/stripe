import React from "react";
import styled from "styled-components";

import theme from "../lib/themes";



const array = [
  {
    id: 1,
    title: "250m+",
    description: "API request per day, peaking at 13,000 request a second.",
  },
  {
    id: 2,
    title: "90%",
    description: "of U.S adults have bought from businesses using Stripe.",
  },
  {
    id: 3,
    title: "135+",
    description: "currencies and payment methods supported.",
  },
  {
    id: 4,
    title: "35+",
    description: "countries with local acquiring optimizing acceptance rates.",
  },
];

const GlobalScale = () => {
  return (
    <Container>

      <ParentContainer>
        <Subtitle>Global scale</Subtitle>
        <Title>The backbone for internet business</Title>
        <InfoContainer>
          <MainDescription>
            For ambitious companies around the world, Stripe makes moving money
            as simple, borderless, and programmable as the rest of the internet.
            Our teams are based in dozens of offices around the world and we
            process hundreds of billions of dollars each year for
            <DescriptionLink> startups to Fortune 500s.</DescriptionLink>
          </MainDescription>
          <SubInfo>
            {array.map((item) => (
              <CardContainer key={item.id}>
                <TitleContainer>
                  <Line>
                    <Label>{item.title}</Label>
                  </Line>
                </TitleContainer>
                <Description>{item.description}</Description>
              </CardContainer>
            ))}
          </SubInfo>
        </InfoContainer>
      </ParentContainer>

      
      
    </Container>
  );
};

export default GlobalScale;

const Container = styled.section`
  display: flex;
  width: 58%;
`;
const ParentContainer = styled.section`
  flex-direction: column;
  display: flex;
`;

const Line = styled.span`
  height: 14px;
  display: flex;
  border-left: 1px solid ${theme.color.lightBlue};
  align-items: center;
  justify-content: center;
`;

const Subtitle = styled.h2`
  color: ${theme.color.lightBlue};
  font-size: ${theme.fontSize.base};
`;

const Title = styled.h1`
  color: ${theme.color.white};
  width: 740px;
  font-size: 3.8rem;
`;

const Label = styled.h1`
  color: ${theme.color.white};
  font-size: 2.5rem;
  font-weight: bold;
  padding-left: 14px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const MainDescription = styled.p`
  color: ${theme.color.gray};
  width: 492px;
  font-size: ${theme.fontSize.base};
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

const DescriptionLink = styled.a`
  color: ${theme.color.lightBlue};
  font-size: ${theme.fontSize.base};
`;

const SubInfo = styled.div`
  display: grid;
  gap: 6px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 16px;
`;


