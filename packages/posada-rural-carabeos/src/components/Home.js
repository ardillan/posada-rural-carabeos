import React from "react";
import { connect, styled } from "frontity";

const Home = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const MainHeader = styled.div`
    padding: 0;
  `;

  const MainHeaderBackground = styled.div`
    width: 100%;
    background-repeat: no-repeat;

    z-index: -1;
    background-position: center;
    margin: auto;
    left: 0;
    right: 0;
    bottom: 0;
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      top: -140px;
      background-size: cover;
      min-height: 240px;
      position: relative;
      margin-bottom: -160px;
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      top: -140px;
      background-size: cover;
      min-height: 200px;
      position: relative;
      margin-bottom: -160px;
      display: none;
    }
  `;

  const DescriptionContent = styled.div`
    width: ${state.theme.screenSizes.container};
    margin: auto;

    img {
      width: 100%;
      display: block;
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: 100%;
      margin: auto;
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: 100%;
      margin: auto;
    }
  `;

  const posts = Object.values(state.source.post).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const keys = Object.keys(posts);

  let stickyPosts = [];

  const getStickyPosts = () => {
    keys.map((id) => {
      if (posts[id].sticky) {
        stickyPosts.push(posts[id]);
      }
    });

    stickyPosts.sort(function (a, b) {
      if (a.date < b.date) return 1;
      if (a.date > b.date) return -1;
      return 0;
    });
  };

  return (
    <>
      <MainHeader></MainHeader>
      <MainHeaderBackground />
      <DescriptionContent>
        <Html2React html={post.content.rendered} />
      </DescriptionContent>
    </>
  );
};

export default connect(Home);
