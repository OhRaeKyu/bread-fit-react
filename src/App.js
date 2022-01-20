import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Home from './pages/Home';

import home from './pages/Home';
import search from './pages/Home/search';
import post from './pages/Post';
import upload from './pages/Post/upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/home" exact component={home} />
        <Route path="/home/search" exact component={search} />
        <Route path="/post" exact component={post} />
        <Route path="/post/upload" exact component={upload} />
      </BrowserRouter>
    </div>
  );
}

export default App;
