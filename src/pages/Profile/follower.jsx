import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { PALLETS, API_ENDPOINT } from '../../constants';
import { Tabmenu } from '../layouts/Tabmenu';
import { FollowerHead } from '../layouts/FollowerHead';
import { Route, Link } from 'react-router-dom';

export const UserInformation = ({keyword, follow})=>{
  const [isActive, setActive] = useState(false);
  const [isfollow, setIsfollow] = useState(false);
  const userToken = localStorage.getItem('Token');
  const userAccountname = localStorage.getItem('accountname');
  const handleToggle = (event) => {
    event.currentTarget.innerText =
      event.currentTarget.innerText === '팔로우' ? '취소' : '팔로우';

    event.currentTarget.classList.toggle('click');
  };
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    fetch(`${API_ENDPOINT}/profile/${userAccountname}/follower`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setIsfollow(data.isfollow);

      });
  }, []);
  return (
    <>
{profile
        .map((data, index) => (
          <li key={`follow-${index}`}>
            <div className="user-search-container">
              <Link className="item-link-cont" to="profile/id">
                <img
                  className="search-user-img"
                  src={data.image}
                  alt="사용자 이미지"
                />
                <div className="user-information">
                  <h3 className="user-profile-name">{data.username}</h3>
                  <small className="user-profile-email">{data.intro}</small>
                </div>
              </Link>
              <button
                type="button"
                onClick={handleToggle}
                className={`s-button follow btn-one-fol`}
              >
                팔로우
              </button>
            </div>
          </li>
        ))}
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
      <Tabmenu route={'프로필'}></Tabmenu>
    </>
  );
};

export default FollowerPage;

const ModifiSec = styled.section`
li,ul{
  list-style: none;
}
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
      /* &.click {
        display: none;
      } */
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
