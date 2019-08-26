import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Page from './pages/Page';
import './App.css';

const App: React.FC = props => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Page} />
        {/*<Route path="/:programId/search" component={Search}/>*/}
        <Route exact path="/:programId" component={Page} />
        <Route exact path="/:programId/search" component={Page} />
        <Route exact path="/:programId/:episodeId" component={Page} />
      </Switch>
    </Router>
  );
};

export default App;
