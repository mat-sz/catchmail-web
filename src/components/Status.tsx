import React from 'react';
import { useSelector } from 'react-redux';

import { StateType } from '../reducers';
import { title } from '../config';
import Authentication from './Authentication';

const Status: React.FC = () => {
  const connected = useSelector((state: StateType) => state.connected);
  const authenticated = useSelector((state: StateType) => state.authenticated);

  return (
    <>
      <h1>{title}</h1>
      {!connected ? <div className="status">Connecting...</div> : null}
      {connected && !authenticated ? (
        <div className="status">Authenticating...</div>
      ) : null}
      <Authentication />
    </>
  );
};

export default Status;
