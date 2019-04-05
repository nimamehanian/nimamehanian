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
  width: 110vw;
  height: 100vh;
  background-position: 64% center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${({ currentImage }) => currentImage});
  transition: background-image 0.25s ease-in-out;
  transform: translate3d(${({ bgPosX }) => bgPosX || 0}px, ${({ bgPosY }) => bgPosY || 0}px, 0px) scale(1.15);
`;

function Background() {
  const [[bgPosX, bgPosY], setCoordinates] = useState([0, 0]);
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [images] = useState([bg1, bg2]);

  function updateCoordinates({ clientX, clientY }) {
    const [d0, d1, r0, r1] = [0, 100, 12, -12];
    const position = c => Math.round((c - d0) * ((r1 - r0) / (d1 - d0)) + r0);
    const getX = () => position((clientX / window.innerWidth) * 100);
    const getY = () => position((clientY / window.innerHeight) * 100);
    setCoordinates([getX(), getY()]);
  }

  useInterval(() => {
    setCurrentImgIdx(currentImgIdx === images.length - 1 ? 0 : currentImgIdx + 1);
  }, 6000);

  return (
    <BackgroundWrapper onMouseMove={e => updateCoordinates(e)}>
      <Images currentImage={images[currentImgIdx]} bgPosX={bgPosX} bgPosY={bgPosY} />
    </BackgroundWrapper>
  );
}

export default Background;
