import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated, interpolate } from 'react-spring';

const Toggler = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  width: 140px;
  height: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
`;

const BarWrapper = styled.div`
  width: 40px;
`;

const Bar = styled(animated.div)`
  display: block;
  background-color: #f5f7f9;
  height: 2px;
  margin: 6px 4px;
  will-change: transform, opacity;
`;

function Hamburger({ isSidebarOpen }) {
  const config = { mass: 10, tension: 550, friction: 140 };
  // Bar 1
  const [{ offsetY }, setOffsetY] = useSpring(() => ({ offsetY: 0, config }));
  const [{ opacity }, setOpacity] = useSpring(() => ({ opacity: 1, config }));
  // Bar 2
  const [{ rotate }, setRotation] = useSpring(() => ({ rotate: 0, config }));
  // Bar 3
  const [{ bar3rotate }, setBar3Rotation] = useSpring(() => ({ bar3rotate: 0, config }));
  const [{ offsetX }, setOffsetX] = useSpring(() => ({ offsetX: 0, config }));
  const [{ bar3offsetY }, setBar3OffsetY] = useSpring(() => ({ bar3offsetY: 0, config }));

  useEffect(() => {
    // Bar 1
    setOffsetY({ offsetY: isSidebarOpen ? -10 : 0 });
    setOpacity({ opacity: isSidebarOpen ? 0 : 1 });
    // Bar 2
    setRotation({ rotate: isSidebarOpen ? -315 : 0 });
    // Bar 3
    setBar3Rotation({ bar3rotate: isSidebarOpen ? -45 : 0 });
    setOffsetX({ offsetX: isSidebarOpen ? 6 : 0 });
    setBar3OffsetY({ bar3offsetY: isSidebarOpen ? -6 : 0 });
  }, [isSidebarOpen]);

  return (
    <Toggler>
      <BarWrapper>
        <Bar
          style={{
            transform: offsetY.interpolate(y => `translate3d(0px, ${y}px, 0px)`),
            opacity: opacity.interpolate(alpha => Math.round(alpha * 10) / 10),
          }}
        />
        <Bar
          style={{
            transform: rotate.interpolate(r => `rotate(${r}deg)`),
          }}
        />
        <Bar
          style={{
            transform: interpolate(
              [bar3rotate, offsetX, bar3offsetY],
              (r, x, y) => `rotate(${r}deg) translate3d(${x}px, ${y}px, 0px)`
            ),
          }}
        />
      </BarWrapper>
    </Toggler>
  );
}

export default Hamburger;
