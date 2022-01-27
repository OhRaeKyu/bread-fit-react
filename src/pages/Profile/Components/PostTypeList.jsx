import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import MenuModal from '../../layouts/MenuModal';
import { PALLETS } from '../../../constants';
import axios from 'axios';
import { API_ENDPOINT } from '../../../constants';

function PostTypeList({ userData }) {
  const [delIndex, setDelIndex] = useState('');
  const userAccount = localStorage.getItem('accountname');
  const userToken = localStorage.getItem('Token');
  const postLike = () => {
    fetch(`${API_ENDPOINT}post/61e7ca8b458f1ddd2e27055c/heart`, {
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
        `${API_ENDPOINT}post/61e7ca8b458f1ddd2e27055c/unheart`,
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
  const toggleModal = (e, index) => {
    e.preventDefault();
    setDelIndex(index);
    console.log(index);
    console.log(delIndex);
    viewModal ? setViewModal(false) : setViewModal(true);
  };

  const postId = '';
  const [feed, setFeed] = useState([]);
  console.log(feed);
  useEffect(() => {
    fetch(`${API_ENDPOINT}/post/${userAccount}/userpost`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeed(data.post);
      });
  }, []);
  console.log(feed[delIndex]);

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
              <div className="btn-more" onClick={toggleModal}>
                <span className="sr-only">게시물 메뉴</span>
              </div>
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
                  className={isLike ? 'like on' : 'like'}
                  onClick={toggleLike}
                ></button>
                <p>{countLike}</p>
                <Link to={`/post/${data.id}`} className="comment"></Link>
                <p>0</p>
              </WrapResponse>
              <p className="date-post">
                {data.updatedAt.slice(0, 4)}년{data.updatedAt.slice(5, 7)}월
                {data.updatedAt.slice(8, 10)}일
              </p>
            </ItemMain>
            {viewModal ? (
              <MenuModal
                setViewModal={setViewModal}
                mode="게시글"
                data={data.id}
              />
            ) : null}
          </PostItem>
        ))}
      </ul>
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
