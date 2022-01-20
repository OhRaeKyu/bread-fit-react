import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';

const SettingPage = () => {
  return (
    <Form method="POST">
      <h2>프로필 설정</h2>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <section>
        <img src="/assets/logo-white.svg" alt="" />
        <label htmlFor="upload">
          <input type="file" id="upload" className="sr-only" accept="image/*" />
        </label>
      </section>
      <fieldset>
        <label htmlfor="name">사용자 이름</label>
        <input id="name" type="text" placeholder="2~10자 이내여야 합니다." />
      </fieldset>
      <fieldset>
        <label htmlfor="id">계정 ID</label>
        <input
          id="id"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
        <strong>*비밀번호가 일치하지않습니다.</strong>
      </fieldset>
      <fieldset>
        <label htmlfor="desc">소개</label>
        <input
          id="desc"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </fieldset>
      <Link to="/home" passHref>
        <button type="submit">감귤마켓 시작하기</button>
      </Link>
    </Form>
  );
};

export default SettingPage;

const Form = styled.form`
  width: 390px;
  height: 844px;
  padding: 54px 34px 499px;

  h2 {
    margin-bottom: 12px;
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    color: black;
  }

  p {
    font-size: 14px;
    line-height: 14px;
    color: ${PALLETS.GRAY};
    text-align: center;
    margin-bottom: 30px;
  }

  section {
    position: relative;
    display: inline-block;
    margin: 0 calc(50% - 55px) 33px;
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background-color: ${PALLETS.LIGHTGRAY};
    }
    label {
      background: url(../assets/upload-file.png) no-repeat;
      background-size: cover;
      width: 36px;
      height: 36px;
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }

  fieldset + fieldset {
    margin-top: 16px;
  }

  label {
    font-size: 12px;
    line-height: 15px;
    font-weight: 500;
    color: var(--bg-color-8);
  }

  input {
    display: block;
    width: 100%;
    height: 32px;
    border: 1px solid ${PALLETS.LIGHTGRAY};
    border-left-width: 0;
    border-right-width: 0;
    border-top-width: 0;
    border-bottom-width: 1;
    font-size: 14px;

    ::placeholder {
      color: ${PALLETS.LIGHTGRAY};
    }

    &:focus {
      outline: none;
      border-color: ${PALLETS.ORANGE};
    }
  }
  strong {
    margin-top: 6px;
    display: none;
    color: #eb5757;
    font-size: 12px;
    line-height: 14px;

    .error {
      display: block;
    }
  }

  button {
    display: block;
    margin-top: 30px;
    white-space: nowrap;
    padding: 0px 107px;
    height: 44px;
    width: 322px;
    padding: 13px 0;
    text-align: center;
    border-radius: 44px;
    background-color: ${PALLETS.BEIGE};
    color: ${PALLETS.WHITE};
    font-size: 14px;
    font-weight: 500;
    line-height: 17.53px;
    text-align: center;
  }
`;
