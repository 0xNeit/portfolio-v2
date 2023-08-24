import React from 'react';
import Degree from './Degree';

interface DegreeData {
  school: string;
  degree: string;
  link: string;
  year: number;
}

interface EducationProps {
  data: DegreeData[];
}

const Education: React.FC<EducationProps> = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Education</h3>
    </div>
    {data.map((degree) => (
      <Degree
        data={degree}
        key={degree.school}
      />
    ))}
  </div>
);

export default Education;
