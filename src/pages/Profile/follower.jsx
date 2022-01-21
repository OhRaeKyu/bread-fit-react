import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { PALLETS } from "../../constants";
import { Tabmenu } from '../layouts/Tabmenu';
import { FollowerHead } from '../layouts/FollowerHead';

export const UserInformation = ()=>{
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
  };
  const [profileImage, setProfileImage] = useState([]);
  const [userName, setUserName] = useState([]);
  const [accountName, setAccountName] = useState([]);
  useEffect(() => {
    fetch('http://146.56.183.55:5050/profile/123123/follower', {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTkwYmE3NDU4ZjFkZGQyZTI5OWFmMyIsImV4cCI6MTY0Nzg0NjgzNCwiaWF0IjoxNjQyNjYyODM0fQ.muqHjpb-JC7kibZR275apcVaf6Yvt7APNlavYEtfHt8`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfileImage(data.profileImage);
      }).then((data) => {
        setUserName(data.userName);
      }).then((data) => {
        setAccountName(data.accountName);
        console.log(data.accountName);
      });
  }, []);

  return (
    <>
      <div className="user-search-container">
        <img
          className="search-user-img"
          src= {profileImage}
          alt="사용자 이미지"
        />
        <div className="user-information">
          <h3 className="user-profile-name">${userName}</h3>
          <small className="user-profile-email">${accountName}</small>
        </div>
        <button
          type="button"
          onClick={handleToggle}
          className={`s-button follow btn-one-fol ${isActive ? "click" : null}`}
        >
          팔로우
        </button>
        <button
          type="button"
          onClick={handleToggle}
          className={`s-button cancle btn-one-canc ${
            isActive ? "click" : null
          }`}
        >
          취소
        </button>
      </div>
    </>
  );
};

export const FollowerPage = ()=>{
  return (
    <>
    <FollowerHead />
      <ModifiSec>
        <UserInformation />
      </ModifiSec>
      <Tabmenu />
    </>
  );
};

export default FollowerPage;

const ModifiSec = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  .user-search-container {
    width: 322px;
    height: 80px;
    margin: 20px 20px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .search-user-img{
      background-color:  ${PALLETS.ORANGE};
      width: 60px;
      height: 60px;
      border-radius: 60px;
      margin-right: 20px;
    }
    .s-button {
      border-radius: 10px;
      position: absolute;
      bottom: 34px;
      line-height: 20px;
      right: -10px;
      &.click {
        display: none;
      }
    }
    .follow {
      width: 55px;
      height: 28px;
      background-color: ${PALLETS.ORANGE};
      border: 1px solid ${PALLETS.ORANGE};
      color:  white;
    }
    .cancle {
      display: none;
      border: 1px solid ${PALLETS.ORANGE};
      width: 55px;
      height: 28px;
      &.click {
        display: block;
      }
    }
  }
`;
