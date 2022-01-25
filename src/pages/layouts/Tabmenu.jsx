import { Link } from 'react-router-dom';
import { PALLETS, ROUTES } from '../../constants';
import styled from '@emotion/styled';

export const Tabmenu = (route) => {
  return (
    <nav>
      <Tabmenus>
        {ROUTES.map((routeObject) => {
          if (routeObject.LABEL === route.route) {
            return (
              <li key={`tab-${routeObject.ID}`}>
                <Tablink to={routeObject.PATH}>
                  <Icon src={routeObject.ACTIVE}></Icon>
                  <Menubtn status="active">{routeObject.LABEL}</Menubtn>
                </Tablink>
              </li>
            );
          } else
            return (
              <li key={`tab-${routeObject.ID}`}>
                <Tablink to={routeObject.PATH}>
                  <Icon src={routeObject.INACTIVE}></Icon>
                  <Menubtn>{routeObject.LABEL}</Menubtn>
                </Tablink>
              </li>
            );
        })}
      </Tabmenus>
    </nav>
  );
};

const Tabmenus = styled.ul`
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${PALLETS.WHITE};
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 0 6px;
  height: 60px;
  border-top: 0.5px solid ${PALLETS.LIGHTGRAY};
`;

const Tablink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const Menubtn = styled.strong`
  position: relative;
  font-size: 10px;
  color: ${(props) => (props.status ? '#F26E22' : `${PALLETS.GRAY}`)};
  line-height: 14px;

  padding: 0px 6px;
  width: 84px;
`;

const Icon = styled.img`
  display: block;
  content: '';
  width: 24px;
  height: 24px;
  margin-bottom: 5px;
`;
