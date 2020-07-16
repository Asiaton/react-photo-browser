import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import PhotoBrowser from './PhotoBrowser';
import PhotoLarge from './PhotoLarge';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={PhotoBrowser} />
          <Route path="/photos/:photoId" component={PhotoLarge} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;