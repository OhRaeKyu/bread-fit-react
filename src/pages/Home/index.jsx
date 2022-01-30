import { Searchhead } from '../layouts/Searchhead';
import { Tabmenu } from '../layouts/Tabmenu';
import { useState, useEffect } from 'react';
import { Searchuser } from './Components/Searchuser';
import { Userfeed } from './Components/Userfeed';

import { API_ENDPOINT } from '../../constants';

import axios from 'axios';

const HomeIndexPage = () => {
  // const userToken = localStorage.getItem('Token');

  const now = new Date();
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    isLike ? setIsLike(false) : setIsLike(true);
  };
  const [post, setPost] = useState([]);

  const getFeed = async () => {
    const userToken = localStorage.getItem('Token');
    try {
      const res = await axios.get(`${API_ENDPOINT}/post/feed`, {
        headers: {
          // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
      setPost(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  const [keyword, setKeyword] = useState('');

  const handleSearch = (event) => {
    const keyword = event.target.value;
    setKeyword(keyword);
    console.log(keyword);
  };

  return (
    <>
      <Searchhead handleSearch={handleSearch} />
      {post.length ? <Userfeed keyword={keyword} /> : <Searchuser />}
      <Tabmenu route={'홈'}></Tabmenu>
    </>
  );
};

export default HomeIndexPage;
