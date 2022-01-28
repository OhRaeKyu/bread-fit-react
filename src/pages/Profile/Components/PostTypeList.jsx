import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MenuModal from '../../layouts/MenuModal';
import { PALLETS } from '../../../constants';
import axios from 'axios';
import { API_ENDPOINT } from '../../../constants';

function PostTypeList() {
  const params = useParams().id;
  const [postMenu, setPostMenu] = useState('');
  const userAccount = localStorage.getItem('accountname');
  const userToken = localStorage.getItem('Token');

  const [isLiked, setIsLiked] = useState([]);
  const [likeCount, setLikeCount] = useState([]);

  const postLike = async (postId) => {
    fetch(`${API_ENDPOINT}/post/${postId}/heart`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    });
  };

  const deleteLike = async (postId) => {
    try {
      await axios.delete(`${API_ENDPOINT}/post/${postId}/unheart`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleLike = async (e, index, postId) => {
    e.preventDefault();
    if (isLiked[index]) {
      deleteLike(postId);
      isLiked[index] = false;
      likeCount[index] -= 1;
    } else {
      postLike(postId);
      isLiked[index] = true;
      likeCount[index] += 1;
    }
  };

  const [viewModal, setViewModal] = useState(false);
  const toggleModal = (e, postId) => {
    e.preventDefault();
    setPostMenu(postId);
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  const [feed, setFeed] = useState([]);

  const getPostList = async () => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}/post/${params ? params : userAccount}/userpost`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }
      );
      setFeed(res.data.post);
      res.data.post.map((ele) => {
        setIsLiked((isLiked) => [...isLiked, ele.hearted]);
        setLikeCount((likeCount) => [...likeCount, ele.heartCount]);
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getPostList();
  }, []);

  return (
    <>
      <ul>
        {feed.map((data, index) => (
          <PostItem key={data.id}>
            <ItemHeader>
              <div className="wrap-img">
                <img
                  src={data.author.image}
                  alt="게시물에 보여지는 사용자의 프로필 이미지입니다."
                />
              </div>
              <div className="user-post">
                <p>{data.author.username}</p>
                <small>@ {data.author.accountname}</small>
              </div>
              {data.author.accountname === userAccount ? (
                <div
                  className="btn-more"
                  onClick={(e) => {
                    toggleModal(e, data.id);
                  }}
                >
                  <span className="sr-only">게시물 메뉴</span>
                </div>
              ) : null}
            </ItemHeader>
            <ItemMain>
              <p className="cont-post">{data.content}</p>
              {data.image.length ? (
                <img
                  src={data.image}
                  alt="게시물에 업로드된 이미지입니다."
                  className="img-post"
                />
              ) : null}
              <WrapResponse>
                <button
                  className={isLiked[index] ? 'like on' : 'like'}
                  onClick={(e) => {
                    toggleLike(e, index, data.id);
                  }}
                ></button>
                <p>{likeCount[index]}</p>
                <Link to={`/post/${data.id}`} className="comment"></Link>
                <p>{data.commentCount}</p>
              </WrapResponse>
              <p className="date-post">
                {data.updatedAt.slice(0, 4)}년{data.updatedAt.slice(5, 7)}월
                {data.updatedAt.slice(8, 10)}일
              </p>
            </ItemMain>
          </PostItem>
        ))}
      </ul>
      {viewModal ? (
        <MenuModal
          setViewModal={setViewModal}
          mode="게시글"
          postId={postMenu}
        />
      ) : null}
    </>
  );
}
const PostItem = styled.li`
  margin-top: 15px;
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

export default PostTypeList;
