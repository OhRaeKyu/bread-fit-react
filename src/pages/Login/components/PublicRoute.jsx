import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../../utils/isLogin';

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin() ? <Redirect to="/home" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
