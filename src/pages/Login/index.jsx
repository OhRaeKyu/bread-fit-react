import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import Image from 'next/image';
import Link from 'next/link';

const LoginIndexPage = () => {
  return (
    <Container>
      <Logoimg src="/assets/logo-white.svg" width={200} height={200} />
      <h2 className="sr-only">로그인</h2>
      <Section>
        <ul>
          <li>
            <Link href="/" passHref>
              <a className="login-list-item">카카오톡 계정으로 로그인</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a href="" className="login-list-item login-google">
                구글 계정으로 로그인
              </a>
            </Link>
          </li>
          <li>
            <Link href="/" passhref>
              <a href="" className="login-list-item login-facebook">
                페이스북 계정으로 로그인
              </a>
            </Link>
          </li>
        </ul>
        <Link href="/login/email" passHref>
          <a className="link-email"> 이메일로 로그인</a>
        </Link>
        <Link href="/join" passHref>
          <a className="link-join">회원가입</a>
        </Link>
      </Section>
    </Container>
  );
};

export default LoginIndexPage;

const Container = styled.section`
  background-color: var(--bg-color-1);
  padding: 270px 95px 374px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 700;
  background-color: ${PALLETS.BROWN};
  padding: 204px 0 0;
  font-size: 400;
  }
`;

const Section = styled.section`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 50px 34px 0 34px;
  background: ${PALLETS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 100%;
  margin-top: 117px;
  color: ${PALLETS.GRAY};

  .login-list-item {
    display: block;
    position: relative;
    border: 1px solid #f2c94c;
    padding: 13px 0;
    border-radius: 44px;
    white-space: nowrap;
  }

  .link-email,
  .link-join {
    display: inline-block;
    font-size: 12px;
    line-height: 15px;
  }

  .link-email::after {
    display: inline-block;
    content: '\u007C';
    margin: 0 8px;
  }

  li:first-child ~ li {
    margin-top: 10px;
  }

  li:last-child {
    margin-bottom: 20px;
  }

  .login-list-item::before {
    display: block;
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background: url('/assets/message-circle.png');
    top: 10px;
    left: 14px;
  }

  .login-google {
    border: 1px solid ${PALLETS.LIGHTGRAY};
  }

  .login-google::before {
    background: url('/assets/google.png');
  }

  .login-facebook {
    border: 1px solid #2d9cdb;
  }

  .login-facebook::before {
    background: url('/assets/facebook.png');
  }
`;

const Logoimg = styled(Image)`
  display: block;
`;
