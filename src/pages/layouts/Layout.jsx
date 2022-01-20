import React from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../constants';

const Layout = ({ children }) => {
  return (
    <Wrap>
      <Container>
        <Main>{children}</Main>
      </Container>
    </Wrap>
  );
};

export default Layout;

const Wrap = styled.div`
  position: relative;
  &:after {
    content: '';
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background: ${PALLETS.BLACK};
    opacity: 0.8;
  }
`;

const Container = styled.section`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 390px;
  height: 820px;
  background: ${PALLETS.WHITE};
`;

const Main = styled.section``;
