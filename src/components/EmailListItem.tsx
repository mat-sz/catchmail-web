import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import TimeAgo from 'react-timeago';
import { sanitize } from 'lettersanitizer';
import clsx from 'clsx';

import { EmailModel } from '../types/Models';

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
  const text = useMemo(() => {
    const sanitized = sanitize(email?.html || '', undefined, {
      dropAllHtmlTags: true,
    });
    const doc = new DOMParser().parseFromString(sanitized, 'text/html');
    return truncate(doc.body.innerText, 200);
  }, [email]);

  return (
    <li
      className={clsx({
        read: email.read,
      })}
    >
      <NavLink to={'/message/' + email.id} activeClassName="selected">
        <span className="from">{email.from}</span>
        <span className="date">
          <TimeAgo date={email.date} />
        </span>
        <span className="subject">{email.subject}</span>
        <div className="body">{text}&hellip;</div>
      </NavLink>
    </li>
  );
};

export default EmailListItem;
