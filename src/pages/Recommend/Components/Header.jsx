import React from 'react';
import { PALLETS } from '../../../constants';
import styled from '@emotion/styled';
import { useHistory } from 'react-router';

function Header() {
  const history = useHistory();

  return (
    <>
      <HeaderWrap>
        <button className="btn-back" onClick={history.goBack}></button>
      </HeaderWrap>
    </>
  );
}
const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  background-color: ${PALLETS.WHITE};
  border-bottom: 1px solid ${PALLETS.LIGHTGRAY};
  z-index: 10;

  .btn-back {
    width: 22px;
    height: 22px;
    background-image: url('/assets/icon/icon-arrow-left.png');
    background-size: cover;
  }
`;

export default Header;