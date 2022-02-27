import React, { useEffect, useState } from 'react';
import { CardList } from './components/card-list';
import { Header } from './components/header';

import type { IJobylonAd } from 'src/interface/IJobylonAd';
import { fetchjobs } from './api/fetch';

export const App: React.FC = () => {
  const [fetching, setFetching] = useState<boolean>(false);
  const [jobs, setJobs] = useState<IJobylonAd[]>();

  const getJobs = async () => {
    setFetching(true);
    const data = await fetchjobs();

    if (data) {
      setJobs(data);
      setFetching(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  if (fetching) {
    return <div>loading...</div>;
  }

  return (
    <div className="main-container">
      <Header />
      <CardList jobs={jobs!} />
    </div>
  );
};
