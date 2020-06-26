import React from 'react';
import './App.scss';

import EmailList from './components/EmailList';
import EmailPreview from './components/EmailPreview';
import Status from './components/Status';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="list">
        <Status />
        <EmailList />
      </div>
      <EmailPreview />
    </div>
  );
};

export default App;
