import React from 'react';
import { useSelector } from 'react-redux';

import EmailListItem from './EmailListItem';
import { StateType } from '../reducers';

const EmailList: React.FC = () => {
  const emails = useSelector((state: StateType) => state.emails);

  if (emails.length === 0) {
    return <div className="empty">No emails received (yet).</div>;
  }

  return (
    <ul>
      {emails.map(email => (
        <EmailListItem key={email.id} email={email} />
      ))}
    </ul>
  );
};

export default EmailList;
