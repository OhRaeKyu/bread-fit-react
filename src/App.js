import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './pages/layouts/Layout';
import login from './pages/Login';
import loginEmail from './pages/Login/email';
import join from './pages/Join';
import joinSetting from './pages/Join/setting';

function App() {
  return (
    <div className="App">
      <Layout>
        <BrowserRouter>
          <Route path="/login" exact component={login} />
          <Route path="/login/email" exact component={loginEmail} />
          <Route path="/join" exact component={join} />
          <Route path="/join/setting" exact component={joinSetting} />
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
