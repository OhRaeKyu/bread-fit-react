import { PALLETS } from '../../constants';
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export const Searchuserhead = () => {
  let history = useHistory();
  const [search, searchInp] = useState();

  const back = () => {
    history.goBack();
  };

  const searchUser = (e) => {
    console.log(e.target.value);
  };
  return (
    <Searchuserheads>
      <button onClick={back}>
        <img src="/assets/icon/icon-arrow-left.png" alt="뒤로가기" />
      </button>
      <input
        type="text"
        className="cont-home-search-input"
        placeholder="계정검색"
        onKeyUp={searchUser}
      />
    </Searchuserheads>
  );
};

const Searchuserheads = styled.section`
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background: #fff;
  border-bottom: 1px solid ${PALLETS.GRAY};
  a {
    width: 22px;
    height: 22px;
  }
  input {
    width: 95%;
    height: 32px;
    background: ${PALLETS.CREAM};
    border: none;
    border-radius: 16px;
    padding: 0 16px;
  }
`;
