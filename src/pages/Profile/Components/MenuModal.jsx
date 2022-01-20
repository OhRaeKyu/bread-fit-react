import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import React, { useState } from 'react';
import Link from 'next/link';

function MenuModal({ setViewModal }, mode) {
  const [clickDel, setClickDel] = useState(false);
  const toggleDel = (e) => {
    e.preventDefault();
    {
      clickDel ? setClickDel(false) : setClickDel(true);
    }
  };

  const deletePost = () => {
    // 게시글의 id 인자로 넘겨 받기
    fetch('http://146.56.183.55:5050/post/61e8c704458f1ddd2e28f894', {
      method: 'DELETE',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzgyNjYyMCwiaWF0IjoxNjQyNjQyNjIwfQ.1aA9IYP98ludT0Te-f-awqzew_Blbr2enfdFI8Tk2Fw`,
        'Content-type': 'application/json',
      },
    });
  };

  const CheckModal = () => {
    return (
      <CheckDelete>
        <strong>게시글을 삭제할까요?</strong>
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
            // 게시글의 id 인자로 넘겨 주기
            deletePost();
          }}
        >
          삭제
        </button>
      </CheckDelete>
    );
  };

  return (
    <>
      <BackGround
        onClick={() => {
          setViewModal(false);
        }}
      />
      <MenuList>
        <li onClick={toggleDel}>삭제</li>
        <li>
          {/* 해당 게시글(id) 수정 페이지로 이동 */}
          <Link href="#">수정</Link>
        </li>
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
  background-color: rgba(0, 0, 0, 0.3);
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 15% 5% 10%;
  width: 100%;
  height: 20vh;
  font-size: 0.875rem;
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
