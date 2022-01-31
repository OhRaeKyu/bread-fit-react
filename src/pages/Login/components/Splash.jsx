import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { PALLETS } from '../../../constants';

const Splashpage = () => {
  return (
    <Wrap>
      <Logo src="assets/logo.png"></Logo>
    </Wrap>
  );
};

export default Splashpage;

const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`;

const Wrap = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  background: ${PALLETS.WHITE};
`;

const Logo = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  animation: ${bounce} 1s ease-in-out infinite;
`;
