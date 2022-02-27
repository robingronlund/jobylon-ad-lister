import React, { useEffect, useState } from 'react';
import { Card } from '../../components/card/index';
import { Header } from '../../components/header/index';

import { fetchjobs } from '../../api/fetch';
import type { IJobylonAd } from 'src/interface/IJobylonAd';

import './job-overview.css';

export const JobsOverview = () => {
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
      <Header />
      <div className="card-list">
        {jobs?.map((job, index) => (
          <Card key={index} job={job} />
        ))}
      </div>
    </div>
  );
};
