import React from 'react';
import { Letter } from 'react-letter';
import { useSelector } from 'react-redux';
import './App.scss';

import { StateType } from './reducers';
import { title } from './config';
import EmailTable from './components/EmailTable';

const App: React.FC = () => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);

  return (
    <div className="app">
      <div className="list">
        <h1>{title}</h1>
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
