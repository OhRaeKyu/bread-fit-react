import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../constants';

function CommentList() {
  const now = new Date();
  const [comment, setComment] = useState([]);

  useEffect(() => {
    // 게시글 id 인자로 받기
    fetch('http://146.56.183.55:5050/post/61e7ca8b458f1ddd2e27055c/comments', {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzgyNjYyMCwiaWF0IjoxNjQyNjQyNjIwfQ.1aA9IYP98ludT0Te-f-awqzew_Blbr2enfdFI8Tk2Fw`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setComment(data.comments);
      });
  }, []);

  return (
    <Commentlist>
      {comment.map((data) => (
        <li key={data.id}>
          <img src={data.author.image} alt="" />
          <div className="wrap-reply">
            <div className="info-reply">
              <span>{data.author.username}</span>
              {/* 며칠전으로 바꿔야함 */}
              <small>{new Date(data.createdAt).toLocaleDateString()}</small>
              <button></button>
            </div>
            <p className="cont-reply">{data.content}</p>
          </div>
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
    margin-top: 10px;
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

        span {
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
