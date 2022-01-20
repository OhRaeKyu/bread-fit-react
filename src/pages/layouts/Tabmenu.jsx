import { Link } from 'react-router-dom';
import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';

export const Tabmenu = () => {
  return (
    <nav>
      <Tabmenus>
        {ROUTES.map((routeObject) => {
          return (
            <li key={`tab-${routeObject.ID}`}>
              <Link to={routeObject.PATH}>
                <Menubtn>{routeObject.LABEL}</Menubtn>
              </Link>
            </li>
          );
        })}
      </Tabmenus>
    </nav>
  );
};

const Tabmenus = styled.ul`
  display: flex;
  gap: 14px;
  padding: 0 6px;
  height: 60px;
  background: ${PALLETS.BEIGE};
`;

const Menubtn = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  font-size: 10px;
  color: ${PALLETS.GRAY};
  line-height: 14px;
  padding: 39px 0px 6px;
  width: 84px;
`;
