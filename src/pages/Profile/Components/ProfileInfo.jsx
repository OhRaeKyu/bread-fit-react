import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from '@emotion/styled';
import { PALLETS, API_ENDPOINT } from '../../../constants';
import axios from 'axios';

function ProfileInfo({ who }) {
  const params = useParams().id;
  const userToken = localStorage.getItem('Token');
  const userName = localStorage.getItem('accountname');
  const [profileInfo, setProfileInfo] = useState({});
  const [isFollow, setIsFollow] = useState();
  const [follow, setFollow] = useState();

  const getProfile = async () => {
    try {
      const res = await axios.get(
        `${API_ENDPOINT}/profile/${params ? params : userName}`,
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
            'Content-type': 'application/json',
          },
        }
      );
      setProfileInfo(res.data.profile);
      setIsFollow(res.data.profile.isfollow);
      setFollow(res.data.profile.followerCount);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  const postFollow = () => {
    fetch(`${API_ENDPOINT}/profile/${params}/follow`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    });
  };

  const deleteFollow = async () => {
    try {
      await axios.delete(`${API_ENDPOINT}/profile/${params}/unfollow`, {
        headers: {
          Authorization: `Bearer ${userToken}`,
          'Content-type': 'application/json',
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const toggleFollow = (e) => {
    e.preventDefault();
    if (isFollow) {
      deleteFollow();
      setIsFollow(false);
      setFollow(follow - 1);
    } else {
      postFollow();
      setIsFollow(true);
      setFollow(follow + 1);
    }
  };

  const MyProfile = () => {
    return (
      <MyProfileBtn>
        <article className="info-foot">
          <Link to="/modification">프로필 수정</Link>
          <Link to="/product">상품 등록</Link>
        </article>
      </MyProfileBtn>
    );
  };

  const OtherProfile = () => {
    return (
      <OtherProfileBtn>
        <Link to="/" className="btn-circle message">
          <span className="sr-only">메세지 전송 버튼</span>
        </Link>
        {isFollow ? (
          <button type="button" onClick={toggleFollow} className="btn-unfollow">
            언팔로우
          </button>
        ) : (
          <button type="button" onClick={toggleFollow} className="btn-follow">
            팔로우
          </button>
        )}
        <div className="btn-circle share">
          <span className="sr-only">외부로 공유 버튼</span>
        </div>
      </OtherProfileBtn>
    );
  };

  return (
    <ProfileSection>
      <article className="info-head">
        <FollowInfo>
          <Link to={`/follower/${profileInfo.accountname}`}>{follow}</Link>
          <p>followers</p>
        </FollowInfo>
        <UserImage
          src={profileInfo.image}
          alt="사용자의 프로필 이미지입니다."
        ></UserImage>
        <FollowInfo>
          <Link to={`/following/${profileInfo.accountname}`}>
            {profileInfo.followingCount}
          </Link>
          <p>followings</p>
        </FollowInfo>
      </article>
      <article className="info-main">
        <p className="user-name">{profileInfo.username}</p>
        <p className="user-id">@ {profileInfo.accountname}</p>
        <p className="user-intro">{profileInfo.intro}</p>
      </article>
      {who === 'my' ? <MyProfile /> : <OtherProfile />}
    </ProfileSection>
  );
}

const ProfileSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${PALLETS.LIGHTGRAY};
  border-collapse: collapse;

  padding: 20px 0;
  background-color: ${PALLETS.WHITE};

  .info-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 300px;
  }

  .info-main {
    text-align: center;
    margin-bottom: 20px;

    .user-name {
      font-weight: 700;
    }
    .user-id {
      font-size: 12px;
      color: ${PALLETS.GRAY};
      margin: 5px 0 15px;
    }
    .user-intro {
      font-size: 14px;
      color: ${PALLETS.GRAY};
    }
  }
`;

const FollowInfo = styled.div`
  text-align: center;

  a {
    font-size: 18px;
    font-weight: 700;
  }

  p {
    font-size: 10px;
    margin-top: 5px;
    color: ${PALLETS.GRAY};
  }
`;

const UserImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const MyProfileBtn = styled.div`
  a {
    display: inline-block;
    text-align: center;
    width: 120px;
    line-height: 30px;
    font-size: 14px;
    color: ${PALLETS.GRAY};
    border: 1px solid ${PALLETS.LIGHTGRAY};
    border-radius: 20px;
  }
  a + a {
    margin-left: 10px;
  }
`;

const OtherProfileBtn = styled.div`
  display: flex;

  button {
    width: 120px;
    border-radius: 20px;
    font-size: 14px;
    line-height: 2;
    margin: 0 10px;
  }

  .btn-circle {
    display: inline-block;
    width: 34px;
    height: 34px;
    border: 1px solid ${PALLETS.LIGHTGRAY};
    border-radius: 50%;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: center;

    &.message {
      background-image: url('/assets/icon/icon-message-circle.png');
    }
    &.share {
      background-image: url('/assets/icon/icon-share.png');
    }
  }

  .btn-follow {
    background-color: ${PALLETS.ORANGE};
    color: ${PALLETS.WHITE};
  }

  .btn-unfollow {
    border: 1px solid ${PALLETS.LIGHTGRAY};
  }
`;

export default ProfileInfo;
