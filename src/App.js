import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import login from './pages/Login';
import loginEmail from './pages/Login/email';
import join from './pages/Join';
import home from './pages/Home';
import search from './pages/Home/search';
import profile from './pages/Profile';
import otherProfile from './pages/Profile/[id]';
import post from './pages/Post';
import upload from './pages/Post/upload';
import PrivateRoute from './pages/Login/components/PrivateRoutes';
import PublicRoute from './pages/Login/components/PublicRoute';
import product from './pages/Profile/product';
import productId from './pages/Profile/product[id]DetailDelete';
import modification from './pages/Profile/modification';
import follower from './pages/Profile/follower';
import following from './pages/Profile/following';
import productEdit from './pages/Profile/productEdit';
import Recommend from './pages/Recommend';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <PublicRoute path="/login" exact component={login} />
          <PublicRoute path="/login/email" exact component={loginEmail} />
          <PublicRoute path="/join" exact component={join} />
          <PrivateRoute path="/product" exact component={product} />
          <PrivateRoute path="/home" exact component={home} />
          <PrivateRoute path="/home/search" exact component={search} />
          <PrivateRoute path="/profile" exact component={profile} />
          <PrivateRoute path="/profile/:id" exact component={otherProfile} />
          <PrivateRoute path="/post/:id" exact component={post} />
          <PrivateRoute path="/upload" exact component={upload} />
          <PrivateRoute path="/follower" exact component={follower} />
          <PrivateRoute path="/following" exact component={following} />
          <PrivateRoute path="/product" exact component={product} />
          <PrivateRoute path="/productEdit/:id" exact component={productEdit} />
          <PrivateRoute path="/product/:id" exact component={productId} />
          <PrivateRoute path="/modification" exact component={modification} />
          <PrivateRoute path="/recommend" exact component={Recommend} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
