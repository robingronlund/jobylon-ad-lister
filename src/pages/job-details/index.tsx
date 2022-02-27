import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchjobs } from '../../api/fetch';
import type { IJobylonAd } from 'src/interface/IJobylonAd';

export const JobDetails = () => {
  const params = useParams();
  const [job, setJob] = useState<IJobylonAd>();

  const getJobs = async (slug: string) => {
    const data = await fetchjobs();
    console.log(data);
    if (data) {
      const job = data.find((data) => data.slug === slug);

      setJob(job);
    }
  };

  useEffect(() => {
    getJobs(params.slug!);
  }, [params]);

  return <div>{job?.slug}</div>;
};
