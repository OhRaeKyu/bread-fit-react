import { Link } from 'react-router-dom';
import { PALLETS } from '../../constants';
import styled from '@emotion/styled';

export const Searchhead = () => {
  return (
    <Searchheads>
      <label htmlFor="inpUser"></label>
      <input type="text" id="inpUser" placeholder="Bread-fit 피드" />
      <Link to="/home/search">
        <button id="searchBtn"></button>
      </Link>
    </Searchheads>
  );
};

const Searchheads = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid ${PALLETS.GRAY};
  background-color: ${PALLETS.WHITE};
  z-index: 100;
  input {
    width: 90%;
    line-height: 2;
    border: none;
  }
  #searchBtn {
    background: url(/assets/icon/icon-search.png);
    background-size: contain;
    width: 20px;
    height: 20px;
  }
`;
