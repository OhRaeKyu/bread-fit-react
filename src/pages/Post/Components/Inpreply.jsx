import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import axios from 'axios';

const Inpreply = ({ postData }) => {
  const contComment = useRef(null);

  const postReply = (e) => {
    e.preventDefault();
    // 게시글 id 인자로 받기
    fetch('http://146.56.183.55:5050/post/61e7ca8b458f1ddd2e27055c/comments', {
      method: 'POST',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: { content: `${contComment.current.value}` },
      }),
    });
  };

  // axios로 해보기
  // const postReply = (e) => {
  //   e.preventDefault();
  //   try {
  //     axios.post(
  //       'http://146.56.183.55:5050/post/61e7ca8b458f1ddd2e27055c/comments',
  //       {
  //         body: {
  //           comment: { content: `${contComment.current.value}` },
  //         },
  //         headers: {
  //           // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
  //           Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
  //           'Content-type': 'application/json',
  //         },
  //       }
  //     );
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  return (
    <WrapReply>
      <img src="/assets/logo.png" alt="user-profile" />
      <input type="text" placeholder="댓글 입력하기..." ref={contComment} />
      <button onClick={postReply}>게시</button>
    </WrapReply>
  );
};

const WrapReply = styled.section`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-top: 1px solid ${PALLETS.LIGHTGRAY};
  background-color: ${PALLETS.WHITE};
  padding: 0 20px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: ${PALLETS.LIGHTGRAY};
  }
  input {
    width: 100%;
    padding-left: 15px;
    border: none;
  }
`;

export default Inpreply;
