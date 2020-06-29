import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Letter } from 'react-letter';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useParams, Link } from 'react-router-dom';

import { StateType } from '../reducers';

const EmailPreview: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const selectedEmail = useSelector((state: StateType) =>
    state.emails.find(email => email.id === id)
  );
  const [raw, setRaw] = useState(false);
  const toggleRaw = () => setRaw(raw => !raw);

  if (!selectedEmail) return null;

  return (
    <div className="preview">
      <div className="title">
        <Link to="/" className="mobile-back">
          <FaRegArrowAltCircleLeft aria-label="Back" />
        </Link>
        <h2>{selectedEmail.subject}</h2>
      </div>
      <div className="metadata">
        <div className="avatar">{selectedEmail.from?.charAt(0)}</div>
        <div className="left">
          <div>{selectedEmail.from}</div>
          <div className="small">to {selectedEmail.to?.join(', ')}</div>
        </div>
        <div className="right">
          <div>{selectedEmail.date.toDateString()}</div>
          <div>
            <button onClick={toggleRaw}>
              {raw ? 'Show HTML' : 'Show Raw'}
            </button>
          </div>
        </div>
      </div>
      {!raw ? (
        <Letter html={selectedEmail.html ?? ''} text={selectedEmail.text} />
      ) : (
        <pre>{selectedEmail.raw}</pre>
      )}
    </div>
  );
};

export default EmailPreview;
