import React, { useState, useEffect } from 'react';
import { useSpring } from 'react-spring';
import { $green1, $grey1, $white } from 'styles/colors';

import {
  SidebarLinkWrapper,
  FillInner,
  FillLeft,
  FillRight,
  StrokeLeft,
  StrokeRight,
  Label
} from './sidebarSubcomponents';

const opacityConfig = {
  in: {
    enter: {
      clamp: true,
      mass: 1,
      tension: 370,
      friction: 26,
    },
    leave: {
      clamp: true,
      mass: 1,
      tension: 370,
      friction: 26,
    },
  },
  lr: {
    enter: {
      clamp: true,
      mass: 20,
      tension: 180,
      friction: 30,
    },
    leave: {
      clamp: true,
      mass: 6,
      tension: 200,
      friction: 50,
    },
  },
};

function SidebarLink({
  label,
  index,
  isActive,
  indicesFromActive,
  isSidebarOpen,
  selectLink,
  shut,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [{ opacity }, setOpacity] = useSpring(() => ({
    opacity: 0,
    config: { mass: 1, tension: 270, friction: 24 },
  }));
  const [{ fillInnerOpacity }, setFillInnerOpacity] = useSpring(() => ({
    fillInnerOpacity: 0,
    config: opacityConfig.in.leave,
  }));
  const [{ fillLeftRightOpacity }, setFillLeftRightOpacity] = useSpring(() => ({
    fillLeftRightOpacity: 0,
    config: opacityConfig.lr.leave,
  }));
  const [{ fillInnerScaleX }, setFillInnerScaleX] = useSpring(() => ({
    fillInnerScaleX: 1,
    config: { mass: 1, tension: 140, friction: 20 },
  }));
  const [{ fillLeftOffsetX }, setFillLeftOffsetX] = useSpring(() => ({
    fillLeftOffsetX: -100,
    config: { mass: 2, tension: 260, friction: 28 },
  }));
  const [{ fillRightOffsetX }, setFillRightOffsetX] = useSpring(() => ({
    fillRightOffsetX: -100,
    config: { mass: 2, tension: 260, friction: 28 },
  }));
  const [{ strokeLeftOffsetX }, setStrokeLeftOffsetX] = useSpring(() => ({
    strokeLeftOffsetX: -2,
    config: { mass: 1, tension: 270, friction: 24 },
  }));
  const [{ strokeRightOffsetX }, setStrokeRightOffsetX] = useSpring(() => ({
    strokeRightOffsetX: 2,
    config: { mass: 1, tension: 270, friction: 24 },
  }));
  const [{ labelOffsetX }, setLabelOffsetX] = useSpring(() => ({
    labelOffsetX: 50,
    config: { mass: 1, tension: 360, friction: 36 + (indicesFromActive * 6) },
  }));
  const [{ labelColor }, setLabelColor] = useSpring(() => ({
    labelColor: $grey1,
    config: { mass: 1, tension: 360, friction: 36 },
  }));
  const [{ backgroundColor }, setBackgroundColor] = useSpring(() => ({
    backgroundColor: $green1,
    config: { mass: 1, tension: 360, friction: 36 },
  }));

  useEffect(() => {
    setOpacity({ opacity: isHovered ? 1 : 0 });
    setFillInnerOpacity({
      fillInnerOpacity: isHovered ? 1 : 0,
      config: isHovered
        ? opacityConfig.in.enter
        : opacityConfig.in.leave,
    });
    setFillInnerScaleX({ fillInnerScaleX: isHovered ? 1.8 : 1 });
    setFillLeftOffsetX({ fillLeftOffsetX: isHovered ? 0 : -100 });
    setFillRightOffsetX({ fillRightOffsetX: isHovered ? 100 : 200 });
    setFillLeftRightOpacity({
      fillLeftRightOpacity: isHovered ? 1 : 0,
      config: isHovered
        ? opacityConfig.lr.enter
        : opacityConfig.lr.leave,
    });
    setStrokeLeftOffsetX({ strokeLeftOffsetX: isHovered ? 100 : -2 });
    setStrokeRightOffsetX({ strokeRightOffsetX: isHovered ? -100 : 2 });
    setLabelOffsetX({
      labelOffsetX: isSidebarOpen ? 0 : 50,
      config: { mass: 1, tension: 360, friction: 36 + (indicesFromActive * 6) },
    });
    setLabelColor({ labelColor: isHovered || isActive ? $green1 : $grey1 });
    setBackgroundColor({ backgroundColor: isActive ? $white : $green1 });
  }, [isHovered, isSidebarOpen, isActive, indicesFromActive]);

  function handleClick() {
    selectLink(index);
    shut();
  }

  const interpolateOpacity = o => `${Math.round(o * 10) / 10}`;
  const interpolateOffsetX = x => `translate3d(${x}%, 0px, 0px)`;
  const interpolateScale = s => `translate3d(50%, 0px, 0px) scaleX(${s})`;

  return (
    <SidebarLinkWrapper
      onClick={handleClick}
      onMouseEnter={() => (!isActive ? setIsHovered(true) : null)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: backgroundColor.interpolate(b => b),
        color: labelColor.interpolate(c => c),
      }}
    >
      <FillInner
        style={{
          transform: fillInnerScaleX.interpolate(interpolateScale),
          opacity: fillInnerOpacity.interpolate(interpolateOpacity),
        }}
      />
      <FillLeft
        style={{
          transform: fillLeftOffsetX.interpolate(interpolateOffsetX),
          opacity: fillLeftRightOpacity.interpolate(interpolateOpacity),
        }}
      />
      <FillRight
        style={{
          transform: fillRightOffsetX.interpolate(interpolateOffsetX),
          opacity: fillLeftRightOpacity.interpolate(interpolateOpacity),
        }}
      />
      <StrokeLeft
        style={{
          transform: strokeLeftOffsetX.interpolate(interpolateOffsetX),
          opacity: opacity.interpolate(interpolateOpacity),
        }}
      />
      <StrokeRight
        style={{
          transform: strokeRightOffsetX.interpolate(interpolateOffsetX),
          opacity: opacity.interpolate(interpolateOpacity),
        }}
      />
      <Label style={{ transform: labelOffsetX.interpolate(interpolateOffsetX) }}>
        {label}
      </Label>
    </SidebarLinkWrapper>
  );
}

export default SidebarLink;
