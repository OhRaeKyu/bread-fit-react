import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function MenuModal({ setViewModal, mode, postId, commentId }) {
  postId = '61e8c70a458f1ddd2e28f8a0';
  const [clickDel, setClickDel] = useState(false);
  const toggleDel = (e) => {
    e.preventDefault();
    clickDel ? setClickDel(false) : setClickDel(true);
  };

  const deletePost = async () => {
    try {
      await axios
        .delete(`http://146.56.183.55:5050/post/${postId}`, {
          headers: {
            // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
            'Content-type': 'application/json',
          },
        })
        // 새로고침 말고 더 좋은 리랜더링 되는 방법  찾기
        .then(() => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
    }
  };

  const deleteComment = async () => {
    try {
      await axios
        .delete(
          `http://146.56.183.55:5050/post/61eb03becd27b6cf65fa2212/comments/${commentId}`,
          {
            headers: {
              // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
              'Content-type': 'application/json',
            },
          }
        ) // 새로고침 말고 더 좋은 리랜더링 되는 방법  찾기
        .then(() => {
          window.location.reload();
        });
    } catch (err) {
      console.log(err);
      console.log(commentId);
    }
  };

  const CheckModal = () => {
    return (
      <CheckDelete>
        <strong>{mode === 'post' ? '게시글' : '댓글'}을 삭제할까요?</strong>
        <button
          type="button"
          onClick={() => {
            setViewModal(false);
          }}
        >
          취소
        </button>
        <button
          type="button"
          className="btn-delete"
          onClick={() => {
            setViewModal(false);
            mode === 'post' ? deletePost() : deleteComment();
          }}
        >
          삭제
        </button>
      </CheckDelete>
    );
  };

  const Menu = () => {
    switch (mode) {
      case 'post':
        return (
          <>
            <li onClick={toggleDel}>삭제</li>
            <li>
              {/* 해당 게시글(id) 수정 페이지로 이동 */}
              <Link to="#">수정</Link>
            </li>
          </>
        );
      case 'comment':
        return (
          <>
            <li onClick={toggleDel}>삭제</li>
          </>
        );
      default:
        return (
          <>
            <p>잘못 접근했어요ㅠ</p>
          </>
        );
    }
  };

  return (
    <>
      <BackGround
        onClick={() => {
          setViewModal(false);
        }}
      />
      <MenuList>
        <Menu />
      </MenuList>
      {clickDel ? <CheckModal /> : null}
    </>
  );
}

const BackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 50px 30px 30px;
  width: 100%;
  font-size: 14px;
  border-radius: 15px 15px 0 0;
  background-color: ${PALLETS.WHITE};
  animation: modal 0.3s linear;
  z-index: 10;

  @keyframes modal {
    0% {
      transform: translateY(50%);
    }
    100 % {
      transform: translateY(0);
    }
  }

  &::before {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 50px;
    height: 4px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }

  li {
    cursor: pointer;
  }

  li + li {
    margin-top: 2rem;
  }
`;

const CheckDelete = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  height: 110px;
  text-align: center;
  background-color: ${PALLETS.WHITE};
  border-radius: 10px;
  overflow: hidden;

  strong {
    line-height: 65px;
    display: block;
  }

  button {
    line-height: 45px;
    width: 50%;
    border-top: 1px solid ${PALLETS.LIGHTGRAY};
  }

  button + button {
    border-left: 1px solid ${PALLETS.LIGHTGRAY};
  }

  .btn-delete {
    color: rgba(255, 0, 0, 0.7);
  }
`;

export default MenuModal;
