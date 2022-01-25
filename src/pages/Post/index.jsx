import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';
import axios from 'axios';

import PostHeader from './Components/PostHeader';
import CommentList from './Components/CommentList';
import Inpreply from './Components/Inpreply';
import MenuModal from '../layouts/MenuModal';

import { API_ENDPOINT } from '../../constants';

const PostUploadPage = () => {
  const userToken = localStorage.getItem('Token');

  const postLike = () => {
    fetch(`${API_ENDPOINT}/post/61e7ca8b458f1ddd2e27055c/heart`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    });
  };

  const deleteLike = async () => {
    try {
      await axios.delete(
        `${API_ENDPOINT}/post/61e7ca8b458f1ddd2e27055c/unheart`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  const postId = '';

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
      <WrapPost>
        <PostHeader />
        <ItemHeader>
          <div className="wrap-img">
            <img
              src="/assets/logo.png"
              alt="게시물에 보여지는 사용자의 프로필 이미지입니다."
            />
          </div>
          <div className="user-post">
            <p>서초구 소울브레드</p>
            <small>@ soul_bread</small>
          </div>
          <div className="btn-more" onClick={toggleModal}>
            <span className="sr-only">게시물 메뉴</span>
          </div>
        </ItemHeader>
        <ItemMain>
          <p className="cont-post">
            옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다.
            이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는
            풍부하게 뛰노는 인생의 힘있다.
          </p>
          <img
            src="/assets/product-img.jpg"
            alt="게시물에 업로드된 이미지입니다."
            className="img-post"
          />
          <WrapResponse>
            <button
              className={isLike ? 'like on' : 'like'}
              onClick={toggleLike}
            ></button>
            <p>{countLike}</p>
            <Link to="/post/:id" className="comment"></Link>
            <p>0</p>
          </WrapResponse>
          <p className="date-post">2021년 12월 31일</p>
        </ItemMain>
        <CommentList postId={postId} />
      </WrapPost>
      <Inpreply postId={postId} />
      {viewModal ? (
        <MenuModal setViewModal={setViewModal} mode="게시글" postId={postId} />
      ) : null}
    </>
  );
};

export default PostUploadPage;

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
    img {
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
