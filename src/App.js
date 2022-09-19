import React from "react";
import styled from "styled-components";

import "./App.css";

import theme from "./lib/themes";

import Brands from "./components/brands";
import DevelopersForDesigned from "./components/developersForDesigned";
import GlobalScale from "./components/globalScale";
import Header from "./components/header";
import HeroInfo from "./components/heroInfo";
import PaymentProducts from "./components/paymentProducts";
import WhyStripe from "./components/whyStripe";

import World2 from "./assets/images/world2.gif";

function App() {
  return (
    <Container>
      <HeroContainer>
        <Header />
        <InfoContainer>
          <HeroInfo />
        </InfoContainer>
      </HeroContainer>

      <HeroContainer>
        <Brands />
      </HeroContainer>

      <HeroContainer>
        <PaymentProducts />
      </HeroContainer>

      <MyCOntainer style={{marginTop: "600px"}}>
        <DevelopersForDesigned />
      </MyCOntainer>

      <HeroContainer>
        <WhyStripe />
      </HeroContainer>

      <MyCOntainer>
        <GlobalScale />
        <ImageContainer>
          <Imagen src={World2} alt="world" />
        </ImageContainer>
      </MyCOntainer>
    </Container>
  );
}

export default App;

const HeroContainer = styled.div`
  width: 58%;
  height: 838px;
  opacity: 1;
  display: flex;
  padding: 0 0 110px;
  transition: opacity 1.8s ease-in 50ms;
  align-items: flex-start;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyCOntainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${theme.color.primary};
`;

const ImageContainer = styled.picture`
  width: auto;
  height: auto;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
`;
