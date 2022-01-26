import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from '@emotion/styled';
import { API_ENDPOINT } from '../../constants';
import { useHistory } from 'react-router-dom';

const LoginEmailPage = () => {
  const [error, setError] = useState(false);
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

  const history = useHistory();

  const submitLogin = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email: email,
            password: pw,
          },
        }),
      });
      const json = await res.json();
      console.log(json);
      if (json.user.token) {
        localStorage.setItem('Token', json.user.token);
        localStorage.setItem('accountname', json.user.accountname);
        history.push('/home');
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Form method="POST">
      <Formtit>로그인</Formtit>
      <Fieldset>
        <Label htmlFor="id">아이디</Label>
        <Input required id="id" type="email" onChange={handleIdInput} />
      </Fieldset>
      <Fieldset>
        <Label htmlFor="password">비밀번호</Label>
        <Input
          required
          id="password"
          type="password"
          onChange={handlePwInput}
          autoComplete="off"
        />
        <Error display={error ? 1 : 0}>
          *이메일 또는 비밀번호가 일치하지않습니다.
        </Error>
      </Fieldset>
      <Btnsubmit
        disabled={!(checkEmail.test(email) && pw.length > 5)}
        type="button"
        onClick={submitLogin}
      >
        로그인
      </Btnsubmit>
      <Linkemail to="/join">이메일로 회원가입</Linkemail>
    </Form>
  );
};

export default LoginEmailPage;

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
  display: ${(props) => (props.display ? 'block' : 'none')};
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

const Linkemail = styled(Link)`
  display: block;
  text-align: center;
  font-size: 12px;
  line-height: 15px;
  color: ${PALLETS.GRAY};
  margin-top: 20px;
`;
