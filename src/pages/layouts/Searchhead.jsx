import Link from 'next/link';
import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';

export const Searchhead = () => {
  return (
    <Searchheads>
      <label htmlFor="inpUser"></label>
      <input type="text" id="inpUser" placeholder="Bread-fit 피드" />
      <Link href="/home/search" passHref>
        <button id="searchBtn"></button>
      </Link>
    </Searchheads>
  );
};

const Searchheads = styled.section`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid ${PALLETS.GRAY};
  input {
    width: 320px;
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
