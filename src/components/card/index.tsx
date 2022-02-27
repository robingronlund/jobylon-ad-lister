import React from 'react';
import parse from 'html-react-parser';
import type { IJobylonAd } from 'src/interface/IJobylonAd';

import './card.css';
import { useNavigate } from 'react-router-dom';

interface CardListProps {
  job: IJobylonAd;
}

export const Card: React.FC<CardListProps> = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div>
        <img src={job.company.logo} alt="company logo" className="card-logo" />
      </div>
      <div className="tag-wrapper">
        <div className="tag">{job.employment_type}</div>
        <div className="tag">{job.experience}</div>
      </div>
      <div>
        <h3>{job.title}</h3>
        {job.locations.map((location, index) => (
          <p key={index} className="location">
            {location.location.text}
          </p>
        ))}
      </div>
      <div className="cta-button-wrapper">
        <button className="cta-button">Apply now</button>
        <button className="cta-button" onClick={() => navigate(`/${job.slug}`)}>
          Details
        </button>
      </div>
    </div>
  );
};
