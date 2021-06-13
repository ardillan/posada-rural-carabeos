import React from "react";
import { connect } from "frontity";
import { styled, css } from "frontity";

import Link from "./Link";
import backgroundHeader from "../../assets/images/top-header.jpg";
import claim from "../../assets/images/logo.png";
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
    }
  `;

  const Logo = styled.img`
    height: 45px;
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

  return (
    <header
      css={css`
        background-color: ${state.theme.colors.softBlue};
        background-image: url("${backgroundHeader}");
        padding: 40px 20px;
        background-size: 1800px 500px;
        background-repeat: no-repeat;
        background-position: top;
        min-height: 390px;
        border-top: 10px solid ${state.theme.colors.darkYellow};
        /* Mobile */
        @media screen and (max-width: ${state.theme.screenSizes.mobile}) {
          padding: 20px 20px 0px 10px;
          background-size: 1000px 70px;
          min-height: 50px;
        }
      `}
    >
      <Menu>
        {state.theme.isMenuOpen ? (
          <>
            <button onClick={actions.theme.closeMenu}>
              <img
                src={menuIconClose}
                css={css`
                  width: 25px;
                  height: 25px;
                `}
              />
            </button>
            <ul
              css={css`
                padding: 0;
              `}
            >
              <li>
                <Link href="/servicios/">Servicios</Link>
              </li>
              <li>
                <Link href="/actividades/">Actividades</Link>
              </li>
              <li>
                <Link href="/tarifas/">Tarifas</Link>
              </li>
            </ul>
          </>
        ) : (
          <button
            onClick={actions.theme.openMenu}
            css={css`
              background: none;
              border: none;
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
        )}
      </Menu>

      <Navigation
        css={css`
          margin: auto;
          width: ${state.theme.screenSizes.container};
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
            <Logo src={logo} />
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
        </div>
      </Navigation>
    </header>
  );
};

export default connect(Header);
