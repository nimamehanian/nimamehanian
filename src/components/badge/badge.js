import React from 'react';
import styled from 'styled-components';
import { $lime } from 'styles/colors';

import Logo from 'components/logo/logo';

const BadgeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 148px;
  height: 148px;
  position: absolute;
  top: 0px;
  left: 0px;
  background: ${$lime};
  z-index: 3;
`;

const Name = styled.div`
  color: #fff;
  text-align: center;
  font-variant: small-caps;
  font-family: 'Brandon Bld';
  font-size: 22px;
  letter-spacing: 0.6px;
`;

function Badge() {
  return (
    <BadgeWrapper>
      <Logo />
      <Name>nima mehanian</Name>
    </BadgeWrapper>
  );
}

export default Badge;
