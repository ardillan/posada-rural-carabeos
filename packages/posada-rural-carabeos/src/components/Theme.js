import React from "react";
import { Global, css, connect, Head } from "frontity";
import Fonts from "./Fonts";

const Theme = ({ state }) => {
  return (
    <>
      <Head>
        <title>{state.frontity.title}</title>
        <meta name="description" content={state.frontity.description} />
        <html lang="es" />
        <link rel="canonical" href={state.router.link} />
      </Head>
      <Fonts />
      <Global
        styles={css`
          ::selection {
            background: ${state.theme.colors.blue};
          }
          body {
            font-family: "Nunito";
            font-weight: 400;
            font-size: 20px;
            margin: auto;
            color: #1f1c35;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: "Nunito";
            padding: 0;
            margin: 10px 0;
          }
          figcaption {
            text-align: center;
            font-size: 16px;
            background: #fff;
            width: auto;
            margin-top: 20px;
            font-family: "Nunito";
            text-transform: uppercase;
          }

          .text-center {
            text-align: center;
          }

          .text-featured {
            font-size: 30px;
          }

          .wp-block-separator {
            margin: 35px 0;
            border: none;
            border: 4px dashed ${state.theme.colors.blue};
            border-style: dotted;
            border-bottom: 0;
            border-left: 0;
            border-right: 0;
            opacity: 0.3;
          }

          .home-card {
            width: 900px;
            display: grid;
            grid-template-columns: 1fr;
            margin: -450px auto 120px;
            align-items: center;

            img {
              object-fit: none;
            }

            /* Tablet */
            @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
              width: 100%;
              align-items: center;
              margin: auto;
              img {
                width: auto:
              }
            }

            /* Mobile */
            @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
              width: 100%;
              align-items: center;
              margin: auto;

              img {
                width: auto:
              }
            }
          }

          .featured-card {
            justify-content: center;
            align-items: center;
            img {
              transform: rotate(-1deg);
            }
            p {
              font-size: 20px;
            }
          }

          .featured-card-reverse {
            justify-content: center;
            align-items: center;
            img {
              transform: rotate(1deg);
            }

            p {
              font-size: 20px;
            }
          }

          .wp-block-columns {
            display: grid;
            justify-content: space-evenly;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 50px;
            margin: 40px 0;
          }

          .sponsors-images {
            div {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;

              /* Tablet */
              @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
                grid-template-columns: 1fr;
              }
              /* Mobile */
              @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
                grid-template-columns: 1fr;
              }
            }
          }
        `}
      />
    </>
  );
};

export default connect(Theme);
