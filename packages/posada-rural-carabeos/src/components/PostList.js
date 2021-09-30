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

  const Items = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 55px;
    h2 {
      font-size: 30px;
      font-weight: 400;
      margin: 0;
      color: ;
      text-decoration: underline;
      text-decoration-thickness: 3px;
    }
    date {
      font-size: 14px;
    }
    p {
      font-size: 18px;
    }
  `;

  return (
    <>
      <Items>
        {posts.map((post) => {
          return (
            <Link href={post.link} key={post.id}>
              <h2>{renderText(post.title.rendered)}</h2>
              <time>Escrito el {formatDate(post.date)}</time>
              <Html2React html={post.excerpt.rendered} />
            </Link>
          );
        })}
      </Items>
    </>
  );
};

export default connect(PostsList);
