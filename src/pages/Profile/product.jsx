import { PALLETS } from '../../constants';
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { useHistory, Link } from 'react-router-dom';

const ProductModificationPage = () => {
  let history = useHistory();
  const back = () => {
    history.goBack();
  };

  const [itemName, setItemName] = useState('');
  const [price, setPrice] = useState('');
  const [Url, setUrl] = useState('');
  const [image, setImgfile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  const onItem = (e) => {
    setItemName(e.target.value);
  };
  const onPrice = (e) => {
    setPrice(e.target.value);
  };
  const onUrl = (e) => {
    setUrl(e.target.value);
  };
  const handleChangeFile = (e) => {
    setImgfile(e.target.files);
    encodeFileToBase64(e.target.files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  async function imageUpload(files, index) {
    const formData = new FormData();
    formData.append('image', files[index]);
    const res = await fetch(`http://146.56.183.55:5050/image/uploadfile`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    const productImgName = data['filename'];
    return productImgName;
  }
  async function productPost(e) {
    const imageUrls = [];
    const files = image;
    const url = 'http://146.56.183.55:5050';
    if (files.length < 2) {
      for (let index = 0; index < files.length; index++) {
        const imgurl = await imageUpload(files, index);
        imageUrls.push(url + '/' + imgurl);
      }
      const res = await fetch(url + '/product', {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE5Y2ZhY2QyN2I2Y2Y2NWY5NTJlZCIsImV4cCI6MTY0Nzk0OTU3OCwiaWF0IjoxNjQyNzY1NTc4fQ.yvPTEypDONy8Pbf0Rp30u66ceoqi-esfavk1CtWK4nA`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            itemName : itemName,
            price : price,
            link : Url, 
            image: imageUrls + '',
          },
        }),
      });
      console.log(res);
      const json = await res.json();
    }
  }
  return (
      <ModifiSec>
        {/* <form> */}
        <ModificationHeads>
          <button id="btnBack" onClick={() => {history.back();}}></button>
          {/* <Link to="/product/id"> */}
          <button id="uploadBtn" onClick={productPost}>저장</button>
          {/* </Link> */}
        </ModificationHeads>
        <section className="prod-modi-cont">
          <h1 className="sr-only">상품 수정 페이지 입니다.</h1>
          <div className="prod-picb-wrap">
            <h2 className="product-title">이미지 등록</h2>
            <img src={imageSrc} alt="상품 사진" id="product-cha-img" />
            <input
              type="file"
              accept="image/*"
              id="product-cha-btn"
              onChange={handleChangeFile}
              multiple
            ></input>
            <label htmlFor="product-cha-btn" className="product-change-btn"></label>
          </div>
          <article className="prod-info-inpt">
            <label>
              <h3>상품명</h3>
              <input
                type="text"
                placeholder="1~15자 이내여야 합니다."
                className="inp-product-name"
                value={itemName}
                onChange={onItem}
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
                value={price}
                onChange={onPrice}
              />
            </label>
            <label>
              <h3>판매 링크</h3>
              <input
                type="text"
                placeholder="URL을 입력해 주세요."
                className="inp-product-link"
                required
                value={Url}
                onChange={onUrl}
              />
            </label>
          </article>
        </section>
        {/* </form> */}
      </ModifiSec>
  );
  }
export default ProductModificationPage;


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
