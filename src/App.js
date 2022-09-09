import React from "react";
import styled from "styled-components";

import "./App.css";

import Header from "./components/header";
import HeroInfo from "./components/heroInfo";

function App() {
  return (
    <Container>
      <HeroContainer>
        <Header />
        <InfoContainer>
          <HeroInfo />
        </InfoContainer>
      </HeroContainer>
    </Container>
  );
}

export default App;

const HeroContainer = styled.div`
  width: 58%;
  height: 838px;
  opacity: 1;
  display: flex;
  transition: opacity 1.8s ease-in 50ms;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
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
  /* background-color: cadetblue; */
`;


