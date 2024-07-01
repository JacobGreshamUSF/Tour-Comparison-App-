//U59555732  
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './components/Gallery';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Gallery />
          </Route>
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

