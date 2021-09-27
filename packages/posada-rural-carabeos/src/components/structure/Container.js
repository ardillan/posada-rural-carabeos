import React from "react";
import { connect, styled } from "frontity";

const Container = ({ children, styles, state }) => {
  const Container = styled.div`
    ${styles ? styles : ""};
    width: 90%;
    max-width: 900px;
    margin: auto;
    display: grid;

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      margin: 1.5rem;
      display: grid;
    }
  `;

  return <Container>{children}</Container>;
};

export default connect(Container);
