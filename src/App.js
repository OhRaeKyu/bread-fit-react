import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from './pages/Login';
import loginEmail from './pages/Login/email';
import join from './pages/Join';
import joinSetting from './pages/Join/setting';
import home from './pages/Home';
import profile from './pages/Profile';
import otherProfile from './pages/Profile/[id]';
import PrivateRoute from './pages/Login/components/PrivateRoutes';
import PublicRoute from './pages/Login/components/PublicRoute';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/login" exact component={login} />
          <PublicRoute path="/login/email" exact component={loginEmail} />
          <PublicRoute path="/join" exact component={join} />
          <PublicRoute path="/join/setting" exact component={joinSetting} />
          <PrivateRoute path="/home" exact component={home} />
          <PrivateRoute path="/profile" exact component={profile} />
          <PrivateRoute path="/profile/:id" exact component={otherProfile} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
