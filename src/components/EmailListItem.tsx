import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TimeAgo from 'react-timeago';
import { sanitize } from 'react-letter';
import clsx from 'clsx';

import { selectEmailAction } from '../actions/emails';
import { EmailModel } from '../types/Models';
import { StateType } from '../reducers';

export interface EmailListItemProps {
  email: EmailModel;
}

function truncate(str: string, length: number, useWordBoundary = true) {
  if (str.length <= length) {
    return str;
  }

  const subString = str.substr(0, length - 1);
  return useWordBoundary
    ? subString.substr(0, subString.lastIndexOf(' '))
    : subString;
}

const EmailListItem: React.FC<EmailListItemProps> = ({ email }) => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);
  const dispatch = useDispatch();
  const selectEmail = () => dispatch(selectEmailAction(email.id));
  const text = useMemo(() => {
    const sanitized = sanitize(email?.html || '', undefined, {
      dropAllHtmlTags: true,
    });
    const doc = new DOMParser().parseFromString(sanitized, 'text/html');
    return truncate(doc.body.innerText, 200);
  }, [email]);

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
      <div className="body">{text}&hellip;</div>
    </li>
  );
};

export default EmailListItem;
