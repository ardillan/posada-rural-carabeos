import React from "react";
import { connect, styled } from "frontity";
import Container from "./structure/Container";
import Footer from "./Footer";
// import BreadCrumbs from "../components/BreadCrumbs";
// import Separator from "../components/structure/Separator";
// import bikeImage from "../../assets/images/home_cover.png";

const Page = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;
  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr;
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
      h1 {
        margin: 0;
        text-align: center;
        background: ${state.theme.colors.green};
        filter: brightness(0.9);
        width: 100%;
        padding: 30px;
        color: white;
      }
    }
    div:last-child {
      display: flex;
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr 1fr;
      img {
        max-width: 100%;
        width: auto;
      }
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;

      div:first-of-type {
        h1 {
          width: auto;
          padding: 20px 60px;
        }
      }

      img {
        max-width: 100%;
        width: auto;
      }
    }
  `;

  const PostContainer = styled.article`
    width: auto;
    margin: 30px 0 auto;
  `;

  const PostContent = styled.div`
    img {
      max-width: 100%;
      height: auto;
    }
    .coblocks-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
  `;

  return (
    <>
      <Container>
        <PostContainer>
          <PostHeader>
            <div>
              <h1>
                <Html2React html={post.title.rendered} />
              </h1>
            </div>
          </PostHeader>
        </PostContainer>
      </Container>
      <Container>
        <PostContainer>
          <PostContent>
            <Html2React html={post.content.rendered} />
          </PostContent>
        </PostContainer>
      </Container>
    </>
  );
};

export default connect(Page);
