import React, { useEffect } from "react";
import { connect } from "frontity";
import Switch from "@frontity/components/switch";

import Home from "./Home";
import Post from "./Post";
import Page from "./Page";
import Blog from "./Blog";
import Footer from "./Footer";
import Header from "./Header";
import Theme from "./Theme";

const Loading = () => <p>Cargando</p>;

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  const posts = Object.values(state.source.post).sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <>
      <Theme />
      <Header />
      <main>
        <Switch>
          <Loading when={!data.isFetching} />
          <Home when={data.isHome} posts={posts} />
          <Post when={data.isPost && data.route != "/blog/"} />
          <Page
            when={data.isPage && data.route != "/blog/" && data.route != "/"}
          />
          <Blog when={data.isArchive && data.route == "/blog/"} />
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
