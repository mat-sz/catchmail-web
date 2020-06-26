import React from 'react';
import { useSelector } from 'react-redux';
import './App.scss';

import EmailList from './components/EmailList';
import EmailPreview from './components/EmailPreview';
import Status from './components/Status';
import { StateType } from './reducers';
import clsx from 'clsx';

const App: React.FC = () => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);

  return (
    <div
      className={clsx('app', {
        'preview-visible': selectedEmail,
      })}
    >
      <div className="list">
        <Status />
        <EmailList />
      </div>
      <EmailPreview />
    </div>
  );
};

export default App;
