import React from "react";
import styled from "styled-components";

import "./App.css";

import Brands from "./components/brands";
import DevelopersForDesigned from "./components/developersForDesigned";
import Header from "./components/header";
import HeroInfo from "./components/heroInfo";
import PaymentProducts from "./components/paymentProducts";
import theme from "./lib/themes";



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
        <PaymentProducts/>
      </HeroContainer>


      <MyCOntainer style={{background: `${theme.color.primary}`}}>
        <DevelopersForDesigned/>
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
margin-top: 600px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`