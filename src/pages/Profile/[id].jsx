import styled from '@emotion/styled';

import ProfileInfo from './Components/ProfileInfo';
import ProductInfo from './Components/ProductInfo';
import PostInfo from './Components/PostInfo';

const UserprofilePage = () => {
  // API 받아서 여기로 넣기
  const userData = {};

  return (
    // img 태그 background로 바꾸기
    <Profile>
      <h1 className="sr-only">다른 사용자의 프로필 확인 페이지입니다.</h1>
      <ProfileInfo userData={userData} who={'other'} />
      <ProductInfo userData={userData} />
      <PostInfo userData={userData} />
    </Profile>
  );
};

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default UserprofilePage;
