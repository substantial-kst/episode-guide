import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
// import Basic from "./layouts/Basic";
// import Search from './pages/Search';
import Page from "./pages/Page";
import './App.css';

// All KOTH data, fetch:
// https://3578rll5mf.execute-api.us-west-2.amazonaws.com/dev/query?p=koth

const App: React.FC = (props) => {
    return (
        <Router>
            <Route exact path="/" component={Page}/>
            {/*<Route path="/:programId/search" component={Search}/>*/}
            <Route path="/:programId/search" component={Page}/>
        </Router>
    );
};

export default App;
