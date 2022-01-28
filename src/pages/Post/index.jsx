import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

import PostHeader from './Components/PostHeader';
import CommentList from './Components/CommentList';
import Inpreply from './Components/Inpreply';
import MenuModal from '../layouts/MenuModal';

import { API_ENDPOINT } from '../../constants';

const PostDetailPage = ({ postId }) => {
  const params = useParams().id;
  const userToken = localStorage.getItem('Token');
  const userAccount = localStorage.getItem('accountname');

  const [post, setPost] = useState();
  const getPost = async () => {
    try {
      const res = await axios.get(`${API_ENDPOINT}/post/${params}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
      setPost(res.data.post);
      setIsLike(res.data.post.hearted);
      setCountLike(res.data.post.heartCount);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPost();
  }, []);

  const postLike = async () => {
    fetch(`${API_ENDPOINT}/post/${params}/heart`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    });
  };

  const deleteLike = async () => {
    try {
      await axios.delete(`${API_ENDPOINT}/post/${params}/unheart`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [isLike, setIsLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const toggleLike = (e) => {
    e.preventDefault();
    if (isLike) {
      setCountLike(countLike - 1);
      setIsLike(false);
      deleteLike();
    } else {
      setCountLike(countLike + 1);
      setIsLike(true);
      postLike();
    }
  };

  const [viewModal, setViewModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  return (
    <>
      {post ? (
        <WrapPost>
          <PostHeader />
          <ItemHeader>
            <Link
              to={`/profile/${post.author.accountname}`}
              className="wrap-img"
            >
              <img
                src={post.author.image}
                alt="게시물에 보여지는 사용자의 프로필 이미지입니다."
              />
            </Link>
            <div className="user-post">
              <p>{post.author.username}</p>
              <small>{post.author.accountname}</small>
            </div>
            {post.author.accountname === userAccount ? (
              <div className="btn-more" onClick={toggleModal}>
                <span className="sr-only">게시물 메뉴</span>
              </div>
            ) : null}
          </ItemHeader>
          <ItemMain>
            <p className="cont-post">{post.content}</p>
            <img
              src={post.image}
              alt="게시물에 업로드된 이미지입니다."
              className="img-post"
            />
            <WrapResponse>
              <button
                className={isLike ? 'like on' : 'like'}
                onClick={toggleLike}
              ></button>
              <p>{countLike}</p>
              <div className="comment"></div>
              <p>{post.commentCount}</p>
            </WrapResponse>
            <p className="date-post">
              {new Date(post.createdAt).toLocaleDateString()}
            </p>
          </ItemMain>
          <CommentList postId={params} />
        </WrapPost>
      ) : null}
      <Inpreply postId={params} />
      {viewModal ? (
        <MenuModal setViewModal={setViewModal} mode="게시글" postId={params} />
      ) : null}
    </>
  );
};

export default PostDetailPage;

const WrapPost = styled.div`
  width: 390px;
  margin: 60px auto;
`;

const ItemHeader = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 42px;

  .wrap-img {
    width: 42px;
    height: 42px;
    border: 1px solid ${PALLETS.LIGHTGRAY};
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .user-post {
    margin-left: 8px;

    p {
      font-size: 14px;
      font-weight: 500;
    }

    small {
      font-size: 12px;
      font-weight: 400;
      color: ${PALLETS.GRAY};
    }
  }

  .btn-more {
    cursor: pointer;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 18px;
    height: 18px;
    background-image: url('/assets/icon/icon-more-vertical.png');
    background-size: cover;
  }
`;

const ItemMain = styled.div`
  margin-left: 50px;

  .cont-post {
    margin: 15px 0;
    line-height: 1.3;
  }

  .img-post {
    width: 100%;
    border-radius: 10px;
  }

  .date-post {
    font-size: 10px;
    font-weight: 400;
    color: ${PALLETS.GRAY};
  }
`;

const WrapResponse = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  .like {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/icon-heart.png');
    background-size: cover;
    margin-right: 5px;

    &.on {
      background-image: url('/assets/icon/icon-heart-active.png');
    }
  }

  p {
    font-size: 12px;
  }

  p + .comment {
    margin-left: 20px;
  }

  .comment {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/icon-message-circle.png');
    background-size: cover;
    margin-right: 5px;
  }
`;
