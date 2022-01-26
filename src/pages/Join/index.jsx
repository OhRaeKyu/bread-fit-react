import MembershipPage from './membership';
import SettingPage from './setting';
import { useState } from 'react';
import { API_ENDPOINT } from '../../constants';
import { useHistory } from 'react-router-dom';

const JoinPage = () => {
  const [userdata, setUserdata] = useState([
    {
      email: '',
      password: '',
      accountname: '',
      intro: '',
      name: '',
      image: `${API_ENDPOINT}/Ellipse.png`,
    },
  ]);

  const handleUserdata = (key, value) => {
    setUserdata((prevState) => {
      return { ...prevState, [key]: value };
    });
  };

  const [mode, setMode] = useState(true);

  const history = useHistory();

  const submitUserdata = async () => {
    try {
      const res = await fetch(`${API_ENDPOINT}/user`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            username: userdata.name,
            email: userdata.email,
            password: userdata.password,
            accountname: userdata.accountname,
            intro: userdata.intro,
            image: userdata.image,
          },
        }),
      });
      const data = await res.json();
      history.push('/login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {mode ? (
        <MembershipPage
          setMode={setMode}
          handleUserdata={handleUserdata}
        ></MembershipPage>
      ) : (
        <SettingPage
          userdata={userdata}
          handleUserdata={handleUserdata}
          submitUserdata={submitUserdata}
        ></SettingPage>
      )}
    </>
  );
};

export default JoinPage;
