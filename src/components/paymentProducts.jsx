import React from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import Button from "./button";
import CreditCard from "./creditCard";
import PaymentFraudChart from "./paymentFraudChart";
import PaymentMethodPhone from "./paymentMethodPhone";
import PaymentObject from "./paymentObject";
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
          <DescriptionLink> online and in-person retailers</DescriptionLink>,
          <DescriptionLink> subscriptions businesses</DescriptionLink>,
          <DescriptionLink> software platforms and marketplaces</DescriptionLink>
          , and everything in between.
        </Description>
        <Description>
          We also help companies <DescriptionLink>beat fraud</DescriptionLink>,
          <DescriptionLink> send invoices</DescriptionLink>,
          <DescriptionLink> issue virtual and physical cards</DescriptionLink>,
          <DescriptionLink> get financing</DescriptionLink>,
          <DescriptionLink> manage business spend</DescriptionLink>, and much
          more.
        </Description>
      </DescriptionContainer>
      <ButtonContainer>
        <Button
          title="Start with payment"
          opacity={false}
          hoverColor={theme.color.primary}
          backgroundColor={theme.color.purpure}
          colorLabel={theme.color.white}
        />
        <></>
      </ButtonContainer>
      <ImageContainer>
        <div>
          <CreditCard />
        </div>
        <div>
          <PayMethodChart />
        </div>
        <div>
          <PaymentObject />
        </div>
        <PaymentMethodPhone />
        <PaymentFraudChart />
      </ImageContainer>
    </Container>
  );
};

export default PaymentProducts;

const Container = styled.section`
  display: flex;
  padding: 128px 0 318px;
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
  font-weight: 500;
  font-size: ${theme.fontSize.base};
`;
const DescriptionLink = styled.a`
  color: ${theme.color.purpure};
  cursor: pointer;
  font-weight: bold;
  font-size: ${theme.fontSize.base};

  &:hover{
    color: ${theme.color.primary};
  }
`;
const DescriptionContainer = styled.span`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const ButtonContainer = styled.span`
  display: flex;
  margin-bottom: 50px;
  justify-content: flex-start;
`;

const ImageContainer = styled.div`
  display: grid;
  align-items: center;
  grid-column-gap: 4rem;
  grid-template-rows: 1fr 480px;
  grid-template-columns: 1fr 500px 1fr;
`;
