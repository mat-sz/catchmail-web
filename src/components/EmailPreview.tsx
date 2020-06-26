import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Letter } from 'react-letter';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';

import { StateType } from '../reducers';
import { selectEmailAction } from '../actions/emails';

const EmailPreview: React.FC = () => {
  const selectedEmail = useSelector((state: StateType) => state.selectedEmail);
  const dispatch = useDispatch();
  const [raw, setRaw] = useState(false);
  const toggleRaw = () => setRaw(raw => !raw);
  const back = () => dispatch(selectEmailAction(undefined));

  if (!selectedEmail) return null;

  return (
    <div className="preview">
      <div className="title">
        <button onClick={back} className="mobile-back">
          <FaRegArrowAltCircleLeft aria-label="Back" />
        </button>
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
