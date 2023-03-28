import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { sanitize } from 'lettersanitizer';
import clsx from 'clsx';

import { EmailModel } from '../types/Models';

const formatter = new Intl.DateTimeFormat('en-US', {
  dateStyle: 'short',
  timeStyle: 'short',
});

export interface EmailListItemProps {
  email: EmailModel;
}

function truncate(str: string, length: number, useWordBoundary = true) {
  if (str.length <= length) {
    return str;
  }

  const shorter = str.substring(0, length - 1);
  return useWordBoundary
    ? shorter.substring(0, shorter.lastIndexOf(' '))
    : shorter;
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
      <NavLink
        to={'/message/' + email.id}
        className={({ isActive }) =>
          clsx({
            selected: isActive,
          })
        }
      >
        <span className="from">{email.from}</span>
        <span className="date">{formatter.format(email.date)}</span>
        <span className="subject">{email.subject}</span>
        <div className="body">{text}&hellip;</div>
      </NavLink>
    </li>
  );
};

export default EmailListItem;
