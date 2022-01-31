import styled from '@emotion/styled';
import { PALLETS } from '../../../constants';
import { Link } from 'react-router-dom';

export const UserList = ({ keyword, profile }) => {
  const matchedText = (text, query) => {
    if (query !== '' && text.includes(query)) {
      const parts = text.split(new RegExp(`(${query})`, 'gi'));

      return (
        <>
          {parts.map((part, index) =>
            part.toLowerCase() === query.toLowerCase() ? (
              <Markedtext key={index}>{part}</Markedtext>
            ) : (
              part
            )
          )}
        </>
      );
    }

    return text;
  };

  return (
    <Container>
      {profile.map((data, index) => (
        <li key={`follow-${index}`}>
          <div className="user-search-container">
            <Link
              className="item-link-cont"
              to={`/profile/${data.accountname}`}
            >
              <img
                className="search-user-img"
                src={data.image}
                alt="사용자 이미지"
                onError={(e) => {
                  e.target.onerror = null;
                  e.currentTarget.src = '/assets/basic-profile-img.png';
                }}
              />
              <div className="user-information">
                <h3 className="user-profile-name">
                  {matchedText(data.username, keyword)}
                </h3>
                <small className="user-profile-email">
                  &#64;{matchedText(data.accountname, keyword)}
                </small>
              </div>
            </Link>
          </div>
        </li>
      ))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .user-search-container {
    width: 322px;
    height: 80px;
    margin: 20px 20px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .item-link-cont {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .search-user-img {
      width: 60px;
      height: 60px;
      border-radius: 60px;
      margin-right: 30px;
    }
    .s-button {
      border-radius: 10px;
      position: absolute;
      bottom: 25px;
      line-height: 20px;
      right: -30px;
      &.click {
        display: none;
      }
    }
    .follow {
      width: 55px;
      height: 28px;
      background-color: ${PALLETS.ORANGE};
      border: 1px solid ${PALLETS.ORANGE};
      color: white;
    }
    .cancle {
      display: none;
      border: 1px solid ${PALLETS.ORANGE};
      width: 55px;
      height: 28px;
      &.click {
        display: block;
      }
    }
  }
`;

const Markedtext = styled.span`
  color: ${PALLETS.ORANGE};
`;

export default UserList;
