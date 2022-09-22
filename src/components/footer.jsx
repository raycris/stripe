import React from "react";
import styled from "styled-components";
import theme from "../lib/themes";

import Stripe from "../assets/images/stripeGray.png";

import MensajeSVG from "../assets/icons/avion.svg";
import ComentarioSVG from "../assets/icons/comentarios.svg";

const info = [
  {
    id: 1,
    title: "Products",
    references: [
      "Atlas",
      "Billing",
      "Capital",
      "Checkout",
      "Climate",
      "Connect",
      "Corporate Card",
      "Data Pipeline",
      "Elements",
      "Financial Connections",
      "Identity",
      
    ],
  },
  {
    id: 2,
    title: "Use Cases",
    references: [
      "Ecommerce",
      "SaaS",
      "Marketplaces",
      "Embedded Finance",
      "Platforms",
      "Creator Economy",
      "Crypto",
      "Global Businesses",
    ],
  },
  {
    id: 3,
    title: "Resources",
    references: [
      "Support Center",
      "Support Plans",
      "Guides",
      "Customer Stories",
      "Blog",
      "Annual Conference",
      "Privacy & Terms",
      "Licenses",
      "COVID-19",
      "Sitemap",
      "Cookie settings",
    ],
  },
  {
    id: 4,
    title: "",
    references: [],
  },
  {
    id: 5,
    title: "",
    references: ["Invoicing",
    "Issuing",
    "Payments",
    "Payment Links",
    "Payouts",
    "Pricing",
    "Radar",
    "Revenue Recognition",
    "Sigma",
    "Tax",
    "Terminal",
    "Treasury",],
  },
  {
    id: 6,
    title: "Integrations & Custom Solutions",
    references: [
      "App Marketplace",
      "Partner Ecosystem",
      "Professional Services",
    ],
  },
  {
    id: 7,
    title: "Company",
    references: ["Jobs", "Newsroom", "Stripe Press", "Become a Partner"],
  },
  {
    id: 8,
    title: "",
    references: ["© 2022 Stripe, Inc."],
  },
  {
    id: 9,
    title: "",
    references: [],
  },
  {
    id: 10,
    title: "Developers",
    references: [
      "Documentation",
      "API Reference",
      "API Status",
      "API Changelog",
      "Build a Stripe App",
    ],
  },
];

const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <picture>
          <img src={Stripe} alt="Logo" />
        </picture>
        <LogoLabel>
          <Icon src={MensajeSVG} alt="Send menssage icon" />
          United State
        </LogoLabel>
        <LogoLabel>
          <Icon src={ComentarioSVG} alt="Send comment icon" />
          English(United State)
        </LogoLabel>
      </LogoContainer>

      {info.map((item) => (
        <ReferenceContainer key={item.id}>
          <ul>
            <Title>{item.title}</Title>
            {item.references.map((element) => (
              <ReferenceContainer>
                <Subtitle>{element}</Subtitle>
              </ReferenceContainer>
            ))}
          </ul>
        </ReferenceContainer>
      ))}
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: grid;
  grid-template-columns: auto auto auto auto;

  grid-template-rows: 300px 2fr 2fr;
  /* grid-template-rows: 200px 200px 200px; */
`;

const Title = styled.h1`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
  margin: 0 0 8px;
`;
const Subtitle = styled.a`
  color: ${theme.color.primary};
  font-size: ${theme.fontSize.normal};
  cursor: pointer;
  

  &:hover {
    opacity: 0.7;
  }
`;

const LogoContainer = styled.section`
  display: flex;
  flex-direction: column;
`;
const LogoLabel = styled.span`
  color: ${theme.color.primary};
  cursor: pointer;
  display: flex;
  font-size: ${theme.fontSize.normal};
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 8px;
`;

const ReferenceContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin: 4px 0;
  flex-wrap: wrap;
`;
