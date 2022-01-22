import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import { useState, useEffect } from 'react';
export const Userfeed = () => {
  const now = new Date();
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    isLike ? setIsLike(false) : setIsLike(true);
  };
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch('http://146.56.183.55:5050/post/feed', {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWEwOTQ3NDU4ZjFkZGQyZTJiYTE5MiIsImV4cCI6MTY0NzkyNzEwOSwiaWF0IjoxNjQyNzQzMTA5fQ.kxZJWVlF8-1DFZKxflFBAmEr6jRyq2ynCRIiTTGP6Ks`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPost(data.posts);
      });
  }, []);

  return (
    <>
      {post.map((data, index) => (
        <Userfeeds key={index}>
          <WrapPost>
            <UserInfo>
              <img src="../assets/logo.png" alt="" className="author-img" />
              <div className="author-post">
                <p>{data.author.username}</p>
                <small>{data.author.accountname}</small>
              </div>
              <span className="btn-more"></span>
            </UserInfo>
            <PostContent>
              <p className="txt-post">{data.content}</p>
              {data.image.length ? (
                <img src={data.image} alt="storepicture" className="img-post" />
              ) : null}
              <WrapResponse>
                <button
                  className={isLike ? 'like on' : 'like'}
                  onClick={toggleLike}
                ></button>
                <p>{data.heartCount}</p>
                <button className="comment"></button>
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
    </>
  );
};

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
