import React, { useEffect, useState } from 'react';
import { ReactDOM } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import axios from 'axios';

import MenuModal from '../../layouts/MenuModal';

import { API_ENDPOINT } from '../../../constants';
import { useParams } from 'react-router-dom';

function CommentList() {
  const params = useParams().id;
  const userAccount = localStorage.getItem('accountname');

  const [delComment, setDelComment] = useState('');
  const [comments, setComments] = useState([]);

  const [viewModal, setViewModal] = useState(false);
  const toggleModal = (e, commentId) => {
    e.preventDefault();
    setDelComment(commentId);
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  const getComments = async () => {
    const userToken = localStorage.getItem('Token');
    try {
      const res = await axios.get(`${API_ENDPOINT}/post/${params}/comments`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
      setComments(res.data.comments);
    } catch (err) {}
  };

  useEffect(() => {
    getComments();
  }, []);

  return (
    <Commentlist>
      {comments.map((data) => (
        <li key={data.id}>
          <img
            src={data.author.image}
            alt=""
            onError={(e) => {
              e.target.onerror = null;
              e.currentTarget.src = '/assets/basic-profile-img.png';
            }}
          />
          <div className="wrap-reply">
            <div className="info-reply">
              <p className="user-name">{data.author.username}</p>
              {/* 며칠전으로 바꿔야함 */}
              <small>{new Date(data.createdAt).toLocaleDateString()}</small>
              {data.author.accountname === userAccount ? (
                <button
                  onClick={(e) => {
                    toggleModal(e, data.id);
                  }}
                >
                  <span className="sr-only">댓글 메뉴 보기 버튼</span>
                </button>
              ) : null}
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
          postId={params}
          commentId={delComment}
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
