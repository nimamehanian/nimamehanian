import React, { useState } from 'react';
import styled from 'styled-components';
import useInterval from 'utils/useInterval';

import bg1 from 'images/bg1.jpg';
import bg2 from 'images/bg2.jpg';

const BackgroundWrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  transform: scale(${({ scale }) => scale || 1});
`;

const Images = styled.div`
  height: 100vh;
  width: 110vw;
  background-position: 64% center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.25s ease-in-out;
  background-image: url(${({ currentImage }) => currentImage});
  transform: translate3d(${({ bgPosX }) => bgPosX || 0}px, ${({ bgPosY }) => bgPosY || 0}px, 0px) scale(1.15);
`;

function Background() {
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [images] = useState([bg1, bg2]);
  const [currentImage, setCurrentImage] = useState(0);
  const period = 6000;

  function updateCoordinates({ clientX, clientY }) {
    const [d0, d1, r0, r1] = [0, 100, 12, -12];
    const position = c => Math.round((c - d0) * ((r1 - r0) / (d1 - d0)) + r0);
    const getX = () => position((clientX / window.innerWidth) * 100);
    const getY = () => position((clientY / window.innerHeight) * 100);
    setCoordinates([getX(), getY()]);
  }

  useInterval(() => {
    setCurrentImage(
      currentImage === images.length - 1 ? 0 : currentImage + 1
    );
  }, period);

  return (
    <BackgroundWrapper onMouseMove={e => updateCoordinates(e)}>
      <Images
        currentImage={images[currentImage]}
        bgPosX={coordinates[0]}
        bgPosY={coordinates[1]}
      />
    </BackgroundWrapper>
  );
}

export default Background;
