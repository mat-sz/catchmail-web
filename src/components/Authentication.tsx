import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { StateType } from '../reducers';
import { authenticateAction } from '../actions/state';

const Authentication: React.FC = () => {
  const dispatch = useDispatch();
  const authenticated = useSelector((state: StateType) => state.authenticated);
  const authenticationRequired = useSelector(
    (state: StateType) => state.authenticationRequired
  );

  const [secret, setSecret] = useState('');

  const updateSecret = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSecret(e.target.value);
  const authenticate = () => dispatch(authenticateAction(secret));

  return (
    <>
      {!authenticated && authenticationRequired === 'secret' ? (
        <div className="authentication">
          <h2>Authentication required.</h2>
          <input
            type="password"
            placeholder="Authentication secret"
            value={secret}
            onChange={updateSecret}
          />
          <button onClick={authenticate}>Authenticate</button>
        </div>
      ) : null}
    </>
  );
};

export default Authentication;
