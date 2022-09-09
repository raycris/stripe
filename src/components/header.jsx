import React from "react";
import styled from "styled-components";

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
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin: 6px;
  background-color: red;
`;
const Label = styled.a`
  font-size: 1.5rem;
  padding: 10px 20px;
  color: #ffffff;
  margin: 10px;
  &:hover{
    opacity: 0.5;
  }
`;

const Sidebar = styled.div`
  justify-content: space-between;
  align-items: center;
`;
const LogoButton = styled.a`
  padding: 4px;
  cursor: pointer;
  font-size: 2rem;
  font-weight: bolder;
  color: #ffffff;
  &:hover{
    opacity: 0.5;
  }
`;
const SignInButton = styled.a`
  padding: 4px;
  cursor: pointer;
  color: #ffffff;
  width: 54px;
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding: 3px 12px 6px 16px;
  border-radius: 16px;
  background: #FFFFFF33;
`;
