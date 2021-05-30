import React from "react";
import { Global, css } from "frontity";

import NunitoRegular from "../../assets/fonts/nunito/Nunito-Regular.ttf";
import NunitoSemiBold from "../../assets/fonts/nunito/Nunito-SemiBold.ttf";
import NunitoBold from "../../assets/fonts/nunito/Nunito-Bold.ttf";
// import NoticiaTextRegular from "../../assets/fonts/noticia_text/NoticiaText-Regular.ttf";
// import NoticiaTextBold from "../../assets/fonts/noticia_text/NoticiaText-Bold.ttf";

const Fonts = () => {
  return (
    <>
      <Global
        styles={css`
          @font-face {
            font-family: "Nunito";
            src: url(${NunitoRegular}) format("truetype");
            font-weight: 400;
          }
          @font-face {
            font-family: "Nunito";
            src: url(${NunitoSemiBold}) format("truetype");
            font-weight: 600;
          }
          @font-face {
            font-family: "Nunito";
            src: url(${NunitoBold}) format("truetype");
            font-weight: 800;
          }
        `}
      />
    </>
  );
};

export default Fonts;
