import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

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
    </Container>
  );
};

export default PaymentProducts;

const Container = styled.section`
  flex-direction: column;
  display: flex;
`;

const Subtitle = styled.h2`
  color: ${theme.color.purpure};
  font-size: ${theme.fontSize.base};
`;

const Title = styled.h1`
  font-size: 3.8rem;
  color: ${theme.color.primary};
  width: 508px;
`;

const Description = styled.p`
  font-size: ${theme.fontSize.base};
  color: ${theme.color.primary};
  width: 492px;
`;
const DescriptionLink = styled.a`
  font-size: ${theme.fontSize.base};
  color: ${theme.color.purpure};
`;
const DescriptionContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;
