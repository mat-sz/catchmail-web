import React from 'react';
import { Letter } from 'react-letter';
import { useSelector } from 'react-redux';
import './App.scss';

import { StateType } from './reducers';
import EmailTable from './components/EmailTable';
import EmailPreview from './components/EmailPreview';
import Status from './components/Status';

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="list">
        <Status />
        <EmailTable />
      </div>
      <EmailPreview />
    </div>
  );
};

export default App;
