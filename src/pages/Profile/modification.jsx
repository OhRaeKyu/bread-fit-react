import { PALLETS } from '../../constants';
import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { useHistory, Link } from 'react-router-dom';

export const ProfileModificationPage = () => {
  let history = useHistory();

  //프로필 사진 미리보기
  const [image, setImgfile] = useState(null);
  const [imageSrc, setImageSrc] = useState('/assets/logo.png');
  const [fileImage, setFileImage] = useState('/assets/logo.png');
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };

  //이미지 초기화
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

  const userName = useRef(null);
  const accountname = useRef(null);
  const intro = useRef(null);
  const itemImage = useRef(null);
  const userAccountName = '';

  localStorage.setItem(userAccountName, accountname);

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

  const profileEdit = async (e) => {
    e.preventDefault();
    const userToken = localStorage.getItem('token');
    const imageUrls = [];
    const files = image;
    const url = 'http://146.56.183.55:5050';
    if (files.length < 2) {
      for (let index = 0; index < files.length; index++) {
        const imgurl = await imageUpload(files, index);
        imageUrls.push(url + '/' + imgurl);
      }
      // 게시글 id 인자로 받기
      const res = await fetch(url + '/user', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWYzMGIyMzY4NTcwZTE1MTQ3MDhlMCIsImV4cCI6MTY0ODI0OTUzNywiaWF0IjoxNjQzMDY1NTM3fQ.yT63IjWS6aC4UfYii0AgzALFztLCCj0H33EbLEtdBqA`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: `${userName.current.value}`,
            accountname: `${accountname.current.value}`,
            intro: `${intro.current.value}`,
            image: imageUrls[0] + '',
          },
        }),
      });
      const json = await res.json();
    }
  };

  // 글자수 제한
  const useInput = (initialValue, validator) => {
    const [value, setValue] = useState(initialValue);
    const onChange = (event) => {
      const {
        target: { value },
      } = event;
      let willUpdate = true;
      if (typeof validator === 'function') {
        willUpdate = validator(value);
      }
      if (willUpdate) {
        setValue(value);
      }
    };
    return { value, onChange };
  };
  const maxLen = (value) => value.length <= 10;
  const name = useInput('', maxLen);
  const maxAbout = (value) => value.length <= 20;
  const about = useInput('', maxAbout);

  //-아이디 유효성 검사

  // 1. 영문 ,숫자만 입력 가능
  const [AlphaNum, setAlphaNum] = useState('');
  const isId = (e) => {
    const curValue = e.currentTarget.value;
    const regExp = /[^a-z0-9]/gi;
    setAlphaNum(curValue.replace(regExp, ''));
  };
  return (
    <ModifiSec>
      <ModificationHeads>
        <button
          id="btnBack"
          onClick={() => {
            history.goBack();
          }}
        ></button>
        <Link to="/profile">
          <button id="uploadBtn" onClick={profileEdit}>
            저장
          </button>
        </Link>
      </ModificationHeads>
      <section className="prof-modi-cont">
        <h1 className="sr-only">프로필 수정 페이지 입니다.</h1>
        <div className="prof-pic-wrap">
          <img id="profile-cha-img" src={imageSrc} alt="사용자 지정 사진" />

          <input
            id="detail_image"
            className="profile-change-inp"
            name="imgUpload"
            type="file"
            accept="image/*"
            ref={itemImage}
            onChange={handleChangeFile}
          />

          <label htmlFor="detail_image" className="profile-change-btn">
            <img src="/assets/upload-file.png" alt="파일 올리기 버튼" />
          </label>
        </div>
        <article className="prof-info-inpt">
          <label>
            <h3>사용자 이름</h3>
            <input
              placeholder="2~10자 이내여야 합니다."
              ref={userName}
              value={name.value}
              onChange={name.onChange}
              required
              className="inp-profile-name"
              type="text"
              id="userName"
            />
          </label>
          <label>
            <h3>계정 ID</h3>
            <input
              type="text"
              placeholder="영문, 숫자 만 사용 가능합니다."
              className="inp-profile-price"
              id="userId"
              required
              ref={accountname}
              value={AlphaNum}
              onChange={isId}
            />
            <p id="profile-id-alert">
              14자 이내의 영문과 숫자를 조합해서 입력해 주세요.
            </p>
          </label>
          <label>
            <h3>소개</h3>
            <input
              type="text"
              value={about.value}
              onChange={about.onChange}
              ref={intro}
              required
              placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
              className="inp-profile-about"
              id="userAbout"
            />
          </label>
        </article>
      </section>
    </ModifiSec>
  );
};
export default ProfileModificationPage;

const ModifiSec = styled.section`
  .prof-modi-cont {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    .prof-pic-wrap {
      position: relative;
      width: 110px;
      height: 110px;
      img {
        width: 90px;
        height: 90px;
        border-radius: 90px;
        background-color: ${PALLETS.GRAY};
      }
      .profile-change-inp {
        width: 1px;
        height: 1px;
        opacity: 0;
      }
    }
  }
  .prof-modi-cont .profile-change-btn img {
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
  .prof-info-inpt label {
    width: 322px;
    height: 48px;
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
  }
  .prof-info-inpt input::placeholder {
    color: var ${PALLETS.LIGHTGRAY};
    font-size: 14px;
  }

  #profile-id-alert {
    display: none;
    color: red;
    font-size: 11px;
    margin-top: -10px;
  }
  #profile-id-alert.on {
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
