import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Basic from "./layouts/Basic";
import Search from './pages/Search';
import './App.css';

const App: React.FC = (props) => {
    return (
        <Router>
            <Basic {...props}>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/koth/search">King of the Hill</Link>
                        </li>
                    </ul>

                    <hr/>

                    <Route exact path="/"/>
                    <Route path="/:programId/search" component={Search}/>
                </div>
            </Basic>
        </Router>
    );
};

export default App;
