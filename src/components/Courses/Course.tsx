import React from 'react';

interface CourseProps {
  data: {
    link: string;
    platform: string;
    title: string;
    instructor: string;
  };
  last?: boolean;
}


const Course: React.FC<CourseProps> = ({ data, last = false }) => (
  <li className="course-container">
    <a href={data.link}>
      <h4 className="course-number">{data.platform}:</h4>
      <p className="course-name">{data.title}</p>
      <p className="course-name">{data.instructor}</p>
    </a>
    {!last && <div className="course-dot"><p className="course-name"> &#8226;</p></div>}
  </li>
);

export default Course;
