import React from 'react';

import './tag.css';

interface TagProps {
  employmentType: string;
  experience: string;
  industry: string;
}

export const Tag: React.FC<TagProps> = ({
  employmentType,
  experience,
  industry,
}) => {
  return (
    <div className="tag-wrapper">
      <div className="tag">{employmentType}</div>
      <div className="tag">{experience}</div>
      <div className="tag">{industry}</div>
    </div>
  );
};
