import { PALLETS } from '../../constants';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

export const ModificationHead = () => {
  let history = useHistory();
  return (
    <ModificationHeads>
      <button
        id="btnBack"
        onClick={() => {
          history.goBack();
        }}
      ></button>
      <button id="uploadBtn">저장</button>
    </ModificationHeads>
  );
};

const ModificationHeads = styled.section`
  display: flex;
  justify-content: space-between;
  width: 100vw;
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
    width: 100px;
    height: 28px;
    padding: 0 11px;
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
