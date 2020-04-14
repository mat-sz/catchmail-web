import React from 'react';
import { useSelector } from 'react-redux';
import { Letter } from 'react-letter';

import { StateType } from '../reducers';

const EmailPreview: React.FC = () => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);

  if (!selectedEmail) return null;

  return (
    <div className="preview">
      <h2>{selectedEmail.subject}</h2>
      <div className="metadata">
        <div className="avatar">{selectedEmail.from?.charAt(0)}</div>
        <div className="address">
          <div className="from">{selectedEmail.from}</div>
          <div className="to">to {selectedEmail.to?.join(', ')}</div>
        </div>
        <div className="date">{selectedEmail.date.toDateString()}</div>
      </div>
      <Letter html={selectedEmail.html ?? ''} text={selectedEmail.text} />
    </div>
  );
};

export default EmailPreview;
