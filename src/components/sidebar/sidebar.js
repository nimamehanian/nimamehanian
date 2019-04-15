import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSpring } from 'react-spring';

import Hamburger from 'components/hamburger/hamburger';
import {
  SidebarPanel,
  Screen
} from './sidebarSubcomponents';
import SidebarLink from './sidebarLink';

function Sidebar({
  isSidebarOpen,
  isSidebarPeeking,
  links,
  activeIndex,
  open,
  shut,
  peek,
  tuck,
  selectLink,
}) {
  const config = { mass: 1, tension: 360, friction: 36 };
  const [{ offsetX }, setOffsetX] = useSpring(() => ({ offsetX: 97, config }));
  const [{ bgColor }, setBgColor] = useSpring(() => ({ bgColor: '#45816f', config }));
  const [{ overlayOpacity }, setOverlayOpacity] = useSpring(() => ({ overlayOpacity: 0, config }));

  useEffect(() => {
    setOffsetX({ offsetX: isSidebarOpen ? 0 : isSidebarPeeking ? 94 : 97 });
    setBgColor({ bgColor: isSidebarOpen ? '#5daf96' : '#45816f' });
    setOverlayOpacity({ overlayOpacity: isSidebarOpen ? 1 : 0 });
  }, [isSidebarOpen, isSidebarPeeking]);

  return (
    <div>
      <div onClick={isSidebarOpen ? shut : open} onMouseEnter={peek} onMouseLeave={tuck}>
        <Hamburger isSidebarOpen={isSidebarOpen} />
      </div>
      <SidebarPanel
        style={{
          transform: offsetX.interpolate(x => `translate3d(${x}%, 0px, 0px)`),
          background: bgColor.interpolate(b => b),
        }}
      >
        {links.map(({ name, isActive }, index) => (
          <Link to={name === 'home' ? '/' : name} key={`${index + 1}_${name}`}>
            <SidebarLink
              label={name}
              index={index}
              isActive={isActive}
              indicesFromActive={Math.abs(activeIndex - index)}
              isSidebarOpen={isSidebarOpen}
              selectLink={selectLink}
              shut={shut}
            />
          </Link>
        ))}
      </SidebarPanel>
      <Screen
        onClick={shut}
        style={{
          opacity: overlayOpacity.interpolate(o => `${0.45 * o}`),
          display: isSidebarOpen ? 'block' : 'none',
        }}
      />
    </div>
  );
}

export default Sidebar;
