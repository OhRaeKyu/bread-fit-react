import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';

export const Savehead = () => {
  return (
    <Saveheads>
      <button id="btnBack" onClick={() => ROUTES.back()}></button>
      <button id="uploadBtn">업로드</button>
    </Saveheads>
  );
};

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
