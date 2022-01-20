import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { Menuhead } from '../../components/layouts/Menuhead';
import { Inpreply } from '../../components/layouts/Inpreply';
import { useState } from 'react/cjs/react.development';
import CommentList from '../../components/post/CommentList';

const PostUploadPage = () => {
  const [isLike, setIsLike] = useState(false);
  const toggleLike = () => {
    {
      isLike ? setIsLike(false) : setIsLike(true);
    }
  };

  return (
    <>
      {/* <Menuhead onClick={() => Router.back()} /> */}
      <WrapPost>
        <UserInfo>
          <img src="../assets/logo.png" alt="" className="author-img" />
          <div className="author-post">
            <p>서초구 소울브레드</p>
            <small>@soul_bread</small>
          </div>
          <span className="btn-more"></span>
        </UserInfo>
        <PostContent>
          <p className="txt-post">
            인생 빵맛집.. 진짜 모든빵이 다 너무맛있고..든든하고 그래요. 앙버터도
            저렇게버터듬뿍든건 첨봐요! 거기다가 달지않지만 옹골찬 팥과 쫀득하고
            짭쪼름한 프렛첼의조화가 환상입니다. 그리고 와사비 크림치즈가 들어간
            샌드위치도 매콤하니 맛있어요!!거기다가 많은분이 추천하시는
            쌩얼크치도 맛났지만 저는 베베레가 더 맛있었어요. 레몬맛과 블루베리
            맛나는 크림치즈에 키위들어간거요~
          </p>
          <img
            src="../assets/mandarin.jpg"
            alt="store-picture"
            className="img-post"
          />
          <WrapResponse>
            <button
              className={isLike ? 'like on' : 'like'}
              onClick={toggleLike}
            ></button>
            <p>0</p>
            <button className="comment"></button>
            <p>0</p>
          </WrapResponse>
          <p className="date-post">2021년 12월 21일</p>
        </PostContent>
        <CommentList />
      </WrapPost>
      <Inpreply />
    </>
  );
};

export default PostUploadPage;

const WrapPost = styled.div`
  margin: 10px 20px;
  height: 712px;
  overflow: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome , Safari , Opera*/
  }
`;

const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 42px;

  .author-img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }

  .author-post {
    margin-left: 8px;

    p {
      font-size: 14px;
      font-weight: 500;
    }

    small {
      font-size: 12px;
      font-weight: 400;
      color: ${PALLETS.GRAY};
    }
  }

  .btn-more {
    content: '';
    position: absolute;
    right: 0;
    width: 18px;
    height: 18px;
    background-image: url('/assets/icon/icon-more-vertical.png');
    background-size: cover;
  }
`;

const PostContent = styled.main`
  margin-left: 50px;

  .txt-post {
    margin: 15px 0;
    line-height: 1.3;
  }

  .img-post {
    width: 100%;
    border-radius: 10px;
  }

  .date-post {
    font-size: 10px;
    font-weight: 400;
    color: ${PALLETS.GRAY};
  }
`;

const WrapResponse = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;

  .like {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/icon-heart.png');
    background-size: cover;
    margin-right: 5px;

    &.on {
      background-image: url('/assets/icon/icon-heart-active.png');
    }
  }

  p {
    font-size: 12px;
  }

  p + .comment {
    margin-left: 20px;
  }

  .comment {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    background-image: url('/assets/icon/icon-message-circle.png');
    background-size: cover;
    margin-right: 5px;
  }
`;
