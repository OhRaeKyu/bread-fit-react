import styled from '@emotion/styled';
import { PALLETS } from '../../constants';
import { useState } from 'react';
import { API_ENDPOINT } from '../../constants';

const SettingPage = ({ userdata, handleUserdata, submitUserdata }) => {
  const [error, setError] = useState('');
  const [previewSrc, setPreviewSrc] = useState('/assets/logo-white.svg');
  const [imagefile, setImagefile] = useState(null);

  //username 관리
  const handleNameInput = (event) => {
    handleUserdata('name', event.target.value);
  };

  //account name 관리
  const HandleAccountInput = (event) => {
    handleUserdata('accountname', event.target.value);
  };

  //intro 관리
  const HandleIntroInput = (event) => {
    handleUserdata('intro', event.target.value);
  };

  //이미지 프리뷰
  const handleImgInput = (event) => {
    setImagefile(event.target.files);
    encodeFileToBase64(event.target.files[0]);
    imageUpload(event.target.files);
  };

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setPreviewSrc(reader.result);
        resolve();
      };
    });
  };

  //이미지 업로드
  async function imageUpload(files) {
    const formData = new FormData();
    formData.append('image', files[0]);
    const res = await fetch(`${API_ENDPOINT}/image/uploadfile`, {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    const ImgName = `${API_ENDPOINT}/${data['filename']}`;
    handleUserdata('image', ImgName);
    return ImgName;
  }

  //accountname 관리 - 유효성 검사
  const checkAvailable = /^[0-9a-zA-Z_.]+$/;

  const checkAccount = () => {
    if (!checkAvailable.test(userdata.accountname)) {
      setError('unavailable');
      return;
    } else submitAccount();
  };

  //accountname 관리 - 중복검사
  const submitAccount = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/user/accountnamevalid`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            accountname: userdata.accountname,
          },
        }),
      });
      const json = await res.json();
      if (json.message === '사용 가능한 계정ID 입니다.') {
        submitUserdata();
      } else {
        setError('duplication');
      }
    } catch (err) {
      setError('email');
      console.log(err);
    }
  };

  return (
    <Form method="POST">
      <Formtit>프로필 설정</Formtit>
      <Formdesc>나중에 언제든지 변경할 수 있습니다.</Formdesc>
      <section>
        <img src={previewSrc} alt="" />
        <Label htmlFor="upload">
          <input
            type="file"
            id="upload"
            className="sr-only"
            accept="image/*"
            onChange={handleImgInput}
          />
        </Label>
      </section>
      <Fieldset>
        <Label htmlfor="name">사용자 이름</Label>
        <Input
          id="name"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          minLength={2}
          maxLength={10}
          onChange={handleNameInput}
        />
      </Fieldset>
      <Fieldset>
        <Label htmlfor="id">계정 ID</Label>
        <Input
          id="id"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          onChange={HandleAccountInput}
        />
        <Error display={error}>
          *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
        </Error>
        <Errorid display={error}>*이미 가입된 계정 ID입니다.</Errorid>
      </Fieldset>
      <Fieldset>
        <Label htmlfor="desc">소개</Label>
        <Input
          id="desc"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          onChange={HandleIntroInput}
        />
      </Fieldset>
      <Btnsubmit
        type="button"
        onClick={checkAccount}
        disabled={!(userdata.name && userdata.accountname && userdata.intro)}
      >
        브래드피트 시작하기
      </Btnsubmit>
    </Form>
  );
};

export default SettingPage;

const Form = styled.form`
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 322px;
  padding: 50px 0 0;

  section {
    position: relative;
    display: inline-block;
    margin: 0 calc(50% - 55px) 33px;
    img {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      background-color: ${PALLETS.LIGHTGRAY};
    }
    label {
      background: url(../assets/upload-file.png) no-repeat;
      background-size: cover;
      width: 36px;
      height: 36px;
      display: block;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
`;

const Formtit = styled.h2`
  margin-bottom: 12px;
  text-align: center;
  font-size: 24px;
  line-height: 30px;
  font-weight: 500;
  color: black;
`;

const Formdesc = styled.p`
  font-size: 14px;
  line-height: 14px;
  color: ${PALLETS.GRAY};
  text-align: center;
  margin-bottom: 30px;
`;

const Fieldset = styled.fieldset`
  & ~ & {
    margin-top: 16px;
  }
`;

const Label = styled.label`
  // font-size: 12px;
  // line-height: 15px;
  // font-weight: 500;
  // color: ${PALLETS.GRAY};
  cursor: pointer;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  height: 32px;
  border: 1px solid ${PALLETS.LIGHTGRAY};
  border-left-width: 0;
  border-right-width: 0;
  border-top-width: 0;
  border-bottom-width: 1;
  font-size: 14px;

  ::placeholder {
    color: ${PALLETS.LIGHTGRAY};
  }

  &:focus {
    outline: none;
    border-color: ${PALLETS.ORANGE};
  }
`;

const Error = styled.strong`
  margin-top: 6px;
  display: ${(props) => (props.display === 'unavailable' ? 'block' : 'none')};
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
`;

const Errorid = styled.strong`
  margin-top: 6px;
  display: ${(props) => (props.display === 'duplication' ? 'block' : 'none')};
  color: #eb5757;
  font-size: 12px;
  line-height: 14px;
`;

const Btnsubmit = styled.button`
  margin-top: 30px;
  white-space: nowrap;
  padding: 0px 107px;
  height: 44px;
  width: 322px;
  padding: 13px 0;
  text-align: center;
  border-radius: 44px;
  background-color: ${PALLETS.BROWN};
  color: ${PALLETS.WHITE};
  font-size: 14px;
  font-weight: 500;
  line-height: 17.53px;
  text-align: center;

  &:disabled {
    background-color: ${PALLETS.BEIGE};
    cursor: not-allowed;
  }
`;
