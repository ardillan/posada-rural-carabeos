import React from "react";
import { connect, styled } from "frontity";

const Container = ({ children, styles }) => {
  const Container = styled.div`
    ${styles ? styles : ""};
    width: 900px;
    margin: auto;
    display: grid;
  `;

  return <Container>{children}</Container>;
};

export default connect(Container);
