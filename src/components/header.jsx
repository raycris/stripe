import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

const Header = () => {
  return (
    <Container>
      <LogoButton>stripe</LogoButton>
      <Sidebar>
        <Label>Products</Label>
        <Label>Solutions</Label>
        <Label>Developers</Label>
        <Label>Resources</Label>
        <Label>Pricing</Label>
      </Sidebar>
      <SignInButton>Sign in</SignInButton>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Label = styled.a`
  color: ${theme.color.white};
  margin: 10px;
  padding: 10px 20px;
  font-size: 1.5rem;
  &:hover {
    opacity: 0.5;
  }
`;

const Sidebar = styled.div`
  align-items: center;
  justify-content: space-between;
`;
const LogoButton = styled.a`
  color: ${theme.color.white};
  cursor: pointer;
  padding: 4px;
  font-size: 2rem;
  font-weight: bolder;
  &:hover {
    opacity: 0.5;
  }
`;
const SignInButton = styled.a`
  color: ${theme.color.white};
  width: 54px;
  height: 20px;
  padding: 3px 12px 6px 16px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  font-size: 1.4rem;
  background: ${theme.color.transparent};
  align-items: center;
  border-radius: 16px;
  justify-content: space-between;
`;
