import React from 'react';
import { useSelector } from 'react-redux';

import EmailTableRow from './EmailTableRow';
import { StateType } from '../reducers';

const EmailTable: React.FC = () => {
  const emails = useSelector((state: StateType) => state.emails);

  return (
    <table>
      <thead>
        <tr>
          <th>From</th>
          <th>To</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
        {emails.map(email => (
          <EmailTableRow key={email.id} email={email} />
        ))}
      </tbody>
    </table>
  );
};

export default EmailTable;
