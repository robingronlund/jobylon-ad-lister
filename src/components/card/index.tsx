import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MdLocationOn } from 'react-icons/md';
import parse from 'html-react-parser';

import type { IJobylonAd } from 'src/interface/IJobylonAd';
import { Tag } from '../tag';

import './card.css';

interface CardListProps {
  job: IJobylonAd;
}

export const Card: React.FC<CardListProps> = ({ job }) => {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div className="card-header">
        <img src={job.company.logo} alt="company logo" className="card-logo" />
        <label htmlFor="">{job.company.name}</label>
      </div>

      <Tag
        employmentType={job.employment_type}
        experience={job.experience}
        industry={job.company.industry}
      />
      <span className="location">
        <MdLocationOn />

        {job.locations.map((location, index) => (
          <p key={index}>{location.location.text}</p>
        ))}
      </span>

      <h3>{job.title}</h3>

      <div className="card-body">{parse(job.company.descr)}</div>

      <div className="cta-wrapper">
        <a className="cta" href={job.urls.ad} target="_blank" rel="noreferrer">
          Read more
        </a>
      </div>
    </div>
  );
};
