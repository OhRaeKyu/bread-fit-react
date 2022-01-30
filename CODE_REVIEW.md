# 1번리뷰.

- 범위 : 프로젝트 전체
- 기능 : 프로젝트 전체에 걸쳐 api 호출 함수가 계속해서 반복하는데, api hook을 보통 어떤 식으로 만들어놓는지 궁금합니다.

# 2번 리뷰

- 범위 : /src/pages/join/index.jsx

- 회원가입의 경우 이메일주소 및 비밀번호 입력하는 화면과, 프로필세팅하는 화면으로 나눠지고
  두 페이지에서 입력한 정보를 합쳐서 Post 해야합니다.
  보통 이럴 경우 어떤 식으로 코드를 짜는 지 궁금합니다.

(현재 코드)

```
  return (
    <>
      {mode ? (
        <MembershipPage
          setMode={setMode}
          handleUserdata={handleUserdata}
        ></MembershipPage>
      ) : (
        <SettingPage
          userdata={userdata}
          handleUserdata={handleUserdata}
          submitUserdata={submitUserdata}
        ></SettingPage>
      )}
    </>
  );
```

# 3번 리뷰

- 범위 : /src/pages/join/index.jsx
- 회원가입 기능 중 '사용자가 프로필 사진 추가하지 않을 시 기본 이미지 제공'이라는 구현사항이 있습니다.
  useState로 image기본값에 미리 서버에 통신해서 프로젝트 기본이미지 주소를 받아 삽입했음에도 불구하고, 이미지를 추가하지 않으면 회원가입이 진행되지 않습니다.
  해결방법이 궁금합니다.

```
const JoinPage = () => {
  const [userdata, setUserdata] = useState([
    {
      email: '',
      password: '',
      accountname: '',
      intro: '',
      name: '',
      image: `${API_ENDPOINT}/Ellipse.png`,
    },
  ]);
```

# 4번 리뷰

- 범위 : /src/pages/Home/Components/Userfeed.jsx 49 ~ 95 Line
- 기능 : 게시글 리스트를 API로 GET해서 mapping 합니다.
- 기타 : mapping 후 게시글 좋아요 버튼 처리 과정이 궁금합니다. 단일 게시물의 경우 클릭 이벤트 발생 시 useState를 통해 UI 변화를 주면 되었지만 여러 게시물의 경우 어떻게 처리하면 좋을지 궁금합니다.

# 5번 리뷰

- 범위 : /src/pages/Post/Components/Inpreply.jsx 15 ~ 29 Line
- 기능 : input 란에 입력된 댓글을 API로 POST합니다.
- 기타 : input 란에 댓글 입력 후 게시 버튼을 클릭하면 댓글이 POST되지만 바로 반영되지 않아 window.location.reload(); 를 통해 새로고침을 진행하였습니다. 이보다 더 괜찮은 방법이 있는지 궁금합니다.

# 6번 리뷰

- 범위 : Home/index.js 파일 21~44 Line
- 전체 개요: 팔로우의 피드를 get해서 불러오는 페이지 입니다.
- 기능 내용: 로그인한 사용자가 팔로워가 있으면 팔로워의 피드가 뜨는 Userfeed가 나오고, 없으면 사용자를 검색해보라는 Searchuser가 나오는 페이지 입니다.
- 기타: index.jsx에서도 ${API_ENDPOINT}/post/feed 로 정보를 불러와 post.length 가 있는지 확인하고, 있는지 없는지에 따라서 각각의 컴포넌트를 불러오게 되는데요. 팔로우가 있는 경우에는 Userfeed를 불러오게 됩니다. 이따 Userfeed에서도 {API_ENDPOINT}/post/feed 를 불러오는데, 이렇게 두번 불러오는게 맞는지 궁금합니다.

# 7번 리뷰

- 범위 : src/Profile/product[id]DetailDelete.jsx파일 11 ~ 47 line

* 전체 개요

1.  제품별 상세페이지 삭제하기 수정하기 기능

- 기능 내용

1. 제품의 고유 ID값을 서버에서 받아와서 useParams를 사용하는 방법을 제대로 사용하였는지 궁금합니다. 또한, 멘토님이시라면 어떻게 하셨을지 궁금합니다.

# 8번 리뷰

- 범위 : src/Profile/follower.jsx파일 39~69 line

* 전체 개요

1.  사용자가 팔로워하는 유저의 목록을 보여주는 페이지 입니다.

- 기능 내용

1. 팔로워하는 사용자를 랜더링하기 위해서 컴포넌트로 만들었는데 제대로 만든 것인지, props를 사용하는 방법으로는 어떻게 만들어야 되는지 궁금합니다.

# 9번 리뷰

- 범위 : src/Profile/modification.jsx파일 35 ~ 85 line

* 전체 개요
  사용자 프로필 수정페이지 (수정하기)
  - 기능 내용

1. API를 이용해서 상품수정페이지와 동일한 기능이라고 생각하여 PUT을 이용해서 적용을 해보았는데 401(Unauthorized) error가 뜨는 현상이 발생하였습니다. 어떻게 해결을 해야되는지 궁금합니다.
