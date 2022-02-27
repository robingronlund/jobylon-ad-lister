import React, { useEffect, useState } from 'react';

import { CardList } from './components/card-list';
import type { IJobylonAd } from './interface/IJobylonAd';
import { fetchjobs } from './api/fetch';

import './App.css';

export const App: React.FC = () => {
  const [jobs, setJobs] = useState<IJobylonAd[]>();

  const getJobs = async () => {
    const data = await fetchjobs();
    console.log(data);
    if (data) {
      setJobs(data);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  return (
    <div className="main-container">
      <CardList jobs={jobs!} />
    </div>
  );
};
