import React from "react";
import { connect, styled } from "frontity";

import Link from "./Link";

import cicloturismo from "../../assets/images/cicloturismo.png";
import venEnTren from "../../assets/images/ven-en-tren.png";
import logo from "../../assets/images/logo.png";

import whatsApp from "../../assets/images/whatsApp.png";

const Footer = ({ state }) => {
  const FooterContainer = styled.div`
    width: 100%;
    text-align: center;
    padding: 3rem 0 0 0;
    background: ${state.theme.colors.darkGreen};
    color: white;

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      padding: 0;
    }
  `;

  const Columns = styled.div`
    width: ${state.theme.screenSizes.container};
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: space-around;
    text-align: left;

    ul {
      list-style-type: none;
      padding: 0;
      color: white;

      p,
      a {
        color: white;
      }
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr;
      width: 100%;
      text-align: center;
    }

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;
      width: 100%;
      text-align: center;
    }
  `;

  const Images = styled.div`
    width: ${state.theme.screenSizes.container};
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 50px auto;

    img {
      max-width: 170px;
    }

    /* Tablet */
    @media screen and (min-width: ${state.theme.screenSizes
        .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
      grid-template-columns: 1fr;
      width: 100%;
      text-align: center;
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      grid-template-columns: 1fr;
      text-align: center;
      width: 100%;
    }
  `;

  const BottomBar = styled.div`
    background: #025803;
    padding: 1rem 0;
    p {
      padding: 0;
      margin: 0;
      font-size: 16px;
    }
  `;

  return (
    <FooterContainer>
      <footer>
        <Columns>
          <div>
            <ul>
              <li>
                <p>
                  <strong>Posada Rural Carabeos</strong>
                </p>
              </li>
              <li>
                <Link href="/">Inicio</Link>
              </li>
              <li>
                <Link href="/servicios/">Servicios</Link>
              </li>
              <li>
                <Link href="/actividades/">Actividades</Link>
              </li>
              <li>
                <Link href="/tarifas/">Tarifas</Link>
              </li>
              <li>
                <Link href="/nuestros-amigos/">Nuestros amigos</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <p>
                  <strong>Contacto</strong>
                </p>
              </li>
              <li>
                <a href="mailto:posadacarabeos.com@gmail.com">
                  posadacarabeos.com@gmail.com
                </a>
              </li>
              <br />
              <li>
                <a href="#tel:648115693">
                  <img src={whatsApp} width="200" alt="Envíanos un WhatsApp" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <p>
                  <strong>¿Dónde estamos?</strong>
                </p>
              </li>
              <li>
                <p>Nos encontramos en Valdeprado del Río</p>
              </li>
            </ul>
          </div>
        </Columns>

        <Images>
          <div>
            <img src={logo} width="100%" alt="Logotipo" />
          </div>
          <div>
            <img
              src={cicloturismo}
              width="100%"
              alt="Cicloturismo, naturaleza"
            />
          </div>
          <div>
            <img src={venEnTren} width="100%" alt="Ven en tren" />
          </div>
        </Images>
        <BottomBar>
          <p>Posada Los Carabeos | {new Date().getFullYear()}</p>
        </BottomBar>
      </footer>
    </FooterContainer>
  );
};

export default connect(Footer);
