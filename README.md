<div align="center">
  <h1>🍞Bread Fit🥨</h1>
  <p>빵과 결이 맞는 사람들을 위한 서비스</p>
  <!-- <a href="https://hits.seeyoufarm.com"><img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fyoojin-park19%2Fbread-fit&count_bg=%23F3A30A&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false"/></a>
  <img src="https://img.shields.io/github/stars/yoojin-park19/bread-fit" alt="stars"/>
  <img src="https://img.shields.io/github/issues-pr/yoojin-park19/bread-fit" alt="open pull requests"/> -->
</div>

[목차]

0. [팀원 소개](#chapter-0)
1. [목표와 기능](#chapter-1)
2. [개발 환경 및 배포 URL](#chapter-2)
3. [프로젝트 구조와 개발 일정](#chapter-3)
4. [역할 분담](#chapter-4)
5. [UI / BM](#chapter-5)
6. [메인 기능](#chapter-6)
7. [추가 기능](#chapter-7)
8. [개발하면서 느낀점](#chapter-8)

<br>

## 🍞 팀원 소개 <a id="chapter-0"></a>

<hr>

<table>
    <tr height="160px">
        <td align="center" width="150px">
            <a href="https://github.com/yoojin-park19"><img height="120px" width="120px" src="https://github.com/yoojin-park19.png"/></a>
            <br />
            <strong>박유진</strong>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/Sangdon1029"><img height="120px" width="120px" src="https://github.com/Sangdon1029.png"/></a>
            <br />
            <strong>김상돈</strong>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu"><img height="120px" width="120px" src="https://github.com/OhRaeKyu.png"/></a>
            <br />
            <strong>오래규</strong>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/ongddree"><img height="120px" width="120px" src="https://github.com/ongddree.png"/></a>
            <br />
            <strong>박서영</strong>
        </td>
    </tr>
</table>

<br><br>

## 🥐 목표와 기능 <a id="chapter-1"></a>

<hr>

### 1.1 목표

- 빵을 좋아하는 사람들이 빵에 대한 정보를 서로 공유할 수 있는 SNS
- 판매자가 자신의 상품을 홍보할 수 있는 플랫폼
- 원하는 업체에 대한 정보를 찾을 수 있는 정보 네트워크

#### 1.2 기능

- 빵에 대한 정보를 공유할 수 있습니다.
- 판매자가 본인의 빵을 홍보할 수 있습니다.
- 다양한 빵집의 계정을 이용하여 원하는 빵을 찾아볼 수 있습니다.
- 그날그날에 맞는 빵을 추천 받을 수 있습니다.

<br><br>

## 🥖 개발 환경 및 배포 URL <a id="chapter-2"></a>

<hr>

#### 2.1 개발 환경

- 프론트 개발 환경 : React & emotionJS & axios
- 백엔드 개발 환경 : 제공된 API 사용

#### 2.2 배포 URL

[ bread-fit ]<a href="https://bread-fit-react.vercel.app/"> https://bread-fit-react.vercel.app/</a>

<br><br>

## 🫓 프로젝트 구조와 개발 일정 <a id="chapter-3"></a>

<hr>

#### 3.1 프로젝트 구조

```
├── README.md
├── package.json
├── public
│   ├── assets
│   └── index.html
├── src
│   ├── App.css
│   ├── App.js
│   ├── constants
│   │   └── index.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── Home
│   │   │   ├── Components
│   │   │   │   ├── Searchuser.jsx
│   │   │   │   └── Userfeed.jsx
│   │   │   ├── index.jsx
│   │   │   └── search.jsx
│   │   ├── Join
│   │   │   ├── index.jsx
│   │   │   ├── membership.jsx
│   │   │   └── setting.jsx
│   │   ├── Login
│   │   │   ├── components
│   │   │   │   ├── PrivateRoutes.jsx
│   │   │   │   └── PublicRoute.jsx
│   │   │   ├── email.jsx
│   │   │   └── index.jsx
│   │   ├── Post
│   │   │   ├── Components
│   │   │   │   ├── CommentList.jsx
│   │   │   │   ├── Inpreply.jsx
│   │   │   │   └── PostHeader.jsx
│   │   │   ├── Feeddetail.jsx
│   │   │   ├── edit.jsx
│   │   │   ├── index.jsx
│   │   │   └── upload.jsx
│   │   ├── Profile
│   │   │   ├── Components
│   │   │   │   ├── PostInfo.jsx
│   │   │   │   ├── PostTypeAlbum.jsx
│   │   │   │   ├── PostTypeList.jsx
│   │   │   │   ├── ProductInfo.jsx
│   │   │   │   ├── ProfileHeader.jsx
│   │   │   │   ├── ProfileInfo.jsx
│   │   │   │   └── Userlist.jsx
│   │   │   ├── [id].jsx
│   │   │   ├── follower.jsx
│   │   │   ├── following.jsx
│   │   │   ├── index.jsx
│   │   │   ├── modification.jsx
│   │   │   ├── product.jsx
│   │   │   ├── productEdit.jsx
│   │   │   └── product[id]DetailDelete.jsx
│   │   ├── Recommend
│   │   │   ├── Components
│   │   │   │   ├── Header.jsx
│   │   │   │   └── RecommendList.jsx
│   │   │   └── index.jsx
│   │   └── layouts
│   │       ├── FollowerHead.jsx
│   │       ├── Layout.jsx
│   │       ├── Mainform.jsx
│   │       ├── MenuHead.jsx
│   │       ├── MenuModal.jsx
│   │       ├── ModificationHead.jsx
│   │       ├── SaveHead.jsx
│   │       ├── Searchhead.jsx
│   │       ├── Searchuserhead.jsx
│   │       ├── Tabmenu.jsx
│   │       └── index.js
│   └── utils
│       └── isLogin.js
└── yarn.lock
```

### 3.2 개발 일정

| 내용                 | 일정                                | 기간 |
| -------------------- | ----------------------------------- | ---- |
| 프로젝트 기획        | 2021년 12월 18일                    | 1일  |
| 바닐라JS로 UI 구현   | 2021년 12월 19일 ~ 2021년 12월 23일 | 5일  |
| 바닐라JS로 기능 구현 | 2021년 12월 23일 ~ 2021년 12월 29일 | 7일  |
| 리액트로 UI 구현     | 2021년 12월 29일 ~ 2022년 1월 11일  | 15일 |
| 리액트로 기능 구현   | 2022년 1월 11일 ~ 2022년 1월 17일   | 7일  |
| API 기능 구현        | 2022년 1월 17일 ~ 2022년 1월 26일   | 10일 |
| 배포 및 리뷰         | 2022년 1월 26일 ~ 2022년 1월 30일   | 5일  |

<br>

<a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%ED%9A%8C%EC%9D%98%EB%A1%9D"> 🔗 &nbsp;빵마켓 회의록</a><br>
<a href="https://github.com/yoojin-park19/bread-fit"> 🔗 &nbsp;바닐라JS버전 </a>

<br>

## 🥨 역할 분담 <a id="chapter-4"></a>

<hr>

- 팀장 : 박유진
- FE, BE : 박유진, 박서영, 오래규, 김상돈

<table>
    <tr>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 로그인 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85">🔗 회원가입</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EA%B2%80%EC%83%89-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 검색 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%ED%99%88-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 홈 페이지</a>
        </td>
    </tr>
    <tr>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93420227/151637304-18f1b62a-03b8-45c5-93b0-7b61488587f2.gif" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93420227/151636961-33aa111b-3933-4c16-b66e-bfe9dbefcd34.gif" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93420227/151637019-46c5ddd2-9899-47d6-8165-9df5b446e6a2.gif" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93380732/151690016-51f47ab5-3d00-4f52-b04e-98b1a8e327c1.gif" height="100px" width="150px"/>
        </td>
    </tr>
        <tr>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EA%B2%8C%EC%8B%9C%EA%B8%80-%EC%9E%91%EC%84%B1-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 게시글 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#--%EC%82%AC%EC%9A%A9%EC%9E%90-%ED%94%84%EB%A1%9C%ED%95%84">🔗 프로필 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%ED%8C%94%EB%A1%9C%EC%9B%8C-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 팔로워 페이지</a>
        </td>
        <td align="center" width="150px">
            <a href="https://github.com/OhRaeKyu/bread-fit-react/wiki/%EC%A3%BC%EC%9A%94-%EA%B8%B0%EB%8A%A5-%EC%86%8C%EA%B0%9C#-%EC%83%81%ED%92%88-%EB%93%B1%EB%A1%9D-%ED%8E%98%EC%9D%B4%EC%A7%80">🔗 상품 페이지</a>
        </td>
    </tr>
    <tr>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93380732/151689947-85f792f9-d249-4f8d-a116-e506f88fb403.gif" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93380732/151690086-53388cb5-f069-4d63-b49b-79e0e0b0ba5c.gif" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93380732/151688523-c5082f25-c9a2-4328-9ba1-20e314196301.gif" height="100px" width="150px"/>
        </td>
        <td align="center" width="150px">
            <img src="https://user-images.githubusercontent.com/93380732/151688826-1cb27a03-ceaf-4f9b-93fe-0e3940727ac2.gif" height="100px" width="150px"/>
        </td>
    </tr>
</table>

<br><br>

## 🥯 UI / BM <a id="chapter-5"></a>

<img width="1086" alt="스크린샷 2022-01-30 오후 8 27 36" src="https://user-images.githubusercontent.com/93498523/151697803-7a482509-90ae-4a75-ae47-a8c6d05cb943.png">

<br><br>

## 🥞 메인 기능 <a id="chapter-6"></a>

<hr>

### 🛍️ &nbsp; 스토어의 상품을 등록하여 상품을 판매할 수 있습니다.

> - 본인의 프로필에 상품을 등록하여 상품을 판매할 수 있습니다.
> - 나를 팔로우한 사용자에게 나의 새로운 피드가 보이기 때문에 상품을 홍보할 수 있습니다.

### 👨‍👩‍👧‍👧 &nbsp; 비슷한 취향을 가진 사람들과 소통할 수 있습니다.

> - 빵을 좋아하는 비슷한 취향의 사람들과 소통할 수 있습니다.
> - 빵에 대한 정보를 공유하면서 원하는 정보를 얻을 수도 있습니다.

### 🎯 &nbsp; 원하는 업체의 정보를 찾아볼 수 있습니다.

> - 원하는 업체의 프로필을 검색하여, 해당 업체 정보를 찾아 볼 수 있습니다.
> - 원하는 업체의 생생한 피드를 볼 수 있습니다.

<br><br>

## 🧇 추가 기능 <a id="chapter-7"></a>

<hr>

### 🎁&nbsp; 오늘의 빵을 추천해드립니다.

> - 매일매일 뭐먹을까 고민될 때, 매일 새로운 빵을 추천해 드립니다.

<br><br>

## 🥪 개발하며 느낀점 <a id="chapter-8"></a>

<hr>

### 🙋‍♀️ 박유진

> 처음에는 바닐라js로 시작했다가 다시 리액트로 개선하면서 시행착오도 많고, 그만큼 배운것도 많은 프로젝트였습니다. 정말 멘땅의 헤딩식으로 처음 배우는 리액트로 프로젝트를 구성하면서, 실전을 통해 더 많이 배울 수 있었습니다. 프로젝트를 마치고 기초부터 리액트를 다시 살펴보며 깊게 공부해볼 예정입니다. 그리고 협업을 하면서 부족한 부분들이 굉장히 많았다고 생각하는데, 함께 부족한 점을 채워가면서 진행할 수 있어서 협업을 진행하는데 필요한 자세들도 배울 수 있는 경험이었습니다.

### 💁‍♂️ 오래규

> React를 사용해 보면서 사용자의 경험은 물론 개발자의 경험도 함께 개선해 줄 수 있는 라이브러리라는 것을 느꼈습니다. 처음 바닐라 js로 구현한 결과물을 사용자 입장에서 보았을 때는 페이지 이동이 자연스럽지 않은 것에서 불편함을 느꼈고 개발자 입장에서는 코드의 재사용성이 매우 좋지 않았기 때문에 React를 통해 다시 구현하였습니다. React에 대한 지식이 많이 부족한 상태였지만 프로젝트에서 필요한 부분에 대해 찾아 학습하며 진행하였습니다. 주로 컴포넌트화, REST API 사용에 초점을 두고 학습하였으며 이 경험을 바탕으로 React에 대해 더욱 깊게 공부할 예정입니다.

### 👩‍💻 박서영

> 바닐라 자바스크립트로 완성한 프로젝트를 리액트로 옮기는 작업은 이번이 처음이었습니다.
> 덕분에 컴포넌트나 함수를 재사용할 수 있고, 단위별로 유지보수가 가능한 리액트의 장점을 확실하게 느낄 수 있었습니다.
> 또 이번 프로젝트는 get/post/put/delete 등 여러가지 메서드를 사용하여 데이터를 조회/등록/수정/제거 하는 작업이 주가 되는 프로젝트였습니다.
> 그래서 api 요청과정에서 발생할 수 있는 다양한 에러들을 만나고 이를 해결하면서 api와 좀 더 가까워질 수 있었습니다

### 🙋 김상돈

> 리액트로 진행되는 프로젝트를 하는 것이 이번이 처음이여 모르는 부분을 배우면서 진행하는 점에서 힘들었지만 많은 부분을 배우면서 진행할 수 있었습니다.
> 그리고 API를 사용하면서 오류를 수정하고, 서버와 통신을 하는 방법을 배울 수 있어서 추후에 있을 프로젝트나 업무에서도 적용할 수 있을 것 같다는 생각을 하게 되었습니다.
