import React from 'react';
import { useSelector } from 'react-redux';

import EmailListItem from './EmailListItem';
import { StateType } from '../reducers';
import { title } from '../config';

const EmailList: React.FC = () => {
  const emails = useSelector((state: StateType) => state.emails);

  return (
    <div className="list">
      <h1>{title}</h1>
      {emails.length === 0 ? (
        <div className="empty">No emails received (yet).</div>
      ) : (
        <ul>
          {emails.map(email => (
            <EmailListItem key={email.id} email={email} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default EmailList;
