import styles from '../../styles/profile.module.css';
import React, { useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';

import PostMenuModal from './PostMenuModal';

function PostTypeList() {
  const [isLike, setIsLike] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const toggleLike = (e) => {
    e.preventDefault();
    if (isLike) {
      setCountLike(countLike - 1);
      setIsLike(false);
    } else {
      setCountLike(countLike + 1);
      setIsLike(true);
    }
  };

  const [viewModal, setViewModal] = useState(false);
  const toggleModal = (e) => {
    e.preventDefault();
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  return (
    <div>
      <ul className={styles['post-list']}>
        <li className={styles['post']}>
          <div className={styles['content-head']}>
            <img
              src="/assets/logo.png"
              alt="게시물에 보여지는 사용자의 프로필 이미지입니다."
              className={styles['user-image']}
            />
            <div>
              <p className={styles['user-name']}>서초구 소울브레드</p>
              <p className={styles['user-id']}>@ soul_bread</p>
            </div>
            <button>
              <img
                src="/assets/icon/s-icon-more-vertical.png"
                alt="게시물 메뉴 더보기 버튼입니다."
                className={styles['moremenu-btn']}
                onClick={toggleModal}
              />
            </button>
          </div>
          <div className={styles['content-main']}>
            <p className={styles['post-content']}>
              옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
              뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
              넣는 풍부하게 뛰노는 인생의 힘있다.
            </p>
            <img
              src="/assets/product-img.jpg"
              alt="게시물에 업로드된 이미지입니다."
              className={styles['post-image']}
            />
            <div className={styles['post-response']}>
              <button type="button" onClick={toggleLike}>
                <img
                  src={
                    isLike === true
                      ? '/assets/icon/icon-heart-active.png'
                      : '/assets/icon/icon-heart.png'
                  }
                  alt="해당 게시물에 좋아요를 추가하는 버튼입니다."
                  className={styles['post-heart']}
                />
              </button>
              <p className={styles['heart-count']}>{countLike}</p>
              <Link href="/post" passhref>
                <CommentBtn />
              </Link>
              <p className={styles['comment-count']}>000</p>
            </div>
            <p className={styles['post-date']}>2021년 12월 31일</p>
          </div>
        </li>
      </ul>
      {viewModal ? (
        <PostMenuModal setViewModal={setViewModal} mode="post" />
      ) : null}
    </div>
  );
}

const CommentBtn = styled.a`
  width: 20px;
  height: 20px;
  background-image: url('/assets/icon/icon-message-circle.png');
  background-size: cover;
`;

export default PostTypeList;
