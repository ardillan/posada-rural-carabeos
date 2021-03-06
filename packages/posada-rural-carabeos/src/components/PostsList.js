import React from "react";
import { connect, styled } from "frontity";
import Link from "./Link";
import { renderText, formatDate } from "../utils/helpers";

const PostsList = ({ state, libraries }) => {
  const fetchPosts = libraries.source.api.get({ endpoint: "posts" });
  fetchPosts.then((response) => {
    libraries.source.populate({ response, state });
  });

  const posts = Object.values(state.source.post).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const Html2React = libraries.html2react.Component;

  const PostHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
    img {
      width: 100%;
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
      display: flex;
      justify-content: center;
      align-content: center;
    }
    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      width: auto;
      grid-template-columns: 1fr;
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      width: auto;
      grid-template-columns: 1fr;
    }
  `;

  const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 55px;
    h2 {
      font-size: 30px;
      font-weight: 400;
      margin: 0;
      color: ;
      text-decoration: none;
      text-decoration-thickness: 3px;
    }
    a {
      color: inherit;
    }
    date {
      font-size: 14px;
    }
    p {
      font-size: 18px;
    }
  `;

  const Article = styled.div`
    padding: 20px;
    border: 2px solid #005636;
    margin: 30px 0;
    background: white;
    color: black;

    time {
      font-size: 15px;
      margin-bottom: 30px;
    }
  `;

  return (
    <>
      <Items>
        {posts.map((post) => {
          return (
            <Article key={post.id}>
              <Link href={post.link} key={post.id}>
                <h2>{renderText(post.title.rendered)}</h2>
                <time>Escrito el {formatDate(post.date)}</time>
                <Html2React html={post.excerpt.rendered} />
              </Link>
            </Article>
          );
        })}
      </Items>
    </>
  );
};

export default connect(PostsList);
