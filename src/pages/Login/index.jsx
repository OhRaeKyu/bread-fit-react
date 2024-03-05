import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';

const LoginIndexPage = () => {
  return (
    <Container>
      <Logoimg src="/assets/logo-white.svg" width={200} height={200} />
      <h2 className="sr-only">로그인</h2>
      <Section>
        <Loginitems>
          <li>
            <Loginitem to="/login/email" social="kakao">
              이메일로 로그인
            </Loginitem>
          </li>
          <li>
            <Loginitem to="/join" social="facebook">
            회원가입
            </Loginitem>
          </li>
        </Loginitems>
      </Section>
    </Container>
  );
};

export default LoginIndexPage;

const Container = styled.section`

  position:relative;
  // * 100vh 이슈
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-weight: 700;
  background-color: ${PALLETS.BROWN};
  padding-top: 204px;
  font-size: 400;
  }
`;

const Logoimg = styled.img`
  width: 200px;
  height: 200px;
  display: block;
`;

const Section = styled.section`
  position: absolute;
  bottom: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  padding: 50px 34px 82px 34px;
  background: ${PALLETS.WHITE};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  margin-top: 117px;
  color: ${PALLETS.GRAY};

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
`;

const Option = styled(Link)`
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
    &:after {
        display: ${(props) => (props.option ? 'block' : 'none')};
        content: '\u007C';
        margin: 0 8px;
      }
    }
  }
`;

const Loginitems = styled.ul`
  li:first-of-type ~ li {
    margin-top: 10px;
  }

  li:last-of-type {
    margin-bottom: 20px;
  }
`;

const Loginitem = styled(Link)`
  display: block;
  position: relative;
  border: 1px solid;
  border-color: ${(props) =>
    props.social === 'kakao'
      ? '#f2c94c'
      : props.social === 'google'
      ? '#767676'
      : props.social === 'facebook'
      ? '#2d9cdb'
      : `${PALLETS.BLACK}`};
  padding: 13px 0;
  border-radius: 44px;
  white-space: nowrap;

`;
