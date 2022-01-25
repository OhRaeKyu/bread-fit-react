import styled from '@emotion/styled';

import ProfileHeader from './Components/ProfileHeader';
import ProfileInfo from './Components/ProfileInfo';
import ProductInfo from './Components/ProductInfo';
import PostInfo from './Components/PostInfo';
import { Tabmenu } from '../layouts/Tabmenu';

const ProfileIndexPage = () => {
  // API 받아서 여기로 넣기
  const userData = {};

  return (
    // <button type="button" onClick={() => Router.back()}><button>
    <Profile>
      <h1 className="sr-only">본인의 프로필 확인 페이지입니다.</h1>
      <ProfileHeader />
      <ProfileInfo userData={userData} who={'my'} />
      <ProductInfo userData={userData} />
      <PostInfo userData={userData} />
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

export default ProfileIndexPage;
