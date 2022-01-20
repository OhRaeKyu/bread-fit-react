import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import Link from 'next/link';
import { Savehead } from '../../components/layouts/Savehead';

const PostUploadPage = () => {
  return (
    <Container>
      <Savehead />
      <main class="cont-upload">
        <img src="/assets/logo.png" alt="upload" />
        <input
          type="text"
          id="uploadTxt"
          placeholder="게시글을 입력해주세요."
        ></input>
      </main>
      <input type="file" id="uploadImg" onchange="activeBtn()" multiple></input>
      <label for="uploadImg"></label>
    </Container>
  );
};

export default PostUploadPage;

const Container = styled.section`
  .cont-upload {
    display: flex;
    margin: 20px 16px;
    height: 640px;
    align-items: flex-start;
    img {
      width: 42px;
      height: 42px;
    }
    input {
      color: ${PALLETS.GRAY};
      vertical-align: top;
      margin-top: 10px;
      border: none;
    }
  }
  #uploadImg {
    width: 1px;
    height: 1px;
    opacity: 0;
  }
  label {
    background: url(../assets/upload-file.png);
    width: 50px;
    height: 50px;
    position: absolute;
    bottom: 10px;
    right: 10px;
    border: none;
    cursor: pointer;
  }
`;
