import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { JobsOverview } from './pages/jobs-overview';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JobsOverview />}></Route>
        <Route
          path="*"
          element={
            <main style={{ padding: '1rem' }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
