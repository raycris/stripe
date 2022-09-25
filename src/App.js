import React from "react";
import styled from "styled-components";

import "./App.css";

import theme from "./lib/themes";

import World2 from "./assets/images/world2.gif";

import Brands from "./components/brands";
import DevelopersForDesigned from "./components/developersForDesigned";
import Footer from "./components/footer";
import GlobalScale from "./components/globalScale";
import Header from "./components/header";
import HeroInfo from "./components/heroInfo";
import PaymentProducts from "./components/paymentProducts";
import ReadyToStarted from "./components/readyToStarted";
import VirtualEvent from "./components/virtualEvent";
import WhyStripe from "./components/whyStripe";

function App() {
  return (
    <Container>
      <BackGroundGradient>
        <HeroContainer>
          <Header />
          <InfoContainer>
            <HeroInfo />
          </InfoContainer>
        </HeroContainer>
      </BackGroundGradient>

      <HeroContainer>
        <Brands />
      </HeroContainer>

      <Grayntainer style={{ height: "100%", padding: " 0px  0 820px" }}>
        <HeroContainer>
          <PaymentProducts />
        </HeroContainer>
      </Grayntainer>

      <PrimaryContainer >
        <DevelopersForDesigned />
      </PrimaryContainer>

      <HeroContainer>
        <WhyStripe />
      </HeroContainer>

      <PrimaryContainer>
        <GlobalScale />
        <ImageContainer>
          <Imagen src={World2} alt="world" />
        </ImageContainer>
      </PrimaryContainer>

      <Grayntainer>
        <VirtualEvent />
      </Grayntainer>

      <HeroContainer>
        <ReadyToStarted />
      </HeroContainer>

      <Grayntainer style={{ height: "100%", padding: "320px 0px 128px" }}>
        <Footer />
      </Grayntainer>
    </Container>
  );
}

export default App;

const BackGroundGradient = styled.div`
  width: 100%;
  z-index: -1;
  display: flex;
  animation: bg-animation 6s infinite alternate;
  align-items: center;
  justify-content: center;
  background-size: 400%;
  background-image: var(--gradient);

  @keyframes bg-animation {
    0% {
      background-position: left;
    }
    100% {
      background-position: right;
    }
  }
`;

const HeroContainer = styled.div`
  width: 58%;
  height: 838px;
  opacity: 1;
  display: flex;
  padding: 0 0 110px;
  transition: opacity 1.8s ease-in 50ms;
  align-items: flex-start;
  flex-direction: column;
  
  /* background-color: red; */
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

const PrimaryContainer = styled.div`
  width: 100%;
  display: flex;
  background: ${theme.color.primary};
  align-items: center;
  justify-content: center;
`;
const Grayntainer = styled.div`
  width: 100%;
  display: flex;
  background: ${theme.color.backgroundGray};
  align-items: center;
  justify-content: center;
`;

const ImageContainer = styled.picture`
  width: auto;
  height: auto;
`;

const Imagen = styled.img`
  width: 100%;
  height: 100%;
`;
