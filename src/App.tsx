import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.scss';

import EmailList from './components/EmailList';
import EmailPreview from './components/EmailPreview';
import Status from './components/Status';
import { Router } from './config';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Status />
        <Switch>
          <Route path="/message/:id">
            <EmailPreview />
          </Route>
          <Route>
            <EmailList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
