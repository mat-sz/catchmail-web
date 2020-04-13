import React from 'react';
import './App.scss';

import EmailTable from './components/EmailTable';

const App: React.FC = () => {
  return (
    <div className="app">
      <EmailTable />
    </div>
  );
};

export default App;
