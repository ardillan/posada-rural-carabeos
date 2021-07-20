import React from "react";
import { connect, styled } from "frontity";

const Footer = ({ state }) => {
  const FooterContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 3rem;
    background: ${state.theme.colors.green};
    color: white;

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      padding: 0;
    }
  `;
  return (
    <FooterContainer>
      <footer>Posada Rural Carabeos</footer>
    </FooterContainer>
  );
};

export default connect(Footer);
