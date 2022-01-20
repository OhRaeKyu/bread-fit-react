import styled from "@emotion/styled";
import styles from "../../styles/profile.module.css";
import { Mainform } from "../../components/layouts/Mainform";
import { useState } from "react";
import Link from "next/link";

import PostTypeList from "../../components/profile/PostTypeList";
import PostTypeAlbum from "../../components/profile/PostTypeAlbum";

const ProfileImage = styled.div``;
const ProfileInfo = styled.section``;
const SaleInfo = styled.section``;
const SaleProduct = styled.li``;
const PostInfo = styled.section``;
const PostMain = styled.article``;

const UserprofilePage = () => {
  const [postType, setPostType] = useState("List");
  const checkPostType = (e) => {
    e.preventDefault();
    setPostType(e.target.id.slice(4));
  };

  const [isFollow, setIsFollw] = useState(false);
  const [countFollow, setCountFollw] = useState(0);
  const toggleFollow = (e) => {
    e.preventDefault();
    if (isFollow) {
      setCountFollw(countFollow - 1);
      setIsFollw(false);
    } else {
      setCountFollw(countFollow + 1);
      setIsFollw(true);
    }
  };

  return (
    // img 태그 background로 바꾸기
    <Mainform>
      <div className={styles["your-profile"]}>
        <h1 className="sr-only">다른 사용자의 프로필 확인 페이지입니다.</h1>
        <ProfileInfo className={styles["profile-info"]}>
          <h2 className="sr-only">
            사용자가 등록한 정보를 보여주는 영역입니다.
          </h2>
          <article className={styles["info-head"]}>
            <div>
              {/* 팔로우 리스트 url로 수정*/}
              <Link href={"/"} passhref>
                <a className={styles["follow-count"]}>{countFollow}</a>
              </Link>
              <p className={styles["follow-type"]}>followers</p>
            </div>
            <ProfileImage>
              <img
                src="/assets/logo.png"
                alt="사용자의 프로필 이미지입니다."
                className={styles["user-image"]}
              />
            </ProfileImage>
            <div>
              <Link href={"/"}>
                <a className={styles["follow-count"]}>0000</a>
              </Link>
              <p className={styles["follow-type"]}>followings</p>
            </div>
          </article>
          <article className={styles["info-main"]}>
            <p className={styles["user-name"]}>서초구 소울브레드</p>
            <p className={styles["user-id"]}>@ soul_bread</p>
            <p className={styles["user-intro"]}>
              안녕하세요! 서초구 소울브레드입니다! :)
            </p>
          </article>
          <article className={styles["info-foot"]}>
            <Link href={"/chat"}>
              <button type="button">
                <img
                  src="/assets/icon/icon-message-circle.png"
                  alt="메세지 전송하기 버튼입니다."
                  className={[styles["circle-btn"], "message-btn"].join(" ")}
                />
              </button>
            </Link>
            {isFollow ? (
              <button
                type="button"
                className={[styles["unfollow-btn"], "m-button", "cancle"].join(
                  " ",
                )}
                onClick={toggleFollow}
              >
                언팔로우
              </button>
            ) : (
              <button
                type="button"
                className={[styles["follow-btn"], "m-button"].join(" ")}
                onClick={toggleFollow}
              >
                팔로우
              </button>
            )}

            <button type="button">
              <img
                src="/assets/icon/icon-share.png"
                alt="프로필 외부로 공유하기 버튼입니다."
                className={[styles["circle-btn"], "share-btn"].join(" ")}
              />
            </button>
          </article>
        </ProfileInfo>
        <SaleInfo className={styles["sale-info"]}>
          <h2 className="sr-only">
            해당 사용자가 현재 판매 중인 상품을 보여주는 영역입니다.
          </h2>
          <ul className={styles["sale-list"]}>
            <SaleProduct className={styles["sale-product"]}>
              <img
                src="/assets/product-img.jpg"
                alt="판매 중인 상품에 대한 이미지입니다."
                className={styles["product-image"]}
              />
              <p className={styles["product-name"]}>에그타르트</p>
              <p className={styles["product-price"]}>000,000원</p>
            </SaleProduct>
            <SaleProduct className={styles["sale-product"]}>
              <img
                src="/assets/product-img.jpg"
                alt="판매 중인 상품에 대한 이미지입니다."
                className={styles["product-image"]}
              />
              <p className={styles["product-name"]}>아이스크림 크로플</p>
              <p className={styles["product-price"]}>000,000원</p>
            </SaleProduct>
            <SaleProduct className={styles["sale-product"]}>
              <img
                src="/assets/product-img.jpg"
                alt="판매 중인 상품에 대한 이미지입니다."
                className={styles["product-image"]}
              />
              <p className={styles["product-name"]}>수플레</p>
              <p className={styles["product-price"]}>000,000원</p>
            </SaleProduct>
          </ul>
        </SaleInfo>
        <PostInfo className={styles["post-info"]}>
          <h2 className="sr-only">
            해당 사용자가 업로드한 게시물을 보여주는 영역입니다.
          </h2>
          <article className={styles["post-head"]}>
            <img
              src={
                postType === "List"
                  ? "/assets/icon/icon-post-list-on.png"
                  : "/assets/icon/icon-post-list-off.png"
              }
              alt="게시물 목록을 리스트 형식으로 보여주는 버튼입니다."
              className={styles["show-list"]}
              id="showList"
              onClick={checkPostType}
            />
            <img
              src={
                postType === "Album"
                  ? "/assets/icon/icon-post-album-on.png"
                  : "/assets/icon/icon-post-album-off.png"
              }
              alt="게시물 목록을 앨범 형식으로 보여주는 버튼입니다."
              className={styles["show-album"]}
              id="showAlbum"
              onClick={checkPostType}
            />
          </article>
          <PostMain className={styles["post-main"]}>
            {postType === "List" ? <PostTypeList /> : <PostTypeAlbum />}
          </PostMain>
        </PostInfo>
      </div>
    </Mainform>
  );
};

export default UserprofilePage;
