import React, { useState } from "react";
import styled from "styled-components";

import theme from "../lib/themes";

import AnguloSVG from "../assets/icons/angulo-derecho.svg";
import ArrowSVG from "../assets/icons/flecha-derecha.svg";

const Button = ({ ...props }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <Container
      backgroundColor={props.backgroundColor}
      opacity={props.props}
      hoverColor={props.hoverColor}
      onMouseEnter={handleMouseEnter}
      onMouseOut={handleMouseLeave}
    >
      <Label
        colorLabel={props.colorLabel}
        hoverLabelColor={props.hoverLabelColor}
      >
        {props.title}
      </Label>
      <Icon src={isHover ? ArrowSVG : AnguloSVG} />
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
  background-color: ${(props) => `${props.backgroundColor}`};
  &:hover {
    opacity: ${(props) => (`${props.opacity}` ? 0.8 : 1)};
    background-color: ${(props) => `${props.hoverColor}`};
  }
`;

const Label = styled.p`
  color: ${(props) => `${props.colorLabel}`};
  font-size: ${theme.fontSize.small};
  text-align: center;
  font-weight: bold;
  &:hover {
    color: ${(props) =>
      `${props.hoverLabelColor}`
        ? `${theme.color.primary}`
        : `${props.colorLabel}`};
  }
`;

const Icon = styled.img`
  width: 10px;
  height: 10px;
`;
