import React, { useEffect, useState } from "react";
import { connect, styled, css } from "frontity";
import Image from "@frontity/components/image";
import Link from "./Link";
import { renderText, formatDate } from "../utils/helpers";
import HomeCover from "../../assets/images/home_cover.png";

import Footer from "./Footer";

const Home = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const Html2React = libraries.html2react.Component;

  const Items = styled.div`
    width: ${state.theme.screenSizes.container};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(245px, 1fr));
    grid-gap: 2rem;
    margin-top: 20px;
    align-items: space-around;
    padding: 20px;
    margin: 25px auto;
    a {
      background: white;
      padding: 20px 30px;
      border: 1px solid #c1d9f1;
      color: initial;
    }
    h2 {
      font-size: 25px;
      font-weight: 600;
    }
    date {
      font-size: 14px;
    }
    p {
      font-size: 1rem;
      font-family: "Nunito";
    }
  `;

  const MainHeader = styled.div`
    padding: 20px;
  `;

  const MainHeaderBackground = styled.div`
    width: 100%;
    background-repeat: no-repeat;
    top: -400px;
    position: absolute;
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
    }
  `;

  const MainHeaderContent = styled.div`
    width: ${state.theme.screenSizes.container};
    display: grid;
    grid-template-columns: 1fr;
    background: white;
    box-shadow: 0px 0px 20px #e8f0ff;
    padding: 20px;
    margin: -300px auto 20px;
    height: 300px;
    border-radius: 30px;
    img {
      height: 350px;
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      overflow: hidden;
      margin: auto;

      img {
        max-height: 200px;
      }
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: 100%;
      margin: auto;
      padding: 0;
      grid-template-columns: 1fr;
      div:last-child {
        width: initial;
        img {
          display: none;
        }
      }
    }
  `;

  const DescriptionContent = styled.div`
    width: ${state.theme.screenSizes.container};
    margin: auto;

    img {
      width: 100%;
      display: block;
      border-radius: 20px;
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr;
      width: auto;
      padding: 20px;
      margin: 0;
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;
      width: auto;
      padding: 20px;
      margin: 0;
    }
  `;

  const MorePostsButton = styled.div`
    background: #ffe607;
    width: 160px;
    text-transform: uppercase;
    font-size: 13px;
    text-align: center;
    font-weight: 600;
    padding: 5px 0;
    position: relative;
    max-height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: ${state.theme.colors.darkYellow};
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
      <MainHeader>
        {/* <MainHeaderContent>
           <div>
            <img src={HomeCover} alt="Imágen de cabecera" />
          </div>
          <div>
            <h2>{renderText(sticky[0].title.rendered)}</h2>
            <div
              css={css`
                font-family: "Nunito";
              `}
              dangerouslySetInnerHTML={{
                __html: sticky[0].excerpt.rendered,
              }}
            />
            <Link href={sticky[0].link} type="button">
              ¡Cuéntame más!
            </Link>
          </div> 
        </MainHeaderContent>*/}
      </MainHeader>
      <MainHeaderBackground />
      <DescriptionContent>
        <Html2React html={post.content.rendered} />
      </DescriptionContent>
      <Items>
        {/* {keys.slice(0, 3).map((id) => {
          return (
            <Link href={posts[id].link} key={id}>
              <h2>{renderText(posts[id].title.rendered)}</h2>
              <time>Escrito el {formatDate(posts[id].date)}</time>
              <div
                dangerouslySetInnerHTML={{
                  __html: posts[id].excerpt.rendered,
                }}
              />
            </Link>
          );
        })} */}
        <MorePostsButton>
          <Link href="/blog/">Ver más entradas</Link>
        </MorePostsButton>
      </Items>

      <Footer />
    </>
  );
};

export default connect(Home);
