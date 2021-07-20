import React from "react";
import { connect, styled } from "frontity";

const Link = ({ href, actions, children, type }) => {
  const selectAnchorType = (type) => {
    switch (type) {
      case "button":
        return styled.a`
          padding-right: 20px;
          border-radius: 30px;
          text-decoration: none;
          margin-right: 20px;
          font-size: 17px;
          color: white;
          :hover {
            text-decoration: underline;
            cursor: pointer;
          }
        `;

      case "button-rounded":
        return styled.a`
          background: #ffe607;
          display: inline-block;
          padding: 10px 25px;
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          text-decoration: none;
          border-radius: 50px;
          :hover {
            transform: scale(1.1) rotate(-2deg);
          }
        `;
      default:
        return styled.a`
          text-decoration: none;
          :hover {
            h2 {
              text-decoration: underline;
              text-decoration-thickness: 3px;
            }
            p {
              text-decoration: underline;
            }
          }
        `;
    }
  };

  const Anchor = selectAnchorType(type);

  return (
    <>
      <Anchor
        href={href}
        onClick={(event) => {
          event.preventDefault();
          actions.router.set(href);
          actions.theme.closeMenu();
        }}
      >
        {children}
      </Anchor>
    </>
  );
};

export default connect(Link);
