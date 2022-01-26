import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import axios from 'axios';

function ProfileInfo({ userData, who }) {
  const [profileInfo, setProfileInfo] = useState([]);
  const userToken = localStorage.getItem('Token');
  const userAccountname = localStorage.getItem('accountname');
  useEffect(() => {
    fetch(`http://146.56.183.55:5050/profile/efnoo`, {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfileInfo(data.profile);
      });
  }, []);


  const postFollow = () => {
    // 게시글 id 인자로 받기
    fetch('http://146.56.183.55:5050/profile/real_binky/follow', {
      method: 'POST',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
        'Content-type': 'application/json',
      },
    });
  };

  // axios로 하는 방법 찾기
  // const postFollow = async () => {
  //   try {
  //     await axios.post(`http://146.56.183.55:5050/profile/real_binky/follow`, {
  //       headers: {
  //         // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
  //         Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
  //         'Content-type': 'application/json',
  //       },
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const deleteFollow = async () => {
    try {
      await axios.delete(
        `http://146.56.183.55:5050/profile/real_binky/unfollow`,
        {
          headers: {
            // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZThiY2IxNDU4ZjFkZGQyZTI4ZGFhZSIsImV4cCI6MTY0NzkxNzc0NSwiaWF0IjoxNjQyNzMzNzQ1fQ.8lovXQuOFzR_Y0irSfzFqFT1xaQ8Rgdj8jQ7hIhI7ak`,
            'Content-type': 'application/json',
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const [isFollow, setIsFollow] = useState(false);
  const toggleFollow = (e) => {
    e.preventDefault();
    if (isFollow) {
      setIsFollow(false);
      deleteFollow();
    } else {
      setIsFollow(true);
      postFollow();
    }
  };
  const MyProfile = () => {
    return (
      <MyProfileBtn>
        <article className="info-foot">
          <Link to="/profile/modification">프로필 수정</Link>
          <Link to="/profile/product">상품 등록</Link>
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
          <Link to="/follower">{profileInfo.followerCount}</Link>
          <p>followers</p>
        </FollowInfo>
        <UserImage
          src={profileInfo.image}
          alt="사용자의 프로필 이미지입니다."
        ></UserImage>
        <FollowInfo>
          <Link to="/following">{profileInfo.followingCount}</Link>
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
