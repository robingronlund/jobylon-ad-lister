import React from 'react';

import { Card } from '../card';

import type { IJobylonAd } from 'src/interface/IJobylonAd';

import './card-list.css';

interface CardListProps {
  jobs: IJobylonAd[];
}

export const CardList: React.FC<CardListProps> = ({ jobs }) => {
  return (
    <div className="card-list">
      {jobs?.map((job, index) => (
        <Card key={index} job={job} />
      ))}
    </div>
  );
};
