import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS, API_ENDPOINT } from '../../constants';
import { useHistory, Link, useParams } from 'react-router-dom';
import axios from 'axios';
function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [poster, setPoster] = useState('');
  const userToken = localStorage.getItem('Token');
  const userAccountname = localStorage.getItem('accountname');
  const productParams = useParams();
  const getProduct = async () => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}/product/detail/${productParams.id}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }
      );
      setProduct(res.data.product);
      setPoster(res.data.product.author.accountname);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  let history = useHistory();

  const deleteProduct = async () => {
    try {
      await axios.delete(`${API_ENDPOINT}/product/${productParams.id}`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ModifiSec key={product.id}>
      <ModificationHeads>
        <button
          id="btnBack"
          onClick={() => {
            history.goBack();
          }}
        ></button>
        {poster === userAccountname ? (
          <div>
            <Link to="/profile">
              <button className="uploadBtn" onClick={deleteProduct}>
                삭제하기
              </button>
            </Link>
            <Link to={`/productEdit/${product.id}`}>
              <button className="uploadBtn">수정하기</button>
            </Link>
          </div>
        ) : null}
      </ModificationHeads>
      <section className="prod-modi-cont">
        <h1 className="sr-only">상품 수정 페이지 입니다.</h1>
        <div className="prod-picb-wrap">
          <img src={product.itemImage} alt="상품 사진" id="product-cha-img" />
        </div>
        <article className="prod-info-inpt">
          <label>
            <h3>상품명</h3>
            <li className="inp-product-name" required>
              {product.itemName}
            </li>
          </label>
          <label>
            <h3>가격</h3>
            <li className="inp-product-price">{product.price}</li>
          </label>
          product
          <label>
            <h3>판매 링크</h3>
            <li className="inp-product-link">{product.link}</li>
          </label>
        </article>
      </section>
    </ModifiSec>
  );
}

export default ProductDetail;

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
  ul,li,ol {
    list-style: none;
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
    }
  .prod-info-inpt {
    label {
      width: 322px;
      height: 48px;
      li {
        width: 322px;
        height: 20px;
        margin-bottom: 20px;
        border-bottom: 1px solid ${PALLETS.LIGHTGRAY};
        &:hover {
          border-bottom: 1px solid black;
        }
      }
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
  .uploadBtn {
    background-color: ${PALLETS.ORANGE};
    width: 100px;
    height: 28px;
    padding: 0 11px;
    border-radius: 26px;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    margin-right: 10px;
    .disabled {
      background-color: ${PALLETS.BEIGE};
    }
  }
`;
