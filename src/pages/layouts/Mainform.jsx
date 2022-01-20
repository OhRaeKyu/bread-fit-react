import React from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Tabmenu } from './Tabmenu';

export const Mainform = ({ children }) => {
  return (
    <Wrap>
      <Header />
      <Section>{children}</Section>
      <Tabmenu />
    </Wrap>
  );
};

const Wrap = styled.div``;

const Header = styled.section`
  height: 48px;
  background: ${PALLETS.BEIGE};
`;

const Section = styled.section`
  height: 712px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera*/
  }
`;
