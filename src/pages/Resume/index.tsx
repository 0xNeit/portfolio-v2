import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../../components/Layout';

import Education from '../../components/Education';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';
import Courses from '../../components/Courses';
import References from '../../components/References';

import courses from '../../constants/courses';
import degrees from '../../constants/degrees';
import positions from '../../constants/positions';
import { skills, categories } from '../../constants/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
  'References',
];

const Resume: React.FC = () => (
  <Main
    title="Resume"
    description="Nathan Irikefe's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
