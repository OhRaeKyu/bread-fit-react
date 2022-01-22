export const API_ENDPOINT = 'http://146.56.183.55:5050/';

export const ROUTES = [
  {
    ID: 0,
    PATH: '/home',
    LABEL: '홈',
    INACTIVE: '/assets/icon/icon-home.svg',
    ACTIVE: '/assets/icon/icon-home-fill.svg',
  },
  {
    ID: 1,
    PATH: '/chat',
    LABEL: '채팅',
    INACTIVE: '/assets/icon/icon-message-circle.svg',
    ACTIVE: '/assets/icon/icon-message-circle-fill.svg',
  },
  {
    ID: 2,
    PATH: '/post',
    LABEL: '게시물 작성',
    INACTIVE: '/assets/icon/icon-edit.svg',
    ACTIVE: '/assets/icon/icon-edit-fill.svg',
  },
  {
    ID: 3,
    PATH: '/profile',
    LABEL: '프로필',
    INACTIVE: '/assets/icon/icon-user.svg',
    ACTIVE: '/assets/icon/icon-user-fill.svg',
  },
];

export const PALLETS = {
  CREAM: '#f2eddc',
  BEIGE: '#f2c894' /*비활성화*/,
  ORANGE: '#d98c5f' /*활성화*/,
  BROWN: '#734743' /*스플래시*/,
  BLACK: '#000000',
  WHITE: '#ffffff',
  LIGHTGRAY: '#d0d3d9',
  GRAY: '#767676' /*버튼 글씨*/,
};
