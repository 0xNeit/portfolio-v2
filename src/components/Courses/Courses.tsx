import React from 'react';

import Course from './Course';

interface CourseData {
  title: string;
  instructor: string;
  link: string;
  platform: string;
}

interface CoursesProps {
  data: CourseData[];
}

const getRows = (courses: CourseData[]) => courses.sort((a, b) => {
  let ret = 0;
  if (a.platform > b.platform) ret = -1;
  else if (a.platform < b.platform) ret = 1;
  else if (a.instructor > b.instructor) ret = 1;
  else if (a.instructor < b.instructor) ret = -1;
  return ret;
}).map((course, idx) => (
  <Course
    data={course}
    key={course.title}
    last={idx === courses.length - 1}
  />
));

const Courses: React.FC<CoursesProps> = ({ data }) => (
  <div className="courses">
    <div className="link-to" id="courses" />
    <div className="title">
      <h3>Selected Courses</h3>
    </div>
    <ul className="course-list">
      {getRows(data)}
    </ul>
  </div>
);

export default Courses;
