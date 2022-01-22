import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

const PostUploadPage = () => {
  let history = useHistory();
  const back = () => {
    history.goBack();
  };

  const [text, setText] = useState('');
  const [image, setImgfile] = useState(null);
  const [imageSrc, setImageSrc] = useState('');

  const onChange = (e) => {
    setText(e.target.value);
  };
  const handleChangeFile = (e) => {
    setImgfile(e.target.files);
    encodeFileToBase64(e.target.files[0]);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  async function imageUpload(files, index) {
    const formData = new FormData();
    formData.append('image', files[index]);
    const res = await fetch(`http://146.56.183.55:5050/image/uploadfile`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    const productImgName = data['filename'];
    return productImgName;
  }
  async function createPost(e) {
    const imageUrls = [];
    const files = image;
    const url = 'http://146.56.183.55:5050';
    if (files.length < 2) {
      for (let index = 0; index < files.length; index++) {
        const imgurl = await imageUpload(files, index);
        imageUrls.push(url + '/' + imgurl);
      }
      const res = await fetch(url + '/post', {
        method: 'POST',
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZWEwOTQ3NDU4ZjFkZGQyZTJiYTE5MiIsImV4cCI6MTY0NzkyNzEwOSwiaWF0IjoxNjQyNzQzMTA5fQ.kxZJWVlF8-1DFZKxflFBAmEr6jRyq2ynCRIiTTGP6Ks`,
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          post: {
            content: text,
            image: imageUrls + '',
          },
        }),
      });
      const json = await res.json();
    } else {
      alert('파일이 너무 큽니다.');
    }
  }
  return (
    <Container>
      <Saveheads>
        <button id="btnBack" onClick={back}></button>
        <Link to="/profile" id="uploadBtn" onClick={createPost}>
          업로드
        </Link>
      </Saveheads>
      <main className="cont-upload">
        <div className="txt-upload"></div>
        <img src="/assets/logo.png" alt="upload" />
        <input
          type="text"
          id="uploadTxt"
          value={text}
          onChange={onChange}
          placeholder="게시글을 입력해주세요."
        ></input>
        <div className="preview">
          {imageSrc && <img src={imageSrc} alt="preview-img" />}
        </div>
      </main>
      <input
        type="file"
        accept="image/*"
        id="image"
        onChange={handleChangeFile}
        multiple
      ></input>
      <label htmlFor="image"></label>
    </Container>
  );
};

export default PostUploadPage;

const Container = styled.section`
  width: 100%;
  .cont-upload {
    display: flex;
    margin: 20px 16px;
    height: 640px;
    align-items: flex-start;
    flex-direction: column;
    img {
      width: 42px;
      height: 42px;
    }
    input {
      width: 100%;
      color: ${PALLETS.GRAY};
      vertical-align: top;
      margin-top: 10px;
      border: none;
    }
    .preview img {
      margin-top: 50px;
      width: 350px;
      height: 250px;
    }
  }
  #image {
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
const Saveheads = styled.section`
  display: flex;
  justify-content: space-between;
  height: 48px;
  padding: 13px 16px;
  border-bottom: 1px solid ${PALLETS.GRAY};
  #btnBack {
    background: url(/assets/icon/icon-arrow-left.png);
    width: 22px;
    height: 22px;
  }
  #uploadBtn {
    background-color: ${PALLETS.ORANGE};
    height: 28px;
    padding: 6px 11px;
    border-radius: 26px;
    color: #fff;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    .disabled {
      background-color: ${PALLETS.BEIGE};
    }
  }
`;
