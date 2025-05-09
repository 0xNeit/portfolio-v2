import React from 'react';

interface JobData {
  link: string;
  company: string;
  position: string;
  dateRange: string;
  points: string[];
}

interface JobProps {
  data: JobData;
}

const Job: React.FC<JobProps> = ({ data }) => (
  <article className="jobs-container">
    <header>
      <h4><a href={data.link}>{data.company}</a> - {data.position}</h4>
      <p className="daterange"> {data.dateRange}</p>
    </header>
    <ul className="points">
      {data.points.map((point) => (
        <li key={point}>{point}</li>
      ))}
    </ul>
  </article>
);

export default Job;
