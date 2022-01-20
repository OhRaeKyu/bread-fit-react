import React, { useState, useRef } from "react";
import styled from "@emotion/styled";
import { Mainform } from "../../components/layouts/Mainform";
import { PALLETS } from "../../constants";

export const UserInformation = (props) => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <>
      <div className="user-search-container">
        <img
          className="search-user-img"
          src="/assets/logo.png"
          alt="user-profile"
        />
        <div className="user-information">
          <h3 className="user-profile-name">할리우드 위니브 브레드피트</h3>
          <small className="user-profile-email">@weniv_BreadFit</small>
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

const FollowerPage = () => {
  return (
    <Mainform>
      <ModifiSec>
        <UserInformation />
        <UserInformation />
        <UserInformation />
        <UserInformation />
        <UserInformation />
        <UserInformation />
      </ModifiSec>
    </Mainform>
  );
};

export default FollowerPage;

const Container = styled.section``;

const ModifiSec = styled.section`
  .user-search-container {
    margin: 20px 20px;
    position: relative;
    .s-button {
      position: absolute;
      right: 0;
      &.click {
        display: none;
      }
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
