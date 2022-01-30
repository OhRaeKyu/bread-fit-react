import { Searchuserhead } from '../layouts/Searchuserhead';
import UserList from '../Profile/Components/Userlist';
import React, { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../constants';

const SearchPage = () => {
  const [keyword, setKeyword] = useState('');

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword);
  };

  const userToken = localStorage.getItem('Token');
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    fetch(`${API_ENDPOINT}/user/searchuser/?keyword=${keyword}`, {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfile(data);
      });
  }, [keyword]);

  return (
    <>
      <Searchuserhead handleSearch={handleSearch} />
      <UserList profile={profile} />
    </>
  );
};

export default SearchPage;
