import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import { useState, useEffect } from 'react';
import { API_ENDPOINT } from '../../../constants';
import { Link } from 'react-router-dom';

import axios from 'axios';

export const Userfeed = ({ keyword }) => {
  const now = new Date();
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    isLike ? setIsLike(false) : setIsLike(true);
  };
  const [post, setPost] = useState([]);

  const getFeed = async () => {
    const userToken = localStorage.getItem('Token');
    try {
      const res = await axios.get(`${API_ENDPOINT}/post/feed`, {
        headers: {
          // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
      setPost(res.data.posts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);

  return (
    <FeedWrap>
      {post
        .filter((post) => {
          if (keyword == '') {
            return post;
          } else if (
            post.content.toLowerCase().includes(keyword.toLowerCase())
          ) {
            return post;
          }
        })
        .map((data, index) => (
          <Userfeeds key={data.id}>
            <WrapPost>
              <UserInfo>
                <Link to={`/profile/${data.author.accountname}`}>
                  <img src={data.author.image} alt="" className="author-img" />
                </Link>
                <div className="author-post">
                  <p>{data.author.username}</p>
                  <small>{data.author.accountname}</small>
                </div>
                <span className="btn-more"></span>
              </UserInfo>
              <PostContent>
                <p className="txt-post">{data.content}</p>
                {data.image.length ? (
                  <img
                    src={data.image}
                    alt="이미지를 불러올 수 없습니다."
                    className="img-post"
                  />
                ) : null}
                <WrapResponse>
                  <button
                    className={isLike ? 'like on' : 'like'}
                    onClick={toggleLike}
                  ></button>
                  <p>{data.heartCount}</p>
                  <Link to={`/post/${data.id}`} className="comment"></Link>
                  <p>{data.commentCount}</p>
                </WrapResponse>
                <p className="date-post">
                  {new Date(data.createdAt).toLocaleDateString()}
                </p>
              </PostContent>
              {/* <CommentList /> */}
            </WrapPost>
          </Userfeeds>
        ))}
    </FeedWrap>
  );
};

const FeedWrap = styled.div`
  padding: 60px 0;
`;

const Userfeeds = styled.section``;

const WrapPost = styled.div`
  margin: 10px 0;
  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera*/
  }
`;

const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: spac
  height: 42px;
  width:390px;
  .author-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .author-post {
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
    right: 0;
    width: 18px;
    height: 18px;
    background-image: url('/assets/icon/icon-more-vertical.png');
    background-size: cover;
  }
`;
const PostContent = styled.main`
  margin-bottom: 20px;
  width: 390px;
  .txt-post {
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
