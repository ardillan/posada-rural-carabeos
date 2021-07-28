import React from "react";
import { connect } from "frontity";
import { styled, css } from "frontity";

import Link from "./Link";
import backgroundHeader from "../../assets/images/top-header.jpg";
import menuIcon from "../../assets/images/menu-icon.png";
import menuIconClose from "../../assets/images/menu-icon-close.png";
import logo from "../../assets/images/logo.png";

const Header = ({ state, actions }) => {
  const Menu = styled.div`
    display: none;
    button {
      background: none;
      border: none;
    }
    ul {
      a {
        display: block;
        padding: 5px 0;
        margin-bottom: 10px;
      }
      li {
        width: 100%;
        text-align: center;
        background: white;
        list-style-type: none;
        font-size: 22px;
        border-radius: 2px;
        box-shadow: 2px 2px grey;
      }
    }
    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      display: block;
      position: relative;
      ul {
        padding: 0;
        margin: 0;
        a {
          padding: 20px;
          background: #01613d;
          margin: 0;
          color: white;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  `;

  const Logo = styled.img`
    // height: 45px;
  `;

  const Navigation = styled.nav`
    text-align: center;
    display: flex;
    justify-content: space-between;

    /* Mobile */
    @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
      display: none;
    }
  `;

  const MobileMenu = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
  `;

  return (
    <header
      css={css`
        background-color: ${state.theme.colors.darkGreen};
        background-image: url("${backgroundHeader}");
        background-size: 1800px 500px;
        background-repeat: no-repeat;
        background-position: top;
        min-height: 390px;

        /* Mobile */
        @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
          background-image: none;
          min-height: initial;
        }
      `}
    >
      <Menu>
        <MobileMenu>
          {state.theme.isMenuOpen ? (
            <>
              <button
                onClick={actions.theme.closeMenu}
                css={css`
                  background: none;
                  border: none;
                  height: 40px;
                `}
              >
                {" "}
                <img
                  src={menuIconClose}
                  css={css`
                    width: 25px;
                    height: 25px;
                  `}
                />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={actions.theme.openMenu}
                css={css`
                  background: none;
                  border: none;
                  height: 40px;
                `}
              >
                {" "}
                <img
                  src={menuIcon}
                  css={css`
                    width: 25px;
                    height: 25px;
                  `}
                />
              </button>
            </>
          )}
          <Link href="/">
            <Logo
              src={logo}
              width="100"
              style={{ height: 30, width: "auto" }}
            />
          </Link>{" "}
        </MobileMenu>
        {state.theme.isMenuOpen && (
          <ul>
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
        )}
      </Menu>
      <Navigation
        css={css`
          margin: auto;
          width: 100%;
          background: ${state.theme.colors.darkGreen};

          div {
            align-items: center;
            display: flex;
          }
          /* Tablet */
          @media screen and (min-width: ${state.theme.screenSizes
              .mobile}) and (max-width: ${state.theme.screenSizes.tablet}) {
            width: auto;
          }
          /* Mobile */
          @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
            width: auto;
          }
        `}
      >
        <div>
          <Link href="/">
            <Logo src={logo} width="100" style={{ padding: 15 }} />
          </Link>
        </div>
        <div>
          <Link type="button" href="/actividades">
            Actividades
          </Link>
          <Link type="button" href="/blog/">
            Blog
          </Link>
          <Link type="button" href="/servicios/">
            Servicios
          </Link>
          <Link type="button" href="/tarifas/">
            Tarifas
          </Link>
          <Link type="button" href="/nuestros-amigos/">
            Nuestros amigos
          </Link>
        </div>
      </Navigation>
    </header>
  );
};

export default connect(Header);
