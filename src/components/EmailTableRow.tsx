import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { selectEmailAction } from '../actions/emails';
import { EmailModel } from '../types/Models';
import { StateType } from '../reducers';

export interface EmailTableRowProps {
  email: EmailModel;
}

const EmailTableRow: React.FC<EmailTableRowProps> = ({ email }) => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);
  const dispatch = useDispatch();
  const selectEmail = () => dispatch(selectEmailAction(email.id));

  return (
    <tr
      onClick={selectEmail}
      className={clsx({
        selected: selectedEmail?.id === email.id,
        read: email.read,
      })}
    >
      <td>{email.from}</td>
      <td>{email.to?.join(' ')}</td>
      <td>{email.subject}</td>
    </tr>
  );
};

export default EmailTableRow;
