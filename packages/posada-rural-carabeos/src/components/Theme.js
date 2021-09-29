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
        <link
          rel="icon"
          type="image/png"
          href="https://posadaruralcarabeos.files.wordpress.com/2021/09/favicon.png"
        ></link>
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

          .container {
            /* Tablet */
            @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
              padding: 0 25px;
            }
            /* Mobile */
            @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
              padding: 0 25px;
            }
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
            border: 4px dashed ${state.theme.colors.green};
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

          .googlemaps {
            iframe { 
              width: 100%;
            }
          }

          .card {
            background: white;
            border: 2px solid ${state.theme.colors.green};
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 25px;
          }

          .two-columns {
            .wp-block-group__inner-container {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 30px;
              margin-bottom: 20px;
            }

            /* Tablet */
            @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
              .wp-block-group__inner-container {
                grid-template-columns: 1fr;
                margin-bottom: 30px;
                text-align: center;
              }
            }
            /* Mobile */
            @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
              .wp-block-group__inner-container {
                grid-template-columns: 1fr;
                margin-bottom: 30px;
                text-align: center;
              }
            }
          }

          .three-columns {
            .wp-block-group__inner-container {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 30px;
            }

            /* Tablet */
            @media screen and (min-width: ${state.theme.screenSizes.mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
              .wp-block-group__inner-container {
                grid-template-columns: 1fr;
              }
            }
            /* Mobile */
            @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
              .wp-block-group__inner-container {
                grid-template-columns: 1fr;
              }
            }
          }

          .featured-card {
            justify-content: center;
            align-items: center;
            figure {
              margin: 0;
            }
    
            p {
              font-size: 20px;
              max-width: 80%;
              margin: auto;
            }
          }

          .featured-card-reverse {
            justify-content: center;
            align-items: center;
            figure {
              margin: 0;
            }
          
            p {
              font-size: 20px;
              max-width: 80%;
              margin: auto;
            }
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

          .wp-block-columns {
            display: grid;
            justify-content: space-evenly;
            grid-template-columns: 1fr 1fr;
            margin: 40px 0;
            background: ${state.theme.colors.green};
            color: white;
            background: white;
            color: black;
            border: 2px solid #008000;
            

            /* Mobile */
            @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
              grid-column-gap: 50px;
              display: grid;
              grid-template-rows: 1fr;
              grid-template-columns: 1fr;
              padding: 10px;
              margin: 20px;
              border: 2px solid #006f46;
              background: white;
              color: black;
              text-align: center;
              box-shadow: 5px 5px 5px #e4e4e4;
            }

          }
          }

        `}
      />
    </>
  );
};

export default connect(Theme);
