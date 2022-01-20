import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Link } from 'react-router-dom';
import { Mainform } from '../../components/layouts/Mainform';
import { Searchhead } from '../../components/layouts/Searchhead';

const HomeIndexPage = () => {
  return (
    <>
      <p>main</p>
    </>
    // <Mainform>
    //   <Searchhead />
    //   <Searchuser>
    //     <img src="/assets/logo.png" alt="logo" />
    //     <p>유저를 검색해 팔로우 해보세요!</p>
    //     <Link to="/home/search">검색하기</Link>
    //   </Searchuser>
    // </Mainform>
  );
};

export default HomeIndexPage;

const Searchuser = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  height: 712px;
  img {
    width: 100px;
    margin-bottom: 20px;
  }
  a {
    height: 30px;
    padding: 8px 40px;
    border-radius: 30px;
    background-color: ${PALLETS.ORANGE};
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    margin-top: 18px;
  }
`;
