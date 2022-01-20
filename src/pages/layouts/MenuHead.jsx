import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
export const Menuhead = () => {
  const [isActive, setActive] = useState('false');
  const [isDelete, setDelte] = useState('false');
  let history = useHistory();

  const handleToggle = () => {
    setActive(!isActive);
  };
  const checkDelete = () => {
    setDelte(!isDelete);
    setActive(!isActive);
  };

  return (
    <Menushead>
      <button
        onClick={() => {
          history.goBack();
        }}
      >
        <img src="/assets/icon/icon-arrow-left.png" alt="뒤로가기" />
      </button>
      <button id="moreInfo" onClick={handleToggle}>
        <img src="/assets/icon/icon-more-vertical.png" alt="더보기" />
      </button>
      <Modifymodal>
        <section className={`${!isActive ? 'click' : null}`}>
          <h2 className="sr-only">게시글 삭제 페이지 입니다.</h2>
          <li>
            <button id="btnDelete" type="button" onClick={checkDelete}>
              삭제
            </button>
          </li>
          <li>
            <button>수정</button>
          </li>
        </section>
      </Modifymodal>
      <Deletemodal>
        <ul className={`delete-alert ${!isDelete ? 'delete' : null}`}>
          <li className="confirm-text">게시글을 삭제할까요?</li>
          <li className="confirm-cont">
            <button id="btnCancle" type="button">
              취소
            </button>
            <button type="button">삭제</button>
          </li>
        </ul>
      </Deletemodal>
    </Menushead>
  );
};

const Menushead = styled.section`
  display: flex;
  position: relative;
  justify-content: space-between;
  width: 100%;
  height: 48px;
  padding: 13px 16px;
  border-bottom: 1px solid ${PALLETS.GRAY};
  button {
    width: 22px;
    height: 22px;
    background-color: transparent;
    border: none;
  }
  #moreInfo {
    position: absolute;
    right: 12px;
  }
  #btnBack {
    background: url(/assets/icon/icon-arrow-left.png)
  }
}
`;

const Modifymodal = styled.section`
  section {
    display: none;
    position: absolute;
    width: 390px;
    top: 48px;
    left: 0;
    background-color: var(--bg-color-6);
    box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.65);
    &.click {
      display: block;
    }
    li {
      display: flex;
      flex-direction: column;
      list-style: none;
      a,
      button {
        display: block;
        font-size: 14px;
        text-align: left;
        width: 200px;
        line-height: 46px;
        height: 46px;
        padding-left: 26px;
        color: var(--bg-color-5);
      }
    }
  }
`;

const Deletemodal = styled.div`
  .delete-alert {
    width: 252px;
    height: 110px;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #dbdbdb;
    border-radius: 5px;
    display: none;
    &.delete {
      top: 50%;
      display: flex;
    }
    .confirm-text {
      margin-top: 22px;
      font-weight: 700;
    }
    .confirm-cont {
      width: 252px;
      height: 46px;
      display: flex;
    }
    button {
      text-align: center;
      padding: 0;
      width: 126px;
      height: 46px;
      background-color: white;
      border-top: 1px solid #dbdbdb;
      border-right: 1px solid #dbdbdb;
    }
  }
`;
