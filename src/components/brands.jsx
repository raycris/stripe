import React from "react";
import styled from "styled-components";

import Instarcart from "../assets/images/instarcart.png";
import Salesforce from "../assets/images/salesforce.png";
import Amazon from "../assets/images/amazon.png";
import Slack from "../assets/images/slack.png";
import Shopify from "../assets/images/shopify.png";
import Google from "../assets/images/google.png";
import Lyft from "../assets/images/lyft.png";
import Zoom from "../assets/images/zoom.png";

const array = [
  { id: 1, image: Instarcart },
  { id: 2, image: Salesforce },
  { id: 3, image: Amazon },
  { id: 4, image: Slack },
  { id: 5, image: Shopify },
  { id: 6, image: Google },
  { id: 7, image: Lyft },
  { id: 8, image: Zoom },
];

function Brands() {
  return (
    <Container>
      {array.map((item) => (
        <ImageBackground src={item.image} key={item.id} />
      ))}
    </Container>
  );
}

export default Brands;

const Container = styled.picture`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  `;

const ImageBackground = styled.img`
  width: 170px;
  height: 40px;
  margin: 16px;
  object-fit: contain;
`;
