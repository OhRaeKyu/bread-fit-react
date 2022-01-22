import { Searchhead } from '../layouts/Searchhead';
import { Tabmenu } from '../layouts/Tabmenu';
import { useState, useEffect } from 'react';
import { Searchuser } from './Components/Searchuser';
import { Userfeed } from './Components/Userfeed';

const HomeIndexPage = () => {
  const now = new Date();
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    isLike ? setIsLike(false) : setIsLike(true);
  };
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch('http://146.56.183.55:5050/post/feed', {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWEwOTQ3NDU4ZjFkZGQyZTJiYTE5MiIsImV4cCI6MTY0NzkyNzEwOSwiaWF0IjoxNjQyNzQzMTA5fQ.kxZJWVlF8-1DFZKxflFBAmEr6jRyq2ynCRIiTTGP6Ks`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data.posts);
      });
  }, []);
  return (
    <>
      <Searchhead />
      {post.length ? <Userfeed /> : <Searchuser />}
      <Tabmenu route={'홈'}></Tabmenu>
    </>
  );
};

export default HomeIndexPage;
