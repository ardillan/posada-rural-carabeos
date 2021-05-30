import React from "react";
import { connect, styled } from "frontity";

const FooterContainer = styled.div`
  width: 100%;
  text-align: center;
  padding: 3rem;
  background: #fabada;
`;

const Footer = () => (
  <FooterContainer>
    <footer>Posada Rural Carabeos</footer>
  </FooterContainer>
);

export default connect(Footer);
