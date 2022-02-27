import React, { useMemo } from 'react';
import type { IJobylonAd } from 'src/interface/IJobylonAd';
import { Card } from '../card';

import './card-list.css';

interface CardListProps {
  jobs: IJobylonAd[];
}

export const CardList: React.FC<CardListProps> = ({ jobs }) => {
  // const jobCount = useMemo(() => {
  //   return jobs.length;
  // }, [jobs]);

  if (!jobs) {
    return null;
  }

  return (
    <>
      {jobs && (
        <div className='card-list'>
          {/* {jobCount} Jobylon ads */}
          {jobs.map((job, index) => (
            <Card key={index} job={job} />
          ))}
        </div>
      )}
    </>
  );
};
