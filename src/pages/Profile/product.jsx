import { PALLETS } from "../../constants";
import { Mainform } from "../../components/layouts/Mainform";
import React, { useState } from "react";

import styled from "@emotion/styled";
const ProductModificationPage = () => {
  //프로필 사진 미리보기
  const [fileImage, setFileImage] = useState("/assets/logo.png");
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const deleteFileImage = () => {
    URL.revokeObjectURL(fileImage);
    setFileImage("");
  };

  // 글자수 제한
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === "function") {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  const maxLen = (value) => value.length <= 15;
  const name = useInput("", maxLen);
  const maxPrice = (value) => value.length <= 8;
  const price = useInput("", maxPrice);

  //url 규칙
  const [AlphaNum, setAlphaNum] = useState("");
  const isId = (e) => {
    const curValue = e.currentTarget.value;
    const regExp = /(http(s)?:\/\/)([a-z0-9\w]+\.*)+[a-z0-9]{2,4}/gi;
    setAlphaNum(curValue.replace(regExp, ""));
  };

  return (
    <Mainform>
      <ModifiSec>
        <section className="prod-modi-cont">
          <h1 className="sr-only">상품 수정 페이지 입니다.</h1>
          <div className="prod-picb-wrap">
            <h2 className="product-title">이미지 등록</h2>
            <img src={fileImage} alt="상품 사진" id="product-cha-img" />
            <input
              id="product-cha-btn"
              className="product-change-inp"
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={saveFileImage}
              required
            />
            <label for="product-cha-btn" className="product-change-btn"></label>
          </div>
          <article className="prod-info-inpt">
            <label>
              <h3>상품명</h3>
              <input
                type="text"
                placeholder="1~15자 이내여야 합니다."
                className="inp-product-name"
                value={name.value}
                onChange={name.onChange}
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
                value={price.value}
                onChange={price.onChange}
              />
            </label>
            <label>
              <h3>판매 링크</h3>
              <input
                type="text"
                placeholder="URL을 입력해 주세요."
                className="inp-product-link"
                required
                value={AlphaNum}
                onChange={isId}
              />
            </label>
          </article>
        </section>
      </ModifiSec>
    </Mainform>
  );
};

export default ProductModificationPage;

const Container = styled.section``;

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
      margin-top: 20px;
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
        background-image: url("/assets/upload-file.png");
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
