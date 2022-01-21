import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import axios from 'axios';

import MenuModal from '../../layouts/MenuModal';

function CommentList({ postData }) {
  postData = '61e7ca8b458f1ddd2e27055c';

  const now = new Date();
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const [viewModal, setViewModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  const getComments = async () => {
    try {
      const res = await axios.get(
        `http://146.56.183.55:5050/post/${postData}/comments`,
        {
          headers: {
            // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzgyNjYyMCwiaWF0IjoxNjQyNjQyNjIwfQ.1aA9IYP98ludT0Te-f-awqzew_Blbr2enfdFI8Tk2Fw`,
            'Content-type': 'application/json',
          },
        }
      );
      setComments(res.data.comments);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Commentlist>
      {comments.map((data) => (
        <li key={data.id}>
          <img src={data.author.image} alt="" />
          <div className="wrap-reply">
            <div className="info-reply">
              <p className="user-name">{data.author.username}</p>
              {/* 며칠전으로 바꿔야함 */}
              <small>{new Date(data.createdAt).toLocaleDateString()}</small>
              <button onClick={toggleModal}>
                <span className="sr-only">댓글 메뉴 보기 버튼</span>
              </button>
            </div>
            <p className="cont-reply">{data.content}</p>
          </div>
          {viewModal ? (
            <MenuModal
              setViewModal={setViewModal}
              mode="comment"
              commentId={data.id}
            />
          ) : null}
        </li>
      ))}
    </Commentlist>
  );
}

const Commentlist = styled.ul`
  margin-top: 20px;
  padding: 20px 0;
  border-top: 1px solid ${PALLETS.LIGHTGRAY};

  li + li {
    margin-top: 20px;
  }

  li {
    display: flex;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: ${PALLETS.BEIGE};
    }

    .wrap-reply {
      width: 100%;
      margin-left: 12px;

      .info-reply {
        display: block;
        position: relative;
        height: 36px;
        line-height: 36px;

        .user-name {
          display: inline-block;
          font-size: 14px;
          font-weight: 500;
          margin-right: 6px;
        }

        small {
          font-size: 10px;
          color: ${PALLETS.GRAY};
        }

        button {
          position: absolute;
          top: 0;
          right: 0;
          width: 18px;
          height: 18px;
          background-image: url(/assets/icon/icon-more-vertical.png);
          background-size: cover;
        }
      }

      .cont-reply {
        margin-top: 5px;
        font-size: 14px;
      }
    }
  }
`;

export default CommentList;
