import { PALLETS } from "../../constants";
import { Mainform } from "../../components/layouts/Mainform";
import React, { useState } from "react";
import styled from "@emotion/styled";
import ReactDOM from "react-dom";

export const ProfileModificationPage = () => {
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
  const maxLen = (value) => value.length <= 10;
  const name = useInput("", maxLen);
  const maxAbout = (value) => value.length <= 20;
  const about = useInput("", maxAbout);

  //-아이디 유효성 검사

  // 1. 영문 ,숫자만 입력 가능
  const [AlphaNum, setAlphaNum] = useState("");
  const isId = (e) => {
    const curValue = e.currentTarget.value;
    const regExp = /[^a-z0-9]/gi;
    setAlphaNum(curValue.replace(regExp, ""));
  };
  return (
    <Mainform>
      <ModifiSec>
        <section className="prof-modi-cont">
          <h1 className="sr-only">프로필 수정 페이지 입니다.</h1>
          <div className="prof-pic-wrap">
            <img id="profile-cha-img" src={fileImage} alt="사용자 지정 사진" />

            <input
              id="detail_image"
              className="profile-change-inp"
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={saveFileImage}
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
                required
                placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                className="inp-profile-about"
                id="userAbout"
              />
            </label>
          </article>
        </section>
      </ModifiSec>
    </Mainform>
  );
};
export default ProfileModificationPage;

const Container = styled.section``;

const ModifiSec = styled.section`
  .prof-modi-cont {
    margin-top: 20px;
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
