import { PALLETS } from '../../constants';
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { useHistory, Link } from 'react-router-dom';

const Test = ({ postData }) => {
    let history = useHistory();
    const itemName = useRef(null);
    const price = useRef(null);
    const link = useRef(null);
    const itemImage = useRef(null);
    const productPost = (e) => {
        
          e.preventDefault();
          // 게시글 id 인자로 받기
          fetch('http://146.56.183.55:5050/product', {
            method: 'POST',
            headers: {
              // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              "product":{
                "itemName": `${itemName.current.value}`,
                "price": parseInt(price.current.value),
                "link": `${link.current.value}`,
                "itemImage": `${itemImage.current.value}`
              }
            })
          })}
  return (
      <ModifiSec>
        <form>
        <ModificationHeads>
          <button id="btnBack" onClick={() => {history.back();}}></button>
          <Link to="/product/id">
          <button id="uploadBtn" onClick={productPost}>저장</button>
          </Link>
        </ModificationHeads>
        <section className="prod-modi-cont">
          <h1 className="sr-only">상품 수정 페이지 입니다.</h1>
          <div className="prod-picb-wrap">
            <h2 className="product-title">이미지 등록</h2>
            <img src=""alt="상품 사진" id="product-cha-img" />
            <input
              id="product-cha-btn"
              className="product-change-inp"
              name="imgUpload"
              type="file"
              accept="image/*"
              ref={itemImage}
              required
            />
            <label htmlFor="product-cha-btn" className="product-change-btn"></label>
          </div>
          <article className="prod-info-inpt">
            <label>
              <h3>상품명</h3>
              <input
                type="text"
                placeholder="1~15자 이내여야 합니다."
                className="inp-product-name"
                ref={itemName}
                required
                />
            </label>
            <label>
              <h3>가격</h3>
              <input
                type="number"
                placeholder="숫자만 입력 가능합니다."
                className="inp-product-price"
                required
                ref={price}
              />
            </label>
            <label>
              <h3>판매 링크</h3>
              <input
                type="text"
                placeholder="URL을 입력해 주세요."
                className="inp-product-link"
                required
                ref={link}
              />
            </label>
          </article>
        </section>
        </form>
      </ModifiSec>
      );
};
export default Test;


const ModifiSec = styled.section`
  .sr-only {
    position: absolute;
    overflow: hidden;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    border: 0;
    clip: rect(0, 0, 0, 0);
  }

  .prod-modi-cont {
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    .prod-picb-wrap {
      position: relative;
      margin-top: 50px;
      .product-title {
        font-size: 12px;
        font-weight: 400;
      }
      img {
        width: 322px;
        height: 204px;
        border-radius: 10px;
        background-color: ${PALLETS.LIGHTGRAY};
      }
      .product-change-btn {
        width: 36px;
        height: 36px;
        position: absolute;
        bottom: 10px;
        right: 10px;
        background-image: url('/assets/upload-file.png');
        background-size: cover;
        cursor: pointer;
      }
    }
    .product-change-inp {
      width: 1px;
      height: 1px;
      opacity: 0;
    }
  }
  .prod-info-inpt {
    label {
      width: 322px;
      height: 48px;
    }
    input {
      margin-bottom: 16px;
      border: none;
      width: 322px;
      border-bottom: 1px solid ${PALLETS.LIGHTGRAY};
    }
    h3 {
      font-size: 12px;
      margin-top: 16px;
      margin-bottom: 10px;
    }
    .ms-button {
      position: absolute;
      right: 16px;
    }
  }
  .prod-info-inpt input::placeholder {
    color: ${PALLETS.LIGHTGRAY};
    font-size: 14px;
  }

  .prod-info-inpt .ms-button.disabled {
    display: none;
  }
  .ms-button.disabled.add {
    display: block;
  }
`;

const ModificationHeads = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 48px;
  padding: 13px 16px;
  border-bottom: 1px solid ${PALLETS.GRAY};
  #btnBack {
    background: url(/assets/icon/icon-arrow-left.png);
    width: 22px;
    height: 22px;
  }
  #uploadBtn {
    background-color: ${PALLETS.ORANGE};
    width: 100px;
    height: 28px;
    padding: 0 11px;
    border-radius: 26px;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    .disabled {
      background-color: ${PALLETS.BEIGE};
    }
  }
`;
