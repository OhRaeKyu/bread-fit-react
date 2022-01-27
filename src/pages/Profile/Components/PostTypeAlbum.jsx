import styled from '@emotion/styled';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { PALLETS, API_ENDPOINT } from '../../../constants';
function PostTypeAlbum({ userData }) {
  const [feed, setFeed] = useState([]);
  const now = new Date();
  const [isLike, setIsLike] = useState(false);
  const userAccount = localStorage.getItem('accountname');
  const toggleLike = () => {
    isLike ? setIsLike(false) : setIsLike(true);
  };
  const userToken = localStorage.getItem('Token');
  useEffect(() => {
    fetch(`${API_ENDPOINT}/post/${userAccount}/userpost`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setFeed(data.post);
      });
  }, []);
  return (
    <ListType>
      {/* <li>{feed}</li> */}
      {feed.map((data, index) => (
        <>
          {data.image.length ? (
            <Link key={index} to="/post/:id">
              <img src={data.image} alt="storepicture" className="img-post" />
            </Link>
          ) : null}
        </>
      ))}
    </ListType>
  );
}

const ListType = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7.5px;
  padding: 15px;

  .img-post {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img-post-none {
    display: none;
  }
`;

export default PostTypeAlbum;
