import React from "react";
import { styled } from "frontity";

const Loading = () => {
  const Container = styled.div`
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    margin: 60px 0;
  `;

  const Animation = styled.div`
    .posada-rural-loader {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .posada-rural-loader div {
      position: absolute;
      border: 4px solid #006600;
      opacity: 1;
      border-radius: 50%;
      animation: posada-rural-loader 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }
    .posada-rural-loader div:nth-of-type(2) {
      animation-delay: -0.5s;
    }
    @keyframes posada-rural-loader {
      0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
      }
      100% {
        top: 0px;
        left: 0px;
        width: 72px;
        height: 72px;
        opacity: 0;
      }
    }
  `;
  return (
    <Container>
      <Animation>
        <div className="posada-rural-loader">
          <div></div>
          <div></div>
        </div>
      </Animation>
      <p>Cargando</p>
    </Container>
  );
};

export default Loading;
