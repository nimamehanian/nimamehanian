import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated, interpolate } from 'react-spring';

import Hamburger from 'components/hamburger/hamburger';

const SidebarPanel = styled(animated.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 60%;
  max-width: 314px;
  padding-top: 120px;
  z-index: 3;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
`;

function Sidebar({
  isSidebarOpen,
  isSidebarPeeking,
  open,
  shut,
  peek,
  tuck,
}) {
  const config = { mass: 1, tension: 360, friction: 36 };
  const [{ offsetX }, setOffsetX] = useSpring(() => ({ offsetX: 97, config }));
  const [{ red }, setRed] = useSpring(() => ({ red: 69, config }));
  const [{ green }, setGreen] = useSpring(() => ({ green: 129, config }));
  const [{ blue }, setBlue] = useSpring(() => ({ blue: 111, config }));

  useEffect(() => {
    setOffsetX({
      offsetX: isSidebarOpen ? 0
        : isSidebarPeeking ? 94 : 97,
    });
    setRed({ red: isSidebarOpen ? 93 : 69 });
    setGreen({ green: isSidebarOpen ? 175 : 129 });
    setBlue({ blue: isSidebarOpen ? 150 : 111 });
  }, [isSidebarOpen, isSidebarPeeking]);

  return (
    <div>
      <div onClick={isSidebarOpen ? shut : open} onMouseEnter={peek} onMouseLeave={tuck}>
        <Hamburger isSidebarOpen={isSidebarOpen} />
      </div>
      <SidebarPanel
        style={{
          transform: offsetX.interpolate(x => `translate3d(${x}%, 0px, 0px)`),
          background: interpolate(
            [red, green, blue],
            (r, g, b) => `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`
          ),
        }}
      />
    </div>
  );
}

export default Sidebar;
