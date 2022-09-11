import React from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import Button from "./button";
import CreditCard from "./creditCard";
import PayMethodChart from "./payMethodChart";

const PaymentProducts = () => {
  return (
    <Container>
      <Subtitle>Unified platform</Subtitle>
      <Title>A fully integrated suite of payments products</Title>
      <DescriptionContainer>
        <Description>
          We bring together everything that’s required to build websites and
          apps that accept payments and send payouts globally. Stripe’s products
          power payments for
          <DescriptionLink>online and in-person retailers</DescriptionLink>,
          <DescriptionLink>subscriptions businesses</DescriptionLink>,
          <DescriptionLink>software platforms and marketplaces</DescriptionLink>
          , and everything in between.
        </Description>
        <Description>
          We also help companies <DescriptionLink>beat fraud</DescriptionLink> ,
          <DescriptionLink>send invoices</DescriptionLink> ,
          <DescriptionLink>issue virtual and physical cards</DescriptionLink> ,
          <DescriptionLink>get financing</DescriptionLink> ,
          <DescriptionLink>manage business spend</DescriptionLink>, and much
          more.
        </Description>
      </DescriptionContainer>
      <ButtonContainer>
        <Button
          title="Start with payment"
          backgroundColor={theme.color.purpure}
          colorLabel={theme.color.white}
        />
        <></>
      </ButtonContainer>
      <ImageContainer>
        <CreditCard/>
        <PayMethodChart/>
      </ImageContainer>
    </Container>
  );
};

export default PaymentProducts;

const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.h2`
  color: ${theme.color.purpure};
  font-size: ${theme.fontSize.base};
`;

const Title = styled.h1`
  color: ${theme.color.primary};
  width: 508px;
  font-size: 3.8rem;
`;

const Description = styled.p`
  color: ${theme.color.primary};
  width: 492px;
  font-size: ${theme.fontSize.base};
`;
const DescriptionLink = styled.a`
  color: ${theme.color.purpure};
  font-size: ${theme.fontSize.base};
`;
const DescriptionContainer = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ButtonContainer = styled.span`
  display: flex;
  margin-bottom: 50px;
  justify-content: flex-start;
`;

const ImageContainer = styled.div`
  display: grid;
  gap: 1rem;

  grid-auto-flow: column;
  margin: 0 0 1rem 0;
`;
