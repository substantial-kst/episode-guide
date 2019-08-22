import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Search from './Pages/Search';
import './App.css';

// All KOTH data, fetch:
// https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">King of the Hill</Link>
          </li>
        </ul>

        <hr />

        <Route exact path="/" />
        <Route path="/search" component={Search} />
      </div>
    </Router>
  );
};

export default App;
