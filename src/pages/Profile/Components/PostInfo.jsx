import React, { useState } from 'react';
import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';

import PostTypeList from './PostTypeList';
import PostTypeAlbum from './PostTypeAlbum';

function PostInfo({ userData }) {
  const [postType, setPostType] = useState('List');

  return (
    <PostSection>
      <Header>
        <div className="wrap-header">
          <img
            src={
              postType === 'List'
                ? '/assets/icon/icon-post-list-on.png'
                : '/assets/icon/icon-post-list-off.png'
            }
            alt="게시물 목록을 리스트 형식으로 보여주는 버튼입니다."
            onClick={() => {
              setPostType('List');
            }}
          />
          <img
            src={
              postType === 'Album'
                ? '/assets/icon/icon-post-album-on.png'
                : '/assets/icon/icon-post-album-off.png'
            }
            alt="게시물 목록을 앨범 형식으로 보여주는 버튼입니다."
            onClick={() => {
              setPostType('Album');
            }}
          />
        </div>
      </Header>
      <WrapPost>
        <h2 className="sr-only">본인이 업로드한 게시물</h2>
        {postType === 'List' ? (
          <PostTypeList userData={userData} />
        ) : (
          <PostTypeAlbum userData={userData} />
        )}
      </WrapPost>
    </PostSection>
  );
}

const PostSection = styled.section`
  width: 100%;
  padding-bottom: 20px;
  background-color: ${PALLETS.WHITE};
  border-top: 1px solid ${PALLETS.LIGHTGRAY};
`;

const WrapPost = styled.div`
  width: 390px;
  margin: 0 auto;
`;

const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid ${PALLETS.LIGHTGRAY};

  .wrap-header {
    width: 390px;
    margin: 0 auto;
    text-align: end;

    img + img {
      margin-left: 15px;
    }
  }
`;

export default PostInfo;
