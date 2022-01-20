import React, { useRef, useState, useEffect } from 'react';
import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';

export const Inpreply = () => {
  const [inpComment, setInpComment] = useState('');
  const contComment = useRef(null);
  const uploadComment = (e) => {
    e.preventDefault();
    setInpComment(contComment.current.value);
  };

  useEffect(() => {
    // 게시글 id 인자로 받기
    fetch('http://146.56.183.55:5050/post/61e7ca8b458f1ddd2e27055c/comments', {
      method: 'POST',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzgyNjYyMCwiaWF0IjoxNjQyNjQyNjIwfQ.1aA9IYP98ludT0Te-f-awqzew_Blbr2enfdFI8Tk2Fw`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: { content: `${inpComment}` },
      }),
    });
  });

  return (
    <Inpreplys>
      <img src="/assets/logo.png" alt="user-profile" />
      <input type="text" placeholder="댓글 입력하기..." ref={contComment} />
      <button onClick={uploadComment}>게시</button>
    </Inpreplys>
  );
};

const Inpreplys = styled.section`
  width: 390px;
  height: 61px;
  padding: 12px 16px 12px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid ${PALLETS.GRAY};
  position: fixed;
  bottom: 0;
  background-color: ${PALLETS.WHITE};
  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    background-color: ${PALLETS.LIGHTGRAY};
  }
  input {
    width: 250px;
    border: none;
    margin-left: 18px;
  }
`;
