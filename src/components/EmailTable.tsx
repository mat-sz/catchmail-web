import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StateType } from '../reducers';
import { selectEmailAction } from '../actions/emails';

const EmailTable: React.FC = () => {
  const emails = useSelector((state: StateType) => state.emails);
  const dispatch = useDispatch();
  const selectEmail = (id: string) => dispatch(selectEmailAction(id));

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
          <tr key={email.id} onClick={() => selectEmail(email.id)}>
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
