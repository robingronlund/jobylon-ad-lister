import React from 'react';
import type { IJobylonAd } from 'src/interface/IJobylonAd';

import './card.css';

interface CardListProps {
  job: IJobylonAd;
}

export const Card: React.FC<CardListProps> = ({ job }) => {
  return (
    <div className="card">
      <img src={job.company.logo} alt="company logo" className='card-logo' />
      <label htmlFor="">{job.company.name}</label>
      <div className="tag-wrapper">
        <div className="tag">{job.employment_type}</div>
        <div className="tag">{job.experience}</div>
        <div className="tag">{job.function}</div>
      </div>
      <div className="cta-button-wrapper">
        <button className="cta-button">APPLY NOW</button>
        <button className="cta-button">DETAILS</button>
      </div>
    </div>
  );
};
