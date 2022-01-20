import styled from '@emotion/styled';
import Link from 'next/link';
import { Mainform } from '../../components/layouts/Mainform';
import { PALLETS } from '../../constants';
import { Searchuserhead } from '../../components/layouts/Searchuserhead';

const SearchPage = () => {
  return (
    <Mainform>
      <Searchuserhead />
    </Mainform>
  );
};

export default SearchPage;
