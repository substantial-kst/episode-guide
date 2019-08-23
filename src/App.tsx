import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Page from "./pages/Page";
import './App.css';

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
