import React from "react";
import { connect, styled, css } from "frontity";
import Container from "./structure/Container";
// import BreadCrumbs from "../components/BreadCrumbs";
// import PostFeaturedMedia from "../components/FeaturedMedia";
import Footer from "../components/Footer";
import { renderText, formatDate } from "../utils/helpers";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    img {
      height: 280px;
      width: 280px;
      border-radius: 5px;
      object-fit: cover;
      object-position: top;
    }
    div:first-of-type {
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    div:last-child {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
      h1,
      p {
        margin: 0;
      }
      h1 {
        font-size: 45px;
      }
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;
      img {
        height: auto;
        width: 100%;
        border-radius: 5px;
        object-fit: contain;
      }
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;

      img {
        height: auto;
        width: 100%;
        border-radius: 5px;
        object-fit: contain;
      }
    }
  `;

  const Excerpt = styled.div`
    background: #f5f5f5;
    padding: 30px;
    border-left: 2px solid #006601;
    margin-top: 10px;
    display: block !important;
  `;
  const PageContainer = styled.article`
    width: ${state.theme.screenSizes.pageContainer};
    margin: auto;
    img {
      max-width: 100%;
      border: 1px solid #f0f0f0;
      box-shadow: 0 14px 28px rgb(212, 218, 234),
        0 10px 10px rgba(206, 206, 206, 0.22);
    }
    .wp-block-coblocks-gallery-collage {
      ul {
        margin: 0;
        padding: 0;
        list-style-type: none;
      }
      figure {
        margin: 0;
        padding: 0;
      }
      img {
        width: 100%;
        margin-bottom: 30px;
      }
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
    }
  `;

  return (
    <>
      <Container>
        <PageContainer>
          <PostHeader>
            <div>{/* <PostFeaturedMedia id={post.featured_media} /> */}</div>
            <div>
              <h1>
                <Html2React html={post.title.rendered} />
              </h1>
              <time>Escrito el {formatDate(post.date)}</time>
              <Excerpt>
                <Html2React html={post.excerpt.rendered} />
              </Excerpt>
            </div>
          </PostHeader>
        </PageContainer>
      </Container>
      <Container>
        <PageContainer>
          <Html2React html={renderText(post.content.rendered)} />
        </PageContainer>
      </Container>
    </>
  );
};

export default connect(Post);
