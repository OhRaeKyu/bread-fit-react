import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

function PostTypeAlbum({ userData }) {
  return (
    <ListType>
      {/* 데이터 list 반복문으로 랜더링하면 됩니다. */}
      <Link to="/post/:id">
        <img
          src="/assets/product-img.jpg"
          alt="게시물에 업로드된 이미지입니다."
        />
      </Link>
    </ListType>
  );
}

const ListType = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7.5px;
  padding: 15px;

  a {
    width: 115px;
    height: 115px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export default PostTypeAlbum;
