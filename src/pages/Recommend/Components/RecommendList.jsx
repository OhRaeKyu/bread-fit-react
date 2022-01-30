import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';

const imgList = [
  '바게트',
  '수플레',
  '타르트',
  '크루아상',
  '샌드위치',
  '머핀',
  '도넛',
  '케이크',
];

function RecommendList() {
  const [isClick, setIsClick] = useState(false);
  const toggleBtn = (e) => {
    e.preventDefault();
    setIsClick(!isClick);
  };
  const RecommendItem = () => {
    const num = Math.floor(Math.random() * imgList.length);
    return (
      <>
        {isClick ? (
          <img src={`/assets/recommend/bread_${num}.jpg`} alt={imgList[num]} />
        ) : (
          <div className="temp">
            <span>?</span>
          </div>
        )}
        <p>
          추천 빵은 <strong>{isClick ? imgList[num] : '000'}</strong>입니다!
        </p>
        <button type="button" onClick={toggleBtn} className="btn-recommend">
          {isClick ? '다시하기' : '추천'}
        </button>
      </>
    );
  };
  return (
    <RecommendWrap>
      <RecommendItem />
    </RecommendWrap>
  );
}

export default RecommendList;

const RecommendWrap = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
    object-fit: cover;
    border-radius: 10px;
    animation: appear 0.5s ease-in-out;
  }

  p {
    margin: 20px 0;
    strong {
      font-size: 1.3rem;
      font-weight: 700;
      text-decoration: underline;
      animation: appear 1s linear;
    }
  }

  .temp {
    width: 300px;
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 3rem;
    border-radius: 10px;
    color: ${PALLETS.ORANGE};

    span {
      display: inline-block;
      animation: scale 0.5s alternate infinite;
    }
  }

  .btn-recommend {
    font-size: 20px;
    width: 130px;
    height: 40px;
    border-radius: 20px;
    background-color: ${PALLETS.ORANGE};
    color: ${PALLETS.WHITE};
  }

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes scale {
    0% {
      transform: scale(0.5);
    }
    100% {
      transform: scale(1);
    }
  }
`;
