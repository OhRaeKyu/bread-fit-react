import { Searchhead } from '../layouts/Searchhead';
import { Tabmenu } from '../layouts/Tabmenu';
import { useState, useEffect } from 'react';
import { Searchuser } from './Components/Searchuser';
import { Userfeed } from './Components/Userfeed';

import { API_ENDPOINT } from '../../constants';

import axios from 'axios';

const HomeIndexPage = () => {
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
