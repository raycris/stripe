import React from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import AnguloSVG from "../assets/icons/angulo-derecho.svg";

const Button = ({ ...props }) => {
  return (
    <Container kind={props.kind}>
      <Label>{props.title}</Label>
      <Icon src={AnguloSVG} />
    </Container>
  );
};

export default Button;

const Container = styled.button`
  cursor: pointer;
  height: 40px;
  border: none;
  display: flex;
  min-width: 150px;
  align-items: center;
  border-radius: 68px;
  justify-content: space-around;
  background-color: ${(props) =>
    props.kind === "outline"
      ? `${theme.color.white}`
      : `${theme.color.primary}`};
  &:hover {
    opacity: 0.8;
  }
`;

const Label = styled.p`
  color: ${(props) =>
    props.kind === "outline"
      ? `${theme.color.primary}`
      : `${theme.color.white}`};
  font-size: ${theme.fontSize.small};
  text-align: center;
  font-weight: 500;
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
`;
