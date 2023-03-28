import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';

import EmailList from './components/EmailList';
import EmailPreview from './components/EmailPreview';
import Status from './components/Status';
import { Router } from './config';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Status />
        <Routes>
          <Route path="/" element={<EmailList />} />
          <Route path="/message/:id" element={<EmailPreview />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
