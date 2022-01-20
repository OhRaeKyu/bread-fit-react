import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';

const MembershipPage = () => {
  return (
    <Form method="POST">
      <h2>이메일로 회원가입</h2>
      <fieldset>
        <label for="id">아이디</label>
        <input
          id="id"
          type="email"
          placeholder="이메일 주소를 입력해 주세요."
        />
        <strong>*이미 가입한 이메일 주소입니다.</strong>
      </fieldset>
      <fieldset>
        <label for="pw">비밀번호</label>
        <input
          id="pw"
          type="password"
          placeholder="비밀번호를 설정해 주세요."
        />
        <strong>*비밀번호는 6자 이상이어야 합니다.</strong>
      </fieldset>
      <Link to="/join/setting" passHref>
        <button type="submit">다음</button>
      </Link>
    </Form>
  );
};

export default MembershipPage;

const Form = styled.form`
  width: 390px;
  height: 844px;
  padding: 54px 34px 499px;

  h2 {
    margin-bottom: 40px;
    text-align: center;
    font-size: 24px;
    line-height: 30px;
    font-weight: 500;
    color: black;
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

  a {
    display: block;
    text-align: center;
    font-size: 12px;
    line-height: 15px;
    color: ${PALLETS.GRAY};
    margin-top: 20px;
  }
`;
