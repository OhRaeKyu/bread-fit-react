import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import axios from 'axios';

import MenuModal from '../../layouts/MenuModal';

import { API_ENDPOINT } from '../../../constants';

function CommentList({ postData }) {
  postData = '61e7ca8b458f1ddd2e27055c';

  const now = new Date();
  const [delIndex, setDelIndex] = useState('');
  const [comments, setComments] = useState([]);

  const [viewModal, setViewModal] = useState(false);
  const toggleModal = (e, index) => {
    e.preventDefault();
    setDelIndex(index);
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  const getComments = async () => {
    const userToken = localStorage.getItem('Token');
    try {
      const res = await axios.get(`${API_ENDPOINT}post/${postData}/comments`, {
        headers: {
          // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
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
      {comments.map((data, index) => (
        <li key={data.id}>
          <img src={data.author.image} alt="" />
          <div className="wrap-reply">
            <div className="info-reply">
              <p className="user-name">{data.author.username}</p>
              {/* 며칠전으로 바꿔야함 */}
              <small>{new Date(data.createdAt).toLocaleDateString()}</small>
              <button
                onClick={(e) => {
                  toggleModal(e, index);
                }}
              >
                <span className="sr-only">댓글 메뉴 보기 버튼</span>
              </button>
            </div>
            <p className="cont-reply">{data.content}</p>
          </div>
        </li>
      ))}
      {/* 자신의 댓글 일 때와 아닐 때 처리해야함 */}
      {viewModal ? (
        <MenuModal
          setViewModal={setViewModal}
          mode="댓글"
          commentId={comments[delIndex].id}
        />
      ) : null}
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
