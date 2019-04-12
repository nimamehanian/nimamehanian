import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import useInterval from 'utils/useInterval';

import bg1 from 'images/bg1.jpg';
import bg2 from 'images/bg2.jpg';

const BackgroundWrapper = styled(animated.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
`;

const Images = styled(animated.div)`
  width: 110vw;
  height: 100vh;
  background-position: 64% center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: background-image 0.25s ease-in-out;
  will-change: transform;
`;

const updateCoordinates = (x, y) => {
  const [d0, d1, r0, r1] = [0, 100, 24, -24];
  const position = c => Math.round((c - d0) * ((r1 - r0) / (d1 - d0)) + r0);
  const getX = () => position((x / window.innerWidth) * 100);
  const getY = () => position((y / window.innerHeight) * 100);
  return [getX(), getY()];
};

function Background({ isSidebarOpen }) {
  const [{ scale }, setScale] = useSpring(() => ({
    scale: 1,
    config: { mass: 1, tension: 360, friction: 36 },
  }));
  const [{ xy }, setCoords] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const [currentImgIdx, setCurrentImgIdx] = useState(0);
  const [images] = useState([bg1, bg2]);

  useInterval(() => {
    setCurrentImgIdx(currentImgIdx === images.length - 1 ? 0 : currentImgIdx + 1);
  }, 6000);

  useEffect(() => {
    setScale({ scale: isSidebarOpen ? 0.94 : 1 });
  }, [isSidebarOpen]);

  return (
    <BackgroundWrapper
      style={{ transform: scale.interpolate(s => `scale(${s})`) }}
      onMouseMove={({ clientX, clientY }) => (
        setCoords({ xy: updateCoordinates(clientX, clientY) })
      )}
    >
      <Images
        style={{
          backgroundImage: `url(${images[currentImgIdx]})`,
          transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0) scale(1.15)`),
        }}
      />
    </BackgroundWrapper>
  );
}

export default Background;
