import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { PALLETS } from "../../constants";
import { Tabmenu } from '../layouts/Tabmenu';
import { FollowerHead } from '../layouts/FollowerHead';
import { Route, Link } from 'react-router-dom';

export const UserInformation = ()=>{
  const [isActive, setActive] = useState(false);
  const [isfollow, setIsfollow] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
    setIsfollow(!isfollow);
  };
  const [profile, setProfile] = useState({});
  useEffect(() => {
    fetch('http://146.56.183.55:5050/profile/lion123', {
      method: 'GET',
      headers: {
        // localStorage.getItem('token') 으로 현재 사용자(본인)의 토큰 받아오기
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWE5Y2ZhY2QyN2I2Y2Y2NWY5NTJlZCIsImV4cCI6MTY0Nzk0OTU3OCwiaWF0IjoxNjQyNzY1NTc4fQ.yvPTEypDONy8Pbf0Rp30u66ceoqi-esfavk1CtWK4nA`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        console.log(profile)
        console.log(profile.profile.username)

      });
  }, []);
  return (
    <>
    
    <li>{profile[0]}</li>
      <ul key={profile.id}>
        <li>{profile.profile.username}</li>
        <li>{profile.profile.accountname}</li>
        <li>{profile.profile.intro}</li>
        <li>{profile.profile.image}</li>
        <li>{profile.profile.followerCount}</li>
        <li>{profile.profile.followingCount}</li>
       </ul>
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
    .item-link-cont{
      display: flex;
    justify-content: flex-start;
    align-items: center;
    }
    .search-user-img{
      background-color:  ${PALLETS.ORANGE};
      width: 60px;
      height: 60px;
      border-radius: 60px;
      margin-right: 30px;
    }
    .s-button {
      border-radius: 10px;
      position: absolute;
      bottom: 25px;
      line-height: 20px;
      right: -30px;
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
