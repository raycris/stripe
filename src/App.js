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
  display: flex;
  flex-direction: column;
  width: 58%;
  align-items: center;
  justify-content: flex-start;
  height: 838px;
  opacity: 1;
  transition: opacity 1.8s ease-in 50ms;
  background-color: black;
`;

const Container = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;
`;

