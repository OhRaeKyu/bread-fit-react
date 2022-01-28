import React from 'react';

import Header from './Components/Header';
import RecommendList from './Components/RecommendList';
// import { Tabmenu } from '../../../../bread-fit-react/src/pages/layouts/Tabmenu';
import { Tabmenu } from '../layouts/Tabmenu';

function index() {
  return (
    <>
      <Header />
      <RecommendList />
      <Tabmenu route={'오늘의빵'} />
    </>
  );
}

export default index;
