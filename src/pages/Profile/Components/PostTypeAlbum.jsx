import styles from "../../styles/profile.module.css";
import React from "react";

function PostTypeAlbum() {
  return (
    <div>
      <ul className={styles["post-album"]}>
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
          className={styles["post-image"]}
        />
      </ul>
    </div>
  );
}

export default PostTypeAlbum;
