import React, { useState } from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import AnguloSVG from "../assets/icons/angulo-derecho.svg";
import ArrowSVG from "../assets/icons/flecha-derecha.svg";

import Console from "../assets/images/console.png";
import Configuration from "../assets/images/confi.png";
import Cubes from "../assets/images/cubes.png";

import Button from "./button";

const DevelopersForDesigned = () => {
  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const handleMouseEnter2 = () => {
    setIsHover2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHover2(false);
  };
  return (
    <InfoContainer>
      <Container>
        <Subtitle>Designed for developers</Subtitle>
        <Title>The world’s most powerful and easy-to-use APIs</Title>
        <DescriptionContainer>
          <Description>
            We agonize over the right abstractions so your teams don’t need to
            stitch together disparate systems or spend months integrating
            payments functionality.
          </Description>
        </DescriptionContainer>
        <ButtonContainer>
          <Button
            title="Read the docs"
            backgroundColor={theme.color.lightBlue}
            colorLabel={theme.color.primary}
          />
          <></>
        </ButtonContainer>
        <DescriptionContainer>
          <SubInfoContainer>
            <picture>
              <img src={Configuration} alt="configuration terminal" />
            </picture>
            <Line>
              <SecodLabel>Tools for every stack</SecodLabel>
            </Line>

            <div style={{ paddingLeft: 12 }}>
              <SubDescriptionContainer>
                We offer client and server libraries in everything from React
                and PHP to .NET and iOS.
              </SubDescriptionContainer>
              <SecondButtonContainer
                onMouseEnter={handleMouseEnter}
                onMouseOut={handleMouseLeave}
              >
                See libraries
                <Icon src={isHover ? ArrowSVG : AnguloSVG} />
              </SecondButtonContainer>
            </div>
          </SubInfoContainer>
          <SubInfoContainer style={{ paddingTop: 18 }}>
            <picture>
              <img src={Cubes} alt="configuration terminal" />
            </picture>

            <Line>
              <SecodLabel>Prebuilt integrations</SecodLabel>
            </Line>
            <div style={{ paddingLeft: 12 }}>
              <SubDescriptionContainer>
                Use integrations for systems like Shopify, WooCommerce,
                NetSuite, and more.
              </SubDescriptionContainer>
              <SecondButtonContainer
                onMouseEnter={handleMouseEnter2}
                onMouseOut={handleMouseLeave2}
              >
                Explore partners
                <Icon src={isHover2 ? ArrowSVG : AnguloSVG} />
              </SecondButtonContainer>
            </div>
          </SubInfoContainer>
        </DescriptionContainer>
      </Container>

      <picture>
        <img src={Console} alt="console terminal" />
      </picture>
    </InfoContainer>
  );
};

export default DevelopersForDesigned;

const Container = styled.section`
  display: flex;
  padding-left: 18px;
  flex-direction: column;
`;

const InfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Subtitle = styled.h2`
  color: ${theme.color.lightBlue};
  font-size: ${theme.fontSize.base};
`;

const Title = styled.h1`
  color: ${theme.color.white};
  width: 508px;
  font-size: 3.8rem;
`;

const Description = styled.p`
  color: ${theme.color.gray};
  width: 452px;
  font-size: ${theme.fontSize.base};
  text-align: left;
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
const SecondButtonContainer = styled.a`
  color: ${theme.color.lightBlue};
  cursor: pointer;
  display: flex;
  font-size: ${theme.fontSize.normal};
  margin-top: 10px;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    color: ${theme.color.white};
  }
`;

const SecodLabel = styled.h1`
  color: ${theme.color.white};
  font-size: ${theme.fontSize.small};
  font-weight: bold;
  margin-left: 10px;
`;

const Line = styled.span`
  height: 14px;
  display: flex;
  border-left: 1px solid ${theme.color.lightBlue};
  align-items: center;
  justify-content: center;
`;

const SubDescriptionContainer = styled.div`
  color: ${theme.color.gray};
  width: 190px;
  height: 72px;
  font-size: ${theme.fontSize.small};
  margin-top: 8px;
  padding-right: 14px;
`;

const SubInfoContainer = styled.div`
  height: 300px;
  display: flex;
  align-items: flex-start;
  margin-right: 6px;
  flex-direction: column;
`;

const Icon = styled.img`
  width: 14px;
  height: 14px;
  margin-left: 6px;
`;
