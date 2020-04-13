import React from 'react';
import { Letter } from 'react-letter';
import { useSelector } from 'react-redux';
import './App.scss';

import { StateType } from './reducers';
import EmailTable from './components/EmailTable';

const App: React.FC = () => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);

  return (
    <div className="app">
      <EmailTable />
      {selectedEmail ? (
        <Letter html={selectedEmail.html ?? ''} text={selectedEmail.text} />
      ) : null}
    </div>
  );
};

export default App;
