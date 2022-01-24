import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { useState } from 'react';
import { API_ENDPOINT } from '../../constants';
import { useHistory } from 'react-router-dom';
import { Tabmenu } from '../layouts/Tabmenu';

const MembershipPage = ({ setMode, handleUserdata }) => {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');

  const checkEmail =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const handleIdInput = (event) => {
    setEmail(event.target.value);
  };

  const handlePwInput = (event) => {
    setPw(event.target.value);
  };

  const checkJoin = () => {
    if (pw.length < 6) {
      setError('pw');
      return;
    } else submitJoin();
  };

  const submitJoin = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}` + 'user/emailvalid', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
          },
        }),
      });
      const json = await res.json();
      if (json.message === '이미 가입된 이메일 주소 입니다.') {
        setError('email');
      } else {
        handleUserdata('email', email);
        handleUserdata('password', pw);
        setMode(false);
      }
    } catch (err) {
      setError('email');
    }
  };

  return (
    <>
      <Form method="POST">
        <Formtit>이메일로 회원가입</Formtit>
        <Fieldset>
          <Label htmlFor="id">아이디</Label>
          <Input
            required
            id="id"
            type="email"
            placeholder="이메일 주소를 입력해 주세요."
            onChange={handleIdInput}
          />
          <Error display={error}>*이미 가입한 이메일 주소입니다.</Error>
        </Fieldset>
        <Fieldset>
          <Label htmlFor="pw">비밀번호</Label>
          <Input
            required
            id="password"
            type="password"
            placeholder="비밀번호를 설정해 주세요."
            onChange={handlePwInput}
            autoComplete="off"
          />
          <Errorpw display={error}>*비밀번호는 6자 이상이어야 합니다.</Errorpw>
        </Fieldset>
        <Btnsubmit
          type="button"
          disabled={!(checkEmail.test(email) && pw.length > 2)}
          onClick={checkJoin}
        >
          다음
        </Btnsubmit>
      </Form>
      <Tabmenu route={'게시물 작성'} />
    </>
  );
};

export default MembershipPage;

const Form = styled.form`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 322px;
  padding: 50px 0 0;
`;

const Fieldset = styled.fieldset`
  & ~ & {
    margin-top: 16px;
  }
`;

const Formtit = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  color: black;
`;

const Label = styled.label`
  font-size: 12px;
  line-height: 15px;
  font-weight: 500;
  color: ${PALLETS.GRAY};
`;

const Input = styled.input`
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
`;

const Error = styled.strong`
  margin-top: 6px;
  display: ${(props) => (props.display === 'email' ? 'block' : 'none')};
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
`;

const Errorpw = styled.strong`
  margin-top: 6px;
  display: ${(props) => (props.display === 'pw' ? 'block' : 'none')};
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
`;

const Btnsubmit = styled.button`
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
`;
