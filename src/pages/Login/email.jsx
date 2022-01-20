import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import styled from '@emotion/styled';

const LoginEmailPage = () => {
  const inputEmail = useRef();
  const inputPw = useRef();
  const msgError = useRef();
  const loginBtn = useRef();

  // const checkEmail = /^\w[\w\-.]*@\w+\.\w{2,}/;
  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const handleIdInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePwInput = (event) => {
    setPw(event.target.value);
  };

  return (
    <Form method="POST">
      <h2>로그인</h2>
      <fieldset>
        <label for="id">아이디</label>
        <input
          id="id"
          type="email"
          placeholder=""
          ref={inputEmail}
          onChange={handleIdInput}
        />
      </fieldset>
      <fieldset>
        <label for="pw">비밀번호</label>
        <input
          id="pw"
          type="password"
          placeholder=""
          ref={inputPw}
          onChange={handlePwInput}
        />
        <strong ref={msgError}>
          *이메일 또는 비밀번호가 일치하지않습니다.
        </strong>
      </fieldset>
      <button
        ref={loginBtn}
        disabled={!(checkEmail.test(email) && pw.length > 5)}
      >
        로그인
      </button>
      <Linkemail to="/join">이메일로 회원가입</Linkemail>
    </Form>
  );
};

export default LoginEmailPage;

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
    background-color: ${PALLETS.BROWN};
    color: ${PALLETS.WHITE};
    font-size: 14px;
    font-weight: 500;
    line-height: 17.53px;
    text-align: center;

    &:disabled {
      background-color: ${PALLETS.BEIGE};
      cursor: not-allowed;
    }
  }
`;
const Linkemail = styled(Link)`
  display: block;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  color: ${PALLETS.GRAY};
  margin-top: 20px;
`;
