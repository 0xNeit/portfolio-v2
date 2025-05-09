import React from 'react';

import Job from './Job';

interface JobData {
  company: string;
  position: string;
  link: string;
  dateRange: string;
  points: string[];
}

interface ExperienceProps {
  data: JobData[];
}

const Experience: React.FC<ExperienceProps> = ({ data }) => (
  <div className="experience">
    <div className="link-to" id="experience" />
    <div className="title">
      <h3>Full-Time Work Experience</h3>
    </div>
    {data.map((job) => (
      <Job
        data={job}
        key={job.company}
      />
    ))}
  </div>
);

export default Experience;
