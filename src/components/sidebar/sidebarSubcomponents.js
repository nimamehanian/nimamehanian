import styled from 'styled-components';
import { animated } from 'react-spring';
import {
  $green1,
  $grey1,
  $white70
} from 'styles/colors';

export const SidebarPanel = styled(animated.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  width: 60%;
  max-width: 314px;
  padding-top: 140px;
  z-index: 3;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
`;

export const Screen = styled(animated.div)`
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  z-index: 2;
  background: rgb(0, 0, 0);
`;

export const SidebarLinkWrapper = styled(animated.div)`
  background: ${$green1};
  color: ${$grey1};
  font-family: 'Brandon Bld';
  font-variant: small-caps;
  font-size: 16px;
  letter-spacing: 1.6px;
  height: 45px;
  cursor: pointer;
  overflow: hidden;
  transition: background 300ms ease-in-out 200ms;
`;

const Fill = styled(animated.div)`
  background: ${$white70};
  position: absolute;
  width: 50%;
  height: 45px;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
`;

export const FillInner = styled(Fill)`
  z-index: 2;
`;

export const FillLeft = styled(Fill)`
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.55, 0.31, 0.15, 0.93) 200ms;
`;

export const FillRight = styled(Fill)`
  opacity: 0;
  transition: opacity 400ms cubic-bezier(0.55, 0.31, 0.15, 0.93) 200ms;
`;

const Stroke = styled(animated.div)`
  background: ${$white70};
  position: absolute;
  width: 5%;
  height: 45px;
  opacity: 0;
  -webkit-backface-visibility: hidden;
  -webkit-perspective: 1000;
`;

export const StrokeLeft = styled(Stroke)`
  left: -5%;
`;

export const StrokeRight = styled(Stroke)`
  right: -5%;
`;

export const Label = styled(animated.div)`
  text-align: center;
  height: 30px;
  max-height: 30px;
  padding: 8px 0px;
  z-index: 3;
  position: relative;
`;
