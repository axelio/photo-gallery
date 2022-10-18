import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import './App.css';
import Main from '../Main/Main';
import Architecture from '../Galleries/Architecture';
import Nature from '../Galleries/Nature';
import Nature2 from '../Galleries/Nature2';
import Architecture2 from '../Galleries/Architecture2';

const App: React.FC = () => {

  return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Main} />
          <Route path='/architecture2' component={Architecture2} />
          <Route path='/nature2' component={Nature2} />
          <Route path='/architecture' component={Architecture} />
          <Route path='/nature' component={Nature} />
        </div>
      </Router>
  )
}

export default App;
