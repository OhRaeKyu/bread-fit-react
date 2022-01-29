import styled from '@emotion/styled';

import ProfileHeader from './Components/ProfileHeader';
import ProfileInfo from './Components/ProfileInfo';
import ProductInfo from './Components/ProductInfo';
import PostInfo from './Components/PostInfo';
import { Tabmenu } from '../layouts/Tabmenu';
import { PALLETS } from '../../constants';

const UserprofilePage = () => {
  return (
    // img 태그 background로 바꾸기
    <Profile>
      <h1 className="sr-only">다른 사용자의 프로필 확인 페이지입니다.</h1>
      <ProfileHeader />
      <ProfileInfo who={'other'} />
      <ProductInfo />
      <PostInfo />
      <Tabmenu route={'프로필'} />
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;
`;

export default UserprofilePage;
