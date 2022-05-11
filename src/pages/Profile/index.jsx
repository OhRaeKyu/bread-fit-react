import styled from '@emotion/styled';
import ProfileHeader from './Components/ProfileHeader';
import ProfileInfo from './Components/ProfileInfo';
import ProductInfo from './Components/ProductInfo';
import PostInfo from './Components/PostInfo';
import { Tabmenu } from '../layouts/Tabmenu';
import { PALLETS } from '../../constants';

const ProfileIndexPage = () => {
  return (
    <Profile>
      <h1 className="sr-only">본인의 프로필 확인 페이지입니다.</h1>
      <ProfileHeader />
      <ProfileInfo who={'my'} />
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
const Userfeeds = styled.section``;

const WrapPost = styled.div`
  margin: 10px 0;
  overflow: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera*/
  }
`;

const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: spac
  height: 42px;
  width:390px;
  .author-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .author-post {
    margin-left: 8px;

    p {
      font-size: 14px;
      font-weight: 500;
    }

    small {
      font-size: 12px;
      font-weight: 400;
      color: ${PALLETS.GRAY};
    }
  }
  .btn-more {
    content: '';
    position: absolute;
    right: 0;
    width: 18px;
    height: 18px;
    background-image: url('/assets/icon/icon-more-vertical.png');
    background-size: cover;
  }
`;
const PostContent = styled.main`
  margin-bottom: 20px;
  width: 390px;
  .txt-post {
    margin: 15px 0;
    line-height: 1.3;
  }

  .img-post {
    width: 100%;
    border-radius: 10px;
  }

  .date-post {
    font-size: 10px;
    font-weight: 400;
    color: ${PALLETS.GRAY};
  }
`;

const WrapResponse = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  .like {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/icon-heart.png');
    background-size: cover;
    margin-right: 5px;

    &.on {
      background-image: url('/assets/icon/icon-heart-active.png');
    }
  }

  p {
    font-size: 12px;
  }

  p + .comment {
    margin-left: 10px;
  }

  .comment {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/icon-message-circle.png');
    background-size: cover;
    margin-right: 5px;
    margin-left: 30px;
  }
  .hearCount {
    width: 20px;
    height: 20px;
    line-height: 20px;
  }
  .commentCount {
    width: 20px;
    height: 20px;
  }
  .count-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60px;
  }
  .comment-wrap {
    display: flex;
    align-items: center;
    line-height: 20px;
  }
`;

export default ProfileIndexPage;
