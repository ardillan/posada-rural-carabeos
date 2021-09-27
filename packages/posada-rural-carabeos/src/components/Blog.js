import React from "react";
import { connect, styled } from "frontity";

import PostsList from "./PostsList";
import Container from "./structure/Container";
import Footer from "./Footer";

const Blog = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const BlogHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: -60px;
    img {
      max-width: 100%;
      width: auto;
      object-fit: contain;
      max-height: 300px;
    }
    div:first-of-type {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      h1 {
        margin: 0;
      }
    }
    div:last-child {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-content: center;
    }
  `;

  const BlogContainer = styled.article`
    width: 90%;
    max-width: 900px;
    margin: auto;
  `;

  return (
    <>
      <Container>
        <BlogContainer>
          <PostsList />
        </BlogContainer>
      </Container>
    </>
  );
};

export default connect(Blog);
