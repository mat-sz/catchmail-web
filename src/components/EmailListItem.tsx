import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'react-timeago';
import clsx from 'clsx';

import { selectEmailAction } from '../actions/emails';
import { EmailModel } from '../types/Models';
import { StateType } from '../reducers';

export interface EmailListItemProps {
  email: EmailModel;
}

const EmailListItem: React.FC<EmailListItemProps> = ({ email }) => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);
  const dispatch = useDispatch();
  const selectEmail = () => dispatch(selectEmailAction(email.id));

  return (
    <li
      onClick={selectEmail}
      className={clsx({
        selected: selectedEmail?.id === email.id,
        read: email.read,
      })}
    >
      <span className="from">{email.from}</span>
      <span className="date">
        <TimeAgo date={email.date} />
      </span>
      <span className="subject">{email.subject}</span>
    </li>
  );
};

export default EmailListItem;
