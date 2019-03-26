import React from 'react';
import styled from 'styled-components';
import { $lime } from 'styles/colors';

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-itms: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: ${$lime};
  z-index: 3;
`;

const Initials = styled.svg.attrs({
  height: '70px',
  viewBox: '329 240 80 70',
})`
  transform: scale(1.3);
`;

const Name = styled.div`
  color: #fff;
  text-align: center;
  font-variant: small-caps;
  font-family: 'Brandon Bld';
  font-size: 20px;
  letter-spacing: 0.5px;
`;

function Badge() {
  return (
    <BadgeWrapper>
      <Initials>
        <g
          transform="translate(330, 240)"
          fontSize="60"
          fontFamily="ArialMT, Arial"
        >
          <text id="M" fill="#fff"><tspan x="32" y="54">M</tspan></text>
          <text id="N" fill="#fff"><tspan x="-4" y="54">N</tspan></text>
        </g>
      </Initials>
      <Name>nima mehanian</Name>
    </BadgeWrapper>
  );
}

export default Badge;
