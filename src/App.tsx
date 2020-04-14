import React from 'react';
import { Letter } from 'react-letter';
import { useSelector } from 'react-redux';
import './App.scss';

import { StateType } from './reducers';
import EmailTable from './components/EmailTable';
import Status from './components/Status';

const App: React.FC = () => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);

  return (
    <div className="app">
      <div className="list">
        <Status />
        <EmailTable />
      </div>
      {selectedEmail ? (
        <Letter
          html={selectedEmail.html ?? ''}
          text={selectedEmail.text}
          className="preview"
        />
      ) : null}
    </div>
  );
};

export default App;
