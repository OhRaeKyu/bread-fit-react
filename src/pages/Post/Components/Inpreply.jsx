import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import axios from 'axios';

import { API_ENDPOINT } from '../../../constants';
import { useParams } from 'react-router-dom';

const Inpreply = () => {
  const params = useParams().id;
  const userToken = localStorage.getItem('Token');

  const contComment = useRef(null);

  const postReply = (e) => {
    e.preventDefault();
    fetch(`${API_ENDPOINT}/post/${params}/comments`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        comment: { content: `${contComment.current.value}` },
      }),
    }).then(() => {
      window.location.reload();
    });
  };

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
