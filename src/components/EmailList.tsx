import React from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';

import EmailListItem from './EmailListItem';
import { StateType } from '../reducers';
import { title } from '../config';

export interface EmailListProps {
  className?: string;
}

const EmailList: React.FC<EmailListProps> = ({ className }) => {
  const emails = useSelector((state: StateType) => state.emails);

  return (
    <div className={clsx('list', className)}>
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
