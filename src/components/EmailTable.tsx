import React from 'react';
import { useSelector } from 'react-redux';
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
          <tr>
            <td>{email.from}</td>
            <td>{email.to?.join(' ')}</td>
            <td>{email.subject}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmailTable;
