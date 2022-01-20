import styled from '@emotion/styled';
import { Searchuserhead } from '../layouts/Searchuserhead';
import { Tabmenu } from '../layouts/Tabmenu';

const SearchPage = () => {
  return (
    <>
      <Searchuserhead />
      <Searchmain></Searchmain>
      <Tabmenu />
    </>
  );
};

export default SearchPage;

const Searchmain = styled.section`
  height: 90vh;
`;
