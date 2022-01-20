import './App.css';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import Home from './pages/Home';

import A from './pages/A';
import Search from './pages/A/search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={A} />
        <Route path="/search" exact component={Search} />
        {/* <Route path="/" exact component={Home} />
        <Route path="/search" exact component={`${Home}/search`} /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
