import { API_ENDPOINT } from '../../constants';
import axios from 'axios';
import { useParams, useEffect } from 'react-router-dom';
// eslint-disable-next-line react-hooks/rules-of-hooks
let params = useParams();
const feedDetail = async () => {
  const userToken = localStorage.getItem('Token');
  try {
    await axios.get(`${API_ENDPOINT}/post/:id`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
        'Content-type': 'application/json',
      },
    });
    console(params);
  } catch (err) {
    console.log(err);
  }
};

// eslint-disable-next-line react-hooks/rules-of-hooks
useEffect(() => {
  feedDetail();
});

export default feedDetail;
