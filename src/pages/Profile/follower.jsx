import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Tabmenu } from '../layouts/Tabmenu';
import { Searchuserhead } from '../layouts/Searchuserhead';
import { UserList } from './Components/Userlist';

export const FollowerPage = () => {
  //검색 기능
  const [keyword, setKeyword] = useState('');

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword);
  };

  return (
    <>
      <Searchuserhead handleSearch={handleSearch} />
      <UserList keyword={keyword} follow={'follower'} />
      <Tabmenu />
    </>
  );
};

export default FollowerPage;
