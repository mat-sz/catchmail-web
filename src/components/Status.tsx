import React from 'react';
import { useSelector } from 'react-redux';

import { StateType } from '../reducers';
import { title } from '../config';

const Status: React.FC = () => {
  const connected = useSelector((state: StateType) => state.connected);

  return (
    <>
      <h1>{title}</h1>
      {!connected ? <div className="disconnected">Connecting...</div> : null}
    </>
  );
};

export default Status;
