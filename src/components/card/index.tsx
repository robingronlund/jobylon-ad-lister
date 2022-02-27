import React from 'react';
import type { IJobylonAd } from 'src/interface/IJobylonAd';

import './card.css';

interface CardListProps {
  job: IJobylonAd;
}

export const Card: React.FC<CardListProps> = ({ job }) => {

  return <div className="card">{job.company.name}</div>;
};
